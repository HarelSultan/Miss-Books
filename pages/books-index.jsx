const { useState, useEffect } = React

import { BookDetails } from '../cmps/book-details.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import { BookList } from '../cmps/book-list.jsx'


import { bookService } from '../services/book.service.js'

export function BooksIndex() {

    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [pageIdx, setPageIdx] = useState(0)
    const [isLastPage, setIsLastPage] = useState(false)

    const PAGE_SIZE = 5

    useEffect(() => {
        loadBooks()
    }, [filterBy, pageIdx])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => {
                checkLastPage(books)
                const pageStartIdx = pageIdx * PAGE_SIZE
                books = books.slice(pageStartIdx, pageStartIdx + PAGE_SIZE)
                setBooks(books)
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onSelectBook(bookId) {
        console.log('bookId:', bookId)
        bookService.get(bookId)
            .then(book => setSelectedBook(book))
    }

    function onSetPageIdx(pageIdx) {
        setPageIdx(pageIdx)
        window.location.href = '#header'
    }

    function checkLastPage(books) {
        console.log('books:', books)
        console.log('pageIdx:', pageIdx)
        if ((pageIdx + 1) * PAGE_SIZE >= books.length) setIsLastPage(true)
        else setIsLastPage(false)
    }

    return <section className='main-content'>

        {!selectedBook && <div>
            <BookFilter onSetFilter={onSetFilter} />
            <BookList books={books} onSelectBook={onSelectBook} />
            <section className='paging-container'>
                {pageIdx > 0 && <button onClick={() => onSetPageIdx(pageIdx - 1)}> &lt;- Previous Page</button>}
                <span>{pageIdx + 1}</span>
                {!isLastPage && <button onClick={() => onSetPageIdx(pageIdx + 1)}>Next Page -&gt;</button>}
            </section>
        </div>}

        {selectedBook && <BookDetails book={selectedBook}
            onGoBack={() => setSelectedBook(null)} />}
    </section>
}