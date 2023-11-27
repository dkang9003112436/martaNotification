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

    const data = response.at(0);
    const message = `${data.LINE} train heading ${data.DIRECTION} approaching ${data.DESTINATION} station. Estimate Time Arrival is ${data.NEXT_ARR}, waiting time approximately ${data.WAITING_TIME}`

    const authentication = await facebookService.sendCustomerMessage(message);
}
