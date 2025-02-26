// Функція для завантаження скрипта
function loadScript(src, callback) {
    console.log('🚀 Завантаження скрипта:', src);
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.onload = function() {
        console.log('✅ Скрипт завантажено:', src);
        if (callback) callback();
    };
    script.onerror = function() {
        console.error('❌ Помилка при завантаженні скрипта:', src);
    };
    document.head.appendChild(script);
}

// Функція для видалення підключеного плагіна
function removeScript(src) {
    console.log('🛑 Видалення скрипта:', src);
    var scripts = document.querySelectorAll(`script[src="${src}"]`);
    scripts.forEach(script => script.remove());
    console.log('🛑 Плагін вимкнено:', src);
}

// Функція для керування плагіном
function togglePlugin(adult) {
    console.log('🔄 Функція togglePlugin викликана з параметром:', adult);
    var pluginSrc = "http://localhost/sisi.js";
    var scriptExists = document.querySelector(`script[src="${pluginSrc}"]`) !== null;
    
    if (adult) {
        if (!scriptExists) {
            loadScript(pluginSrc, function() {
                console.log('✅ Плагін sisi.js увімкнено');
            });
        } else {
            console.log('ℹ️ Плагін вже підключений');
        }
    } else {
        if (scriptExists) {
            removeScript(pluginSrc);
            setTimeout(() => {
                console.log('🛑 Перевірка після видалення:', document.querySelector(`script[src="${pluginSrc}"]`) ? '⚠️ Плагін ще присутній' : '✅ Плагін успішно видалений');
            }, 500);
        } else {
            console.log('ℹ️ Плагін вже вимкнено');
        }
    }
}

// Функція для відстеження змін профілю
function startProfileListener() {
    console.log('🎧 Слухач профілю запущено');
    Lampa.Listener.follow('profile', function(event) {
        console.log('📢 Отримано подію профілю:', JSON.stringify(event, null, 2));
        if (event.type !== 'changed' && event.type !== 'loaded') return;
        if (event.params && typeof event.params.adult !== 'undefined') {
            togglePlugin(event.params.adult);
        } else {
            console.warn('⚠️ Параметр "adult" відсутній у події профілю');
        }
    });
}

// Запуск слухача
startProfileListener();

