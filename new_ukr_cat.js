///українські категорії
! function() {
    "use strict";
    function uaf() {
        var _ = $('<li class="menu__item selector" data-action="ua_films"><div class="menu__ico"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 414.89" height="30" fill="CurrentColor"><path fill-rule="nonzero" d="M189.688 279.224V256.79H119.88v-30.267l57.765-90.857h49.345v90.857h16.546v30.267H226.99v22.434h-37.302zM80.058 0h351.889c21.902 0 41.854 9.115 56.353 23.619C502.917 38.236 512 58.373 512 80.226v254.438c0 21.804-9.175 41.898-23.766 56.477-14.574 14.58-34.591 23.749-56.287 23.749H80.058c-21.744 0-41.827-9.076-56.423-23.683C9.121 376.698 0 356.686 0 334.664V80.226c0-22.065 9.028-42.131 23.57-56.672C38.101 9.022 58.101 0 80.058 0zm351.889 33.331H80.058c-13.004 0-24.792 5.286-33.293 13.787-8.496 8.495-13.771 20.218-13.771 33.108v254.438c0 12.809 5.34 24.488 13.836 32.978 8.577 8.583 20.403 13.917 33.228 13.917h351.889c12.744 0 24.515-5.399 33.092-13.982 8.572-8.566 13.967-20.283 13.967-32.913V80.226c0-12.711-5.33-24.471-13.901-33.043-8.501-8.501-20.24-13.852-33.158-13.852zM261.456 279.224V135.666h38.981v58.058h1.972l43.163-58.058H391l-48.519 63.946 49.639 79.612h-46.548l-32.239-53.82-12.896 16.812v37.008h-38.981zm-70.915-52.701v-50.464h-1.119l-31.12 49.345v1.119h32.239z"></path></svg></div><div class="menu__text">Українські фільми</div></li>');
        _.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/movie?with_origin_country=UA&sort_by=revenue.desc",
                title: "Українські фільми",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }), $(".menu .menu__list").eq(0).append(_)
    }

    function uas() {
        var e = $('<li class="menu__item selector" data-action="ua_serial"><div class="menu__ico">' + _ + '</div><div class="menu__text">Українські серіали</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?with_origin_country=UA&sort_by=vote_average.desc",
                title: "Українські серіали",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }), $(".menu .menu__list").eq(0).append(e)
    }
    function n() {
        var e = $('<li class="menu__item selector" data-action="ivi"><div class="menu__ico">' + _ + '</div><div class="menu__text">ИВИ</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=3923",
                title: "ИВИ",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }), $(".menu .menu__list").eq(0).append(e)
    }

    function a() {
        var e = $('<li class="menu__item selector" data-action="Netflix"><div class="menu__ico">' + _ + '</div><div class="menu__text">Netflix</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=213",
                title: "Netflix",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }), $(".menu .menu__list").eq(0).append(e)
    }


  
    window.plugin_podbor_ready || function _() {
        function v() {
            window.plugin_podbor_ready || ("1" == Lampa.Storage.get("collect_uaf") && uaf(), "1" == Lampa.Storage.get("collect_uas") && uas(), "1" == Lampa.Storage.get("porborki_netflix") && a()), window.plugin_podbor_ready = !0, Lampa.SettingsApi.addComponent({
                component: "ukrainian",
                icon: '<svg height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <rect x="2" y="8" width="34" height="21" rx="3" stroke="white" stroke-width="3"/>\n                <line x1="13.0925" y1="2.34874" x2="16.3487" y2="6.90754" stroke="white" stroke-width="3" stroke-linecap="round"/>\n                <line x1="1.5" y1="-1.5" x2="9.31665" y2="-1.5" transform="matrix(-0.757816 0.652468 0.652468 0.757816 26.197 2)" stroke="white" stroke-width="3" stroke-linecap="round"/>\n                <line x1="9.5" y1="34.5" x2="29.5" y2="34.5" stroke="white" stroke-width="3" stroke-linecap="round"/>\n            </svg>',
                name: "Українське"
            }), Lampa.SettingsApi.addParam({
                component: "ukrainian",
                param: {
                    name: "collect_uaf",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "UA Film"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="ua_films"]').length ? e() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }), Lampa.SettingsApi.addParam({
                component: "ukrainian",
                param: {
                    name: "collect_uas",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "UA Serials"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="ua_serial"]').length ? t() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }), Lampa.SettingsApi.addParam({
                component: "ukrainian",
                param: {
                    name: "porborki_netflix",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Netflix"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="netflix"]').length ? a() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            })
        }
        window.appready ? v() : Lampa.Listener.follow("app", function(_) {
            "ready" == _.type && v()
        })
    }()
}();
