import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { toyService } from '../services/toy.service.js'
import { showErrorMsg } from '../services/event-bus.service.js'

import placeholder from '../assets/img/placeholder.png'

export function ToyDetails() {
  const [toy, setToy] = useState(null)
  const { toyId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadToy()
  }, [toyId])

  function loadToy() {
    toyService
      .getById(toyId)
      .then((toy) => setToy(toy))
      .catch((err) => {
        console.log('Had issues in toy details', err)
        showErrorMsg('Cannot load toy')
        navigate('/toy')
      })
  }

  if (!toy) return <div>Loading...</div>
  return (
    <section className="toy-details">
      <h1>Toy name : {toy.name}</h1>
      <img src={placeholder} alt="toy-img" />
      <h5>Price: ${toy.price}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas
        cumque tempore, aperiam sed dolorum rem! Nemo quidem, placeat
        perferendis tempora aspernatur sit, explicabo veritatis corrupti
        perspiciatis repellat, enim quibusdam!
      </p>
      <div className="detail-links">
        <button className="detail-edit">
          <Link to={`/toy/edit/${toy._id}`}>Edit</Link>
        </button>
        <button className="detail-back">
          <Link to={`/toy`}>Back</Link>
        </button>
      </div>
    </section>
  )
}
