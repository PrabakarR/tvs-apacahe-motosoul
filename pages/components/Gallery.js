import React, { useRef } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrowLeft from '../../public/home/gallery/Group46.png'
import arrowRight from '../../public/home/gallery/Group45.png'

const templateTypes = [
  {
    name: 'Gallery one',
    type: 'Gallery',
    img: '/home/gallery/022A8353.jpg'
  },
  {
    name: 'Gallery two',
    type: 'Gallery',
    img: '/home/gallery/022A8368.jpg'
  },
  {
    name: 'Gallery three',
    type: 'Gallery',
    img: '/home/gallery/022A8385.jpg'
  },
  {
    name: 'Gallery four',
    type: 'Gallery',
    img: '/home/gallery/022A8595.jpg'
  },
  {
    name: 'Gallery five',
    type: 'Gallery',
    img: '/home/gallery/gallery-img-1.jpg'
  },
  {
    name: 'Gallery six',
    type: 'Gallery',
    img: '/home/gallery/gallery-img-2.jpg'
  },
  {
    name: 'Gallery seven',
    type: 'Gallery',
    img: '/home/gallery/gallery-img-3.jpg'
  },
  {
    name: 'Gallery eight',
    type: 'Gallery',
    img: '/home/gallery/gallery-img-4.jpg'
  },
  {
    name: 'Gallery nine',
    type: 'Gallery',
    img: '/home/gallery/gallery-img-5.jpg'
  },
  {
    name: 'Gallery ten',
    type: 'Gallery',
    img: '/home/gallery/gallery-img-6.jpg'
  },
  {
    name: 'Gallery 11',
    type: 'Gallery',
    img: '/home/gallery/gallery-img-7.jpg'
  },
  {
    name: 'Gallery 12',
    type: 'Gallery',
    img: '/home/gallery/gallery-img-8.jpg'
  },
];


const Gallery = () => {

  var settingsGallery = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        infinite: false,
        rows: 3,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }]
  };

  const slider = useRef(null);

  return (
    <div className="spaceall ">
      <div className="container">
        <div className="headerstriplit">
          <h3 className="head3 text-black mb-4">Gallery</h3>
          <div className='zoneboxanchors'>
            <div className="arrows-slickgapitems slider-nav">
              <a onClick={() => slider?.current?.slickPrev()} className='news-slickPrev'>
                <Image src={arrowLeft} width={30} className="img-fluid" alt='Arrows' height={30} />
              </a>
              <a onClick={() => slider?.current?.slickNext()} className='news-slickPrev'>
                <Image src={arrowRight} width={30} className="img-fluid" alt='Arrows' height={30} />
              </a>
            </div>
          </div>
        </div>

        <Slider ref={slider} className="gallery-cmain u-slick-gap2" {...settingsGallery}>
          {
            templateTypes.map((img, i) => (
              <div key={i}>
                <div className="gallery-items">
                  <Image src={img.img} className="img-fluid" priority alt={img.name} width={1200} height={1200} />
                </div>
              </div>
            ))
          }


        </Slider>
      </div>
    </div>
  )
}

export default Gallery