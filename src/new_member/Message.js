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
            &nbsp;
        </div>
    )
}

export default Message;