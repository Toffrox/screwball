import { useState } from 'react';
import Field from './memberField';

const AddMember = () =>
{

    const [nation, setNation] = useState("")
    const [forum, setForum] = useState("") 
    const [disUser, setUser] = useState("") 
    const [disNum, setNum] = useState("") 

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        console.log(nation)
        console.log(forum)
        console.log(disUser)
        console.log(disNum)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field name="Nation Link" initial={nation} set={e => setNation(e.target.value)}/>
                <Field name="Forum Link" initial={forum} set={e => setForum(e.target.value)}/>
                <Field name="Discord Username" initial={disUser} set={e => setUser(e.target.value)}/>
                <Field name="Discord #" initial={disNum} set={e => setNum(e.target.value)}/>
                <button type="submit">Add</button>
            </form>   
        </div>
    )
}

export default AddMember;
