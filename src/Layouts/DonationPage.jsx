import { useLoaderData } from 'react-router-dom';
import DonationCard from '../Components/DonationCard';

const DonationPage = () => {
    const Donations = useLoaderData();
    // console.log(Donations);

    return (
        <div className="mx-auto px-8 bg-black text-white min-h-screen py-8">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold font-dancing text-white">
                    Winter Donation Campaign
                </h1>
                <p className="text-lg font-poppins text-gray-700 mt-3">
                    Join hands to spread warmth and care this winter. Every little effort counts!
                </p>
                <div className="h-1 w-20 bg-red-700 mx-auto mt-2 rounded"></div>
            </div>

            {/* Donation Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Donations.map((donation) => (
                    <DonationCard key={donation.id} donation={donation} />
                ))}
            </div>
        </div>
    );
};

export default DonationPage;
