import { Helmet } from 'react-helmet-async';
import Feature from '../features/Feature';
import Menu from "../Menu/Menu";
import Banner from "../Slider/Banner";
import Swipers from "../Swiper/Swipers";
import Review from "../Testimonial/Review";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO || HOME</title>
                <link rel="canonical"  />
            </Helmet>
           <Banner></Banner>
           <Swipers></Swipers>
           <Menu></Menu>
           <Feature></Feature>
           <Review></Review>
        </div>
    );
};

export default Home;