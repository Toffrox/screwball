const Field = ({name, initial, set}) =>
{
    return (
        <div>
            <input 
                placeholder={name}
                type="text" 
                value={initial} 
                onInput={set}
            />
            <br></br>
        </div>
        
    )
}


export default Field;