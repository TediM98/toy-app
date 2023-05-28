// import { toyService } from '../services/toy.service.js'

export function ToyFilter({ handleChange, filterBy }) {
  const { txt, inStock } = filterBy

  return (
    <section className="toy-filter flex ">
      <h2>Filter Toys</h2>
      <label htmlFor="txt"></label>
      <input
        className="filter-input"
        value={txt}
        onChange={handleChange}
        name="txt"
        id="txt"
        type="text"
        placeholder="By name"
      />
      <label htmlFor="inStock">In Stock:</label>
      <input
        type="checkbox"
        name="inStock"
        id="inStock"
        onChange={handleChange}
        value={inStock}
      />
    </section>
  )
}
