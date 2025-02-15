(function (  ) {
    'use strict';

    function startPlugin() {
      window.plugin_tmdb_mod_ready = true;

      var Episode = function(data) {
        var card = data.card || data;
        var episode = data.next_episode_to_air || data.episode || {};
        if (card.source == undefined) card.source = 'tmdb';
        Lampa.Arrays.extend(card, {
          title: card.name,
          original_title: card.original_name,
          release_date: card.first_air_date
        });
        card.release_year = ((card.release_date || '0000') + '').slice(0, 4);

        function remove(elem) {
          if (elem) elem.remove();
        }

        this.build = function () {
          this.card = Lampa.Template.js('card_episode');
          this.img_poster = this.card.querySelector('.card__img') || {};
          this.img_episode = this.card.querySelector('.full-episode__img img') || {};
          this.card.querySelector('.card__title').innerText = card.title;
          this.card.querySelector('.full-episode__num').innerText = card.unwatched || '';
          if (episode && episode.air_date) {
            this.card.querySelector('.full-episode__name').innerText = ('s' + (episode.season_number || '?') + 'e' + (episode.episode_number || '?') + '. ') + (episode.name || Lampa.Lang.translate('noname'));
            this.card.querySelector('.full-episode__date').innerText = episode.air_date ? Lampa.Utils.parseTime(episode.air_date).full : '----';
          }

          if (card.release_year == '0000') {
            remove(this.card.querySelector('.card__age'));
          } else {
            this.card.querySelector('.card__age').innerText = card.release_year;
          }

          this.card.addEventListener('visible', this.visible.bind(this));
        };

        this.image = function () {
          var _this = this;
          this.img_poster.onload = function () {
          };
          this.img_poster.onerror = function () {
            _this.img_poster.src = './img/img_broken.svg';
          };
          this.img_episode.onload = function () {
            _this.card.querySelector('.full-episode__img').classList.add('full-episode__img--loaded');
          };
          this.img_episode.onerror = function () {
            _this.img_episode.src = './img/img_broken.svg';
          };
        };

        this.create = function () {
          var _this2 = this;
          this.build();
          this.card.addEventListener('hover:focus', function () {
            if (_this2.onFocus) _this2.onFocus(_this2.card, card);
          });
          this.card.addEventListener('hover:hover', function () {
            if (_this2.onHover) _this2.onHover(_this2.card, card);
          });
          this.card.addEventListener('hover:enter', function () {
            if (_this2.onEnter) _this2.onEnter(_this2.card, card);
          });
          this.image();
        };

        this.visible = function () {
          if (card.poster_path) this.img_poster.src = Lampa.Api.img(card.poster_path);
            else if (card.profile_path) this.img_poster.src = Lampa.Api.img(card.profile_path);
            else if (card.poster) this.img_poster.src = card.poster;
            else if (card.img) this.img_poster.src = card.img;
            else this.img_poster.src = './img/img_broken.svg';
          if (card.still_path) this.img_episode.src = Lampa.Api.img(episode.still_path, 'w300');
            else if (card.backdrop_path)  this.img_episode.src = Lampa.Api.img(card.backdrop_path, 'w300');
            else if (episode.img) this.img_episode.src = episode.img;
            else if (card.img) this.img_episode.src = card.img;
            else this.img_episode.src = './img/img_broken.svg';
          if (this.onVisible) this.onVisible(this.card, card);
        };

        this.destroy = function () {
          this.img_poster.onerror = function () {};
          this.img_poster.onload = function () {};
          this.img_episode.onerror = function () {};
          this.img_episode.onload = function () {};
          this.img_poster.src = '';
          this.img_episode.src = '';
          remove(this.card);
          this.card = null;
          this.img_poster = null;
          this.img_episode = null;
        };

        this.render = function (js) {
          return js ? this.card : $(this.card);
        };
      }



var SourceTMDB = function (parent) {
    // Создаем сетевой запрос
    this.network = new Lampa.Reguest();
    this.discovery = false;

    // Главный метод
    this.main = function () {
        var owner = this;
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var onComplete = arguments.length > 1 ? arguments[1] : undefined;
        var onError = arguments.length > 2 ? arguments[2] : undefined;
        var partsLimit = 6;

        // Опции сортировки
        var sortOptions = [
            { key: 'vote_count.desc', title: 'Много голосов' },
            { key: 'vote_average.desc', title: 'Высокий рейтинг' },
            { key: 'first_air_date.desc', title: 'Новинки' },
            { key: 'popularity.desc', title: 'Популярные' },
            { key: 'revenue.desc', title: 'Интерес зрителей' }
        ];

        // Жанры фильмов
        var genres = [
            { id: 28, title: 'боевики' },
            { id: 35, title: 'комедии' },
            { id: 18, title: 'драмы' },
            { id: 10749, title: 'мелодрамы' },
            { id: 16, title: 'мультфильмы' },
            { id: 12, title: 'приключения' },
            { id: 80, title: 'криминал' },
            { id: 9648, title: 'детективы' },
            { id: 878, title: 'фантастика' },
            { id: 14, title: 'фэнтези' },
            { id: 10752, title: 'военные' },
            { id: 37, title: 'вестерны' },
            { id: 53, title: 'триллеры' },
            { id: 10751, title: 'семейные' }
        ];

        // Стриминговые сервисы
        var streamingServices = [
            { id: 49, title: 'HBO' },
            { id: 2552, title: 'Apple TV+' },
            { id: 453, title: 'Hulu' },
            { id: 1024, title: 'Amazon Prime' },
            { id: 213, title: 'Netflix' },
            { id: 3186, title: 'HBO Max' },
            { id: 2076, title: 'Paramount+' },
            { id: 3353, title: 'Peacock' },
        ];

        // Перемешивание массива
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        // Запрос с жанром и сервисом
        function getStreamingWithGenres(serviceName, serviceId) {
            return function (callback) {
                var sort = sortOptions[Math.floor(Math.random() * sortOptions.length)];
                var genre = genres[Math.floor(Math.random() * genres.length)];
                owner.get(
                    'discover/tv?with_networks=' + serviceId +
                    '&with_genres=' + genre.id +
                    '&sort_by=' + sort.key +
                    '&air_date.lte=' + new Date().toISOString().substr(0, 10),
                    params,
                    function (json) {
                        json.title = Lampa.Lang.translate(sort.title + ' (' + genre.title + ') на ' + serviceName);
                        callback(json);
                    },
                    callback
                );
            };
        }

        // Запрос только с сервисом
        function getStreaming(serviceName, serviceId) {
            return function (callback) {
                var sort = sortOptions[Math.floor(Math.random() * sortOptions.length)];
                owner.get(
                    'discover/tv?with_networks=' + serviceId +
                    '&sort_by=' + sort.key +
                    '&air_date.lte=' + new Date().toISOString().substr(0, 10),
                    params,
                    function (json) {
                        json.title = Lampa.Lang.translate(sort.title + ' на ' + serviceName);
                        callback(json);
                    },
                    callback
                );
            };
        }

        // Основные данные
        var partsData = [
            function (callback) {
                owner.get('movie/now_playing', params, function (json) {
                    json.title = Lampa.Lang.translate('Сейчас смотрят');
                    callback(json);
                }, callback);
            },
            function (callback) {
                owner.get('trending/movie/week', params, function (json) {
                    json.title = Lampa.Lang.translate('Популярные фильмы');
                    callback(json);
                }, callback);
            },
            function (callback) {
                owner.get('trending/tv/week', params, function (json) {
                    json.title = Lampa.Lang.translate('Популярные сериалы');
                    callback(json);
                }, callback);
            },
            function (callback) {
                owner.get('trending/all/day', params, function (json) {
                    json.title = Lampa.Lang.translate('Популярно онлайн');
                    callback(json);
                }, callback);
            }
        ];

        // Добавляем запросы для стриминговых сервисов
        streamingServices.forEach(function (service) {
            partsData.push(getStreaming(service.title, service.id));
            partsData.push(getStreamingWithGenres(service.title, service.id));
        });

        // Добавляем запросы для жанров
        genres.forEach(function (genre) {
            partsData.push(function (callback) {
                var validSortOptions = [
                    { key: 'vote_count.desc', title: 'Много голосов' },
                    { key: 'popularity.desc', title: 'Популярные' },
                    { key: 'first_air_date.desc', title: 'Новинки' }
                ];
                var sort = validSortOptions[Math.floor(Math.random() * validSortOptions.length)];
                owner.get(
                    'discover/movie?with_genres=' + genre.id + '&sort_by=' + sort.key,
                    params,
                    function (json) {
                        json.title = Lampa.Lang.translate(sort.title + ' (' + genre.title + ')');
                        callback(json);
                    },
                    callback
                );
            });
        });

        // Запрос для ближайших эпизодов
        var upcomingEpisodesRequest = function (callback) {
            callback({
                source: 'tmdb',
                results: Lampa.TimeTable.lately().slice(0, 20),
                title: Lampa.Lang.translate('title_upcoming_episodes'),
                nomore: true,
                cardClass: function (_elem, _params) {
                    return new Episode(_elem, _params);
                }
            });
        };

        // Перемешиваем массив данных
        shuffleArray(partsData);
        partsData.splice(4, 0, upcomingEpisodesRequest); 
        //shuffleArray(partsData); // Снова перемешиваем

        // Загрузка частей данных
        function loadPart(partLoaded, partEmpty) {
            Lampa.Api.partNext(partsData, partsLimit, partLoaded, partEmpty);
        }

        loadPart(onComplete, onError);
        return loadPart;
    };
};

/* для детей */



var SourceTMDBkids = function (parent) {
    this.network = new Lampa.Reguest();
    this.discovery = false;

    // Переменная для ограничения рейтинга
    var ratingLimit = 'PG'; // Можно поменять на любой нужный рейтинг, например, 'PG', 'G', 'R'

    this.main = function () {
        var owner = this;
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var onComplete = arguments.length > 1 ? arguments[1] : undefined;
        var onError = arguments.length > 2 ? arguments[2] : undefined;
        var partsLimit = 6;

        var sortOptions = [
            { key: 'vote_count.desc', title: 'Много голосов' },
            { key: 'first_air_date.desc', title: 'Новинки' },
            { key: 'popularity.desc', title: 'Популярные' },
            { key: 'revenue.desc', title: 'Интерес зрителей' }
        ];

        var kidsGenres = [
            { id: 16, title: 'мультфильмы' },
            { id: 10751, title: 'семейные' },
            { id: 14, title: 'фэнтези' },
            { id: 28, title: 'боевики' },
            { id: 35, title: 'комедии' },
            { id: 12, title: 'приключения' },
            { id: 878, title: 'фантастика' },
            { id: 14, title: 'фэнтези' },
            { id: 10751, title: 'семейные' }
        ];

        var forKids = [
            { id: 101, title: 'Lego' },
            { id: 102, title: 'Том и джерри' },
            { id: 103, title: 'Микки маус' },
       
        ];

        var streamingServices = [
            { id: 49, title: 'HBO' },
            { id: 2552, title: 'Apple TV+' },
            { id: 453, title: 'Hulu' },
            { id: 1024, title: 'Amazon Prime' },
            { id: 213, title: 'Netflix' },
            { id: 3186, title: 'HBO Max' },
            { id: 2076, title: 'Paramount+' },
            { id: 3353, title: 'Peacock' }
        ];

        var kidsStudios = [
            { id: 2, title: 'Disney' },
            { id: 3, title: 'Pixar' },
            { id: 521, title: 'DreamWorks Animation' },
            { id: 9383, title: 'Blue Sky Studios' },
            { id: 6704, title: 'Illumination Entertainment' }
        ];

        // Изменяем рейтинг на переменную для удобства редактирования
        var ratingFilter = 'certification_country=US&certification.lte=' + ratingLimit;

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function createRequest(endpoint, titleSuffix, callback) {
            var sort = sortOptions[Math.floor(Math.random() * sortOptions.length)];
            owner.get(endpoint + '&sort_by=' + sort.key + '&' + ratingFilter, params, function (json) {
                json.title = Lampa.Lang.translate(sort.title + ' ' + titleSuffix);


                callback(json);
            }, callback);
        }

        function getStreaming(serviceName, serviceId) {
            return function (callback) {
                createRequest(
                    'discover/tv?with_networks=' + serviceId + '&with_genres=16,10751',
                    'на ' + serviceName,
                    callback
                );
            };
        }

        function getStudioMovies(studioName, studioId) {
            return function (callback) {
                var endpoint = 'discover/movie?with_companies=' + studioId;
                createRequest(endpoint, 'от студии ' + studioName, function (json) {
                    callback(json);
                });
            };
        }

        // Новый запрос для фильмов без жанра, но с сортировкой и рейтингом
        function getMoviesWithoutGenre() {
            return function (callback) {
                createRequest(
                    'discover/movie?' + ratingFilter,
                    'Фильмы',
                    callback
                );
            };
        }
        
        
function searchByKeyword() {
            return function (callback) {
                forKids.forEach(function (keyword) {
                    var endpoint = 'search/movie?query=' + encodeURIComponent(keyword.title);
                    createRequest(endpoint, '(' + keyword.title + ')', callback);
                });
            };
        }

    
        var partsData = [
            function (callback) {
                createRequest('discover/movie?with_genres=10751,16&with_original_language=uk', 'Ураїніські мультфильми', callback);
            },
            function (callback) {
                createRequest('discover/movie?with_genres=10751,16&with_original_language=uk|en|be|zh|cn', 'Іноземні мультфильми', callback);
            }
        ];

        streamingServices.forEach(function (service) {
            partsData.push(getStreaming(service.title, service.id));
        });

        kidsGenres.forEach(function (genre) {
            partsData.push(function (callback) {
                createRequest('discover/movie?with_genres=' + genre.id, '(' + genre.title + ')', callback);
            });
        });

        kidsStudios.forEach(function (studio) {
            partsData.push(getStudioMovies(studio.title, studio.id));
        });

        partsData.push(searchByKeyword());
        partsData.push(getMoviesWithoutGenre());

        shuffleArray(partsData);

        function loadPart(partLoaded, partEmpty) {
            Lampa.Api.partNext(partsData, partsLimit, partLoaded, partEmpty);
        }

        loadPart(onComplete, onError);
        return loadPart;
    };
};

function add() {
    // Получаем профиль пользователя
    var userProfile = Lampa.Storage.get('lampac_profile_id', '');

    // Логика переключения на детский профиль или обычный
    var tmdb_mod;
    if (userProfile === '_id3' || userProfile === '_id4') {
        tmdb_mod = Object.assign({}, Lampa.Api.sources.tmdb, new SourceTMDBkids(Lampa.Api.sources.tmdb));
    } else {
        tmdb_mod = Object.assign({}, Lampa.Api.sources.tmdb, new SourceTMDB(Lampa.Api.sources.tmdb));
    }

    // Устанавливаем модифицированный источник
    Lampa.Api.sources.tmdb_mod = tmdb_mod;

    // Определяем новое свойство AVIAMOVIE
    Object.defineProperty(Lampa.Api.sources, 'AVIAMOVIE', {
        get: function() {
            return tmdb_mod;
        }
    });        
        
        Lampa.Params.select('source', Object.assign({}, Lampa.Params.values['source'], {'AVIAMOVIE': 'AVIAMOVIE'}), 'tmdb');
      }

      if (window.appready) add(); else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type == 'ready') { add(); }
        });
      }
    }

    if (!window.plugin_tmdb_mod_ready) startPlugin();

})( );
