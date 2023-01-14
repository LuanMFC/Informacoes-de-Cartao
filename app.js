
function enviar(){
    var js_nome = document.formularioinputs.f_name.value;
    var js_number = document.formularioinputs.f_cnumber.value;
    var js_data1 = document.formularioinputs.f_date1.value;
    var js_data2 = document.formularioinputs.f_date2.value;
    var js_cvc = document.formularioinputs.f_cvc.value;

     /* Ainda não sei fazer a mensagem de erro na própria página web */

    if (js_nome == 0){
        window.alert("Defina titular do cartão!")
    }

    else if (js_number ==0){
        window.alert("Defina o número do cartão!")
    }
    else if (js_data1 == 0 || js_data2 == 0){
        window.alert("Defina a data de expiração do cartão!")
    }
    else if (js_cvc == 0){
        window.alert("Defina o cvc do cartão!")
    }

    else{
        document.frentec.date.value = js_data1 + "/" + js_data2;
        document.fundoc.cvc.value = js_cvc;
        document.frentec.name.value = js_nome;
        document.frentec.number.value = js_number;

        document.getElementById('formulario').className = "enviou";
        document.getElementById('final').className = "agradecimentos";
    }
}

function alterar(){
        document.getElementById('formulario').className = "formulario";
        document.getElementById('final').className = "final";
}