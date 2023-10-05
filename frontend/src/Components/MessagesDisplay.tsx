import MessageDisplay from "./MessageDisplay";
interface usermsg{
    role:string,
    content:string
}
interface MessagesDisplayProps{
usermsg:usermsg[]
}
const MessagesDisplay=({usermsg} : MessagesDisplayProps)=>{
    return(
        <div className="messages-display">
       ={
        usermsg.map(userMessage=><MessageDisplay message={userMessage}/>)
       }

        </div>
    )
}
export default MessagesDisplay;