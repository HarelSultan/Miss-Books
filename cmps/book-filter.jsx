const { useState, useEffect } = React
import { bookService } from '../services/book.service.js'

export function BookFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'range') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSumbitFilter(ev) {
        ev.preventDefault()
        // onSetFilter(filterByToEdit)
    }


    return <section className="book-filter">
        <h2>Filter Books</h2>
        <div className="filters-container">

            <label htmlFor="title">Title:
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder='By Title'
                    value={filterByToEdit.title}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="author">Author:
                <input
                    type="text"
                    name="author"
                    id="author"
                    placeholder='By Author'
                    value={filterByToEdit.author}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="category">Category:
                <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder='By Category'
                    value={filterByToEdit.category}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="minPrice">Min Price:
                <input
                    type="range"
                    name="price"
                    id="minPrice"
                    value={filterByToEdit.price}
                    onChange={handleChange}
                />
            </label>
        </div>

    </section>
}