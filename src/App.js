import './App.css';
import {useEffect, useState} from "react";
import Footer from "./Components/Footer";
import ListaBotoes from './Components/ListaBotoes';
import MenuMusica from './Components/MenuMusica';
import MenuTarefas from './Components/MenuTarefas';
function App() {

    //const musica = new Audio('/sons/luna-rise-part-one.mp3');
    const audioPlay = new Audio('/sons/play.wav');
    const audioPausa = new Audio('/sons/pause.mp3');
    const audioTempoFinalizado = new Audio('/sons/beep.mp3');

    const [tempo, setTempo] = useState(15*60);
    const [ativo, setAtivo] = useState(false);
    const [estadoBotao, setEstadoBotao] = useState({
        texto: 'Começar',
        icone: './imagens/play_arrow.png'
    });

    const iniciarOuPausar = () => {
        setAtivo(prevAtivo => !prevAtivo);
        if(ativo){
            audioPlay.play();
            setEstadoBotao({
                texto: 'Começar',
                icone: './imagens/play_arrow.png'
            });
        }else{
            audioPausa.play();
            setEstadoBotao({
                texto: 'Pausar', 
                icone: './imagens/pause.png'
            });
        }
    }

    useEffect(() => {
        let intervaloId;
    
        if (ativo && tempo > 0) {
          intervaloId = setInterval(() => {
            setTempo(prevTempo => prevTempo - 1);
          }, 1000);
        }
    
        if (tempo === 0) {
            audioTempoFinalizado.play();
            clearInterval(intervaloId);
            setAtivo(false);
        }

        return () => clearInterval(intervaloId);
      }, [ativo, tempo, audioTempoFinalizado]);

    return (
    <main className="app">
        <header className="app__header">
            <figure className="app__logo-figure">
                <img className="app__logo-image" src="./imagens/logo.png" alt="" />
            </figure>
        </header>
        <section className="app__section-banner-container">
            <h1 className="app__title">
                Otimize sua produtividade,<br/>
                <strong className="app__title-strong">mergulhe no que importa.</strong>
            </h1>
            <figure className="app__image-figure">
                <img className="app__image" src="./imagens/foco.png" alt=""/>
            </figure>
        </section>
        <section className="app__section-card-container">
            <div className="app__card">
                <ListaBotoes setTempoRestante={setTempo}/>
                <div id="tempor" className="app__card-tempor"></div>
                <MenuMusica iniciarOuPausarBt={estadoBotao} iniciarOuPausar={iniciarOuPausar} />
            </div>
        </section>

        <MenuTarefas tempo={tempo}/>
        <Footer />
    </main>
  );
}

export default App;
