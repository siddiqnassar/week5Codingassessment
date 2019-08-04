let router=require('express').Router();
let MoviesController = require('./moviesController');

router.get('/',(req,res)=>{
    res.json({
        status:'API is working',
        message : 'Welcome to REST API'
    })
});

router.route('/movies/insert').post(MoviesController.create);
router.route('/movies').get(MoviesController.listAll);
router.route('/delete/:name').delete(MoviesController.delete);
router.route('/movies/:_id').get(MoviesController.findById);
router.route('/movies/update/:_id').put(MoviesController.update);
module.exports=router;