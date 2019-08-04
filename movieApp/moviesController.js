
let Movie=require('./movieModel');

exports.create = function(req,res){
    console.log('Came inside savemethod of employee')
    let movie=new Movie();
    movie.name=req.body.name;
    movie.duration= req.body.duration;
    movie._id=req.body._id;
    console.log(movie.name);
    movie.save(function(){
        res.json({
            status : 'saved',
            message : 'saved succesfully',
            data:movie
        })
    });
   
}

exports.delete=function(req,res){
    Movie.remove({
        name: req.params.name
        
    },function(err){
        if(err)
        res.send(err);
        res.json({
            status : 'Deleted',
            message : 'Deleted successfully'
        });
    });
}
exports.listAll = function(req,res){
    
    Movie.find(function (err, movies) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "movies retrieved successfully",
            data: movies
        });
    });
};

exports.findById = function(req,res){
    Movie.findById(req.params._id, function (err,emp) {
        if (err)
            res.send(err);
        res.json({
            message: ' details loading..',
            data: emp
        });
    });
};
exports.update=function(req,res){
    Movie.findById(req.params._id, function (err, emp) {
        if (err)
            res.send(err);
emp.name = req.body.name;
emp.duration=req.body.duration;      
// save the contact and check for errors
        emp.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Employee Info updated',
                data: emp
            });
        });
    });
}