const filterOptions = [
    {name: 'ascending (A-Z)', value: 'asc'},
    {name: 'descending (Z-A)', value: 'desc'},
    {name: 'price ( high - low)', value: 'priceDesc'},
    {name: 'price (low - high)', value: 'priceAsc'}
]
const SortFilter = (props) =>{
    const styles = {
        
    }
    const selectFilterOptionHandler = (option) =>{
        props.onFilterOptionChange(option);
    }
    return (
        <div className=" z-10 shadow-sm rounded-sm mt-1 p-1 absolute bg-white transition-all ease-out duration-700" style={styles}>
            { filterOptions.map((option, index) =>
                <div className="p-2 hover:bg-pink-50 cursor-pointer" key={index} onClick={()=> selectFilterOptionHandler(option)}>
                    <input type='text' value={option.name} className="capitalize outline-0 bg-transparent hover:bg-pink-50 cursor-pointer" readOnly/>
                </div>
            )}
        </div>
    )
}
export default SortFilter;