var sendb = require('./sendb');

// Retrieve Applicant Info from DB
module.exports.getApplicantInfo = req => {
  return new Promise((resolve, reject) => {
    let params = [];
      const selectQuery = `
      select * from fireCourses.db.courseTable      `;
      sendb
        .selectDataWithParams(selectQuery, params)
        .then(results => {
          console.log(results)
          resolve(results)})
        .catch(err => {
          console.log(err)
          reject({
            message: 'Failed to retreive Application Info and/or Id',
            err
          });
        });
  });
};
