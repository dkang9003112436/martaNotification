require('dotenv').config();
const martaService = require('../marta-notification/services/martaService');

if (true) {
    main();
}

async function main() {
    const filters = {
        LINE: 'GOLD',
        DIRECTION: 'N',
        STATION: 'MIDTOWN STATION',
        DESTINATION: 'Doraville'
    };

    const response = await martaService.getJsonPlaceHolder(filters, process.env.MARTA_API_KEY);
    console.log(response);
}
