$(document).ready(function() {

            for (var i = 0; i < 36; i++) {
                $(".container").append("<div class='quadratino'></div>");
            };

            $('.quadratino').click(function() {
                var currentQuad = $(this);
                    // if ($(this).hasClass(bg-yellow))
                    console.log('giallo: ' + ($(this).hasClass('bg-yellow')));
                    console.log('verde: ' +($(this).hasClass('bg-green')));
                    if (!$(this).hasClass('bg-yellow') && !$(this).hasClass('bg-green')) {
                    $.ajax({
                            'url': 'https://flynn.boolean.careers/exercises/api/random/int',
                            'method': 'GET',
                            'success': function (data) {
                                // stampa_numero(data.response);
                                console.log(data);
                                numero = data.response;
                                console.log('il numero estratto è ' + numero);
                                $(currentQuad).text(data.response);
                                if (numero <= 5) {
                                    $(currentQuad).addClass('bg-yellow');
                                } else {
                                    $(currentQuad).addClass('bg-green');
                                }
                            },
                            error: function() {
                                alert('error');
                            }
                        });
                    }
                    });
            });

        //STAMPA NUMERO SERVER
        // $(document).ready(function() {
        //
        //     $.ajax({
        //         'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        //         'method': 'GET',
        //         'success': function(data) {
        //             // stampa_numero(data.response);
        //             console.log(data);
        //             numero = data.response;
        //             console.log('il numero estratto è ' + numero);
        //         },
        //         'error': function() {
        //             alert('error');
        //         }
        //     });
        // });

        //IL NUMERO PIU' GRANDE E' QUELLO DELL'UTENTE O QUELLO DEL SERVER?
        // var numero_utente = parseInt(prompt('inserisci un numero'));
        //
        // $.ajax({
        //     'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        //     'method': 'GET',
        //     'success': function(data) {
        //
        //         var numero_pc = data.response;
        //         console.log('numero pc: ' + numero_pc);
        //         if(numero_pc > numero_utente) {
        //             console.log('hai perso');
        //         } else {
        //             console.log('hai vinto');
        //         }
        //         // CANCELLA if/else valuta_vincente(numero_pc, numero_utente);
        //     },
        //     'error': function() {
        //         alert('error');
        //     }
        // });

        //VOLENDO: function valuta_vincente(x.y) {
        //     if(x > y){
        //         console.log('hai perso');
        //     } else {
        //         console.log('hai vinto');
        //     }
        // }
