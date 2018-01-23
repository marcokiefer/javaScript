(function () {
    console.log('Hallo Welt');
})();

//Funktionsdefinition
var counter = 0;
function aendereHeadline() {
    document.getElementById('headline').innerHTML = 'Toll ' + ++counter;
}

var btn_klickmich = document.getElementById('btn_klickmich');
btn_klickmich.addEventListener('click', function(){
    document.getElementById('headline').innerHTML = '"Toll gelickt"';
});






