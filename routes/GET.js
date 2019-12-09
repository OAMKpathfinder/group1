module.exports = class GET{
    constructor(){
    }
    getAll(model, req, res){
        model.getAll((err, rows) => {
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                res.json(rows.rows);
            }
        });
    }
    getById(model, req, res){
        var letters = /[A-Za-z]/g;

        if(req.params.id && Number.isInteger(parseInt(req.params.id)) && !req.params.id.match(letters)){
            model.getById(req.params.id, (err,rows) => {
                if(err){
                    console.log("Error ",err);
                    res.json(err);
                }
                else{
                    res.json(rows.rows);
                }
            });
        }
        else{
            console.log("Invalid parameter requested!");
            res.send("Invalid parameter requested!");
        }
    }
    getIdByName(model, req, res){
        model.getIdByName(req.params.name,(err, rows) => {
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                res.json(rows.rows);
            }
        });
    }
    getPassByEmail(model, req, res){
        model.getPassByEmail(req.params.email,(err, rows) => {
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                res.json(rows.rows);
            }
        });
    }
};