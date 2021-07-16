import React from 'react';

const Search: React.FC = () => {
    return (
        <div className="search">
            <form className="d-flex">
                <input
                    type="text"
                    placeholder="I'm shopping for..."
                />
                <input
                    type="submit"
                    value="Search"
                />
            </form>
        </div>
    )
}

export default Search;