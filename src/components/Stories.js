import listaDeStories from "../listaDeStories";
import Story from "./Story";

export default function Stories(){
    return (
        <div className="stories">
        {listaDeStories.map(s => <Story key={s.nome} urlImagem={s.scrImagem} nome={s.nome}/>)}
          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    );
}