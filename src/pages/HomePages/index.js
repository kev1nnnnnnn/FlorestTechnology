import React from 'react';

import { Header }           from '../../components/HomeComponents/Header';
import { NavComponents }    from '../../components/NavComponents/';
import { Services }         from '../../components/HomeComponents/Services';
import { Works }            from '../../components/HomeComponents/Works';
import { Team }             from '../../components/HomeComponents/Team';
import { Footer }           from '../../components/Footer';


export function HomePages() {

    return(
    <>
        <NavComponents />
        
        <Header />
        <Services />
        <Works />
        <Team />

        <Footer />
    
    </>
    )   
}