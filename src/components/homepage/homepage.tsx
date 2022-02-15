import * as React from 'react'
import TemporaryDrawer from '@components/homepage/Elements/sidebarcover'
import Homecrousel from './Elements/crousel'
import VariantSkeleton from './Elements/skeleton'
import ElasticCrousel from './Elements/slickCrousel'

import {
  MyGridCover,
  SkeletonCover,
  MyHomeBodyCover,
  MyTopography,
  MyGrid,
  Bottomcover,
  MyHomeBody,
} from './contansts/homepageContants'

export default function Homepage() {
  const [loading, setLoading] = React.useState(true)
  return (
    <>
      {loading ? (
        <SkeletonCover onClick={() => setLoading(false)}>
          <VariantSkeleton />
        </SkeletonCover>
      ) : (
        <TemporaryDrawer>
          <MyHomeBodyCover>
            <MyHomeBody>
              <MyTopography variant="h3">Discover</MyTopography>
              <MyGridCover container spacing={3}>
                <MyGrid item xs={12} md={8}>
                  {' '}
                  <Homecrousel />
                </MyGrid>
                <MyGrid item xs={12} md={4}>
                  {' '}
                  <Homecrousel />
                </MyGrid>
              </MyGridCover>
              <Bottomcover>
                <MyTopography variant="h4">Most Watched</MyTopography>
                <ElasticCrousel />
              </Bottomcover>
            </MyHomeBody>
          </MyHomeBodyCover>
        </TemporaryDrawer>
      )}
    </>
  )
}
