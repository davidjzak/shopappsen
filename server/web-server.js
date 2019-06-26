//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const service = require('./DefaultService.js');
const test = require('./test')
const sendb = require('./sendb')
//const morgan = require('morgan');
/* this module is used to run the web server locally using localhost alongside the front-end
  TODO: remove in prod
*/
const cors = require('cors'); // TODO: remove in prod

const port = process.env.PORT || 3000;
let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    let reloadpath = __dirname + '/noindex.js';
    //app.use(morgan('combined'));

    app.use(
      bodyParser.json({
        extended: true,
        limit: '256000kb'
      })
    );
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: '256000kb'
      })
    );

    /* this module is used to run the web server locally using localhost alongside the front-end
  TODO: remove in prod
*/
    app.use(cors()); //TODO: remove in prod

    app.get('/', (req, res) => {
      //var urlparts = req.url.split("/");
      //var ProgCode = urlparts[2].split(".")[0];
      res.end('IWA Service APIs ');
    });

    app.get('/test', (req, res) => {
      const selectQuery = `
      select * from fireCourses.db.courseTable      `;
       sendb.selectDataWithParams(selectQuery, []).then(data => {res.send(data);
       let x = data; console.log(x[1].courseName);}
       )
    })


   

    app.post('/sendd', (req, res) => {
      console.log('here', req.body)
      
      
      parameters = [
        { name: 'courseName', value: req.body[0].value},
        {name: 'courseDesc', value: req.body[1].value},
        {name:'coursetype', value: req.body[2].value}
    
      ];
      const selectQuery = `insert into fireCourses.db.courseTable (courseName, courseDesc, coursetype ) values(@courseName, @courseDesc, @coursetype)`
      sendb.insertData(selectQuery, parameters ).then(data =>{res.send(data); console.log(data)})
    });


    app.post('/deletecourse', (req, res) => {

      console.log('here', req.body[0].value)
      
      
      parameters = [
        { name: 'courseId', value: req.body[0].value}
      ];
      const selectQuery = `delete from fireCourses.db.courseTable where courseId = @courseId`
      sendb.insertData(selectQuery, parameters ).then(data =>{res.send(data); console.log(data)})


    });



    app.listen(port, err => {
      if (err) {
        reject(err);
        console.log(err);
        return;
      }

      console.log(`Web server listening on localhost:${port}`);

      resolve();
    });
  });
}

module.exports.initialize = initialize;

function close() {
  return new Promise((resolve, reject) => {
    app.close(err => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

module.exports.close = close;
