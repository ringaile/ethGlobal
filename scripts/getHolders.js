
const axios = require('axios')

axios.get('https://kovan-api.ethplorer.io/getTopTokenHolders/0x47d4fe599eec755f055d54848d6ff12f2bb8a41a?apiKey=').then(resp => {
    console.log(resp.data);
});
