const express = require('express');

//const app = express();

// if (process.env.NODE_ENV !== 'production') {
//     console.log('Loading env variables in Local DEV Env');
//     require('dotenv').config();
//   }


// const keyNames = [
//     'CS-IBUSER',
//     'CS-IBUSER-PW',
//     'IAP-SBX-SQL-IAPSRVCLOGIN',
//     'IWA-DB-NAME',
//     'IWA-DB-SERVER',
//     'IWA-DBUSER',
//     'IWA-DBUSER-PW',
//     'IWA-EMAIL-ACCT',
//     'IWA-EMAIL-PW',
//     'MONERIS-HPP-KEY',
//     'MONERIS-STORE-ID',
//     'IWA-B2C-TENANT-ID',
//     'IWA-B2C-CLIENT-ID-AGENT',
//     'IWA-B2C-CLIENT-ID',
//     'IWA-B2C-POLICY-NAME',
//     'IWA-B2C-POLICY-NAME-AGENT',
//     'IWA-B2C-ISSUER-LINK'
//   ];
  
  async function startup() {
    try {
      console.log('Initializing web server module');
      const webServer = require('./web-server.js');
      await webServer.initialize();
    } catch (err) {
      console.error(err);
  
      process.exit(1); // Non-zero failure code
    }
  }


  startup()
  
  // async function shutdown(e) {
  //   let err = e;
  
  //   console.log('Shutting down');
  
  //   console.log('Exiting process');
  
  //   if (err) {
  //     process.exit(1); // Non-zero failure code
  //   } else {
  //     process.exit(0);
  //   }
  // }
  
  // process.on('SIGTERM', () => {
  //   console.log('Received SIGTERM');
  
  //   shutdown();
  // });
  
  // process.on('SIGINT', () => {
  //   console.log('Received SIGINT');
  
  //   shutdown();
  // });
  
  // process.on('uncaughtException', err => {
  //   console.log('Uncaught exception');
  //   console.error(err);
  
  //   shutdown(err);
  // });

  // startup();

  