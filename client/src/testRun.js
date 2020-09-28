const axios = require('axios');
const cheerio = require('cheerio'); // NEW PACKAGE - for parsing HTML (basically jQuery)

const readDataFromSite = async () => {
    try {

        /*

        Testing retrieval of values for Mjolnir's Strike - SUCCESSFUL

        */

        let response = await axios.get('https://support.fire-emblem-heroes.com/mjolnir/terms/m_0028');
        const $ = cheerio.load(response.data);
        let stringVal = $('script').attr('data-situations'); // String type

        // Array that will hold the values, with each hour representing an object
        const objArr = [];

        // Loop to parse the string into an array of objects
        let endInd = stringVal.lastIndexOf("}");
        while (endInd > -1) {
            const startInd = stringVal.lastIndexOf("{",endInd);
            const newStr = stringVal.substr(startInd,endInd-startInd+1);
            const curObj = JSON.parse(newStr);
            objArr.push(curObj);
            // Find next object
            endInd--;
            endInd = stringVal.lastIndexOf("}",endInd);
        }
        console.log(objArr);

        
        /*

        Test for retrieving data from Voting Gauntlet - SUCCESSFUL

        */

        // let response = await axios.get('https://support.fire-emblem-heroes.com/voting_gauntlet/tournaments/39&locale=en-US');
        // const $ = await cheerio.load(response.data);
        // const valueArr = [];
        // const roundNum = 2;
        // const totalRounds = 3;
        // const numBattles = Math.pow(2,totalRounds-roundNum);
        // // Right: $('.tournaments-art-name-right > div > p:nth-child(2)')
        // $('.tournaments-art-name-left > div > p:nth-child(2)').each(function(ind, elem) {
        //     if (ind < numBattles) {
        //         let newStr = $(this).text();
        //         // Remove commas
        //         newStr = newStr.split(',').join('');
        //         valueArr.push(parseInt(newStr));
        //     } else {
        //         return false; // Exit loop
        //     }
        // });
        // console.log(valueArr);
        // console.log(Number.MAX_SAFE_INTEGER);
        // console.log($('p .name').html());


        // Use setInterval and clearInterval (and setTimeout and clearTimeout) for 
        // executing stuff every few minutes
    } catch(err) {
        console.log("Error loading");
        console.log(err);
    }
}

readDataFromSite();