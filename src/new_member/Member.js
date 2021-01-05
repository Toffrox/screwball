import { useState } from 'react';
import Field from './MemberField/MemberField';
import Message from './submit_member/Message';
import './Member.css';

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

        setStatus(true)
        setTimeout(() => setStatus(false), 5000)
    }


    return (
        <div className="member">
            <h2>New Member</h2>
            <form onSubmit={handleSubmit}>
                <Field name="Nation Link" initial={nation} set={e => setNation(e.target.value)}/>
                <Field name="Forum Link" initial={forum} set={e => setForum(e.target.value)}/>
                <Field name="Discord Username" initial={disUser} set={e => setUser(e.target.value)}/>
                <Field name="Discord #" initial={disNum} set={e => setNum(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            { status ? <Message nation={nation} forum={forum} disUser={disUser} disNum={disNum}/> : <div className="message">&nbsp;</div> }
        </div>
    )
}

export default AddMember;
