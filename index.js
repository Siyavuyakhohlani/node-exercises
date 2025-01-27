//// TODO: Create the routes to the small express application. 
//1.Make sure to use the following dependencies within your app:  
//a. express  
//b. nodemon(as
import express from "express"

const app = express()
const PORT = process.env.PORT || 3001

// 2. Create GET routes for the ‘products’ path and the ‘users’ path, each path should respond 
// with JSON data that states, respectively: “This is the GET product path” and “this is the GET 
// user path”.

app.get('/products', (req,res)=> {
    res.json({
        message: 'This is the GET product path'
    })
})
app.get('/users', (req,res)=> {
    res.json({
        message: 'This is the GET users path'
    })
})

// 3. Based on your answer in Question 2, create routes for the rest of the http methods for 
// each type of path(namely users and products) and use descriptive messages for each 
// method. e.g. The route for POST with a path of “users” should respond with JSON data such 
// as “This is the post path and something was added” 

app.post('/products',(req,res)=> {
    res.json({
        message: 'This is the POST products path and something was added'
    })
})
app.post('/users',(req,res)=> {
    res.json({
        message: 'This is the POST users path and something was added'
    })
})
app.patch('/products',(req,res)=> {
    res.json({
        message: 'This is the PATCH products path and something was updated'
    })
})
app.patch('/products',(req,res)=> {
    res.json({
        message: 'This is the PATCH users path and something was updated'
    })
})
app.delete('/products',(req,res)=> {
    res.json({
        message: 'This is the DELETE products path and something was removed'
    })
})
app.delete('/products',(req,res)=> {
    res.json({
        message: 'This is the DELETE users path and something was removed'
    })
})

app.listen(PORT, ()=>{
    console.log('http://localhost:'+PORT);   
})