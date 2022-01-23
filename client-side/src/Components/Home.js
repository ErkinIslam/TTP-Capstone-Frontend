import React from 'react';
import { Link } from 'react-router-dom'

function Home() {

    return (
        <div class="jumbotron">
            <h1 class="display-4">Burger HQ!</h1>
            <p class="lead">Create your own Specialty burgers!</p>

            <p>Choose from dozenes of choices of ingredients where you can freely mix and match however you want</p>
            <Link class="btn btn-primary btn-lg" to="/Login" role="button">Get Started</Link>
        </div>
    )
}

export default Home;