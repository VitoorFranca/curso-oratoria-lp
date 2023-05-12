'use server'

import React from 'react'
import Head  from 'next/head'

import FacebookPixel from "@/libs/facebook/pixel-1"

type Props = {
    name: "FACEBOOK_PIXEL_1";
}

const Pixel = ({ name }: Props) => {

  return(
    <Head>
        <title>AAAKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</title>
      {name === 'FACEBOOK_PIXEL_1' && <FacebookPixel />}
    </Head>
  )
}

export default Pixel;