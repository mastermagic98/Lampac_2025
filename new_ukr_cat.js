///українські категорії
! function() {
    "use strict";
var _ = '<svg fill="none" height="128" width="128" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" xmlns:bx="https://boxy-svg.com"> <defs><bx:guide x="-33.60946010696372" y="18.378168684019116" angle="0&quot; fill=&quot;CurrentColor"/> <bx:guide x="-6.188405967649857" y="19.873862546163508&quot; angle=&quot;0&quot; fill=&quot;CurrentColor"/> <bx:guide x="18.989107378447414" y="21.3695564083079" angle="0&quot; fill=&quot;CurrentColor"/> <bx:guide x="-104.65491855882239" y="33.58438961582044" angle="0&quot; fill=&quot;CurrentColor"/> <bx:grid x="1.28" y="1.28" width="26.952" height="18.589"/> </defs> <g transform="matrix(2.625, 0, 0, 2.625, -32.728653, 43.481769)" style="transform-origin: -4.62548px 32.0658px;&quot; fill=&quot;CurrentColor"> <g id="Layer_1" transform="matrix(1, 0, 0, 1, 8.985618, 2.166741)" fill="CurrentColor&quot; transform=&quot;matrix(1, 0, 0, 1, 8.985618, 2.166741)"> <path d="M1,38h23v3H12v2h26v-2H26v-3h23V8H1V38z M3,10h44v26H3V10z&quot; fill=&quot;CurrentColor"/> </g> <polygon points="41.101 30.222 40.982 29.939 40.158 29.448 39.114 29.456 38.544 28.773 37.887 29.038 37.363 28.839 37 28.96 36.318 27.769 35.836 27.728 35.509 26.459 34.205 26.26 33.95 26.586 32.859 26.572 32.509 27.083 32.473 27.72 32.132 27.369 31.434 27.489 31.254 27.133 29.979 27.242 28.204 26.484 27.207 26.429 26.46 27.098 26.753 28.132 25.245 29.49 25.351 30.233 25.065 30.108 24.616 30.734 25.348 31.651 26.741 31.916 27.042 32.261 28.242 31.988 28.391 31.695 29.531 31.422 30.749 32.156 30.955 32.817 31.354 33.127 31.333 33.653 31.65 34.259 30.954 34.454 30.693 34.936 29.99 35.566 30.466 35.997 31.829 35.238 32.494 34.389 32.873 34.144 33.617 34.029 33.506 34.304 33.471 34.358 33.895 34.856 35.214 34.863 35.279 35.155 34.144 35.788 35.16 36.295 35.17 36.63 34.983 37.031 35.332 37.26 35.92 37.049 37.196 36.224 37.992 36.262 38.11 35.755 37.671 35.726 37.037 35.976 36.554 35.391 35.509 34.735 36.789 34.645 36.802 34.653 37.381 34.08 38.952 33.396 39.553 33.342 39.634 32.632 40.249 32.238 40.927 32.216 41.091 31.585 40.796 30.74&quot; fill=&quot;CurrentColor"/> <text style="font-family: &quot;Noto Sans Armenian&quot;; font-size: 8px; font-weight: 700; text-transform: uppercase; white-space: pre;" x="12.52" y="22.789&quot; fill=&quot;CurrentColor">TV Shows</text> </g> </svg>';

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
