import "./Tarefa.css";
import { BsXCircleFill } from "react-icons/bs";

export default function Tarefa({tarefa, removeTarefa, handleMudancaTitulo, handleCheckboxClicado}){
    const mudaParaInput = () => {
        let paragrafo = document.querySelector(".app__section-task-list-item-description");
        let titulo = paragrafo.innerHTML;
        let input = document.createElement("input");
        input.classList.add("app__section-task-list-item-description");
        input.value = titulo;
        input.addEventListener("blur", mudancaTitulo);
        document.querySelector(".app__section-task-list-item").replaceChild(input, paragrafo);
    };

    const mudancaTitulo = () => {
        let input = document.querySelector(".app__section-task-list-item-description");
        console.log(input);
        handleMudancaTitulo(tarefa.id, input.value);
        let paragrafo = document.createElement("p");
        paragrafo.classList.add("app__section-task-list-item-description");
        paragrafo.innerHTML = input.value;
        document.querySelector(".app__section-task-list-item").replaceChild(paragrafo, input);
    };

    const selecionaTarefa = (id) => {
        tarefas.filter(tarefa => tarefa.selecionada )
    }

    return(
        <li className={tarefa.selecionada ? "app__section-task-list-item app__section-task-list-item-active" : "app__section-task-list-item"} key={tarefa.id}>
            <input className={tarefa.selecionada ? "toggle-switch" : ""}
            type="checkbox" onChange={() => handleCheckboxClicado(tarefa.id)} 
            checked={tarefa.selecionada ? 'checked' : false } /> 
            <p className="app__section-task-list-item-description"
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