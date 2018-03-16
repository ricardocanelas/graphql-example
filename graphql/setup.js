// External Depedencies
import graphQLHTTP from 'express-graphql'
import fetch from 'node-fetch'
import DataLoader from 'dataloader'

// Our Depedencies
import schema from './schema'

// Our Fetch
function getPeople() {
    console.log(`fetch:: people/`)
    return fetch(`${BASE_URL}/people/`)  
        .then(res => res.json())
        .then(json => json.data)
}

function getPersonByID(relativeID) {
    console.log(`fetch:: people/${relativeID}`)
    return fetch(`${BASE_URL}/people/${relativeID}`)  
        .then(res => res.json())
        .then(json => json.data)
}

// Setup
const BASE_URL = 'http://localhost:5000'

export default (app) => {
    app.use(graphQLHTTP(res => {
        const cacheMap = new Map();

        const peopleLoader = new DataLoader(
            keys => {
                return Promise.all(keys.map(key => getPeople()), {cacheMap})
            }
        )

        const personLoader = new DataLoader(
            keys => {
                return Promise.all(keys.map(key => getPersonByID(key)), {cacheMap})
            }
        )

        const loaders = {
            person: personLoader
        }
        return {
            context: { loaders },
            schema,
            graphiql: true
        }
    }))
}

