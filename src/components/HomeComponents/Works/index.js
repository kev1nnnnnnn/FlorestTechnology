import React from "react";
// import {Carousel } from 'react-bootstrap';
import InfiniteCarousel from 'react-leaf-carousel';

import * as C from './styles';
import dozeapostolos from '../../../assets/img/12apostolos-carousel.jpeg';
import alecy from '../../../assets/img/alecy-carousel.jpeg';
import frota from '../../../assets/img/frotaonline-carousel.jpeg';
import movelplay from '../../../assets/img/movelPlay-carousel.jpeg';

import { Container } from "react-bootstrap";


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
        <Container>

        <C.Title>Conheça nosso projetos!</C.Title>
   
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
          <C.Image
            alt=''
            src={dozeapostolos}
          />
        </div>
        <div>
          <C.Image
            alt=''
            src={alecy}
          />
        </div>
        <div>
          <C.Image
            alt=''
            src={frota}
          />
        </div>
        <div>
          <C.Image
            alt=''
            src={movelplay}
          />
        </div>
       
      
      
      </InfiniteCarousel>
      </Container>
    );
}