import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Destinations = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className='h-full w-full bg-bone flex flex-col items-center justify-center relative'>
            <Link to="/pay_booking" className='absolute top-4 right-4 py-2 px-4 rounded-lg bg-sage hover:bg-pale flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5.4M17 13l1.4 5.4M5.4 5H21m0 0l-1.4 5.4M6 19a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
            </Link>
            <div className='w-4/5 my-8'>
                <h2 className='text-2xl font-semibold mb-4 text-center text-black'>Explora las alturas</h2>
                <div className='bg-white p-4 rounded-lg shadow-lg'>
                    <Slider {...settings}>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?mountain" alt="Mountains" className='rounded-lg' />
                        </div>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?mountain,sky" alt="Mountains and Sky" className='rounded-lg' />
                        </div>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?mountain,adventure" alt="Mountain Adventure" className='rounded-lg' />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='w-4/5 my-8'>
                <h2 className='text-2xl font-semibold mb-4 text-center text-black'>Explora las aguas</h2>
                <div className='bg-white p-4 rounded-lg shadow-lg'>
                    <Slider {...settings}>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?ocean" alt="Ocean" className='rounded-lg' />
                        </div>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?sea" alt="Sea" className='rounded-lg' />
                        </div>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?water" alt="Water" className='rounded-lg' />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='w-4/5 my-8'>
                <h2 className='text-2xl font-semibold mb-4 text-center text-black'>Descubre los caminos</h2>
                <div className='bg-white p-4 rounded-lg shadow-lg'>
                    <Slider {...settings}>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?road" alt="Road" className='rounded-lg' />
                        </div>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?path" alt="Path" className='rounded-lg' />
                        </div>
                        <div className="flex justify-center p-2">
                            <img src="https://source.unsplash.com/400x300/?trail" alt="Trail" className='rounded-lg' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
