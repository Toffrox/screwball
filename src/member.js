import { useState } from 'react';
import Field from './memberField';

const Message = ({status}) =>
{
    if (status)
    {
        return (
            <div>
                Member Added
            </div>
        )
    }
    return (
        <div>
            
        </div>
    )
}

const AddMember = () =>
{

    const [nation, setNation] = useState("")
    const [forum, setForum] = useState("") 
    const [disUser, setUser] = useState("") 
    const [disNum, setNum] = useState("") 

    const [status, setStatus] = useState(false)

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        console.log(nation)
        console.log(forum)
        console.log(disUser)
        console.log(disNum)
        setStatus(true)

        setTimeout(() => setStatus(false), 2000)
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
            <Message status={status}/>
        </div>
    )
}

export default AddMember;
