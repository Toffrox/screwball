import { useEffect, useState } from "react";
import appendSpreadsheet from './memberSheet'

const Message = ({nation, forum, disUser, disNum}) =>
{
    const [valid, setValid] = useState(true);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const nationID = nation.substring(37);
    const forumName = forum.substring(forum.indexOf("-") + 1, forum.length - 1).replaceAll("-", " ")
    
    useEffect(() => {
        if (nation.substring(0, 37) !== "https://politicsandwar.com/nation/id=" || forum.substring(0, 25) !== "https://bkpw.net/profile/")
        {
            setValid(false);
        }
        else
        {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";

            fetch(proxyurl + "https://politicsandwar.com/api/nation/id=" + nationID + "&key=e650ec9899341f")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.success) {
                        appendSpreadsheet({ 
                            NationID: nationID,
                            NationName: result.name, 
                            LeaderName: result.leadername, 
                            NationLink: nation, 
                            DiscordName: disUser, 
                            DiscordID: disNum, 
                            ForumName: forumName,
                            ForumLink: forum,
                        });
                    }
                    else {
                        setError({message: result.error});
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

        }      

    }, [])

    if (!valid) {
        return <div className="message">Invalid links!</div>
    }
    else if (error) {
        return <div className="message">Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div className="message">Loading...</div>;
    } 
    else {
        return (
            <div className="message">
                Member Added
            </div>
        );
    }
   
}

export default Message;