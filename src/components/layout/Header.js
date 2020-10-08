import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { title } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-0">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/"><i className="fa fa-home mr-1"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts/add"><i className="fa fa-plus mr-1"></i>Add</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/"><i className="fa fa-plus"></i>Pricing</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;