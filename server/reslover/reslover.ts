const { books, authors } = require('../data/static');
const reslover = {
    Query: {
        books: () => books,
        book: (parent: any, args: { id: any; }) => books.find((book: { id: any; }) => book.id === args.id),
        authors: () => authors
    }
}

export default reslover;