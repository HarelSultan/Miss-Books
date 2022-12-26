const { useState } = React

import { Header } from './cmps/header.jsx'
import { About } from './pages/about.jsx'
import { BooksIndex } from './pages/books-index.jsx'
import { Home } from './pages/home.jsx'

export function App() {
    const [page, setPage] = useState('books')
    const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)

    function onSetMenuDisplay() {
        setIsMenuDisplayed(!isMenuDisplayed)
    }

    function onSetPage(setPageTo) {
        setPage(setPageTo)
        onSetMenuDisplay()
    }

    return <section className={`main-layout app ${isMenuDisplayed ? 'menu-open' : ''}`}>
        <Header onSetMenuDisplay={onSetMenuDisplay} onSetPage={onSetPage} page={page} />

        {/* <main className='main-layout full'> */}
        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'books' && <BooksIndex />}
        </main>
    </section>
}