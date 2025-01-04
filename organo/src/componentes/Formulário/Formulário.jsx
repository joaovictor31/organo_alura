import './Formulário.css'
import Dados from './Dados';

function Formulario(){
    return(
        <div className="card_colaborador">
    <h1 className="titulo">Preencha os dados para criar o crad do colaborador</h1>
    <div className="form-container">
     <Dados label = 'Nome'/>
     //
    </div>
</div>
    )
}

export default Formulario;


