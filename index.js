const express = require('express');
const app = express();
const router = express.Router();

// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'));
//     //__dirname : It will resolve to your project folder.
//   });
//   app.use('/', router);

const PORT = process.env.PORT || 8000;
app.listen(PORT);
console.log("App is running on the port:", PORT);