import React, { useState } from 'react';
import MessagesDisplay from './Components/MessagesDisplay';
import CodeDisplay from './Components/CodeDisplay';


interface chatData{
  role:string,
  content:string
}
const App=()=> {
  const [input,SetInput]=useState<string>("");
  const [chat,SetChat]=useState<chatData[]>([]);
  const getQuery=async()=>{
    const options={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          query:input
        })
    }
    await fetch("http://localhost:8000/query",options)
    .then(async(resp)=>{
      const data=await resp.json();
      
      console.log(data);
      const userMessage={
        role:"user",
        content:input
      }
      SetChat(oldChat=>[...oldChat,data,userMessage]);
    })
    
  }
  const usermsg=chat.filter(message=>message.role==="user");
  const latestCode=chat.filter(message=>message.role==="assistant").pop();
  return (
    <div className="app">
   <MessagesDisplay usermsg={usermsg}/>
   <input value={input} onChange={(e)=>{SetInput(e.target.value)}}/>
   <CodeDisplay text={latestCode?.content || ""}/>
   <div className='button-container'>
    <button id='get-query' onClick={getQuery}>Get Query!</button>
    <button id='clear-chat'>Clear Chat</button>
   </div>
    </div>
  );
}

export default App;
