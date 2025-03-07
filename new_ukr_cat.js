///українські категорії
! function() {
    "use strict";
var _ = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512">  <g stroke-width="0" transform="matrix(0.8, 0, 0, 0.8, -0.000002, 0)"></g>  <g stroke-linecap="round" stroke-linejoin="round" transform="matrix(0.8, 0, 0, 0.8, -0.000002, 0)"></g>   <g transform="matrix(0.8, 0, 0, 0.8, -0.000004, 51.199996)">    <path  fill="currentColor" d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"></path>  </g>  <g transform="matrix(1, 0, 0, 1, -285.873654, -26.587999)">    <g id="SVGRepo_bgCarrier" stroke-width="0" transform="matrix(1, 0, 0, 1, 411.873653, 162.499998)"></g>    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" transform="matrix(1, 0, 0, 1, 411.873653, 162.499998)"></g>    <g id="SVGRepo_iconCarrier" transform="matrix(1, 0, 0, 1, 411.873653, 162.499998)">      <polygon fill="currentColor" points="258,63.607 256.153,59.227 243.366,51.602 227.146,51.72 218.289,41.112 208.084,45.232 199.961,42.13 194.326,44.024 183.741,25.53 176.234,24.891 171.167,5.166 150.897,2.088 146.943,7.155 130.012,6.942 124.566,14.875 124.021,24.749 118.717,19.326 107.895,21.173 105.077,15.656 85.281,17.337 57.718,5.569 42.232,4.716 30.629,15.111 35.175,31.166 11.756,52.241 13.414,63.773 8.962,61.855 2,71.564 13.366,85.795 34.986,89.915 39.674,95.291 58.31,91.028 60.607,86.482 78.319,82.243 97.239,93.657 100.436,103.91 106.64,108.741 106.309,116.886 111.234,126.311 100.412,129.342 96.387,136.825 85.447,146.604 92.835,153.306 114.005,141.513 124.329,128.324 130.225,124.535 141.781,122.735 140.052,127.021 139.507,127.85 146.09,135.593 166.573,135.688 167.591,140.211 149.95,150.061 165.744,157.923 165.887,163.133 162.998,169.36 168.42,172.912 177.537,169.644 197.357,156.834 209.717,157.402 211.564,149.54 204.745,149.091 194.894,152.974 187.388,143.881 171.165,133.699 191.034,132.302 191.247,132.42 200.246,123.54 224.636,112.908 233.965,112.056 235.22,101.045 244.763,94.935 255.301,94.58 257.834,84.777 253.264,71.658 "></polygon>    </g>  </g></svg>';

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
