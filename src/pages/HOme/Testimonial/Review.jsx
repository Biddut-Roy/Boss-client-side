import { useEffect, useState } from "react";
import Section from "../../../component/Section";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className=" mb-10">
            <section>
                <Section
                    subhedding={'What our Client say'}
                    hedding={'Testimonial'}
                ></Section>

                <div className=" my-10">
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            review.map(review => <SwiperSlide key={review._id}>

                                <div className=" my-5 mx-10 flex flex-col items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className=" mx-10">{review.details}</p>
                                    <p className=" pb-5">{review.name}</p>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Review;