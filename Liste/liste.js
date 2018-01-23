var btn_eintragen = document.getElementById('btn_eintragen');
var textfeld_todo = document.getElementById('todo');
var liste = document.getElementById('liste');

btn_eintragen.addEventListener('click', function(){
    var todo = textfeld_todo.value;
    eintragen(todo);
});

function eintragen(todo){
    if(todo !== ''){
    var li_tag = document.createElement('li');
    var text = document.createTextNode(todo);
    li_tag.appendChild(text);
    liste.appendChild(li_tag);
    textfeld_todo.value = '';   // Textfeld leeren
    } 
}