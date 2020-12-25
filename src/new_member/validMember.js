
const validMember = ({nation, forum, disUser, disNum}) =>
{
    if (nation && forum && disUser && disNum)
    {
        if (nation.slice(0, 37) !== "https://politicsandwar.com/nation/id=" || forum.slice(0, 25) !== "https://bkpw.net/profile/")
        {
            return "Invalid links!"
        }
        else
        {
            return "Member Added"
        }
        
    }
    else
    {
        return "Fields are empty!"
    }
}

export default validMember;