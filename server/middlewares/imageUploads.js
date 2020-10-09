const multer=require('multer')

const storage = multer.diskStorage({
    
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
    filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req,file,cb) => {
      if(file.mimetype === '.jpg' || file.mimetype === '.png'){
          cb(null,true)        
      }else {
          cb(new Error('Only .jpg or .png files are accepted'), false)
      }
  }


  const upload=multer({
    storage, 
    fileFilter
  })

  module.exports=upload




