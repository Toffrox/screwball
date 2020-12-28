import appendSpreadsheet from './memberSheet'

const validMember = ({nation, forum, disUser, disNum}) =>
{
    if (nation.slice(0, 37) !== "https://politicsandwar.com/nation/id=" || forum.slice(0, 25) !== "https://bkpw.net/profile/")
    {
        return "Invalid links!"
    }
    else
    {
        
        appendSpreadsheet({ 
            NationID: "new name", 
            NationName: "new value", 
            LeaderName: "new value", 
            NationLink: nation, 
            DiscordName: disUser, 
            DiscordID: disNum, 
            ForumName: "new value", 
            ForumLink: forum,
        });
        return "Member Added"
    }

}

export default validMember;