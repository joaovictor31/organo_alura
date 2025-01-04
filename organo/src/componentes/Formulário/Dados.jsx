import './Dados.css'
function Dados(props){
    return(
        <div className="form-grupo">
             <label>{props.label}</label>
            <input type="text" name="campo_nome" id="campo_nome" placeholder='Digite o seu nome'required />
        </div>
    )
}

export default Dados