import express from "express"

const app = express();
const PORT = process.env.PORT || 3002

app.get('/employees', (req,res)=>{
    res.json({
        message:'This is the GET employees path'
    })
})
app.get('/managers', (req,res)=>{
    res.json({
        message:'This is the GET managers path'
    })
})


app.post('/employees', (req,res)=>{
    res.json({
        message:'This is the POST employees path and something was added'
    })
})
app.post('/managers', (req,res)=>{
    res.json({
        message:'This is the POST managers path and something was added'
    })
})


app.patch('/employees', (req,res)=>{
    res.json({
        message:'This is the PATCH employees path and something was edited'
    })
})
app.patch('/managers', (req,res)=>{
    res.json({
        message:'This is the PATCH managers path and something was edited'
    })
})


app.delete('/employees', (req,res)=>{
    res.json({
        message:'This is the DELETE employees path and something was removed'
    })
})
app.delete('/managers', (req,res)=>{
    res.json({
        message:'This is the DELETE managers path and something was removed'
    })
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT)
})