const express=require('express');
const cors=require("cors");
const app=express();
const { Configuration, OpenAIApi } = require("openai");
app.use(cors());
app.use(express.json());
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.get("/",async(req,res)=>{
    const chatCompletion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Give a SQL query to create a table, note only give the query don't give anyother ouput"}],
}).then((out)=>{
    console.log(out.data.choices[0].message);
    res.send(out.data.choices[0].message);
})
})
app.post("/query",async(req,res)=>{
    try{
     const chatCompletion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: `Give a SQL query to ${req.body.query}, strictly only give the query don't give anyother ouput`}],
}).then((out)=>{
    console.log(out.data.choices[0].message);
    res.send(out.data.choices[0].message);
})
    }
    catch(err){
        res.send(err);
    }

})
app.listen(8000,()=>{
    console.log("Server running on port 8000");
})