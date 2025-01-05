import './Formulário.css'
import ListaSuspensa from '../Lista Suspensa/ListaSuspensa';

import Dados from './Dados';

function Formulario(){
    const times = ['Programação', 'Front-End','Data Science', 'Devops','UX e Design','Mobile', 'Inovação e Gestão'];

    return(
        <div className="card_colaborador">
    <h2 className="titulo">Preencha os dados para criar o card do colaborador</h2>
    <div className="form-container">
     <Dados label = 'Nome' placeholder = 'Digite seu nome'/>
     <Dados label = 'Cargo' placeholder = 'Digite seu cargo'/>
     <Dados label = 'Imagem' placeholder = 'Informe o endereço da imagem'/>
     <ListaSuspensa label = 'Time 'itens = {times}/>

    </div>
</div>
    )
}

export default Formulario;


