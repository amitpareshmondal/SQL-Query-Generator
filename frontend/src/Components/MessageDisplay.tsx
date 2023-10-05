interface MessageDisplayProps{
    message:{
        role:string,
        content:string
    }
}
const MessageDisplay=({message}:MessageDisplayProps)=>{
    return(
        <div className="message-display">
            <p id="icon">⸰</p>
            {/* <p style={{marginRight:'2px'}}>{message.role}</p> */}
            <p>{message.content}</p>
        </div>
    )
}
export default MessageDisplay;