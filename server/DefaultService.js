exports.test = function(req) {
    return new Promise((resolve, reject) => {
      const test = require('./test');
      test
        .getApplicantInfo(req)
        .then(data => {
          console.log('data', data)
          resolve(data);
        })
        .catch(err => {
          console.log('DefaultService getApplicationInfo ERROR ');
          reject(err);
        });
    });
  };