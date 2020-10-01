/**
 * Created by Solomon on 8/24/2020.
 */
let axios = require('axios');

let BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = function (options, callback) {
    if (!options.apiKey) {
        throw new Error('Youtube Search will require a key')
    }

        let params = {
            part: 'snippet',
            key: options.apiKey,
            q: options.term,
            maxResult: (options.items) ? options.items : 5,

            type: 'video'
        };

            axios.get(BASE_URL, { params })

                .then(response => {

                     //console.log('search response', response);
                    if(callback) { callback(response.data.items)}

                })

        .catch(error => console.error(error));
}