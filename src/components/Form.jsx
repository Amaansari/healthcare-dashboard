import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        new Swal({
            title:"Submission Successful!",
            icon:"success"
        })
    };

    return (
        // <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full h-full bg-white p-8 ">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                    Patient Registration Form
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-lg font-medium text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="age"
                            className="block text-lg font-medium text-gray-600"
                        >
                            Age
                        </label>
                        <select
                            name="age"
                            id="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                        <option value="">Select Age</option>
                        {[...Array(100)].map((_, index) => (
                            <option key={index} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="file"
                            className="block text-lg font-medium text-gray-600"
                        >
                            Upload File
                        </label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={handleChange}
                            className="mt-1 block w-full text-gray-600"
                            required
                        />
                    </div>
                    <div className="text-center text-lg">
                        <button
                            type="submit"
                            className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        // </div>
    );
};

export default Form;
