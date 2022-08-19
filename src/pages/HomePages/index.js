import React from 'react';

import { Header }           from '../../components/HomeComponents/Header';
import { Services }         from '../../components/HomeComponents/Services';
import { Works }            from '../../components/HomeComponents/Works';
import { Team }             from '../../components/HomeComponents/Team';
import { Contact }          from '../../components/HomeComponents/Contact';
import { Technologies }     from '../../components/HomeComponents/Technologies';
import { Feedbacks }        from '../../components/HomeComponents/Feedbacks';

import { NavComponents }    from '../../components/NavComponents/';
import { Footer }           from '../../components/Footer';
import { WhatsappBtn } from '../../components/WhatsappBtn';

export function HomePages() {

    return(
    <>
        <NavComponents/>
        
        <Header/>
        <Services/>
        <Works/>
        <Team/>
        <Contact/>
        <Technologies/>
        <Feedbacks/>
        <WhatsappBtn />
        <Footer/>
    
    </>
    )   
}