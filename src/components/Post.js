import React from "react";

function alterarNomeBookmark(nomeBookmark, setNomeBookmark){
  if (nomeBookmark === "bookmark-outline"){
    setNomeBookmark("bookmark");
  }
  else if(nomeBookmark === "bookmark"){
    setNomeBookmark("bookmark-outline");
  }
}

function alterarStatusCurtida(nomeCoracao, setNomeCoracao, setNomeClasseCoracao){
  if(nomeCoracao === "heart-outline"){
    setNomeCoracao("heart");
    setNomeClasseCoracao("curtida");
  }
  else if(nomeCoracao === "heart"){
    setNomeCoracao("heart-outline");
    setNomeClasseCoracao("sem-curtida");
  }
}

function CurtirAoClicarNaImagem(setNomeCoracao,setNomeClasseCoracao){
  setNomeCoracao("heart");
  setNomeClasseCoracao("curtida");
}

export default function Post(props){
    
  const [nomeBookmark,setNomeBookmark] = React.useState("bookmark-outline");
  const [nomeCoracao, setNomeCoracao] = React.useState("heart-outline");
  const [nomeClasseCoracao, setNomeClasseCoracao] = React.useState("sem-curtida");

  return(
    <div className="post">
            <div className="topo">
              <div className="usuario">
                <img src={props.objeto.srcImagemSecundaria} alt={props.objeto.nome}/>
                {props.objeto.nome}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img onClick={() => CurtirAoClicarNaImagem(setNomeCoracao,setNomeClasseCoracao)} src={props.objeto.srcImagemPrincipal} alt={props.objeto.altImagemPrincipal}/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon onClick={() => alterarStatusCurtida(nomeCoracao, setNomeCoracao, setNomeClasseCoracao)} class={nomeClasseCoracao} name={nomeCoracao}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon onClick={() => alterarNomeBookmark(nomeBookmark,setNomeBookmark)} name={nomeBookmark}></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.objeto.srcImagemCurtidas} alt={props.objeto.altImagemCurtidas}/>
                <div className="texto">
                  Curtido por <strong>{props.objeto.altImagemCurtidas}</strong> e <strong>outras {nomeCoracao === "heart" ? (props.objeto.curtidas + 1).toLocaleString('de-DE') : (props.objeto.curtidas).toLocaleString('de-DE')} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    );
}