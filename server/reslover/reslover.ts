const { books, authors } = require('../data/static');
const reslover = {
    Query: {
        books: () => books,
        book: (parent: any, args: { id: any; }) => books.find((book: { id: any; }) => book.id == args.id),
        authors: () => authors,
        author: (parent: any, args: { id: number; }) => authors.find((author: { id: number; }) => author.id == args.id)
    },

    Book: {
        author: (parent: any, args: any) => {
            return authors.find((author: { id: number; }) => author.id == parent.authorID)
        }

    }


}

export default reslover;