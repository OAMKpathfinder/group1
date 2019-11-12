module.exports = class DELETE{
    constructor(){
    }
    deleteBasic(model, req, res){
        var letters = /[A-Za-z]/g;

        if(req.params.id && Number.isInteger(parseInt(req.params.id)) && !req.params.id.match(letters)){
            let id = req.params.id;
            model.delete(req.params.id, (err,count) => {
                if(err){
                    console.log("Error ",err);
                    res.json(err);
                }
                else{
                    if(count.rowCount == 1){
                        let moreInfo = JSON.stringify(count);
                        res.send("Requested id " + id + ", deleted!" + "\n"+moreInfo);
                    }
                    else{                    
                        let moreInfo = JSON.stringify(count);
                        res.send("Requested id " + id + ", could not be deleted, might be non-exist or non-valid request!" + "\n" + moreInfo);
                    }
                }
            })
        }
        else{
            console.log("Invalid parameter requested!");
            res.send("Invalid parameter requested!");
        }
    }
};