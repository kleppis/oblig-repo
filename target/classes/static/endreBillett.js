
$(function(){
    hentEn();
});


function hentEn() {
    const id = window.location.search.substring(1)
    const url = '/hentBillett?id=' + id

    $.get(url, data => {
        console.log(data)
        $('#id').val(data.id)
        $('#filmValg').val(data.film)
        $('#antall').val(data.antall)
        $('#fornavn').val(data.fornavn)
        $('#etternavn').val(data.etternavn)
        $('#number').val(data.telefon)
        $('#email').val(data.epost)
    })
}

function endreData(){
    const billett = {
        id: $("#id").val(),
        film: $("#filmValg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefon: $("#number").val(),
        epost: $("#email").val()
    }

    $.post("http://localhost:8080/endre", billett, function(response) {
        formaterData();
        console.log("Data lagret", response);
        //input1, input2,input3, input4, input5, input6 = false;
    }).fail(function(error) {
        console.error("Feil ved lagring av data", error);
    });}

let gyldig;

function endreOgValider() {
    valideringEpost();
    valideringFornavn();
    valideringEtternavn();
    valideringNummer();
    valideringAntall();
    settFilm();

    gyldig = input1 * input2 * input3 * input4 * input5 * input6;
    if (gyldig){
        endreData();
       window.location.href = "/index.html";
    } else {
        console.log("Ugyldige inputs")
    }
}



