/* Pergunta numero 1 */
var p1 = prompt("Qual o nome da namorada do Chico Bento?");


var r1 = p1.toLocaleLowerCase();

var corretoR1 = document.getElementById("r1");
var erradoR1 = document.getElementById("r4");

if (r1 === "rosinha"){
    corretoR1.innerHTML = "<p class='p' >" + "<span class='upper'>" + "correto!" + "</span>" +  " a namorada do Chico Bento é a " + "<em class='upper'>" + "rosinha" + "</em>" + "</p>";
} else {
    erradoR1.innerHTML = "<p class='p' >" + "<span class='upper'>" + "errado!" + "</span>" +  " a namorada do Chico Bento é a " + "<em class='upper'>" + "rosinha" + "</em>" + "</p>";
}


/* Pergunta numero 2 */
var p2 = prompt("Qual o nome do amigo do Cebolinha?");

var r2 = p2.toLocaleLowerCase();

var corretoR2 = document.getElementById("r2");
var erradoR2 = document.getElementById("r5");

if (r2 === "cascão"){
    corretoR2.innerHTML = "<span class='upper'> correto! </span> o amigo do cebolinha é o  <em class='upper'> cascão </em>";
} else {
    erradoR2.innerHTML = "<span class='upper'> errado! </span> o amigo do cebolinha é o  <em class='upper'> cascão </em>";
}


/* Pergunta numero 3 */
var p3 = prompt("Qual o nome da amiga da Monica?");

var r3 = p3.toLocaleLowerCase();

var corretoR3 = document.getElementById("r3");
var erradoR3 = document.getElementById("r6");

if (r3 === "magali"){
    corretoR3.innerHTML = "<span class='upper'> correto! </span> a amiga da Mônica é a <em class='upper'> magali </em>";
} else {
    erradoR3.innerHTML = "<span class='upper'> errado! </span> a amiga da Mônica é a <em class='upper'> magali </em>";
}






