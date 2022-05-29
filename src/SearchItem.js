import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form 
        className='searchForm' 
        onSubmit={(e) => e.preventDefault()}
        style={{
            display: 'flex',
            flexGrow: 1,
            width: '100%'
        }}
    >
        <input
            style={{
                height: 40,
                padding: 10,
                flexGrow: 1,
                fontSize: 18
            }}  
            id='search'
            type='text'
            role='searchbox'  
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem