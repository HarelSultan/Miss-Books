import { BookPreview } from './book-preview.jsx';

export function BookList({ books, onSelectBook }) {


    return <ul className='book-list'>
        {
            books.map(book => <li key={book.id} className='book-container'>
                <BookPreview book={book} />
                <div>
                    <button onClick={() => onSelectBook(book.id)}>Select Book</button>
                </div>
            </li>)
        }
    </ul>
}