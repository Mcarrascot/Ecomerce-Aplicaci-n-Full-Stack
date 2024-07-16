import Hero from '../components/Hero/Hero';
import TopProducts from '../components/TopProducts/TopProducts';
import Subscribe from '../components/Subscribe/Subscribe';



const Home = () => {
  return (
    <div className='home-page '>
        <Hero />
        <TopProducts />
        <Subscribe />
    </div>
  );
};

export default Home;
