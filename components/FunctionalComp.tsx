interface Data {
  ChangeHandler : any
}
const FunctionalComp = (props : Data) => {
  
  return (
    <>
    <div className="p-8">
    {/* <div className="flex items-center mb-4">
      <label htmlFor="filter" className="mr-4 text-gray-700">
        Filter:
      </label>
      <select
        id="filter"
        className="p-2 border border-gray-300 rounded-lg"
      >
      <option value="popularity.asc">Popularity Ascending</option>
      <option value="popularity.desc">Popularity Descending</option>
      <option value="revenue.asc">Revenue Ascending</option>
      <option value="revenue.desc">Revenue Descending</option>
      <option value="primary_release_date.asc">Primary Released Date Ascending</option>
      <option value="primary_release_date.desc">Primary Released Date Descending</option>
      </select>
    </div> */}
    <div className="flex items-center">
      <label htmlFor="sort" className="mr-4 text-gray-700">
        Sort by:
      </label>
      <select
        id="sort"
        className="p-2 border border-gray-300 rounded-lg"
        onChange={props.ChangeHandler}
      >
      <option value="popularity.asc">Popularity Ascending</option>
      <option value="popularity.desc">Popularity Descending</option>
      <option value="revenue.asc">Revenue Ascending</option>
      <option value="revenue.desc">Revenue Descending</option>
      <option value="primary_release_date.asc">Primary Released Date Ascending</option>
      <option value="primary_release_date.desc">Primary Released Date Descending</option>
      </select>
    </div>
  </div>
  </>
  )
}

export default FunctionalComp