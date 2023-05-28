// import PropTypes from 'prop-types'

import { ToyPreview } from './toy-preview.jsx'

export function ToyList({ toys, onRemoveToy, onEditToy, addToCart }) {
  return (
    <ul className="card-container flex clean-list justify-center">
      {toys.map((toy) => (
        <li className="toy-preview" key={toy._id}>
          <ToyPreview toy={toy} onRemoveToy={onRemoveToy} />

          {/* <div>
              <button
                onClick={() => {
                  onEditToy(toy)
                }}
              >
                Edit
              </button>
            </div> */}

          {/* <button
            className="buy"
            onClick={() => {
              addToCart(toy)
            }}
          >
            Add to Toyt
          </button> */}
        </li>
      ))}
    </ul>
  )
}

// ToyList.propTypes = {
//   txt(props, propName, cmpName) {
//     if (typeof props.txt !== 'string') {
//       return new Error('Not a string!')
//     }
//   },
//   nums: PropTypes.arrayOf(PropTypes.number),
// }
