var vidaAtual = 0
var vidaMax = 1
var vida = [vidaAtual,vidaMax]

var vidaethan = 11
var sanidadeethan = 80

var vidaaurora = 11
var sanidadeaurora = 50

var vidaclara=11
var sanidadeclara = 40

var vidaestella = 11
var sanidadeestella = 50

var vidalilian = 11
var sanidadelilian = 50

vidaethan=localStorage.getItem('vidaethan')
vidaaurora=localStorage.getItem('vidaaurora')
vidaclara=localStorage.getItem('vidaclara')
vidaestella=localStorage.getItem('vidaestella')
vidalilian=localStorage.getItem('vidalilian')

sanidadeethan=localStorage.getItem('sanidadeethan')
sanidadeaurora=localStorage.getItem('sanidadeaurora')
sanidadeclara=localStorage.getItem('sanidadeclara')
sanidadeestella=localStorage.getItem('sanidadeestella')
sanidadelilian=localStorage.getItem('sanidadelilian')

players(vida)
function players(vida){
	var html=""

	html+="<tr><td>Nome</td><td>Vida</td><td>Sanidade</td><tr>"

	html+="<tr><td>Ethan</td><td>"+vidaethan+"/11&nbsp<button onClick='healethan()'>+1</button><button onClick='danoethan()'>-1</button></td><td>"+sanidadeethan+"/80&nbsp<button onClick='healsanidadeethan()'>+1</button><button onClick='danosanidadeethan()'>-1</button></td><tr>"

	html+="<tr><td>Aurora</td><td>"+vidaaurora+"/11&nbsp<button onClick='healaurora()'>+1</button><button onClick='danoaurora()'>-1</button></td><td>"+sanidadeaurora+"/50&nbsp<button onClick='healsanidadeaurora()'>+1</button><button onClick='danosanidadeaurora()'>-1</button></td><tr>"

	html+="<tr><td>Clara</td><td>"+vidaclara+"/11&nbsp<button onClick='healclara()'>+1</button><button onClick='danoclara()'>-1</button></td><td>"+sanidadeclara+"/40&nbsp<button onClick='healsanidadeclara()'>+1</button><button onClick='danosanidadeclara()'>-1</button></td><tr>"

	html+="<tr><td>Estella</td><td>"+vidaestella+"/11&nbsp<button onClick='healestella()'>+1</button><button onClick='danoestella()'>-1</button></td><td>"+sanidadeestella+"/50&nbsp<button onClick='healsanidadeestella()'>+1</button><button onClick='danosanidadeestella()'>-1</button></td><tr>"

	html+="<tr><td>Lilian</td><td>"+vidalilian+"/11&nbsp<button onClick='heallilian()'>+1</button><button onClick='danolilian()'>-1</button></td><td>"+sanidadelilian+"/50&nbsp<button onClick='healsanidadelilian()'>+1</button><button onClick='danosanidadelilian()'>-1</button></td><tr>"

	var inner = document.getElementById('jogadores')
	inner.innerHTML = html
}

portrairt(vida)
function portrairt(vida){
	var html2=""

	html2+="<p id='ethan'>Ethan:&nbsp &nbsp"+vidaethan+"/11 &nbsp"+sanidadeethan+"/80</p>"
	html2+="<p id='aurora'>Aurora:&nbsp &nbsp"+vidaaurora+"/11 &nbsp"+sanidadeaurora+"/50</p>"
	html2+="<p id='clara'>Clara:&nbsp &nbsp"+vidaclara+"/11 &nbsp"+sanidadeclara+"/40</p>"
	html2+="<p id='estella'>Estella:&nbsp &nbsp"+vidaestella+"/11 &nbsp"+sanidadeestella+"/50</p>"
	html2+="<p id='lilian'>Lilian:&nbsp &nbsp"+vidalilian+"/11 &nbsp"+sanidadelilian+"/50</p>"

	var inner2 = document.getElementById('portrait')
	inner2.innerHTML = html2
}

function healethan(){
	vidaethan = vidaethan+1
	localStorage.setItem('vidaethan',vidaethan)
	players(vida)
}

function danoethan(){
	vidaethan = vidaethan-1
	localStorage.setItem('vidaethan',vidaethan)
	players(vida)
}

function danosanidadeethan(){
	sanidadeethan = sanidadeethan-1
	localStorage.setItem('sanidadeethan',sanidadeethan)
	players(vida)
}

function healsanidadeethan(){
	sanidadeethan = sanidadeethan+1
	localStorage.setItem('sanidadeethan',sanidadeethan)
	players(vida)
}

function healaurora(){
    vidaaurora = vidaaurora+1
    localStorage.setItem('vidaaurora',vidaaurora)
    players(vida)
}

function danoaurora(){
    vidaaurora = vidaaurora-1
    localStorage.setItem('vidaaurora',vidaaurora)
    players(vida)
}

function danosanidadeaurora(){
    sanidadeaurora = sanidadeaurora-1
    localStorage.setItem('sanidadeaurora',sanidadeaurora)
    players(vida)
}

function healsanidadeaurora(){
    sanidadeaurora = sanidadeaurora+1
    localStorage.setItem('sanidadeaurora',sanidadeaurora)
    players(vida)
}

function healclara(){
    vidaclara = vidaclara+1
    localStorage.setItem('vidaclara',vidaclara)
    players(vida)
}

function danoclara(){
    vidaclara = vidaclara-1
    localStorage.setItem('vidaclara',vidaclara)
    players(vida)
}

function danosanidadeclara(){
    sanidadeclara = sanidadeclara-1
    localStorage.setItem('sanidadeclara',sanidadeclara)
    players(vida)
}

function healsanidadeclara(){
    sanidadeclara = sanidadeclara+1
    localStorage.setItem('sanidadeclara',sanidadeclara)
    players(vida)
}

function healestella(){
    vidaestella = vidaestella+1
    localStorage.setItem('vidaestella',vidaestella)
    players(vida)
}

function danoestella(){
    vidaestella = vidaestella-1
    localStorage.setItem('vidaestella',vidaestella)
    players(vida)
}

function danosanidadeestella(){
    sanidadeestella = sanidadeestella-1
    localStorage.setItem('sanidadeestella',sanidadeestella)
    players(vida)
}

function healsanidadeestella(){
    sanidadeestella = sanidadeestella+1
    localStorage.setItem('sanidadeestella',sanidadeestella)
    players(vida)
}

function heallilian(){
    vidalilian = vidalilian+1
    localStorage.setItem('vidalilian',vidalilian)
    players(vida)
}

function danolilian(){
    vidalilian = vidalilian-1
    localStorage.setItem('vidalilian',vidalilian)
    players(vida)
}

function danosanidadelilian(){
    sanidadelilian = sanidadelilian-1
    localStorage.setItem('sanidadelilian',sanidadelilian)
    players(vida)
}

function healsanidadelilian(){
    sanidadelilian = sanidadelilian+1
    localStorage.setItem('sanidadelilian',sanidadelilian)
    players(vida)
}



