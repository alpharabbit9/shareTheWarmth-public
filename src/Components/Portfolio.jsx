import img from '../assets/DALL·E 2024-11-17 23.50.52 - An illustration of volunteers distributing winter clothes to underprivileged families in Dhaka slums during a chilly winter evening. The scene feature.webp';


const Portfolio = () => {
    return (
        <div className="p-4 w-11/12 ">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-[#D72050] mt-3 mb-3">
                        With Your Support, Everyone Can <br /> Enjoy A Warm Cloth
                    </h1>

                    <p className='text-gray-500 mt-3 mb-3'>
                        Donating to SPAR’s Winter appeal Special program is a meaningful way to make a positive change in the lives of those who are most helpless during the winter months. Your donate clothes to homeless brings warmth, comfort, and hope to those who need them most.
                    </p>

                    <div className="stats bg-black text-white p-4 rounded-lg">
                       
                        <div className="stat">
                            <div className="stat-title text-white">Total Donations</div>
                            <div className="stat-value">12,345 Items</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm btn-success">Contribute Now</button>
                            </div>
                        </div>

                        
                        <div className="stat">
                            <div className="stat-title text-white">Active Campaigns</div>
                            <div className="stat-value">8 Campaigns</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm btn-secondary">View Campaigns</button>
                            </div>
                        </div>

                     
                        <div className="stat">
                            <div className="stat-title text-white">Active Volunteers</div>
                            <div className="stat-value">450+ Volunteers</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm btn-info">Join Us</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex-1 flex justify-center">
                    <img className="w-full max-w-lg md:max-w-lg rounded-3xl" src={img} alt="Volunteers in Sylhet tea garden" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;