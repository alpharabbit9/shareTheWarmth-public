import { useParams, useLoaderData } from "react-router-dom";
import './DonationDetail.css';

const DonationDetail = () => {
    const { id } = useParams();
    const donationData = useLoaderData();


    const selectedCampaign = donationData.find(donation => donation.id.toString() === id);

    if (!selectedCampaign) {
        return <h1>Campaign not found</h1>;
    }

    const { title, image, description, division } = selectedCampaign;

    return (
        <div>
            <div className="flex justify-between items-center gap-4 p-4 background ">
                <div className="p-6 border border-white  rounded-3xl text-center background-content">
                    <img src={image} alt={title} className="w-96 h-80 object-cover rounded-lg mx-auto" />
                    <h1 className="text-3xl font-bold mt-4">{title}</h1>
                    <p className="text-white mt-2">{description}</p>
                    <p className="text-white mt-2">Division: {division}</p>
                    
                </div>


            </div>

            <section>


                <div className="bg-black text-center  text-white p-7">
                    <h1 className="text-4xl font-bold mt-3 mb-3">Give the Gift of Warmth This Winter</h1>
                    <p className="font-semibold">Make a Difference Today</p>
                    <div className="p-6 rounded-3xl text-center background-content">
                        <input
                            type="text"
                            placeholder="Quantity of items (e.g., 2 jackets, 3 blankets) "
                            className="input input-bordered input-primary w-96 mt-2 mb-2 py-2  max-w-none rounded-3xl bg-gray-800" />
                        <br />
                        <input
                            type="text"
                            placeholder="Item type (e.g., blanket, jacket, sweater)"
                            className="input input-bordered input-primary w-96 mt-2 mb-2 py-2  max-w-none rounded-3xl bg-gray-800" />
                        <br />
                        <input
                            type="text"
                            placeholder="Pickup location"
                            className="input input-bordered input-primary w-96 mt-2 mb-2 py-2  max-w-none rounded-3xl bg-gray-800" />
                        <br />
                        <input
                            type="text"
                            placeholder="Additional notes (optional)"
                            className="input input-bordered input-primary w-96 mt-2 mb-2 py-2 l max-w-none rounded-3xl bg-gray-800" />
                        <br />
                        <input
                            type="submit"
                            placeholder=""
                            className="input bg-[#D72050] input-bordered input-primary w-96 mt-2 mb-2 py-2 l max-w-none rounded-3xl " />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonationDetail;
