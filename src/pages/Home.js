import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Newsletter from "../components/newsletter";
import Process from "../components/Process";
import Slider from "../components/Slider";

const Home = () => {
    return ( 
        <>
            <Hero id="hero" />
            <Process id="services" />
            <Slider id="menu" />
            <Gallery />
            <Newsletter id="contact" />
        </>
     );
}
 
export default Home;