require('dotenv').config({ path:__dirname +'/.env'})
const axios = require('axios');

const _BASE_URL = 'http://developer.itsmarta.com'
const _TRAIN_PATH = '/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals'
const _API_KEY = process.env.MARTA_API_KEY;
console.log(process.env)

module.exports.getJsonPlaceHolder = async (filter) => {
    let response;
    await axios.get(`${_BASE_URL}/${_TRAIN_PATH}?${_API_KEY}`).then( r => {
        response = r.data;
    }).catch(err => {
        console.log(err);
    })
    return filterResponse(response,filter);
    // return response;
}

function filterResponse(response, filters) {
    if (!response || !Array.isArray(response)) {
        console.error('Invalid response format');
        return [];
    }

    return response.filter(item => {
        // Check each item against the provided filters
        for (const key in filters) {
            if (filters[key] && item[key] !== filters[key]) {
                return false; // If any filter does not match, exclude the item
            }
        }
        return true; // Include the item if all filters match
    });
}