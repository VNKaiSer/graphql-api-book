const { books, authors } = require('../data/static');
const reslover = {
    Query: {
        books: () => books,
        authors: () => authors
    }
}

export default reslover;