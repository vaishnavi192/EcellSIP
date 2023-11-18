import React from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const app = () => {
  return (
    <React.Fragment>
      
      <nav className="nav justify-content-end"> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Job Listing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
      <h1 className = 'text-center text-capitalize my-2'>Welcome to</h1>
      <h2 className = 'text-center text-capitalize mb-5'>STUDENTS INTERNSHIP PORTAL!</h2>
      <a className="nav-link dropdown-toggle ms-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By Domains</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Software Engineering</a></li>
            <li><a class="dropdown-item" href="#">Electrical Engg</a></li>
            <li><a class="dropdown-item" href="#">Robotics</a></li>
          </ul>
      <div className="container text-center">
  <div className="row">
    <div className="col"> 
    <div class="card my-3" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height = "200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card my-3" >
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="..."height = "200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card my-3" >
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height = "200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
<div className="container text-center">
  <div className="row">
    <div className="col"> 
    <div class="card my-3" >
  <img src="https://picsum.photos/202/300" class="card-img-top" alt="..." height = "200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card my-3" >
  <img src="https://picsum.photos/204/300" class="card-img-top" alt="..."height = "200px" padding = "20px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card my-3" >
  <img src="https://picsum.photos/203/301" class="card-img-top" alt="..." height = "200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
    </React.Fragment>
  )
}
export default app;
