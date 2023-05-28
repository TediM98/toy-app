// import homepageimg from '../assets/img/homepage2.jpg'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section className="homepage">
      <h1>Welcome to my Toy Store!</h1>
      <main className="main-content flex align-center justify-center">
        <div className="about-link">
          <h3>Check out more about us!</h3>
          <button>
            <Link to="/about">About</Link>
          </button>
        </div>

        <div className="store-link">
          <h3>Check out our store!</h3>
          <button>
            <Link to="/toy">Store</Link>
          </button>
        </div>

        <div className="dashboard-link">
          <h3>More analytics</h3>
          <button>
            <Link to="/dashboard">Dashboard</Link>
          </button>
        </div>
      </main>
    </section>
  )
}
