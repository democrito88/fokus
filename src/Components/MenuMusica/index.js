import "./MenuMusica.css";

export default function MenuMusica({ iniciarOuPausarBt, iniciarOuPausar }){

    return(
        <>
            <ul className="app__card-list">
                <li className="app__card-list-item">
                    <label className="toggle">
                        <input className="toggle-checkbox" type="checkbox" id="alternar-musica"/>
                        <div className="toggle-switch"></div>
                    </label>
                </li>
                <li className="app__card-list-item">
                    <label className="app__card-list-label" htmlFor="alternar-musica">
                        Música
                    </label>
                </li>
            </ul>
            <div className="app__card-primary-button-wrapper">
                <button id="start-pause" className="app__card-primary-button" onClick={iniciarOuPausar}>
                    <img className="app__card-primary-butto-icon" src={iniciarOuPausarBt.icone} alt=""/>
                    <span>{iniciarOuPausarBt.texto}</span>
                </button>
            </div>
        </>
    );
}