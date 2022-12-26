export function BookPreview({ book }) {


    return <article className='book-preview'>
        <h2 className='book-title'>{book.title}</h2>
        <h4 className='book-subtitle'>{book.subtitle}</h4>
        <div>
            {book.authors.map((author, idx) =>
                <span key={idx}>{author}</span>
            )}
        </div>
        <img className='book-img' src={book.thumbnail} />
    </article>
}