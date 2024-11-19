import React from 'react';
import Form from './components/Form';
import ImageSlider from './components/ImageSlider';
const App = () => {
    return (
        <div className="app flex flex-col min-h-screen p-10">
            <h1 className="text-4xl font-extrabold text-indigo-600 p-3">
                  Dashboard
            </h1>
              <div className="flex flex-col md:flex-row flex-grow my-auto">
                <div className="md:w-1/2 w-full">
                  <ImageSlider />
                  {/* <img src="/images/image1.png" alt="" /> */}
                </div>
                <div className="md:w-1/2 w-full">
                  <Form />
                </div>
              </div>
        </div>
    );
};

export default App;
