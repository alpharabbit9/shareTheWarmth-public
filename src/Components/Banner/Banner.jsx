import one from '../../assets/bg-image/73e5cb1fc1641cbcb62dd004e18ff6ab.png'
import two from '../../assets/bg-image/638475999723a88243d3a74a79af6033.png'
import three from '../../assets/bg-image/688821175f712efa1a0d6d07052b9a78.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full font-poppins">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={one} className="w-full h-screen object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
                    <h1 className='text-5xl font-bold animate__animated animate__fadeInRight text-amber-50'>Share the Warmth This Winter</h1>
                </div>
                {/* Navigation */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={two} className="w-full h-screen object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
                <h1 className='text-5xl font-bold animate__animated animate__fadeInRight text-amber-50'>Warm Hands, Warm Hearts</h1>
                
                </div>
                {/* Navigation */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={three} className="w-full h-screen object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
                <h1 className='text-5xl font-bold animate__animated animate__fadeInRight text-amber-50'>Share the Warmth This Winter</h1>
                </div>
                {/* Navigation */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
