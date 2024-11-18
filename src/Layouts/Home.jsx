import About from "../Components/About";
import Banner from "../Components/Banner/Banner";
import HowItWorks from "../Components/HowItWorks";
import Portfolio from "../Components/portfolio";


const Home = () => {
    return (
        <div className="bg-black text-white">
            <header className="mb-3">
                <Banner></Banner>
            </header>

            <section className="mx-auto w-11/12 mb-3">
                <About></About>
            </section>

            <section className="mx-auto w-11/12 mb-3">
                <HowItWorks></HowItWorks>
            </section>

            <section className="mx-auto w-11/12 ">
                <Portfolio></Portfolio>
            </section>
            <main></main>
        </div>
    );
};

export default Home;