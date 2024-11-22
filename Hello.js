// console.log("Hello World from Hello.js!");
export default function HelloRoutes(app){app.get("/hello",(req,res) => {
    res.send("Hello World!Life is great!");
});
app.get("/",(reg,res) =>{
    res.send("Welcome to Web Development!");
})}