
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../Components/DonationCard';

const DonationPage = () => {

    const Donations = useLoaderData()
    console.log(Donations);
    return (
        <div className='w-11/12 mx-auto bg-[#C2FFC7]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3'>

                {
                    Donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }



            </div>
        </div>

    );
};

export default DonationPage;