import "./Tarefa.css";
import { BsXCircleFill } from "react-icons/bs";

export default function Tarefa({tarefa, removeTarefa, handleMudancaTitulo, handleCheckboxClicado, selecionaTarefa}){
    const mudaParaInput = () => {
        let paragrafo = document.getElementById(tarefa.id);
        let titulo = paragrafo.innerHTML;
        let input = document.createElement("input");
        input.classList.add("app__section-task-list-item-description");
        input.value = titulo;
        input.addEventListener("blur", mudancaTitulo);
        input.id = tarefa.id;
        paragrafo.parentNode.replaceChild(input, paragrafo);
    };

    const mudancaTitulo = () => {
        let input = document.getElementById(tarefa.id);
        handleMudancaTitulo(tarefa.id, input.value);
        let paragrafo = document.createElement("p");
        paragrafo.classList.add("app__section-task-list-item-description");
        paragrafo.innerHTML = input.value;
        paragrafo.id = input.id;
        paragrafo.addEventListener("click", mudaParaInput);
        input.parentNode.replaceChild(paragrafo, input);
    };

    return(
        <li className={tarefa.selecionada ? "app__section-task-list-item app__section-task-list-item-active app__section-task-list-item-complete " 
        : "app__section-task-list-item"} 
        key={tarefa.id}>
            <input className={tarefa.selecionada ? "toggle-switch" : ""}
            type="checkbox" onChange={() => {
                handleCheckboxClicado(tarefa.id)
                selecionaTarefa(tarefa.id)
            }} 
            checked={tarefa.selecionada ? 'checked' : false } /> 
            <p id={tarefa.id} className="app__section-task-list-item-description"
                onClick={mudaParaInput}
            >
                {tarefa.descricao}
            </p>
            <button onClick={() => removeTarefa(tarefa.id)}>
            <BsXCircleFill />
            </button>
        </li>
    );
}