const Message = ({status, message}) =>
{
    if (status)
    {
        return (
            <div>
                {message}
            </div>
        )
    }
    return (
        <div>
             
        </div>
    )
}

export default Message;