import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'
import '@common/css/layout.scss'
import '../style/global.css'
// import "slick-carousel/slick/sli";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Script from 'next/script'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Script
      src="https://kit.fontawesome.com/8773ed09b3.js"
      strategy="afterInteractive"
    />
    <Component {...pageProps} />
  </>
)

export default storeWrapper.withRedux(CustomApp)
