import { useGlobalContext } from './context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value
        if (!searchValue) return
        setSearchTerm(searchValue)
    }

    return <section>
        <h1 className='title'>unsplush images</h1>
        <form
            className='search-form'
            onSubmit={handleSubmit}>
            <input
                className='form-input'
                type='text'
                name='search'
                placeholder='racoon' />
            <button
                className='btn'
                type='submit'>
                search
            </button>
        </form>
    </section>
}

export default SearchForm