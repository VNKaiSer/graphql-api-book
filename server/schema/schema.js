const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Book{
        id : ID,
        title : String,
        genre : String,
    },
        #ROOT TYPE
    type query{
        books : [Book]
    }    
`

module.exports = typeDefs;

