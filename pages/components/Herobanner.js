import React from 'react'
import Image from 'next/image'
import HerobannerDesktop from '../../public/home/motosoul-desktop.jpg'
import HerobannerMob from '../../public/home/motosoul-mobile.jpg'


const Herobanner = () => {

    return (
        <div className="hero-banner-full">
            <div className='desktop-banner'>
                <Image src={HerobannerDesktop} priority  className='img-fluid w-100' alt='HeroBanner' width={1920} height={700}></Image>
            </div>
            <div className='mobile-banner'>
                <Image src={HerobannerMob} priority  className='img-fluid w-100' alt='HeroBanner' width={320} height={700}></Image>
            </div>
        </div>
    )
}

export default Herobanner