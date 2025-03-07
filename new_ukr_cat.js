///українські категорії
! function() {
    "use strict";
var _ = '<svg fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">   <path d="M 0 390 L 245.333 390 L 245.333 422 L 117.333 422 L 117.333 443.333 L 394.667 443.333 L 394.667 422 L 266.667 422 L 266.667 390 L 512 390 L 512 70 L 0 70 L 0 390 Z M 21.33 91.333 L 490.667 91.333 L 490.667 368.667 L 21.33 368.667 L 21.33 91.333 Z" fill="currentColor" style="transform-origin: 256px 256px;"/>   <polygon points="331.893 283.92 330.624 280.901 321.835 275.664 310.699 275.749 304.619 268.464 297.611 271.291 292.021 269.168 288.149 270.459 280.875 257.755 275.733 257.317 272.245 243.781 258.336 241.659 255.616 245.136 243.979 244.987 240.245 250.437 239.861 257.232 236.224 253.488 228.779 254.768 226.859 250.971 213.259 252.133 194.325 244.048 183.691 243.461 175.723 250.597 178.848 261.627 162.763 276.112 163.893 284.037 160.843 282.704 156.053 289.381 163.861 299.163 178.72 301.989 181.931 305.669 194.731 302.757 196.32 299.632 208.48 296.72 221.472 304.549 223.669 311.6 227.925 314.907 227.701 320.517 231.083 326.981 223.659 329.061 220.875 334.203 213.376 340.923 218.453 345.52 232.992 337.424 240.085 328.368 244.128 325.755 252.064 324.528 250.88 327.461 250.507 328.037 255.029 333.349 269.099 333.424 269.792 336.539 257.685 343.291 268.523 348.699 268.629 352.272 266.635 356.549 270.357 358.992 276.629 356.741 290.24 347.941 298.731 348.347 299.989 342.939 295.307 342.629 288.544 345.296 283.392 339.056 272.245 332.059 285.899 331.099 286.037 331.184 292.213 325.072 308.971 317.776 315.381 317.2 316.245 309.627 322.805 305.424 330.037 305.189 331.787 298.459 328.64 289.445" fill="currentColor" style="transform-origin: 256px 256px;"/>   <text style="font-family: &quot;Noto Sans Armenian&quot;; font-size: 85.3px; font-weight: 700; text-transform: uppercase; white-space: pre; transform-origin: 256px 256px;" x="27.03" y="204.635" fill="currentColor">TV Shows</text> </svg>';

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
