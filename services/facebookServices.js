require('dotenv').config();
const axios = require('axios');
const _BASE_URL = 'https://graph.facebook.com/v18.0'
const _PSID = process.env._PSID;
const _LONG_LIVED_PAGE_ACCESS_TOKEN = process.env._LONG_LIVED_PAGE_ACCESS_TOKEN;

module.exports.sendCustomerMessage = async (message) => {
    let response;
    await axios.post(`${_BASE_URL}/193613000493582/messages?recipient={id:${_PSID}}&message={text:'${message}'}&messaging_type=RESPONSE&access_token=${_LONG_LIVED_PAGE_ACCESS_TOKEN}`).then(x => {
        response = x.data;
    });

    return response;
  };