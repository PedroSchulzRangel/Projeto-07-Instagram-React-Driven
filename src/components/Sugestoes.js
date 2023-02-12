import listaDeSugestoes from "../listaDeSugestoes";
import Sugestao from "./Sugestao";

export default function Sugestoes(){
    return (
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>
                {listaDeSugestoes.map(s => <Sugestao key={s.nome} urlImagem={s.src} altImagem={s.alt} nome={s.nome} razao={s.razao}/>)}
            </div>
    );
}