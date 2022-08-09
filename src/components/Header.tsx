import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">JANSORIANO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link active" href="/">Home</a>
          <a className="nav-link" href="/">About</a>
          <a className="nav-link" href="/">Projects</a>
          <a className="nav-link" href="/">Blog</a>
          <a className="nav-link" href="/">Contact</a>
        </div>
        <div className="ms-auto">
          <button className='btn btn-primary btn-lg'>
            Download PDF CV
          </button>
        </div>

    </div>
    </nav>
  )
}

export default Header