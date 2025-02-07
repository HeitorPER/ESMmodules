const dataBaseType = {
    userType: 'admin',
    tyepData: 'localData',
}
async function conectToDatabase(dataName) {
    console.log(`data bank conected: ${dataName}`);

}

async function disconectToDatabase(dataName) {
    console.log(`disconectig from data bank: ${dataName}`);

}

//module.exports = conectToDatabase;==> this is the old way to export
export {
    conectToDatabase,
    disconectToDatabase,
    dataBaseType,
}