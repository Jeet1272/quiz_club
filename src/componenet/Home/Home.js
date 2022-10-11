import React from 'react';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    return (
        <div>
            <header className='home-top'>
                <img src="https://media.istockphoto.com/photos/self-development-motivational-words-quotes-concept-picture-id1128571392?k=20&m=1128571392&s=612x612&w=0&h=uV78D0qPbCSWmHqqKQcZnaH4Cl_LtMkKDq98f-2x03Y=" alt="development_image" />
                <h3>Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your skills. Explore. Dream. Discover</h3>
            </header>
            <section>
                {/* <Topics></Topics> */}
            </section>
        </div>
    );
};

export default Home;