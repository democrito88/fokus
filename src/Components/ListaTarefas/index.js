import Tarefa from "../Tarefa";

export default function ListaTarefas({tarefas, setTarefas, removeTarefa}){

    const handleMudancaTitulo = (id, novoTitulo) => {
        setTarefas(tarefas.map(tarefa => {
            if(tarefa.id === id){
                tarefa.descricao = novoTitulo;    
            }
            return tarefa;
        }));
    }

    return (
        <ul className="app__section-task-list">
            {tarefas.map(tarefa => <Tarefa 
                tarefa={tarefa} 
                removeTarefa={removeTarefa} 
                setTarefas={setTarefas}
                handleMudancaTitulo={handleMudancaTitulo} />)}
        </ul>
    );
}