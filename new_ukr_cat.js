///українські категорії
! function() {
    "use strict";
    var _ = '<svg fill="CurrentColor"> fill="none" height="128" width="128" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"> <defs> <bx:guide x="-33.60946010696372" y="18.378168684019116" angle="0"/> <bx:guide x="-6.188405967649857" y="19.873862546163508" angle="0"/> <bx:guide x="18.989107378447414" y="21.3695564083079" angle="0"/> <bx:guide x="-104.65491855882239" y="33.58438961582044" angle="0"/> <style bx:fonts="Noto Sans Armenian">@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian%3Aital%2Cwght%400%2C100..900&amp;display=swap);</style> </defs> <g id="Layer_1"> <path d="M1,38h23v3H12v2h26v-2H26v-3h23V8H1V38z M3,10h44v26H3V10z"/> </g> <polygon points="32.115 28.055 31.996 27.772 31.172 27.281 30.128 27.289 29.558 26.606 28.901 26.871 28.377 26.672 28.014 26.793 27.332 25.602 26.85 25.561 26.523 24.292 25.219 24.093 24.964 24.419 23.873 24.405 23.523 24.916 23.487 25.553 23.146 25.202 22.448 25.322 22.268 24.966 20.993 25.075 19.218 24.317 18.221 24.262 17.474 24.931 17.767 25.965 16.259 27.323 16.365 28.066 16.079 27.941 15.63 28.567 16.362 29.484 17.755 29.749 18.056 30.094 19.256 29.821 19.405 29.528 20.545 29.255 21.763 29.989 21.969 30.65 22.368 30.96 22.347 31.486 22.664 32.092 21.968 32.287 21.707 32.769 21.004 33.399 21.48 33.83 22.843 33.071 23.508 32.222 23.887 31.977 24.631 31.862 24.52 32.137 24.485 32.191 24.909 32.689 26.228 32.696 26.293 32.988 25.158 33.621 26.174 34.128 26.184 34.463 25.997 34.864 26.346 35.093 26.934 34.882 28.21 34.057 29.006 34.095 29.124 33.588 28.685 33.559 28.051 33.809 27.568 33.224 26.523 32.568 27.803 32.478 27.816 32.486 28.395 31.913 29.966 31.229 30.567 31.175 30.648 30.465 31.263 30.071 31.941 30.049 32.105 29.418 31.81 28.573"/> <text style="font-family: &quot;Noto Sans Armenian&quot;; font-size: 8px; font-weight: 700; text-transform: uppercase; white-space: pre; text-anchor: middle;" x="24.972" y="20.871">FILMS</text> </svg>';

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
