const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book{
        id : ID,
        title : String,
        genre : String,
    },
    #ROOT TYPE
    type Query{
        books : [Book]
    }    
`

export default typeDefs;

