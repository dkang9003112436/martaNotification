require('dotenv').config();
const martaService = require('../martaNotification/services/martaServices');
const facebookService = require('../martaNotification/services/facebookServices')

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

    const response = await martaService.getJsonPlaceHolder(filters);
    let message ="";
    for (let i = 0; i < response.length; i++) {
        data = response[i];
        message += `The ${data.LINE} train is scheduled to arrive at ${data.STATION} at ${data.NEXT_ARR}, heading to ${data.DESTINATION}. Current wait time is ${data.WAITING_TIME}\n\n`
    }
    const authentication = await facebookService.sendCustomerMessage(message);
}
