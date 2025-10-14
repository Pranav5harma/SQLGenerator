interface UserMessage{
    role:String,
    content:String
}

interface messageDisplayProps{
    message:UserMessage
}

const MessageDisplay = ({message}: messageDisplayProps) => {
    return (
        <div className="message-display">
            <p id="icon">⊚</p>
            {/*<p>{message.role}</p>*/}
            <p>{message.content}</p>
        </div>
    )
  }
  export default MessageDisplay