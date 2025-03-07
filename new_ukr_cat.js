!function () {
    "use strict";
    function addLocalization() {
        Lampa.Lang.add({
            lampac_ua_film: {
                en: 'UA film',
                uk: 'UA фільми',
                ru: 'UA Фильмы',
            },
            lampac_ua_series: {
                en: 'UA series',
                uk: 'UA серіали',
                ru: 'Сериалы',
            }
        });
    }

    var ico_f = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512">...</svg>';
    var ico_s = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512">...</svg>';

    addLocalization();

    function uaf() {
        var f = $('<li class="menu__item selector" data-action="ua_films"><div class="menu__ico">' + ico_f + '</div><div class="menu__text">Українські фільми</div></li>');
        f.on("hover:enter", function () {
            Lampa.Activity.push({
                url: "discover/movie?with_origin_country=UA&sort_by=revenue.desc",
                title: "UA фільми",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            });
        });
        $(".menu .menu__list").eq(0).append(f);
    }

    function uas() {
        var s = $('<li class="menu__item selector" data-action="ua_serial"><div class="menu__ico">' + ico_s + '</div><div class="menu__text">Українські серіали</div></li>');
        s.on("hover:enter", function () {
            Lampa.Activity.push({
                url: "discover/tv?with_origin_country=UA&sort_by=vote_average.desc",
                title: "UA серіали",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            });
        });
        $(".menu .menu__list").eq(0).append(s);
    }

    if (!window.plugin_podbor_ready) {
        function v() {
            if (!window.plugin_podbor_ready) {
                if ("1" == Lampa.Storage.get("collect_uaf")) uaf();
                if ("1" == Lampa.Storage.get("collect_uas")) uas();
                // if ("1" == Lampa.Storage.get("porborki_netflix")) a(); // раскомментировать при необходимости
                window.plugin_podbor_ready = true;
            }
        }
        v();
    }
}();
