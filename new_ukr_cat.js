///українські категорії
! function() {
    "use strict";
var _ = '<svg fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="nonr" stroke-width="0.0064" xmlns:bx="https://boxy-svg.com">   <g id="SVGRepo_bgCarrier" stroke-width="0"></g>   <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>  <text style="fill: CurrentColor; font-family: Archivo Black; font-size: 78px; font-weight: 700; text-anchor: middle; text-transform: uppercase; white-space: pre;" transform="matrix(1.073298, 0, 0, 1.088697, -15.553733, 3.698559)" y="230.02200317382812"><tspan x="253.87899780273438" dy="1em">​</tspan><tspan style="font-size: 82.6676px;">SERIALS</tspan></text>  <defs>    <style bx:fonts="Archivo Black">@import url(https://fonts.googleapis.com/css2?family=Archivo+Black%3Aital%2Cwght%400%2C400&amp;display=swap);</style>  </defs>  <g fill="CurrentColor" id="SVGRepo_iconCarrier" transform="matrix(10.666666, 0, 0, 14.628571, -10.666651, -117.028548)" style="">    <g id="group-4">      <path fill="CurrentColor" d="M1,38h23v3H12v2h26v-2H26v-3h23V8H1V38z M3,10h44v26H3V10z"></path>    </g>    <g></g>  </g>  <text style="fill: CurrentColor; font-family: Archivo Black;; font-size: 150px; font-weight: 700; text-transform: uppercase; white-space: pre; text-anchor: middle;" transform="matrix(1, 0, 0, 1, -144.203139, -133.599745)"><tspan x="400.73" y="321.635">UA</tspan><tspan x="400.73" dy="1em">​</tspan><tspan x="400.73" dy="1em">​</tspan></text></svg>';

    function uaf() {
        var f = $('<li class="menu__item selector" data-action="ua_films"><div class="menu__ico">' + _ + '</div><div class="menu__text">Українські фільми</div></li>');
        f.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/movie?with_origin_country=UA&sort_by=revenue.desc",
                title: "Українські фільми",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }), $(".menu .menu__list").eq(0).append(f)
    }

    function uas() {
        var s = $('<li class="menu__item selector" data-action="ua_serial"><div class="menu__ico">' + _ + '</div><div class="menu__text">Українські серіали</div></li>');
        s.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?with_origin_country=UA&sort_by=vote_average.desc",
                title: "Українські серіали",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }), $(".menu .menu__list").eq(0).append(s)
    }

    function a() {
        var f = $('<li class="menu__item selector" data-action="Netflix"><div class="menu__ico">' + _ + '</div><div class="menu__text">Netflix</div></li>');
        f.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=213",
                title: "Netflix",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }), $(".menu .menu__list").eq(0).append(f)
    }


  
    window.plugin_podbor_ready || function _() {
        function v() {
            window.plugin_podbor_ready || ("1" == Lampa.Storage.get("collect_uaf") && uaf(), "1" == Lampa.Storage.get("collect_uas") && uas(), "1" == Lampa.Storage.get("porborki_netflix") && a()), window.plugin_podbor_ready = !0, Lampa.SettingsApi.addComponent({
                component: "ukrainian",
                icon: '<svg fill="currentColor" rule="evenodd" height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><g id="Layer_1"><path d="M1,38h23v3H12v2h26v-2H26v-3h23V8H1V38z M3,10h44v26H3V10z"/></g><polygon points="41.122 20.301 40.884 19.736 39.237 18.753 37.148 18.769 36.008 17.403 34.693 17.933 33.646 17.534 32.92 17.778 31.557 15.396 30.591 15.314 29.938 12.774 27.329 12.377 26.819 13.03 24.638 13.002 23.937 14.023 23.866 15.296 23.184 14.596 21.789 14.835 21.427 14.124 18.877 14.34 15.328 12.825 13.333 12.715 11.839 14.054 12.425 16.122 9.409 18.836 9.622 20.322 9.049 20.074 8.152 21.325 9.615 23.158 12.401 23.689 13.003 24.38 15.404 23.832 15.701 23.246 17.981 22.7 20.417 24.17 20.829 25.491 21.628 26.112 21.586 27.162 22.22 28.376 20.827 28.765 20.307 29.73 18.899 30.989 19.851 31.852 22.577 30.333 23.907 28.634 24.666 28.146 26.154 27.915 25.932 28.466 25.861 28.574 26.709 29.57 29.347 29.584 29.478 30.166 27.207 31.434 29.24 32.447 29.259 33.117 28.887 33.92 29.585 34.377 30.759 33.955 33.312 32.306 34.903 32.38 35.141 31.367 34.262 31.309 32.995 31.809 32.028 30.638 29.938 29.327 32.497 29.147 32.524 29.162 33.683 28.018 36.824 26.649 38.025 26.54 38.188 25.121 39.418 24.334 40.774 24.289 41.101 23.027 40.511 21.337"/></svg>',
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
                    1 == _ && 0 == $('[data-action="ua_films"]').length ? uaf() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
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
                    1 == _ && 0 == $('[data-action="ua_serial"]').length ? uas() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
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
