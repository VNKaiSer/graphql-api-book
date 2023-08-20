const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book{
        id : ID,
        title : String,
        genre : String,
        author : Author
    }
    type Author{
        id: ID!
        name: String
        age: Int
    }
    #ROOT TYPE
    type Query{
        books : [Book]
        book(id : ID!) : Book
        authors : [Author]
        author(id : ID!) : Author
    }    
`

export default typeDefs;

