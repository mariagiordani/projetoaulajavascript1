function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("http://www.google.com/");
    //window.location.href = "http://mail.live.com";
}

function duvida(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //document.getElementById("duvidas").innerHTML = "obrigada por passar o mouse";
    //alert("duvidas? clique no texto")

}

function trocar(elemento){
    elemento.innerHTML = "tudo certo";
    //document.getElementById("duvidas").innerHTML = "tudo certo";

}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão","Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getSeconds);


/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}


/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1; OU count++
};
*

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*

//var frutas = [{nome: "maca", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
//console.log(frutas.nome);
//alert(frutas[1].cor);


/*
var fruta = {nome: "maca", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*

//var lista = ["maca", "pera", "laranja"];
//lista.push("uva";)
//lista.pop("pera");
//lista.length; //tamanho da lista
//lista.reverse; //itens ao contratio na lista
//console.log(lista[1]);
//console.log(lista.toString());
//console.log(lista.join(" - ");


/*
var nome = "Maria Giordani";
var n1 = 29;
var n2 = 10
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase);
console.log(frase.toLowerCase);
*/
