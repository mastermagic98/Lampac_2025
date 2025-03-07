///українські категорії
! function() {
    "use strict";
var _ = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512">   <g stroke-width="0" transform="matrix(0.8, 0, 0, 0.8, -0.000002, 0)"/>   <g stroke-linecap="round" stroke-linejoin="round" transform="matrix(0.8, 0, 0, 0.8, -0.000002, 0)"/>   <g transform="matrix(0.8, 0, 0, 0.8, -0.000004, 51.199996)">     <path fill="#256" d="M 592 -64 L 48 -64 C 21.49 -64 0 -42.51 0 -16 L 0 304 C 0 330.51 21.49 352 48 352 L 288 352 L 288 384 L 112 384 C 103.163 384 96 391.163 96 400 L 96 432 C 96 440.837 103.163 448 112 448 L 528 448 C 536.837 448 544 440.837 544 432 L 544 400 C 544 391.163 536.837 384 528 384 L 352 384 L 352 352 L 592 352 C 618.51 352 640 330.51 640 304 L 640 -16 C 640 -42.51 618.51 -64 592 -64 Z M 576 288 L 64 288 L 64 0 L 576 0 L 576 288 Z"/>   </g>   <g transform="matrix(1, 0, 0, 1, -283.057217, -87.611136)">    <g stroke-width="0" transform="matrix(1, 0, 0, 1, 411.873653, 162.499998)"/>     <g stroke-linecap="round" stroke-linejoin="round" transform="matrix(1, 0, 0, 1, 411.873653, 162.499998)"/>     <g  transform="matrix(1, 0, 0, 1, 411.873653, 162.499998)">      <polygon fill="CurrentColor" points="256.122 67.362 254.275 62.982 241.488 55.357 225.268 55.475 216.411 44.867 206.206 48.987 198.083 45.885 192.448 47.779 181.863 29.285 174.356 28.646 169.289 8.921 149.019 5.843 145.065 10.91 128.134 10.697 122.688 18.63 122.143 28.504 116.839 23.081 106.017 24.928 103.199 19.411 83.403 21.092 55.84 9.324 40.354 8.471 28.751 18.866 33.297 34.921 9.878 55.996 11.536 67.528 7.084 65.61 0.122 75.319 11.488 89.55 33.108 93.67 37.796 99.046 56.432 94.783 58.729 90.237 76.441 85.998 95.361 97.412 98.558 107.665 104.762 112.496 104.431 120.641 109.356 130.066 98.534 133.097 94.509 140.58 83.569 150.359 90.957 157.061 112.127 145.268 122.451 132.079 128.347 128.29 139.903 126.49 138.174 130.776 137.629 131.605 144.212 139.348 164.695 139.443 165.713 143.966 148.072 153.816 163.866 161.678 164.009 166.888 161.12 173.115 166.542 176.667 175.659 173.399 195.479 160.589 207.839 161.157 209.686 153.295 202.867 152.846 193.016 156.729 185.51 147.636 169.287 137.454 189.156 136.057 189.369 136.175 198.368 127.295 222.758 116.663 232.087 115.811 233.342 104.8 242.885 98.69 253.423 98.335 255.956 88.532 251.386 75.413"/>     </g>  </g>   <text style="fill: CurrentColor; font-family: &quot;Segoe UI&quot;; font-size: 100px; font-weight: 700; white-space: pre;" x="46.507" y="504.812">UA Serial</text> </svg>';

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
