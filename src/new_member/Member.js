import { useState } from 'react';
import Field from './MemberField';
import Message from './Message';
import validMember from './validMember';

const AddMember = () =>
{

    const [nation, setNation] = useState("")
    const [forum, setForum] = useState("") 
    const [disUser, setUser] = useState("") 
    const [disNum, setNum] = useState("") 

    const [status, setStatus] = useState(false)
    const [statusMessage, setStatusMessage] = useState("")



    const handleSubmit = (event) =>
    {
        event.preventDefault()
        
        setStatusMessage(validMember({nation: nation, forum: forum, disUser: disUser, disNum: disNum}))

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
            <Message status={status} message={statusMessage}/>
        </div>
    )
}

export default AddMember;
