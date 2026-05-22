interface Book {
    title: string
    author: string
    isbn: string
    publishedYear: number
    genre?: string
}

class Library {
    protected books: Book[] = []

    public addBook(book: Book): void {
        this.books.push(book)
    }

    public getBookDetails(isbn: string): Book | string {
        let found = this.books.find(book => book.isbn === isbn)
        if (found) {
            return found
        }
        return "Book not found"
    }
}

class DigitalLibrary extends Library {
    readonly website: string

    constructor(website: string) {
        super()
        this.website = website
    }

    public listBooks(): string[] {
        let titles: string[] = []
        for (let i = 0; i < this.books.length; i++) {
            titles.push(this.books[i].title)
        }
        return titles
    }
}

const myLibrary = new DigitalLibrary("www.digitallibrary.com")

myLibrary.addBook({ title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "978-0261103344", publishedYear: 1937, genre: "Fantasy" })
myLibrary.addBook({ title: "1984", author: "George Orwell", isbn: "978-0451524935", publishedYear: 1949 })
myLibrary.addBook({ title: "Clean Code", author: "Robert C. Martin", isbn: "978-0132350884", publishedYear: 2008, genre: "Programming" })

console.log(myLibrary.getBookDetails("978-0261103344"))
console.log(myLibrary.getBookDetails("978-0451524935"))
console.log(myLibrary.getBookDetails("000-0000000000"))
console.log(myLibrary.listBooks())
console.log(myLibrary.website)
