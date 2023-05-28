import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.scss'

import { store } from './store/store'
import { ToyIndex } from './pages/toy-index'
import { ToyEdit } from './pages/toy-edit'
import { ToyDetails } from './pages/toy-details'
import { AppHeader } from './cmps/app-header'
import { DashBoard } from './pages/dashboard'
import { HomePage } from './pages/homepage'
import { AboutUs } from './pages/about'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="App">
          <AppHeader />
          <main>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutUs />} path="/about" />
              <Route element={<DashBoard />} path="/dashboard" />
              <Route
                element={<ToyIndex />}
                path="/toy"
                className="main-layout"
              />
              <Route element={<ToyDetails />} path="/toy/:toyId" />
              <Route element={<ToyEdit />} path="/toy/edit" />
              <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
            </Routes>
          </main>
          {/* <AppFooter /> */}
        </section>
      </Router>
    </Provider>
  )
}
