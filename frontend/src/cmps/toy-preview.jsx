import { Link } from 'react-router-dom'
//../assets/img/placeholder.png
export function ToyPreview({ toy, onRemoveToy }) {
  return (
    <article className="card">
      <h4>{toy.name}</h4>
      <div className="toy-img">
        <img src="https://placehold.co/120x100" alt="toy-img" />
      </div>
      <p>
        Price: <span>${toy.price.toLocaleString()}</span>
      </p>
      <span>{toy.inStock ? 'InStock' : 'Not in stock'}</span>
      <hr />
      <div className="link-container flex">
        <button className="btn toy-details">
          <Link to={`/toy/${toy._id}`}>Details</Link>
        </button>
        <button className="btn toy-edit">
          <Link to={`/toy/edit/${toy._id}`}>Edit</Link>
        </button>
      </div>
      <button
        className="btn delete-toy"
        onClick={() => {
          onRemoveToy(toy._id)
        }}
      >
        x
      </button>
    </article>
  )
}
