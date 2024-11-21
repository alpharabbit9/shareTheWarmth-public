const HowItWorks = () => {
    return (
        <div className="p-6 ">
            <h2 className="text-4xl font-bold text-center text-[#D72050] mb-6">How It Works</h2>
            <div className="max-w-4xl mx-auto space-y-6 bg-[#181818] p-8 rounded-3xl">
                
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Instructions for Donation</h3>
                    <p className="text-white leading-relaxed">
                        Donating warm clothes through our platform is simple:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Log in to your account or create a new one.</li>
                            <li>Select a campaign from the available options on the homepage.</li>
                            <li>Fill out the donation form with details about the clothing items you wish to donate.</li>
                            <li>Choose whether you’ll drop off the items or need a pick-up service.</li>
                            <li>Submit your donation and wait for confirmation from our team!</li>
                        </ul>
                    </p>
                </div>

               
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Collection Points</h3>
                    <p className="text-white leading-relaxed">
                        You can drop off your donations at any of our convenient collection points:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Dhaka: Dhanmondi Community Center</li>
                            <li>Chattogram: GEC Circle Office</li>
                            <li>Sylhet: Ambarkhana Volunteer Hub</li>
                            <li>Khulna: New Market Drop-Off Zone</li>
                        </ul>
                        If you can’t reach a collection point, our volunteers can arrange a pick-up from your location.
                    </p>
                </div>

              
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Supported Divisions</h3>
                    <p className="text-white leading-relaxed">
                        Our donation drives currently support the following divisions in Bangladesh:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Dhaka</li>
                            <li>Chattogram</li>
                            <li>Sylhet</li>
                            <li>Khulna</li>
                            <li>Rajshahi</li>
                            <li>Barisal</li>
                            <li>Rangpur</li>
                            <li>Mymensingh</li>
                        </ul>
                        We are constantly working to expand our reach to help more communities in need.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
