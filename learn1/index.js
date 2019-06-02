const fetch = require('node-fetch');
const delay = require('delay');
const moment = require('moment')
const cheerio = require('cheerio');
const { URLSearchParams } = require('url');

const functionCreateCode = () => new Promise((resolve, reject) => {
    const params = new URLSearchParams;
    params.append('username', 'sad');
    params.append('code_register', 'xnxx');
    params.append('bot_test', '')

    fetch('http://easytolearn.ancreator.com/', { method: 'POST', body: params })
        .then(res => res.text())
        .then(result => {
            const $ = cheerio.load(result);
            const resText = $('h7').text();
            resolve(resText);
        })
        .catch(err => reject(err))
});



(async () => {
    for (let index = 0; index < 5; index++) {
        await delay(5000);
        const resultFromFunctionCreateCode = await functionCreateCode();
        console.log(`[ ${moment().format('HH:mm:ss')} ]  ${resultFromFunctionCreateCode} `);
    }
})();