const axios = require('axios');
const logger = require('../../loaders/logger')(module);

module.exports = async (input, language, beam) => {
  params = {
    input: input,
    language: language,
    beam: beam
  };
  return axios.get('http://localhost:5001/predict', { params: params })
    .then((resp) => {
      logger.debug(`ps outputs = ${JSON.stringify(resp.status)}`);
      return resp.data;
    })
    .catch((err) => {
      logger.error(err);
      return {
      	resp: 500,
      	message: err
      };
    });
};
