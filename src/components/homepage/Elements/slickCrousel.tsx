import React from 'react'
import RecipeReviewCard from './card'
import { MySlider, CardCoverCrousel } from '../contansts/homepageContants'
import { Settings } from '../contansts/homepageContants'
const ElasticCrousel = () => {
  return (
    <MySlider {...Settings}>
      <CardCoverCrousel>
        <RecipeReviewCard />
      </CardCoverCrousel>

      <CardCoverCrousel>
        <RecipeReviewCard />
      </CardCoverCrousel>

      <CardCoverCrousel>
        <RecipeReviewCard />
      </CardCoverCrousel>

      <CardCoverCrousel>
        <RecipeReviewCard />
      </CardCoverCrousel>

      <CardCoverCrousel>
        <RecipeReviewCard />
      </CardCoverCrousel>

      <CardCoverCrousel>
        <RecipeReviewCard />
      </CardCoverCrousel>

      <CardCoverCrousel>
        <RecipeReviewCard />
      </CardCoverCrousel>
    </MySlider>
  )
}

export default ElasticCrousel
