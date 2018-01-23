var zahl = 42;
console.log(zahl);
console.log(zahl/8);
// Datentyp der Variablen
console.log(typeof zahl);
zahl = 42.12;
console.log(zahl);
console.log(typeof zahl);
zahl = '42';
console.log(zahl);
console.log(typeof zahl);
var dozent = 'Maier';
var fach = '"Internetanwendungen"';
var test = "\"Internetanwendungen\"";
console.log(test);
var ausgabe = fach + '\nAndres ' + dozent;
console.log(ausgabe);
console.log(12 / 5 + " Test");
console.log(12 + 5 + " Test");
console.log("Hallo " + 12 + 5);
// Boolean
var fertig = false;
console.log(fertig);
console.log(typeof fertig);
console.log('---> false, 0 und leere Strings sind gleich');
console.log('false == 0: '+(false == 0));
console.log('false == "": '+(false == ""));
console.log('0 == "": ' + (0 == ""));
console.log('---> null und undefined sind untereinander gleich');
console.log(null == undefined);
console.log('---> NaN ist zu nichts gleich');
console.log(NaN == NaN);
console.log(42 == '42');
console.log('---> Strikter Vergleich === zusätzlich Datentypvergleich');
console.log(42 === '42');
var i = 42;
var j = '42';
console.log(i == j);
console.log(i === j );
console.log('Ungleich: !=');
console.log('striktes Ungleich: !==');
console.log('---> undefined und null');
//
var tmp = 42;
console.log(tmp);
console.log(typeof tmp);
// 23.01.2018
var person = {};
console.log(person);
console.log(typeof person);
person.vorname = 'Max';
person.nachname = 'Mustermann';
console.log(person);
console.log(person.alter);
person.alter = 27;
console.log(person);
delete person.alter;
console.log(person);
console.log(person.nachname);
console.log(person['vorname']);

// Funktionsdefinition
function sagWas(){
 console.log("Was!");
}
// Funktionsaufruf
sagWas();

// neue Funktion: Zuweisung zu einer Variablen
var addition = function (zahl1, zahl2){    // annonyme Funktion
	return zahl1 + zahl2;
};
console.log(addition(42,13));

var operation = addition;
console.log(operation(56,23));
person.schreiWas = sagWas;
person.schreiWas();

person.druckeInfo = function(){
	console.log(this.vorname + ' ' + this.nachname);
};

person.druckeInfo();

