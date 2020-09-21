const router = require('express').Router();
const Users = require("./classes-model");

router.get("/", async(req, res, next)=>{
    try{

        res.status(200).json(await Users.find())

    }catch(err){
        next(err)
    }
})

router.get("/:id", async(req, res, next)=>{
    try{
        const course = await Users.findById(req.params.id);
        res.json(course);
    }catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {        
        res.status(201).json(await Users.add(req.body));
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const course = await Users.update(req.params.id, req.body);
        res.json(course);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        await Users.remove(req.params.id);
        
        res.json(await Users.find());
    } catch (err) {
        next(err);
    }
});
module.exports = router;