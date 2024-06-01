import React from 'react';

const Home = () => {
    return (
        <div className="h-screen w-screen bg-bone">
            <div className="text-center py-5">
                <img src="/paisaje.jpg" alt="Nature" className="mx-auto mb-4 w-6/12"/>
                <h1 className="text-3xl font-bold">NATURE IN ACTION</h1>
            </div>
            <div className="flex justify-around mt-8 p-8 bg-sage text-white">
                <div className="w-1/2">
                    <h2 className="text-xl font-semibold mb-4 text-center">Sobre nosotros</h2>
                    <div className="">
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, 
                        nunc nec ultricies bibendum, nunc nisl ultricies enim, nec ultricies nunc nisl auctor odio. Nullam ac
                        ultricies nunc. Nullam nec nisl nec nisl ultricies ultricies. Nullam nec nisl nec nisl ultricies ultricies.
                        Nullam nec nisl nec nisl ultricies ultricies. Nullam nec nisl nec nisl ultricies ultricies. Nullam nec nisl 
                        nec nisl ultricies ultricies. Nullam nec nisl nec nisl ultricies ultricies. Nullam nec nisl nec nisl ultricies.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Redes sociales</h2>
                    <ul>
                        <li className="mb-2">Facebook</li>
                        <li className="mb-2">Twitter</li>
                        <li className="mb-2">Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
