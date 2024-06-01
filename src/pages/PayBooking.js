import React from 'react';

const PayBooking = () => {
    return (
        <div className='h-screen w-screen bg-bone flex justify-center'>
            <div className="flex justify-evenly p-8 w-full">
                <div className='w-1/3'>
                    <h2 className='text-xl font-semibold mb-6 text-center'>Destination</h2>
                    <p className="mb-6 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                        tortor id aliquet vestibulum, nunc mauris ultrices nunc, nec tincidunt
                        nisl mauris id nunc. Sed id nunc auctor, ultrices nunc sed, aliquet nunc. 
                        Sed id nunc auctor, ultrices nunc sed, aliquet nunc. Sed id nunc auctor, ultrices nunc sed, aliquet nunc.
                    </p>
                    <h2 className='text-xl font-semibold mb-6 text-center mt-0'>Categories</h2>
                    <p className="mb-6 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                        tortor id aliquet vestibulum, nunc mauris ultrices nunc, nec tincidunt
                        nisl mauris id nunc. Sed id nunc auctor, ultrices nunc sed, aliquet nunc. 
                        Sed id nunc auctor, ultrices nunc sed, aliquet nunc. Sed id nunc auctor, ultrices nunc sed, aliquet nunc.
                    </p>
                    <img src="/paisaje.jpg" alt="Nature" className="w-full h-auto mt-8"/>
                </div>
                <div className='w-1/5 flex flex-col justify-start'>
                    <div className='bg-white p-6 rounded-lg mb-8'>
                        <h2 className='text-xl font-semibold mb-6 text-center'>Pago</h2>
                        <div className="flex justify-between mb-4">
                            <p>Precio:</p>
                            <p>$100.00</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p>Impuesto:</p>
                            <p>$10.00</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p>Transporte:</p>
                            <p>$20.00</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p>Total:</p>
                            <p>$130.00</p>
                        </div>
                    </div>
                    <div className="mb-8 mt-20">
                        <h2 className='text-xl font-semibold mb-6 text-center'>Informacion de Logistica</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                            tortor id aliquet vestibulum, nunc mauris ultrices nunc, nec tincidunt
                            nisl mauris id nunc. Sed id nunc auctor, ultrices nunc sed, aliquet nunc. 
                            Sed id nunc auctor, ultrices nunc sed, aliquet nunc. Sed id nunc auctor, ultrices nunc sed, aliquet nunc.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default PayBooking;
