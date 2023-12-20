import "./Tarefa.css";
import { BsXCircleFill } from "react-icons/bs";

export default function Tarefa({tarefa, removeTarefa, handleMudancaTitulo}){
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

    return(
        <li className="app__section-task-list-item" key={tarefa.id}>
            <input type="checkbox" onChange={() => tarefa.concluida = !tarefa.concluida} 
            checked={tarefa.concluida ? 'checked' : false } /> 
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