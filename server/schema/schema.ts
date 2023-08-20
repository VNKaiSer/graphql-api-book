const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book{
        id : ID,
        title : String,
        genre : String,
    }
    type Author{
        id: ID!
        name: String
        age: Int
    }
    #ROOT TYPE
    type Query{
        books : [Book]
        book : Book
        authors : [Author]
        author : Author
    }    
`

export default typeDefs;

