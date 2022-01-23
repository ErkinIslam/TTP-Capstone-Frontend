import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.LogIn(this.state.user)
    this.setState({redirect: true})
  }
  
  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }


  render () {
    if (this.state.redirect) {
      return (<Navigate to="/userProfile"/>)
    }

    return (
        
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <nav class="navbar navbar-expand-lg navbar-dark ">
  <a class="navbar-brand" href="#">Login</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">User Home</a>
      </li>
      <Link class="btn btn-primary btn-lg" to="/Login" role="button">Login</Link>
    </ul>
  </div>
</nav>
          <h1>Burger HQ</h1>
          <img src="https://dcassetcdn.com/design_img/2808265/132070/132070_15359255_2808265_834eb78a_image.jpg" alt="Burger HQ Logo"/>


            <label htmlFor="userName">  </label>
            <input type="text" placeHolder = "  Username" name="username" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input type="text" placeHolder = "  email" name="email" />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input type="text" placeHolder = "  password" name="password" />
          </div>
          <button>Register</button>

        </form>
      </div>
    )
  }
}

export default Login 