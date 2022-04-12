import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='container'>
            <div className='row align-items-center min-vh-100'>
                <div className='col-md-6' >
                    <h2 className='text-dark'>
                        A Painting <span className='text-info'>Explosion</span> our Feeling
                    </h2>
                    <p>
                        A painting is the foundation of a feelings explosion; images and colors that hide inside common perceptions like hope, desire, recovery. It may serve as a sole contemplation medium. Sometimes it may be a better therapy than medicine. The effect becomes stronger when one feels it can pass it to others too. A painting is a gift for everyone. It may be a scan of a destiny and may serve as therapy for the one that finds himself in this creative universe. The importance resides in the strong corelation of “state” and “color” along sent message.
                    </p>
                    <div className=' d-flex gap-2'>
                        <Button variant="info text-light">Learn More</Button>
                        <Button variant="info text-light">Buy Painting </Button>
                    </div>
                </div>
                <img className='col-md-6' src="https://www.nguyenartgallery.com/wp-content/uploads/Benefits-Of-Painting.jpg" alt="paintingImage" />
            </div>
        </div>
    );
};

export default Home;