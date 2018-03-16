import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString
} from 'graphql'

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: '...',

    fields: () => ({
        firstName: {
            type: GraphQLString,
            resolve: (person) => person.first_name
        },
        lastName: {
            type: GraphQLString,
            resolve: (person) => person.last_name
        },
        country: { type: GraphQLString },
        friends: {
            type: new GraphQLList(PersonType),
            // resolve: (person, args, { loaders }) =>
            //     person.friends.map(personId => (
            //         loaders.person.load(`${personId}`)
            //     ))
            // or...
            resolve: (person, args, { loaders }) =>
                loaders.person.loadMany(person.friends)
        }
    })
})

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
        person: {
            type: PersonType, 
            args: {
                id: {type: GraphQLString}
            },
            // ..without DataLoader
            // resolve: (root, args) => getPersonByURL(`/people/${args.id}`)
            resolve: (root, args, { loaders }) =>
                loaders.person.load(args.id)
        }
    })
})

export default new GraphQLSchema({
    query: QueryType
})