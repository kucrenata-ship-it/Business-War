function entrar(){

let nome=document.getElementById("nome").value.trim();

let tipo=document.getElementById("tipo").value;

if(nome=="" || tipo==""){

alert("Preencha todos os campos.");

return;

}

localStorage.setItem("usuario",nome);

localStorage.setItem("tipo",tipo);

if(tipo=="professor"){

window.location.href="pages/professor.html";

}

else{

window.location.href="pages/empresa.html";

}

}