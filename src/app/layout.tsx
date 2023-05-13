'use client';

import { useEffect, useState } from 'react'
import { useExitIntent } from 'use-exit-intent'
import Popup from '@/components/Popup'

import './globals.css'
import router from 'next/router';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showPopup, setShowPopup] = useState(false);

  const { registerHandler, unsubscribe } = useExitIntent({
    "cookie": {
      "daysToExpire": 30,
      "key": "use-exit-intent"
    },
    "desktop": {
      "triggerOnIdle": false,
      "useBeforeUnload": false,
      "triggerOnMouseLeave": true,
      "delayInSecondsToTrigger": 1
    },
    "mobile": {
      "triggerOnIdle": true,
      "delayInSecondsToTrigger": 1
    }
  })

  const handleClosePopup = () => {
    setShowPopup(false);
    unsubscribe();
  }

  registerHandler({
    id: 'openModal',
    handler: () => {
      setShowPopup(true);
    }
  })
  
    useEffect(() => {
      import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init('944392455614277')
          ReactPixel.pageView()
  
          router.events.on('routeChangeComplete', () => {
            ReactPixel.pageView()
          })
        })
    }, [router.events])

  return (
    <html lang="pt-br">


      <body suppressHydrationWarning={true}  className={`bg-black text-zinc-50 ${showPopup && 'overflow-hidden'}`}>
        {/* <Pixel name="FACEBOOK_PIXEL_1" /> */}
        {children}
        <Popup
          show={showPopup}
          handleClosePopup={handleClosePopup}
        />
      </body>
    </html>
  )
}
