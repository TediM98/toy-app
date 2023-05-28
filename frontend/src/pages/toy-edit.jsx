// import { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'

// import { toyService } from '../services/toy.service.js'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

// export function ToyEdit() {
//   const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())
//   const { toyId } = useParams()
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (!toyId) return
//     loadToy()
//     // eslint - disable - next - line
//   }, [])

//   function loadToy() {
//     toyService
//       .getById(toyId)
//       .then((toy) => setToyToEdit(toy))
//       .catch((err) => {
//         console.log('Had issues in toy details', err)
//         navigate('/toy')
//       })
//   }

//   function handleChange({ target }) {
//     let { value, type, name: field } = target
//     value = type === 'number' ? +value : value
//     setToyToEdit((prevToy) => ({ ...prevToy, [field]: value }))
//   }

//   function onSaveToy(ev) {
//     ev.preventDefault()
//     toyService
//       .save(toyToEdit)
//       .then((toy) => {
//         console.log('toy saved', toy)
//         showSuccessMsg('Toy saved!')
//         navigate('/toy')
//       })
//       .catch((err) => {
//         console.log('err', err)
//         showErrorMsg('Cannot save toy')
//       })
//   }

//   return (
//     <section className="toy-edit">
//       <h2>{toyToEdit._id ? 'Edit this toy' : 'Add a new toy'}</h2>
//       <form onSubmit={onSaveToy}>
//         <label htmlFor="name">Name : </label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Enter name..."
//           value={toyToEdit.name}
//           onChange={handleChange}
//         />
//         <label htmlFor="price">Price: </label>
//         <input
//           type="number"
//           name="price"
//           id="price"
//           placeholder="Enter price"
//           value={toyToEdit.price}
//           onChange={handleChange}
//         />

//         <div>
//           <button>{toyToEdit._id ? 'Save' : 'Add'}</button>
//           <button className="cancel-edit">
//             <Link to="/toy">Cancel</Link>
//           </button>
//         </div>
//       </form>
//     </section>
//   )
// }
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toyService } from '../services/toy.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.number().required('Required'),
})

export const ToyEdit = () => {
  const [toyToEdit, setToyToEdit] = useState()
  const { toyId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (!toyId) return
    loadToy()
    // eslint - disable - next - line
  }, [])
  const h1Txt = toyId ? 'Edit toy' : 'Add toy'
  const formBtnTxt = toyId ? 'Save' : 'Add'

  function loadToy() {
    toyService
      .getById(toyId)
      .then((toy) => setToyToEdit(toy))
      .catch((err) => {
        console.log('Had issues in toy details', err)
        navigate('/toy')
      })
  }

  function onSaveToy(values) {
    const updatedToy = { ...toyToEdit, ...values }
    toyService
      .save(updatedToy)
      .then((toy) => {
        console.log('toy saved', toy)
        showSuccessMsg('Toy saved!')
        navigate('/toy')
      })
      .catch((err) => {
        console.log('err', err)
        showErrorMsg('Cannot save toy')
      })
  }

  return (
    <section className="EditForm flex justify-center align-center">
      <h1>{h1Txt}</h1>
      <Formik
        initialValues={{
          name: '',
          price: 0,
        }}
        validationSchema={SignupSchema}
        onSubmit={onSaveToy}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field className="input" name="name" placeholder="Toy name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <Field className="input" name="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
            </div>
            <div className="edit-btn-container flex justify-between">
              <button type="submit">{formBtnTxt}</button>
              <button className="cancel-edit">
                <Link to="/toy">Cancel</Link>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}
