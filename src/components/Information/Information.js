import React from 'react';
import { Link } from 'react-router-dom';
import './Information.css'

const Information = () => {
    return (
        <>
            <div className="information">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit veritatis optio dicta ducimus. Architecto est error necessitatibus culpa impedit, adipisci optio deleniti voluptatibus libero dolorum natus in deserunt molestias?</p>
                <Link to="/scholarship"><button className='btn'>Scholarship</button></Link>
            </div>
            <div className="information">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit veritatis optio dicta ducimus. Architecto est error necessitatibus culpa impedit, adipisci optio deleniti voluptatibus libero dolorum natus in deserunt molestias?</p>
                <Link to="/scholarship"><button className='btn'>Scholarship</button></Link>
            </div>
        </>
    );
};

export default Information;