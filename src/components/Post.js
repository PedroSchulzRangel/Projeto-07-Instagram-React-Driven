export default function Post(props){
    
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
              <img src={props.objeto.srcImagemPrincipal} alt={props.objeto.altImagemPrincipal}/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.objeto.srcImagemCurtidas} alt={props.objeto.altImagemCurtidas}/>
                <div className="texto">
                  Curtido por <strong>{props.objeto.altImagemCurtidas}</strong> e <strong>{props.objeto.curtidas}</strong>
                </div>
              </div>
            </div>
          </div>
}