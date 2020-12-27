import './Message.css';

const Message = ({status, message}) =>
{
    if (status)
    {
        return (
            <div class="message">
                {message}
            </div>
        )
    }
    return (
        <div class="message">
            &nbsp;
        </div>
    )
}

export default Message;