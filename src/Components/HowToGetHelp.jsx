import React from 'react';
import { Link } from 'react-router-dom';

const HowToGetHelp = () => {
  return (
    <div className="p-6 lg:p-12 bg-gray-800 text-white rounded-lg shadow-lg max-w-5xl mx-auto mt-12">
      <h1 className="text-3xl lg:text-4xl font-semibold text-[#D72050] text-center mb-6">
        How to Get Help with Winter Clothes
      </h1>
      <p className="text-lg lg:text-xl text-gray-300 text-center mb-8">
        Our mission is to provide warm clothes to those in need during the cold winter months.
        If you're in need of winter clothing, here's how you can receive assistance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-700 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <i className="fas fa-user-circle fa-3x text-[#D72050]"></i>
          </div>
          <h2 className="text-2xl font-semibold text-[#D72050] text-center mb-4">
            Step 1: Register for Assistance
          </h2>
          <p className="text-gray-400 text-center">
            Visit our registration page and fill out a simple form with your details, including
            the size of clothes you need. We will review your request and get back to you as soon
            as possible.
          </p>
        </div>

        <div className="p-6 bg-gray-700 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <i className="fas fa-list fa-3x text-[#D72050]"></i>
          </div>
          <h2 className="text-2xl font-semibold text-[#D72050] text-center mb-4">
            Step 2: Choose Your Items
          </h2>
          <p className="text-gray-400 text-center">
            After registration, we will share the list of available winter clothes. You can choose
            the clothing items that best suit your needs. We offer various sizes and types of
            clothing for all ages.
          </p>
        </div>

        <div className="p-6 bg-gray-700 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <i className="fas fa-truck fa-3x text-[#D72050]"></i>
          </div>
          <h2 className="text-2xl font-semibold text-[#D72050] text-center mb-4">
            Step 3: Delivery to Your Location
          </h2>
          <p className="text-gray-400 text-center">
            Once you've selected your clothes, we will arrange for a delivery to your home or a
            designated drop-off point. Our volunteers will ensure that the items reach you quickly
            and safely.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link to={'/register'} href="#register" className="btn btn-lg btn-success text-white bg-[#D72050] px-8 py-3 rounded-lg shadow-lg hover:bg-[#c91846] transition duration-300">
          Register for Assistance Now
        </Link>
      </div>
    </div>
  );
};

export default HowToGetHelp;
