keyBoardAlfaNum = {
    ini: function (inputReturn, CallBackFunction, type, typeInputKeyboard) {
        executeCallback = true;
        isMayus = false;
        isCancel = false;

        inputReturn = document.getElementById(inputReturn);
        div = document.createElement('div');
        div.setAttribute('aria-hidden', 'false');
        div.setAttribute('aria-labelledby', 'myModalLabel');
        div.setAttribute('role', 'dialog');
        div.setAttribute('tabindex', '-1');
        div.id = "keyboardAlfaNum";
        div.className = "modal";
        div11 = document.createElement('div');
        div11.className = "modal-dialog";
        div111 = document.createElement('div');
        div111.className = "modal-content-teclado";
        div1111 = document.createElement('div');
        div1111.className = "modal-body";
        div11111 = document.createElement('div');
        div11111.className = "row col-md-12 col-sm-12 col-lg-12";
        div111111 = document.createElement('div');
        div111111.className = "col-md-10 col-sm-10 col-lg-10";
        div1111111 = document.createElement('div');
        div1111111.className = "input-group input-group-sm input-group-md col-md-12 col-sm-12 col-lg-12";
        input = document.createElement('input');
        input.style.height = "45px";
        input.style.fontSize = "large";
        if (type == undefined) {
            input.type = "text";
        } else {
            input.type = type;
        }
        if (typeInputKeyboard == undefined) {
            typeInputKeyboard = "";
        } else {

        }

        input.className = "form-control";
        input.value = inputReturn.value;
        div1111111.appendChild(input);
        span = document.createElement('span');
        span.className = "input-group-addon delKey";
        span.style.cursor = "pointer";
        span.style.padding = "5px 20px";
        span.innerHTML = '<i class="glyphicon glyphicon-arrow-left"></i>';
        div1111111.appendChild(span);
        div111111.appendChild(div1111111);
        div11111.appendChild(div111111);
        div111111 = document.createElement('div');
        div111111.className = "col-md-2 col-sm-2 col-lg-2";
        button = document.createElement('button');
        button.setAttribute('data-dismiss', 'modal');
        button.className = "btn btn-default cancelKey btn-lg";
        button.type = "button";
        button.innerHTML = "Cancelar";
        div111111.appendChild(button);
        div11111.appendChild(div111111);
        div1111.appendChild(div11111);
        div11111 = document.createElement('div');
        div.style.marginLeft = "1px";
        div11111.className = "row containerKeyBoard";
        div11111.innerHTML = "<br/><br/><br/>";
        ul = document.createElement('ul');
        ul.className = "keyboard";
        ul.id = "AlfaNum";
        simbolosPunt = [
            {"later": "", "class": "blanco2"},
            {"later": "", "class": "blanco2"},
            {"later": "", "class": "blanco2"},
            {"later": "_", "class": "numero symbol"},
            {"later": "-", "class": "numero symbol"},
            {"later": "*", "class": "numero symbol"},
            {"later": "#", "class": "numero symbol"},
            {"later": ":", "class": "numero symbol"},
            {"later": ";", "class": "numero symbol"},
            {"later": "", "class": "blanco2"},
            {"later": "", "class": "blanco2"},
            {"later": "", "class": "blanco2"},
            {"later": "", "class": "blanco2"},
            {"later": "", "class": "blanco2", "style": "width: 100%;height: 0px;"}
        ];
        simbolos = [
            {"later": "q", "class": "elemento letter"},
            {"later": "w", "class": "elemento letter"},
            {"later": "e", "class": "elemento letter"},
            {"later": "r", "class": "elemento letter"},
            {"later": "t", "class": "elemento letter"},
            {"later": "y", "class": "elemento letter"},
            {"later": "u", "class": "elemento letter"},
            {"later": "i", "class": "elemento letter"},
            {"later": "o", "class": "elemento letter"},
            {"later": "p", "class": "elemento letter"},
            {"later": "", "class": "blanco"},
            {"later": "1", "class": "numero symbol"},
            {"later": "2", "class": "numero symbol"},
            {"later": "3", "class": "numero symbol"},
            {"later": "", "class": "blanco"},
            {"later": "a", "class": "elemento letter"},
            {"later": "s", "class": "elemento letter"},
            {"later": "d", "class": "elemento letter"},
            {"later": "f", "class": "elemento letter"},
            {"later": "g", "class": "elemento letter"},
            {"later": "h", "class": "elemento letter"},
            {"later": "j", "class": "elemento letter"},
            {"later": "k", "class": "elemento letter"},
            {"later": "l", "class": "elemento letter"},
            {"later": "", "class": "blanco2"},
            {"later": "4", "class": "numero symbol"},
            {"later": "5", "class": "numero symbol"},
            {"later": "6", "class": "numero symbol"},
            {"later": "", "class": "blanco2"},
            {"later": "z", "class": "elemento letter"},
            {"later": "x", "class": "elemento letter"},
            {"later": "c", "class": "elemento letter"},
            {"later": "v", "class": "elemento letter"},
            {"later": "b", "class": "elemento letter"},
            {"later": "n", "class": "elemento letter"},
            {"later": "m", "class": "elemento letter"},
            {"later": ",", "class": "numero symbol"},
            {"later": ".", "class": "numero symbol"},
            {"later": "", "class": "blanco"},
            {"later": "7", "class": "numero symbol"},
            {"later": "8", "class": "numero symbol"},
            {"later": "9", "class": "numero symbol"},
            {"later": "MAYUS", "class": "elemento mayus", "style": "width: 105px;background: grey;border: grey;"},
//            {"later": "&lt;", "class": "elemento symbol prevS"},
//            {"later": "&gt;", "class": "elemento symbol nextS"},
            {"later": "&nbsp;", "class": "elemento space"},
            {"later": "Aceptar", "class": "aceptar symbol"},
            {"later": "", "class": "blanco"},
            {"later": "0", "class": "elemento0 symbol"},
            {"later": ".", "class": "numero symbol"}
        ];
        if (typeInputKeyboard == 'email') {
            simbolos.push({"later": "", "class": "blanco", "style": "width: 100%;height: 14px;cursor:none;"});
            simbolos.push({"later": "", "class": "blanco", "style": "width:37px;"});
            simbolos.push({"later": ".com.mx", "class": "elemento letter", "style": "width: initial;padding: 0px 7px;"});
            simbolos.push({"later": ".com", "class": "elemento letter", "style": "width: initial;padding: 0px 7px;"});
            simbolos.push({"later": ".mx", "class": "elemento letter", "style": "width: initial;padding: 0px 7px;"});
            simbolos.push({"later": "@", "class": "elemento letter"});
            simbolos.push({"later": "@hotmail.com", "class": "elemento letter", "style": "width: 131px;background: white;border: deepskyblue 1px solid;color: blue;"});
            simbolos.push({"later": "@gmail.com", "class": "elemento letter", "style": "width: 131px;background: white;border: deepskyblue 1px solid;color: red;"});
            simbolos.push({"later": "@yahoo.com", "class": "elemento letter", "style": "width: 131px;background: white;border: deepskyblue 1px solid;color: #6E329D;"});
        }
        if (typeInputKeyboard == 'dir' || typeInputKeyboard == 'email') {
            simbolos = simbolosPunt.concat(simbolos);
            debug(simbolos);
        }

        for (index in simbolos) {
            li = document.createElement('li');
            li.innerHTML = simbolos[index].later;
            li.className = simbolos[index].class;
            if (simbolos[index].style != undefined) {
                li.setAttribute("style", simbolos[index].style);
            }
            ul.appendChild(li);
        }
        div11111.appendChild(ul);
        div1111.appendChild(div11111);
        div111.appendChild(div1111);
        div11.appendChild(div111);
        div.appendChild(div11);
        document.body.appendChild(div);
        modal = $('#keyboardAlfaNum');
        var $write = modal.find('input'),
                shift = false,
                capslock = false,
                cursor = $write.val().length;
        modal.on('hide.bs.modal', function (e) {
            if (!isCancel) {
                inputReturn.value = $write.val();
                if (executeCallback) {
                    if (CallBackFunction != undefined) {
                        if (typeof (CallBackFunction) == 'string') {
                            eval(CallBackFunction);
                        } else {
                            CallBackFunction();
                        }
                    }
                }
            }
            modal.remove();
            simbolos = null;
        });
        modal.find('ul>li').click(function () {
            var $this = $(this),
                    character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
            // Special characters
            if ($this.hasClass('aceptar')) {
                modal.modal('hide');
                character = "";
            } else if ($this.hasClass('mayus')) {
                character = "";
                if (isMayus) {
                    isMayus = false;
                    $this.parent().css('text-transform', 'none');
                    $this.html('MAYUS');
                    $this.css('text-transform', 'uppercase');
                } else if (!isMayus) {
                    isMayus = true;
                    $this.parent().css('text-transform', 'uppercase');
                    $this.html('minus');
                    $this.css('text-transform', 'none');
                }
            } else if ($this.hasClass('blanco') || $this.hasClass('blanco2')) {
                character = '';
            } else if ($this.hasClass('space')) {
                character = ' ';
            }

            $write.val($write.val() + (isMayus ? character.toUpperCase() : character.toLowerCase()));
        });
        modal.find('.delKey').click(function () {
            int = $write.val().length;
            $write.val($write.val().substr(0, int - 1));
        });
        modal.find('.cancelKey').click(function () {
            $write.val('');
            isCancel = true;
            executeCallback = false;
            modal.modal('hide');
        });
        modal.find('.mayus').click(function () {

        });
        modal.modal('show');
    }

};
keyboardNum = {
    ini: function (inputReturn, CallBackFunction, valIni) {
        executeCallback = true;
        isCancel = false;
        inputReturn = document.getElementById(inputReturn);
        div = document.createElement('div');
        div.className = "modal bs-example-modal-sm";
        div.setAttribute('tabindex', '-1');
        div.id = "keyboardNum";
        div.setAttribute("data-backdrop", "static");
        div.setAttribute('role', 'dialog');
        div.setAttribute('aria-labelledby', 'mySmallModalLabel');
        div11 = document.createElement('div');
        div11.className = "modal-dialog modal-sm";
        div111 = document.createElement('div');
        div111.className = "modal-content";
        div1111 = document.createElement('div');
        div1111.className = "modal-body";
        div11111 = document.createElement('div');
        div11111.className = "row text-center";
        div111111 = document.createElement('div');
        div111111.className = "col-sm-12 col-md-12 col-lg-12";
        input = document.createElement('input');
        input.className = "form-control text-right";
        input.type = "text";
        input.style.fontSize = "large";
        if (valIni == undefined) {
            input.value = inputReturn.value;
        } else {
            input.value = valIni;
        }

        div111111.appendChild(input);
        div11111.appendChild(div111111);
        div111111 = document.createElement('div');
        div111111.className = "col-sm-12 col-md-12 col-lg-12";
        div111111.style.paddingTop = "20px";
        ul = document.createElement('ul');
        ul.className = "keyboard";
        simbolos = [
            {"later": "1", "class": "elementoNumericoCobrar symbol"},
            {"later": "2", "class": "elementoNumericoCobrar symbol"},
            {"later": "3", "class": "elementoNumericoCobrar symbol"},
            {"later": "4", "class": "elementoNumericoCobrar symbol"},
            {"later": "5", "class": "elementoNumericoCobrar symbol"},
            {"later": "6", "class": "elementoNumericoCobrar symbol"},
            {"later": "7", "class": "elementoNumericoCobrar symbol"},
            {"later": "8", "class": "elementoNumericoCobrar symbol"},
            {"later": "9", "class": "elementoNumericoCobrar symbol"},
            {"later": "<i class=\"glyphicon glyphicon-arrow-left\"></i>", "class": "elementoNumericoActive limpiar delKey"},
            {"later": "0", "class": "elementoNumericoCobrar symbol"},
            {"later": "Limpiar", "class": "elementoNumericoActive limpiar"}
        ];
        for (index in simbolos) {
            li = document.createElement('li');
            li.innerHTML = simbolos[index].later;
            li.className = simbolos[index].class;
            ul.appendChild(li);
        }

        div111111.appendChild(ul);
        div11111.appendChild(div111111);
        div111111 = document.createElement('div');
        div111111.className = "col-sm-12 col-md-12";
        div111111.paddingTop = "10px";
        button = document.createElement('button');
        button.type = "button";
        button.className = "btn btn-lg btn-success btn-block ok";
        button.innerHTML = "Aceptar";
        div111111.appendChild(button);
        button = document.createElement('button');
        button.type = "button";
        button.className = "btn btn-lg btn-bl btn-danger btn-block cancel";
        button.innerHTML = "Cancelar";
        div111111.appendChild(button);
        div11111.appendChild(div111111);
        div1111.appendChild(div11111);
        div111.appendChild(div1111);
        div11.appendChild(div111);
        div.appendChild(div11);
        document.body.appendChild(div);
        modal = $('#keyboardNum');
        var $write = modal.find('input'),
                shift = false,
                capslock = false,
                cursor = $write.val().length;
        modal.on('hide.bs.modal', function (e) {
            if (!isCancel) {
                inputReturn.value = $write.val();

                if (executeCallback) {
                    if (CallBackFunction != undefined) {
                        if (typeof (CallBackFunction) == 'string') {
                            eval(CallBackFunction);
                        } else {
                            CallBackFunction();
                        }
                    }
                }
            }
            modal.remove();
            simbolos = null;
        });
        modal.on('shown.bs.modal', function () {
            $write[0].selectionStart = 0;
        });
        modal.find('ul>li').click(function () {
            var $this = $(this),
                    character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
            // Special characters

            if ($this.hasClass('symbol')) {

            } else if ($this.hasClass('limpiar')) {
                character = "";
                if ($this.hasClass('delKey')) {
                    int = $write.val().length;
                    $write.val($write.val().substr(0, int - 1));
                } else {
                    $write.val('');
                }
            }
            if (getSelection($write[0]) == '') {
                $write.val($write.val() + character);
            } else {
                $write.val($write.val().replace(character));
            }


        });
        modal.find('.ok').click(function () {
            modal.modal('hide');
        });
        modal.find('.cancel').click(function () {
            executeCallback = false;
            isCancel = true;
            modal.modal('hide');
        });
        modal.modal('show');
    }
}
