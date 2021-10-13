import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className="information">
            <h1>Study In Estonia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit</p>
            <Link to="/information"><button className='btn'>Information</button></Link>
        </div>
        <div className="information">
            <h1>Study In Turkey</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit</p>
            <Link to="/information"><button className='btn'>Information</button></Link>
        </div>
    </>
    );
};

export default Home;