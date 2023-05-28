import { useDispatch, useSelector } from 'react-redux'

// import { toyService } from '../services/toy.service.js'

import { ToyList } from '../cmps/toy-list.jsx'
import { ToyFilter } from '../cmps/toy-filter.jsx'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
// import { ADD_CAR_TO_CART } from '../store/toy.reducer.js'
import { loadToys, removeToy, saveToy } from '../store/toy.action.js'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SET_FILTERBY } from '../store/toy.reducer.js'

export function ToyIndex() {
  // const [filterBy, setFilterBy] = useState(toyService.getDefaultFilter())
  const dispatch = useDispatch()
  const toys = useSelector((storeState) => storeState.toyModule.toys)
  const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)
  const isLoading = useSelector((storeState) => storeState.toyModule.isLoading)

  useEffect(() => {
    loadToys(filterBy)
  }, [filterBy])

  function onRemoveToy(toyId) {
    removeToy(toyId)
      .then(() => {
        showSuccessMsg('Toy removed')
      })
      .catch((err) => {
        showErrorMsg('Cannot remove toy')
      })
  }

  function onEditToy(toy) {
    const price = +prompt('New price?', toy.price)
    if (!price || price === toy.price) return

    const toyToSave = { ...toy, price }
    saveToy(toyToSave)
      .then((savedToy) => {
        showSuccessMsg(`Toy updated to price: $${savedToy.price}`)
      })
      .catch((err) => {
        showErrorMsg('Cannot update toy')
      })
  }

  //   function addToCart(toy) {
  //     console.log(`Adding ${toy.vendor} to Toyt`)
  //     showSuccessMsg('Added to Toyt')
  //     dispatch({ type: ADD_CAR_TO_CART, toy })
  //   }

  function onSetFilter(filterBy) {
    const action = {
      type: SET_FILTERBY,
      filterBy,
    }
    dispatch(action)
  }

  function handleChange({ target }) {
    const { name: field, type, checked } = target
    const value =
      type === 'number'
        ? +target.value || ''
        : type === 'checkbox'
        ? checked
        : target.value
    onSetFilter({ ...filterBy, [field]: value })
    console.log('field,value', filterBy)
  }

  function toysToDisplay() {
    if (filterBy.txt) {
      return toys.filter((toy) =>
        toy.name.toLowerCase().includes(filterBy.txt.toLowerCase())
      )
    } else if (filterBy.inStock) {
      return toys.filter((toy) => toy.inStock)
    } else {
      return toys
    }
  }

  return (
    <section className="main-content main-layout">
      <h1 className="app-h1">Toy Store</h1>
      <main>
        <div className="filter-container">
          <ToyFilter filterBy={filterBy} handleChange={handleChange} />
        </div>
        <button className="btn add-toy">
          <Link to={`/toy/edit`}>Add Toy</Link>
        </button>
        {isLoading && <h4>Loading...</h4>}
        <div className="toylist-container flex justify-center">
          <ToyList
            toys={toysToDisplay()}
            onRemoveToy={onRemoveToy}
            onEditToy={onEditToy}
            //   addToCart={addToCart}
          />
        </div>
        <hr />
        {/* <pre>{JSON.stringify(toy, null, 2)}</pre> */}
      </main>
    </section>
  )
}
