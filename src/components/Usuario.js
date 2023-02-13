import React from "react";

function alterarNomeDeUsuario(setNomeDeUsuario){
  const novoNome = prompt("Qual o seu nome?");
  if(novoNome){
    setNomeDeUsuario(novoNome);
  }
}

function alterarImagemDeUsuario(setUrlImagemDeUsuario){
  const novaImagem = prompt("Digite o link da nova imagem de perfil");
  if(novaImagem){
    setUrlImagemDeUsuario(novaImagem);
  }
}

export default function Usuario(){

  const [nomeDeUsuario, setNomeDeUsuario] = React.useState("catanacomics");
  const [urlImagemDeUsuario, setUrlImagemDeUsuario] = React.useState("assets/img/catanacomics.svg");

    return (
        <div className="usuario">
        <img data-test="profile-image" onClick={() => alterarImagemDeUsuario(setUrlImagemDeUsuario)} src={urlImagemDeUsuario} alt="imagem de perfil"/>
        <div className="texto">
          <span>
            <strong data-test="name">{nomeDeUsuario}</strong>
            <ion-icon data-test="edit-name" onClick={() => alterarNomeDeUsuario(setNomeDeUsuario)} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    );
}