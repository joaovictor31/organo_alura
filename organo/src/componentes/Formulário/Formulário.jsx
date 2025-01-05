import './Formulário.css'
import Dados from './Dados';

function Formulario(){
    return(
        <div className="card_colaborador">
    <h2 className="titulo">Preencha os dados para criar o card do colaborador</h2>
    <div className="form-container">
     <Dados label = 'Nome' placeholder = 'Digite seu nome'/>
     <Dados label = 'Cargo' placeholder = 'Digite seu cargo'/>
     <Dados label = 'Imagem' placeholder = 'Informe o endereço da imagem'/>
    
    </div>
</div>
    )
}

export default Formulario;


