import React, { useRef } from 'react'
import Image from 'next/image'





const Gallery = () => {

  // var settingsGallery = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 300,
  //   rows: 2,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [{
  //     breakpoint: 768,
  //     settings: {
  //       infinite: false,
  //       rows: 3,
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //     }
  //   }]
  // };

  // const slider = useRef(null);

  return (
    <div className="spaceall ">
      <div className="container">
        <div className="headerstriplit">
          <h3 className="head3 text-black mb-4">Gallery</h3>
          <div className='zoneboxanchors'>
            <div className="arrows-slickgapitems slider-nav">
             
            </div>
          </div>
        </div>

        {/* <Slider ref={slider} className="gallery-cmain u-slick-gap2" {...settingsGallery}>
          {
            templateTypes.map((img, i) => (
              <div key={i}>
                <div className="gallery-items">
                  <Image src={img.img} className="img-fluid" priority alt={img.name} width={1200} height={1200} />
                </div>
              </div>
            ))
          }


        </Slider> */}
      </div>
    </div>
  )
}

export default Gallery