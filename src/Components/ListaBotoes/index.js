export default function ListaBotoes({setTempoRestante}){
    const ativa = (e) =>{
        document.querySelectorAll("button")
        .forEach((botao) => botao.classList.remove('active'));

        e.target.classList.add('active');
        let tempoRestante = e.target.classList.contains('app__card-button--foco') ? 900 :
        (e.target.classList.contains('app__card-button--curto') ? 300 : 
        (600)
        )
        
        setTempoRestante(tempoRestante);
    }

    return(
        <ul className="app__card-list">
            <li className="app__card-list-item">
                <button data-contexto="foco" className="app__card-button app__card-button--foco active" onClick={ativa}>Foco</button>
            </li>
            <li className="app__card-list-item">
                <button data-contexto="short" className="app__card-button app__card-button--curto" onClick={ativa}>Descanso curto</button>
            </li>
            <li className="app__card-list-item">
                <button data-contexto="long" className="app__card-button app__card-button--longo" onClick={ativa}>Descanso longo</button>
            </li>
        </ul>
    )
}