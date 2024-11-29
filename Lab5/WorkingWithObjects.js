const assignment = {
    id:1, title:"NodeJS Assignment",
    description:"Create a NodeJs server with ExpressJS",
    due:"2021-10-10",completed:false,score:0,
};
const module = {
    id: "1",
  name: "Introduction to Node.js",
  description: "Learn the basics of Node.js",
  course: "Full Stack Development",
};
export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment",(req,res) =>{
        res.json(assignment);
    });
    app.get("/lab5/assignment/title",(req,res)=>{
        res.json(assignment.title);
    })
    app.get("/lab5/assignment/title/:newTitle",(req,res)=>{
        const {newTitle} = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    // 返回整个 module 对象
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  // 返回 module 的 name 属性
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });

  // 更新 module 的 name 属性
  app.post("/lab5/module/name:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });

  // 更新 module 的 description 属性
  app.post("/lab5/module/description", (req, res) => {
    const { description } = req.body;
    module.description = description;
    res.json(module);
  });
};

