import React, { useState } from 'react';

const SignUp = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleTermsChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">Nombre</label>
                            <input type="text" id="firstName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Apellido</label>
                            <input type="text" id="lastName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Edad</label>
                            <input type="number" id="age" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cedula" className="block text-gray-700 font-semibold mb-2">Cédula</label>
                            <input type="text" id="cedula" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo electrónico</label>
                            <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cellphone" className="block text-gray-700 font-semibold mb-2">Celular</label>
                            <input type="tel" id="cellphone" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>
                    <div className="mt-8 col-span-3">
                        <button type="submit" className="w-full bg-sage text-white font-semibold px-4 py-2 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800">Registrarse</button>
                    </div>
                </form>
                <div className="mt-8 text-center text-gray-600 col-span-3">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox text-sage focus:ring-green-500 h-4 w-4" checked={termsAccepted} onChange={handleTermsChange} />
                        <span className="ml-2">Acepto los <a href="#" className="text-sage hover:underline">términos y condiciones</a></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
