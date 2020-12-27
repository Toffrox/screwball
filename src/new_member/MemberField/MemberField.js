import './MemberField.css'

const Field = ({name, initial, set}) =>
{
    return (
        <div class="group">
            <input 
                //placeholder={name}
                type="text" 
                value={initial} 
                onInput={set}
                required
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>{name}</label>
            <br></br>
        </div>
        
    )
}


export default Field;