var network = new Lampa.Reguest();
var api = Lampa.Utils.protocol() + Lampa.Manifest.cub_domain + '/api/';

function addDevice(message) {
    var displayModal = function displayModal() {
        var html = Lampa.Template.get('account_add_device');

        if (message) {
            html.find('.about').html(message);
        } else {
            html.find('.about').html('{cubMesage}');
        }

        html.find('.simple-button').remove();
        html.find('.account-add-device__qr').remove();

        var foot = $('<div class="modal__footer"></div>').css({
            'display': 'flex',
            'flex-direction': 'column',
            'gap': '1em',
            'align-items': 'center'
        });

        // Изменение текста на кнопке
        var button_enter_code = $(`<div class="simple-button selector">Аккаунт ${Lampa.Manifest.cub_domain}</div>`).css({
            'width': 'auto',
            'text-align': 'center'
        });

        var button_cod = $('<div class="simple-button selector">Войти по паролю</div>').css({
            'width': 'auto',
            'text-align': 'center'
        });

        var button_reload = $('<div class="simple-button selector">Проверить unic_ID</div>').css({
            'width': 'auto',
            'text-align': 'center'
        });

        // Обработчик для кнопки "Код"
        button_enter_code.on('hover:enter', function () {
            Lampa.Modal.close();
            Lampa.Input.edit({
                free: true,
                title: Lampa.Lang.translate('Введите код'),
                nosave: true,
                value: '',
                layout: 'nums',
                nomic: true
            }, function (new_value) {
                displayModal(); // Перезапускаем окно после обработки

                var code = parseInt(new_value);

                if (new_value && new_value.length == 6 && !isNaN(code)) {
                    Lampa.Loading.start(function () {
                        network.clear();
                        Lampa.Loading.stop();
                    });

                    network.clear();

                    network.silent(api + 'device/add', function (result) {
                        Lampa.Loading.stop();
                        Lampa.Storage.set('account', result, true);
                        Lampa.Storage.set('account_email', result.email, true);
                        window.location.reload();
                    }, function () {
                        Lampa.Loading.stop();
                        Lampa.Noty.show(Lampa.Lang.translate('account_code_error'));
                    }, {
                        code: code
                    });
                } else {
                    Lampa.Noty.show(Lampa.Lang.translate('account_code_wrong'));
                }
            });
        });

        // Обработчик для кнопки "Войти по паролю"
        button_cod.on('hover:enter', function () {
            Lampa.Modal.close();
            Lampa.Input.edit({
                free: true,
                title: Lampa.Lang.translate('Введите пароль'),
                nosave: true,
                value: '',
                nomic: true
            }, function (new_value) {
                displayModal();

                var code = new_value;

                if (new_value) {
                    Lampa.Loading.start(function () {
                        network.clear();
                        Lampa.Loading.stop();
                    });

                    network.clear();

                    var u = '{localhost}/testaccsdb';
                    u = Lampa.Utils.addUrlComponent(u, 'account_email=' + encodeURIComponent(code));

                    network.silent(u, function (result) {
                        Lampa.Loading.stop();

                        if (!result.accsdb) {
                            Lampa.Storage.set('lampac_unic_id', code);
                            window.location.reload(); // Перезагрузка окна
                        } else {
                            Lampa.Noty.show(Lampa.Lang.translate('Неправильный пароль'));
                        }
                    }, function () {
                        Lampa.Loading.stop();
                        Lampa.Noty.show(Lampa.Lang.translate('account_code_error'));
                    }, {
                        code: code
                    });
                } else {
                    Lampa.Noty.show(Lampa.Lang.translate('account_code_wrong'));
                }
            });
        });

        // Обработчик для кнопки "Проверить unic_ID"
        button_reload.on('hover:enter', function () {
            window.location.reload();
        });

        // Добавляем кнопки в футер (в нужном порядке)
        foot.append(button_enter_code, button_cod, button_reload);
        html.append(foot);

        Lampa.Modal.open({
            title: '',
            html: html,
            size: 'full',
            onBack: function onBack() {
                Lampa.Modal.close();
                displayModal();
            }
        });
    };

    displayModal();
}

function checkAutch() {
    var url = '{localhost}/testaccsdb';
    var email = Lampa.Storage.get('account_email');
    if (email) url = Lampa.Utils.addUrlComponent(url, 'account_email=' + encodeURIComponent(email));
    var uid = Lampa.Storage.get('lampac_unic_id', '');
    if (uid) url = Lampa.Utils.addUrlComponent(url, 'uid=' + encodeURIComponent(uid));

    network.silent(url, function (res) {
        if (res.accsdb) addDevice(res.msg);
        else {
            network.clear();
            network = null;
        }
    }, function () {
        //setTimeout(checkAutch, 1000 * 3);
    });
}
var lisen = function lisen(e) {
    if (e.name == 'content') {
        setTimeout(checkAutch, 1000);
        Lampa.Controller.listener.remove('toggle', lisen);
    }
};
Lampa.Controller.listener.follow('toggle', lisen);