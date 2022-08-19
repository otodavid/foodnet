import {
  Gallery,
  Hero,
  Newsletter,
  Process,
  Slider,
} from '../components';

const Home = () => {
  return (
    <>
      <Hero id='hero' />
      <Process id='how-it-works' />
      <Slider id='menu' />
      <Gallery id='gallery' />
      <Newsletter id='contact' />
    </>
  );
};

export default Home;
