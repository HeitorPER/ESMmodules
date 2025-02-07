//import pass the doc type and the path to the file(ex:docname.js)
import {conectToDatabase, disconectToDatabase, dataBaseType} from './utils/database.js';
import {getDatafromAPI} from './utils/api.js';

(async function main(){
    console.log('hello ecma');
})();

console.log(dataBaseType);
conectToDatabase('mydb');
disconectToDatabase('mydb');
getDatafromAPI();