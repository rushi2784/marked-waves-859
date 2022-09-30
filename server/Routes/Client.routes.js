const ClientRouter = require("express").Router()

const clientModel = require("../Model/NewClient.model")

// const ClientRouter = Router()


ClientRouter.get("/" ,async(req,res)=>{
    const notes = await clientModel.find()
    res.send(notes)
})


ClientRouter.post("/new" ,async(req,res)=>{
    const {client,address,amount ,currency}=req.body
    const note = new clientModel({client , address , amount ,currency})
    try{
        await note.save()
        res.send({"msg":"CREATED"})
    }
    catch(err)
    {
        res.send({"msg":"Not CREATED"})
    }
})


ClientRouter.delete("/:_id" ,async(req,res)=>{
    console.log(req.params)
    await clientModel.findOneAndDelete(req.params)
    res.status(200).json({"msg":"DELETE"})
})



module.exports={
    ClientRouter
}