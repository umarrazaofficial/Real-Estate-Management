import React, { useState } from 'react';
import { StoreSliderWrapper } from './StoreSlider.style';
import StoreImg from '../../../assets/StoreImg.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import storeService from '../../../services/storeService';
import { useNavigate } from 'react-router-dom';
export const Stores = [
  {
    name: "McDonald's, United States",
    business: 'Business 1',
    stores: 1000,
  },
  {
    name: 'KFC, United States',
    business: 'Business 2',
    stores: 1000,
  },
  {
    name: 'Burger king, United States',
    business: 'Business 3',
    stores: 1000,
  },
];

const StoreSlider = ({ data, selected, refrence }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
  };
  const navigate = useNavigate();
  return (
    <StoreSliderWrapper>
      <Slider {...settings} ref={refrence}>
        {data?.businesses?.map((elem, index) => (
          <div
            className={`card-wrapper ${index === selected && 'active'}`}
            key={index}
            onClick={() => navigate(`/business/business-store/${elem?.id}`)}>
            <div className="img-container">
              <img src={StoreImg} alt="store-img" />
            </div>
            <div className="desc">
              <h2 className="title">{elem?.name}</h2>
              <span className="store-count">
                {elem?.salesChannels?.length} {elem?.salesChannels?.length > 1 ? 'Channels' : 'Channel'}
              </span>
            </div>
            <div className="business">Business {index + 1}</div>
          </div>
        ))}
      </Slider>
    </StoreSliderWrapper>
  );
};

export default StoreSlider;
