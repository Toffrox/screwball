import './MemberField.css'

const Field = ({name, initial, set}) =>
{
    return (
        <div className="field">
            <input 
                //placeholder={name}
                type="text" 
                value={initial} 
                onInput={set}
                required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{name}</label>
            <br></br>
        </div>
        
    )
}


export default Field;