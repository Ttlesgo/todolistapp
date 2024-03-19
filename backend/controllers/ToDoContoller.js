const ToDoModule = require('../modles/ToDoModule')

module.exports.getToDo = async(req,res)=>{
    const toDo = await ToDoModule.find()
    res.send(toDo)
}

module.exports.saveToDo = async(req,res)=>{

    const {text}= req.body

    ToDoModule
    .create({text})
    .then((data)=>{
        console.log("Added succesfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async(req,res)=>{
    const{_id,text}=req.body
    ToDoModule
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("updated successfully..."))
    .catch((err)=>console.log(err))
}
module.exports.deleteToDo = async(req,res)=>{
        const{_id}=req.body
        ToDoModule
        .findByIdAndDelete(_id)
        .then(()=>res.send("Deleted successfully..."))
        .catch((err)=>console.log(err))    
    
}