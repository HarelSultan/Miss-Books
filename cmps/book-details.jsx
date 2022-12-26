import { BookPreview } from './book-preview.jsx'
import { LongTxt } from './long-txt.jsx'

export function BookDetails({ book, onGoBack }) {

    const { amount: price, currencyCode: currency } = book.listPrice

    function setPageCountDisplay(pageCount) {
        if (pageCount > 500) return `${pageCount} - Serious Reading`
        if (pageCount > 200) return `${pageCount} - Descent Reading`
        if (pageCount < 100) return `${pageCount} - Light Reading`
        return pageCount
    }

    function setPublishedDateDisplay(publishedDate) {
        const currYear = new Date().getFullYear()
        if (currYear - publishedDate >= 10) return `${publishedDate} - Vintage`
        if (currYear - publishedDate <= 1) return `${publishedDate} - New`
        return publishedDate
    }

    function setPriceDisplay(bookPrice) {
        if (bookPrice > 150) return 'red'
        if (bookPrice < 20) return 'green'
        return ''
    }

    return <section className='book-container book-details'>
        <BookPreview book={book} />
        <span>Published At: {setPublishedDateDisplay(book.publishedDate)}</span>
        <ul className='clean-list'>Category:
            {book.categories.map((category, idx) =>
                <li key={idx}>{category}</li>
            )}
        </ul>
        <p>Language: {book.language}</p>
        <p>Page Count:  {setPageCountDisplay(book.pageCount)}</p>
        <h5 className={setPriceDisplay(price)}>{price}, {currency}</h5>
        {book.listPrice.isOnSale && <div className='on-sale'>On Sale!</div>}
        <LongTxt txt={book.description} length={20} />
        <button onClick={onGoBack}>Go Back</button>
    </section>
}