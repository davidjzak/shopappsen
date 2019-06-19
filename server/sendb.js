const keyVaultSearch = require('../common/getVaultValue.js');
const keyVaultName = process.env.VAULT_NAME || 'IAP-SBX-KeyVault';
var iwa_constants = require('../common/iwa-constants');

const sql = require('mssql');

//const config = null;

// const config = {
//     user: 'IAP_SRVC_LOGIN',
//     password: 'Uxfe0Bp65Sax$$',
//     server: 'iap-sbx-sql.database.windows.net',
//     database: 'IAP-SBX-SQL',
//     encrypt: true
//   };

const config = {
    user: "DZ\\David",
    password: '',
    server: 'DZ\\SQLEXPRESS',
    database: 'fireCourses',
    encrypt: false
};

//config = iwa_constants.getDbConfig();

// adding connection pool
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

// This map is curently not in use unless we have issue with the default SQL data types
// that are automatically mapped based on JS data types
// mssql data types
// var sqlTypeMap = new Map();
// sqlTypeMap.set('bigint', sql.BigInt);
// sqlTypeMap.set('varchar', sql.NVarChar);

module.exports = {
  // select data from the database
  selectData: async function(selectQuery) {
    return new Promise(async function(resolve, reject) {
      const pool = await poolPromise;
      // create Request object
      let request = pool.request();
      // request query using promise
      request
        .query(selectQuery)
        .then(result => {
          resolve(result.recordset);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  // select data from the database with where clause parameters
  /*
  selectQuery = 'select * from iap.rubinder_test where id = @id'
  parameters = [
        { name: 'id', value: '7'}
      ];
   */
  selectDataWithParams: async function(selectQuery, parameters) {
    return new Promise(async function(resolve, reject) {
      // making sure the connection is closed before opening a new one

      const pool = await poolPromise;
      // create Request object
      let request = pool.request();

      // add parameters
      parameters.forEach(function(p) {
        // request.input(p.name, sqlTypeMap.get(p.type), p.value);
        request.input(p.name, p.value);
      });

      // request query using promise
      request
        .query(selectQuery)
        .then(result => {
          resolve(result.recordset);
        })
        .catch(err => {
          reject({
            message: 'Unable to run the select query',
            err
          });
        });
    });
  },

  // insert data into the database
  /*
  insertQuery = 'INSERT INTO RUBINDER_TEST values(@id,@name,@number)'
  parameters = [
        { name: 'id', value: '7'},
        { name: 'name', value: 'John Smith'},
        { name: 'number', value: '200001'}
      ];
   */
  insertData: async function(insertQuery, parameters) {
    return new Promise(async function(resolve, reject) {
      const pool = await poolPromise;
      // create Request object
      let request = pool.request();

      // add parameters
      parameters.forEach(function(p) {
        // request.input(p.name, sqlTypeMap.get(p.type), p.value);
        request.input(p.name, p.value);
      });

      request
        .query(insertQuery)
        .then(result => {
          resolve(result.rowsAffected);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  /*
  Run multiple queries on the database with one connection, for example:
  let queryAndParam1 = {
      query: 'INSERT INTO TEST_TABLE values(@value1, @value2)',
      parameters: [
        { name: 'value1', value: 'hello' },
        { name: 'value2', value: 'world' },
      ]
    };
    let queryAndParam2 = {
      query: 'INSERT INTO DIFFERENT_TEST_TABLE values(@value1, @value2)',
      parameters: [
        { name: 'value1', value: 'hello' },
        { name: 'value2', value: 'again' },
      ] 
    }
    
    runMultipleQueries([queryAndParam1, queryAndParam2])...
  */
  //Optional connectionTimeOut Parameter is needed to increase the timeout from deafult (For file upload or other large inputs)
  runMultipleQueries: (queriesAndParams, connectionTimeOut = null) => {
    return new Promise(async (resolve, reject) => {
      // let tempConfig = config;
      // if (connectionTimeOut) {
      //   tempConfig.connectionTimeout = connectionTimeOut;
      //   tempConfig.requestTimeout = connectionTimeOut;
      //   tempConfig.pool = {
      //     idleTimeoutMillis: connectionTimeOut,
      //     max: 100
      //   };
      // }
      // const poolPromise = new sql.ConnectionPool(tempConfig)
      //   .connect()
      //   .then(async pool => {
      //     return pool;
      //   })
      //   .catch(err => {
      //     reject({ message: err });
      //   });
      let queryResult = new Array(queriesAndParams.length);
      try {
        pool = await poolPromise;
        for (let i = 0; i < queriesAndParams.length; i++) {
          let request = pool.request();

          queriesAndParams[i].parameters.forEach(function(p) {
            request.input(p.name, p.value);
          });
          await request
            .query(queriesAndParams[i].query)
            .then(result => {
              queryResult.push(result.rowsAffected);
            })
            .catch(err => {
              console.log('sendb.runMultipleQueries Error');
              console.log(err);
            });
        }
      } catch (err) {
        reject({
          message: err
        });
      }
      resolve();
    });
  },

  // update data into the database
  /// uses same parameters as the insertData function above
  /*
  updateQuery = 'UPDATE RUBINDER_TEST SET NAME = @name WHERE ID = @id'
  parameters = [
        { name: 'id', value: '7'},
        { name: 'name', value: 'Vellum'}
      ];
  */
  updateData: async function(updateQuery, parameters) {
    return new Promise(async function(resolve, reject) {
      const pool = await poolPromise;
      // create Request object
      let request = pool.request();

      // add parameters
      parameters.forEach(function(p) {
        // request.input(p.name, sqlTypeMap.get(p.type), p.value);
        request.input(p.name, p.value);
      });

      request
        .query(updateQuery)
        .then(result => {
          resolve(result.rowsAffected);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
