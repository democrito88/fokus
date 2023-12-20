import "./MenuTarefas.css";
import ListaTarefas from '../ListaTarefas';
import { useState } from "react";

export default function MenuTarefas({tempo}){

    const [tarefas, setTarefas] = useState([
        {   
            id: 1,
            descricao: 'Tarefa concluída',
            concluida: true
        },
        {
            id: 2,
            descricao: 'Tarefa pendente',
            concluida: false
        },
        {
            id: 3,
            descricao: 'Tarefa concluída',
            concluida: true
        }
    ]);

    const addTarefa = () => {
        let novaTarefa = {
            id: (tarefas.length + 1),
            descricao: 'nova tarefa',
            concluida: false
        };
        setTarefas([...tarefas, novaTarefa]);
    }

    const removeTarefa = (id) => {
        setTarefas(tarefas => tarefas.filter(tarefa => tarefa.id !== id));
    }

    const limparTarefasConcluidas = () => {
        setTarefas(tarefas => tarefas.filter(tarefa => tarefa.concluida === false));
    }

    const limparTodasTarefas = () => {
        setTarefas([]);
    }

    return(
        <section className="app__section-task-container">
            <div className="app__section-task-content">
                <header className="app__section-active-task">
                    <p className="app__section-active-task-label">#Em andamento:</p>
                    <div className="app__section-active-task-description">
                        {(new Date(tempo*1000)
                        .toLocaleTimeString('pt-Br', 
                        {
                            minute: '2-digit', 
                            second: '2-digit', 
                            tempoZone: 'UTC'
                        }))}
                    </div>
                </header>
                <div className="app__section-task-header">
                    <h2 className="app__section-tasks-heading">Lista de tarefas:</h2>
                    <div className="dropdown-container">
                        <button className="app_button-more">
                            <img src="./imagens/more.svg" alt=""/>
                        </button>
                        <ul className="app__section-task-header__ul">
                            <li className="app__section-task-header__li">
                                <button className="app__section-task-header__li__button" id="btn-remover-concluidas" onClick={limparTarefasConcluidas}>
                                    <img src="./imagens/check.svg" alt=""/>
                                    Limpar tarefas concluídas
                                </button>
                            </li>
                            <li className="app__section-task-header__li">
                                <button className="app__section-task-header__li__button" id="btn-remover-todas" onClick={limparTodasTarefas}>
                                    <img src="./imagens/trash.svg" alt=""/>
                                    Limpar todas as tarefas
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <ListaTarefas tarefas={tarefas} setTarefas={setTarefas} removeTarefa={removeTarefa}/>
                <form className="app__form-add-task hidden" aria-hidden="true">
                    <div className="app__form-field">
                        <label className="app__form-label">
                            Adicionando tarefa
                        </label>
                        <textarea required rows="4" className="app__form-textarea" placeholder="No que você está trabalhando?"></textarea>
                    </div>
                    <footer className="app__form-footer">
                        <button type="button" className="app__form-footer__button app__form-footer__button--delete">
                            <img src="./imagens/delete.png" alt=""/> Deletar
                        </button>
                        <div className="splitter"></div>
                        <button type="button" className="app__form-footer__button app__form-footer__button--cancel">
                            <img src="./imagens/close.png" alt=""/> Cancelar
                        </button>
                        <button className="app__form-footer__button app__form-footer__button--confirm">
                            <img src="./imagens/save.png" alt=""/> Salvar
                        </button>
                    </footer>
                </form>
                <button className="app__button--add-task" onClick={addTarefa}>
                    <img src="./imagens/add_circle.png" alt=""/> Adicionar nova tarefa
                </button>
            </div>
        </section>
    );
}