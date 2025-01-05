import './Dados.css'
function Dados(props){
    return(
        <div className="form-grupo">
             <label className='meu_label'>{props.label}</label>
            <input type="text" id="campo_placeholder" placeholder={props.placeholder}required />
        </div>
    )
}

export default Dados