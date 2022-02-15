import React from 'react'
import Study from 'src/images/study1.jpg'
import Study1 from 'src/images/study3.jpg'
import Study2 from 'src/images/study2.jpg'
import { MyCrousel } from '../contansts/homepageContants'

const Homecrousel = () => {
  const items = [
    {
      name: Study,
    },
    {
      name: Study1,
    },
    {
      name: Study2,
    },
  ]

  return (
    <MyCrousel
      fullHeightHover={false}
      stopAutoPlayOnHover
      animation="slide"
      indicators
    >
      {items.map((item, i) => (
        <div key={i}>
          <img src={item.name.src} width="100%" height="600px" />
        </div>
      ))}
    </MyCrousel>
  )
}

export default Homecrousel
