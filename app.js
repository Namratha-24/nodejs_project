// const proj = require('./proj');
// console.log(proj.sum(1,1));
// console.log(proj.PI);
// console.log(new proj.SomeMathObject());
// -----------------------------------------------
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('proj',(num1,num2)=>{
    console.log(num1 + num2)
    console.log('proj event has occured');
});

eventEmitter.emit('proj',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;

    }

    get name(){
        return this._name;
    }
}

let namratha= new Person('namratha');
let hitha = new Person('hitha');
hitha.on('name',()=>{
    console.log('my name is' +hitha.name);
});
namratha.on('name',()=>{
    console.log('my name is' +namratha.name);
});

namratha.emit('name');
hitha.emit('name');
// --------------------------------------------------

// const readline = require('readline');
// readline.createInterface({input : process.stdin,
//                         output : process.stdout});
// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;

// r1.question(`what is ${ num1 } + ${ num2 }? \n`,
// (userInput)=>{
//     if(userInput.trim() == answer){
//         r1.close();
//     }
// });

// r1.on('close',()=>{
//     console.log('correct!!');
// })

//const fs = require('fs');
// create a file
// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('file created');
//     fs.readFile('example.txt',(err,file)=>{
//         if(err)
//         console.log(file);
//     });

// });

// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('renamed the file');
// })

// fs.appendFile('example2','data being appended', (err)=>{
//         if(err)
//     console.log(err);
//     else
//     console.log('appended the file');
// })

// fs.unlink('example2.txt',(err)=>{
//     if(err)
// console.log(err);
// else
// console.log('deleted the file');
// })

// -------------------------------------------------

// const fs = require('fs');
// fs.mkdir('proj1',(err)=>{
//     if(err)
//     console.log(err);
//     else{
//         //console.log('folder successfully created');
//         fs.rmdir('proj1',(err)=>{
//             if(err)
//             console.log('err');
//             else
//             console.log('successfully deleted the folder');
//         })
//     }

// })


// ctrating folder and files
// const fs = require('fs');
// fs.mkdir('proj',(err)=>{
//     if(err)
//     console.log(err);
//     else{
//         fs.writeFile('./proj/exaple.txt','123',(err)=>{
//             if(err)
//             console.log('err')
//             else
//             {
//                 console.log('created the file')
//             }
//         })

//deleting folder which has contenet
// const fs = require('fs')
// fs.unlink('./proj/exaple.txt',(err)=>{
//     if(err)
//     console.log(err)
//     else{
//         fs.rmdir('proj',(err)=>{
//             if(err)
//             console.log(err)
//             else{
//                 console.log('deleted folder')
//             }
//         })
//     }
// })
// ------------------------------------------

//deleting multiple files
// const fs = require('fs')
// fs.readdir('proj1',(err,files)=>{
//     if(err)
//     console.log(err)
//     else
//     for(let file of files){
//         fs.unlink('./proj1/' + file,(err)=>{
//             if(err)
//             console.log(err);
//             else{
//                 console.log('successfully deleted the files');
//             }
//         })
//     }
// })
// ------------------------------------------------------------------

// readable n writable stream
// const fs = require('fs')
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('example2.txt')
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// });
// --------------------------------------------------------
//stream-used to access the large file 

//pipe-used to copy from one file to another
// const fs = require('fs')
// const readStream = fs.createReadStream('./example.txt','utf8')
// const writeStream = fs.createWriteStream('./example3.txt')
// readStream.pipe(writeStream);
// ----------------------------------------------------------

//zlib-used as transform stream

// const fs = require('fs')
// const zlib = require('zlib')
// const gunzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example3.txt.gz')
// const writeStream = fs.createWriteStream('uncompressed.txt')
// readStream.pipe(gunzip).pipe(writeStream);
// -------------------------------------------------------------

//creating a server
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//     res.write('hello world everyone');
//     res.end();
//     }
//     else{
//         res.write('use other domain');
//         res.end();
//     }
// });
// server.listen('3000');
// ---------------------------------------

// const http = require ('http')
// const fs = require('fs')
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/index.html')
//     res.writeHead(200,{'content-type': 'text/html'});
//     readStream.pipe(res);  
// }).listen(3000)

// const http = require ('http')
// const fs = require('fs')
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/example.json')
//     res.writeHead(200,{'content-type': 'application/json'});
//     readStream.pipe(res);
    
// }).listen(3000)

// const _ = require('lodash')
// let example = _.fill([1,2,3,4,5],"banana",1,8)
// console.log(example);
// -------------------------------------------

// express http get request
//const express = require('express');
// const app = express();
// app.get('/',(req,res)=>{
//     res.send('hello world');
// })
// app.get('/example',(req,res)=>{
//     res.send('hitting example route');
// });
// app.get('/example/:name/:age',(req,res)=>{
//     console.log(req.params)
//     console.log(req.query)
//     res.send(req.params.name+" : "+req.params.age)
// });
// app.listen(3000)
// ----------------------------------------------------

// const express = require('express');
// const path = require('path')
// const app = express();
// app.use('/public',express.static(path.join(__dirname,'static')))
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'static','index.html'));
// })
// app.listen(3000)
// ------------------------------------------------------------
//post request and bodyparser
// const express = require('express');
// const path = require('path');
// const Joi = require('joi');
// const bodyParser = require('body-parser');
// const app = express();

// app.use('/public',express.static(path.join(__dirname,'static')));
// app.use(bodyParser.urlencoded({extended: false}));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'static','index.html'));
// });

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     const schema = Joi.object().keys({
//         email : Joi.string().trim().email().required(),
//         password: Joi.string().min(5).max(10).required()
//     });
//         Joi.validate(req.body,schema,(err,result)=>{
//         if(err){
//             console.log(err);
//             res.send('an error has occurred');
//         }
//         else{
//             console.log(result);
//             res.send('successfully posted data');
//         }
        
//     })
    
// });


// app.listen(3000);
// ---------------------------------------------------------------
// joi-1 ======================================================================
// const express = require('express');
// const path = require('path');
// const Joi = require('@hapi/joi');
// const bodyParser = require('body-parser');
// const app = express();

// app.use('/public',express.static(path.join(__dirname,'static')));
// app.use(bodyParser.urlencoded({extended: false}));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'static','index.html'));
// });

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     const schema = Joi.object().keys({
//         email : Joi.string().trim().email().required(),
//         password: Joi.string().min(5).max(10).required()
//     });
    
//     Joi.validate(req.body,schema,(err,result)=>{
//         if(err){
//             console.log(err);
//             res.send('an error has occurred');
//         }
//         else{
//             console.log(result);
//             res.send('successfully posted data');
//         }
        
//     })
    
// });
// app.listen(3000);
// ------------------------------------------------------------

// const Joi = require('joi');

// const arrayString = ['banana','bacon','cheese'];
// const arrayObjects = [{example: 'example1'},{example: 'example2'},{example: 'example2'}];

// const userInput = { personalInfo: {
//                         streetAddress: '123987987',
//                         city : 'kljlkajd',
//                         state: 'fl'
//                     },
//                     preferences : arrayObjects};

// const personalInfoSchema = Joi.object().keys({
//     streetAddress : Joi.string().trim().required(),
//     city : Joi.string().trim().required(),
//     state: Joi.string().trim().length(2).required()
// });

// const preferencesSchema = Joi.array().items(Joi.object().keys({
//     example: Joi.string().required()
// }));

// const schema = Joi.object().keys({
//     personalInfo: personalInfoSchema,
//     preferences : preferencesSchema
// });

// Joi.validate(userInput,schema,(err,result)=>{
//     if(err)
//         console.log(err)
//     else   
//         console.log(result);
// });
// ---------------------------------------------------

// ejs-=========================================================
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use('/public',express.static(path.join(__dirname,'static')));
// app.set('view engine','ejs');
// app.get('/:userQuery',(req,res)=>{
//     res.render('index',{data : {userQuery: req.params.userQuery,
//                                searchResults : ['book1','book2','book3'],
//                                loggedIn : true,
//                                username : 'Namratha'}});
// });



// app.listen(3000);
// --------------------------------------------------------
//working-middleWARE======================================================
// const express = require('express');
// const bodyparser = require('body-parser');
// const app = express();

// app.use(bodyparser.json());
// // middleware that will run on all request
// // adds property banana to request object
// // This property will be avaible at app.get('/')
// app.use((req,res,next)=>{
//     req.banana = 'banana';
//     next();
// });
// // middleware that will be executed when
// // any type of request is made to /example
// app.use('/example',(req,res,next)=>{
//     console.log('Example middleware being executed');
//     next();
// });
// // prints out banana property that was added
// // in our middleware.
// app.get('/',(req,res)=>{
//     console.log(req.banana);
//     res.send('MiddleWare');
// });

// app.listen(3000);
// --------------------------------------------------------
//router-working=======================================
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use('/public',express.static(path.join(__dirname,'static')));
// app.set('view engine','ejs');

// const people = require('./routes/people');

// app.use('/people',people);

// app.listen(3000);