import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import sw1 from '../../../../assets/home/slide1.jpg'
import sw2 from '../../../../assets/home/slide2.jpg'
import sw3 from '../../../../assets/home/slide3.jpg'
import sw4 from '../../../../assets/home/slide4.jpg'
import sw5 from '../../../../assets/home/slide5.jpg'
import Section from '../../../component/Section';



const Swipers = () => {
    return (
        <>
            <Section
            subhedding={"From 11:00am to 10:00pm"}
            hedding={"ORDER ONLINE"}
            >
            </Section>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-5"
            >
                <SwiperSlide>
                    <img src={sw1} alt="" />
                    <h1 className='-mt-12 text-2x uppercase text-center text-base-100'>name</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sw2} alt="" />
                    <h1 className='-mt-12 text-2x uppercase text-center text-base-100'>name</h1>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={sw3} alt="" />
                    <h1 className='-mt-12 text-2x uppercase text-center text-base-100'>name</h1>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={sw4} alt="" />
                    <h1 className='-mt-12 text-2x uppercase text-center text-base-100'>name</h1>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={sw5} alt="" />
                    <h1 className='-mt-12 text-2x uppercase text-center text-base-100'>name</h1>

                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Swipers;