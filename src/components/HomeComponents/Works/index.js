import React from "react";
// import {Carousel } from 'react-bootstrap';
import InfiniteCarousel from 'react-leaf-carousel';

// import * as C from './styles';
import works from '../../../assets/img/works.png'


export function Works() {

    const data = [ 
        {   
            img: require('../../../assets/img/works.png'),
            title: 'title',
            text: 'text',
        },
        {   
            img: require('../../../assets/img/works.png'),
            title: 'title',
            text: 'text',
        },
        {   
            img: require('../../../assets/img/works.png'),
            title: 'title',
            text: 'text',
        },
    ]

    
    return(

        <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={.5}
        sideSize={.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        <div>
          <img
            alt=''
            src={works}
          />
        </div>
        <div>
          <img
            alt=''
            src={works}
          />
        </div>
        <div>
          <img
            alt=''
            src={works}
          />
        </div>
        <div>
          <img
            alt=''
            src={works}
          />
        </div>
        <div>
          <img
            alt=''
            src={works}
          />
        </div>
      
      
      </InfiniteCarousel>
    );
}