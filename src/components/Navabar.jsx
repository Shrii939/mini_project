import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {MdAccountCircle} from 'react-icons/md'



const Navabar = () => {
// const navigate = useNavigate();
//   const  handleClick = ()=>{
//     const url = "/user"
//     navigate(url)

//   }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Food Donation</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>About</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to={"/ngo"}>Ngo</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn bg-light border mx-2" type="submit">Login</button>
                            <button className="btn btn-warning mx-2" type="submit">Signin</button>
                            <Link to={"/user"}><MdAccountCircle size={33} className='mx-2'/></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navabar