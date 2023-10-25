const Book = require('./models/bookModel'); // Import your Book model

// Find all books without a description
Book.find({ description: { $exists: false } }, (err, books) => {
    if (err) {
        console.log(err)
    } else {
        // Update each book with a default description or value
        books.forEach((book) => {
            book.description = 'No description available'; // You can set your default value here
            book.save((err) => {
                if (err) {
                    console.log(err)
                }
            });
        });
    }
});