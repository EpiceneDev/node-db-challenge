const db = require('../../data/dbConfig.js');

module.exports = {
  getResources,
  addResource
};


function getResources() {
    return db('resources');
};
  
  
function addResource(resourceData) {
  return db('resources').insert(resourceData).then(result => {
      return result;
  })
};
