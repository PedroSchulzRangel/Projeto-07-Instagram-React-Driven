
export default function Usuario(props){
    return (
        <div className="usuario">
        <img src={props.imagem} alt="imagem de perfil"/>
        <div className="texto">
          <span>
            <strong>{props.texto}</strong>
            <ion-icon name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    );
}