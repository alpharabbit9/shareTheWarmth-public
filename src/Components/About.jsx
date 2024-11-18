import img from '../assets/DALL·E 2024-11-17 23.50.48 - An illustration of volunteers distributing blankets and sweaters to tea garden workers in Sylhet, Bangladesh. The scene is set in a lush tea garden du.webp';

const About = () => {
    return (
        <div className="p-4">
            <h2 className="text-4xl font-bold text-[#D72050] text-center mb-6">About Us</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex-1 flex justify-center">
                    <img className="w-full max-w-lg md:max-w-lg rounded-3xl" src={img} alt="Volunteers in Sylhet tea garden" />
                </div>
                <div className="flex-1">
                    <p className="text-justify font-normal text-white">
                        Welcome to the Winter Clothing Donation platform, a community-driven initiative dedicated to spreading warmth and hope across Bangladesh. Our mission is simple yet powerful: to ensure that no one has to endure the harsh winter without adequate clothing.
                        <br /><br />
                        When the cold season arrives, thousands of individuals in rural and low-income areas face immense challenges due to a lack of warm clothing. This platform bridges the gap between those willing to give and those in desperate need.
                        <br /><br />
                        Through our easy-to-use website, we connect generous donors with dedicated volunteers to facilitate the collection and distribution of winter clothing. Together, we aim to reach the most vulnerable communities and provide them with the warmth and comfort they deserve.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
