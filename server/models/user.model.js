const { mongoose} = require('mongoose')

const User = new mongoose.Schema(
    {        
        userid: {type:String, required: true},
        fname: {type:String, required: true},
        lname: {type:String, required: true},
        email: {type:String, required: true, unique: true},
        password: {type:String, required: true},
        type: {type:String, required: true},
    },{ collection: 'Userdata' }
)

const model = mongoose.model('Userdata', User)

module.exports = model
/*async function main(){

    const url = "mongodb+srv://admin:admin2022@crud.ca9ha.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(url);

    try {
        await client.connect();

        await listDatabases(client);
    }catch(e){
        connsole.error(e);
    }finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}*/