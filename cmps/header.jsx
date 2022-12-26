export function Header({ onSetMenuDisplay, onSetPage, page }) {


    return <section className='full'>
        <div className='main-screen full' onClick={onSetMenuDisplay}></div>
        <header id='header' className="app-header main-layout full">
            <h1>Miss Books App</h1>
            <nav className="app-nav">
                <ul className='links-list clean-list'>
                    <li className={page === 'home' && 'active'} onClick={() => onSetPage('home')}><a href="#">Home</a></li>
                    <li className={page === 'about' && 'active'} onClick={() => onSetPage('about')}><a href="#">About</a></li>
                    <li className={page === 'books' && 'active'} onClick={() => onSetPage('books')}><a href="#">Books</a></li>
                </ul>
            </nav>
            <button className='menu-toggle-btn' onClick={onSetMenuDisplay}>☰</button>
        </header>
    </section>
}