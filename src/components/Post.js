import React from "react";

function alterarNomeBookmark(nomeBookmark, setNomeBookmark){
  const bookmarkInicial = "bookmark-outline";
  const bookmarkPreenchido = "bookmark";
  if (nomeBookmark === bookmarkInicial){
    setNomeBookmark(bookmarkPreenchido);
  } else if(nomeBookmark === bookmarkPreenchido){
    setNomeBookmark(bookmarkInicial);
  }
}

function alterarStatusCurtida(nomeCoracao, setNomeCoracao, setNomeClasseCoracao){
  const nomeCoracaoInicial = "heart-outline";
  const nomeCoracaoPreenchido = "heart";
  if(nomeCoracao === nomeCoracaoInicial){
    setNomeCoracao(nomeCoracaoPreenchido);
    setNomeClasseCoracao("curtida");
  } else if(nomeCoracao === nomeCoracaoPreenchido){
    setNomeCoracao(nomeCoracaoInicial);
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
    <div data-test="post" className="post">
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
              <img data-test="post-image"
              onClick={() => CurtirAoClicarNaImagem(setNomeCoracao,setNomeClasseCoracao)}
              src={props.objeto.srcImagemPrincipal} alt={props.objeto.altImagemPrincipal}/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon data-test="like-post"
                  onClick={() => alterarStatusCurtida(nomeCoracao, setNomeCoracao, setNomeClasseCoracao)}
                  class={nomeClasseCoracao} name={nomeCoracao}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" onClick={() => alterarNomeBookmark(nomeBookmark,setNomeBookmark)} name={nomeBookmark}></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.objeto.srcImagemCurtidas} alt={props.objeto.altImagemCurtidas}/>
                <div className="texto">
                  Curtido por <strong>{props.objeto.altImagemCurtidas}
                  </strong> e <strong data-test="likes-number">outras {nomeCoracao === "heart" ?
                  (props.objeto.curtidas + 1).toLocaleString('de-DE') :
                  (props.objeto.curtidas).toLocaleString('de-DE')} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    );
}