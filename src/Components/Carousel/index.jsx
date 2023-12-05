import Card from '../Card';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';
export default ({ navId, data }) => {
    return <div className='carousel-container'>
        <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={7}
        // centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        // navigation={true}
        navigation={{ nextEl: `.arrow-left-${navId}`, prevEl: `.arrow-right-${navId}` }}
        virtual
      >
        {data.map(cardData => <SwiperSlide key={cardData.id}><Card
            imgSrc={cardData.image}
            followersCount={cardData.follows}
            label={cardData.title}
            /></SwiperSlide>)}
        
      </Swiper>

      <div className={`arrow-left-${navId} arrow-left arrow`}><img src="/lefticon.png" /></div>
      <div className={`arrow-right-${navId} arrow-right arrow`}><img src="/righticon.png" /></div>

      </div>

}