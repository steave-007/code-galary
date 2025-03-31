const pracModel = require("../models/Prac1Model")


const add = async (req,res)=>{
    const saved = await pracModel.create(req.body)
    res.json({
        message:"yess complete bro",
        data: saved
    });
}
module.exports={add

}

