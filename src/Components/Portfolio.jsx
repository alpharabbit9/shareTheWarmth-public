import img from '../assets/DALL·E 2024-11-17 23.50.52 - An illustration of volunteers distributing winter clothes to underprivileged families in Dhaka slums during a chilly winter evening. The scene feature.webp';

const Portfolio = () => {
    return (
        <div className="p-4 w-11/12 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-16">
                <div className="flex-1">
                    <h1 className="text-3xl lg:text-5xl font-bold text-[#D72050] mt-3 mb-5 leading-tight">
                        With Your Support, Everyone Can <br /> Enjoy A Warm Cloth
                    </h1>
                    <p className="text-gray-500 text-base lg:text-lg mt-3 mb-6">
                        Donating to SPAR’s Winter Appeal Special program is a meaningful way to make a positive change in the lives of those who are most helpless during the winter months. Your donated clothes bring warmth, comfort, and hope to those who need them most.
                    </p>
                    <div className="stats bg-black text-white p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="stat text-center">
                            <div className="stat-title text-gray-400">Total Donations</div>
                            <div className="stat-value text-2xl font-bold">12,345 Items</div>
                            <div className="stat-actions mt-3">
                                <button className="btn btn-sm btn-success w-full">Contribute Now</button>
                            </div>
                        </div>
                        <div className="stat text-center">
                            <div className="stat-title text-gray-400">Active Campaigns</div>
                            <div className="stat-value text-2xl font-bold">8 Campaigns</div>
                            <div className="stat-actions mt-3">
                                <button className="btn btn-sm btn-secondary w-full">View Campaigns</button>
                            </div>
                        </div>
                        <div className="stat text-center">
                            <div className="stat-title text-gray-400">Active Volunteers</div>
                            <div className="stat-value text-2xl font-bold">450+ Volunteers</div>
                            <div className="stat-actions mt-3">
                                <button className="btn btn-sm btn-info w-full">Join Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-3xl shadow-lg"
                        src={img}
                        alt="Volunteers distributing clothes"
                    />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
