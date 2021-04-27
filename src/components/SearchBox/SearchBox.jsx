function SearchBox({placeholder, input, onInputChange}) {
    return (
        <input className = "searchbar-input h-100 px-2"
        value = { input }
        placeholder = { placeholder }
        onChange = { e => onInputChange(e.target.value) }
        />
    );
}

export default SearchBox;