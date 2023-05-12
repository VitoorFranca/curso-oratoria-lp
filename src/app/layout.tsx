'use client';

import { useState } from 'react'
import { useExitIntent } from 'use-exit-intent'
import Popup from '@/components/Popup'

import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showPopup, setShowPopup] = useState(false);

  const { registerHandler } = useExitIntent({
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
  }

  registerHandler({
    id: 'openModal',
    handler: () => {
      setShowPopup(true);
    }
  })

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}  className={`bg-black text-zinc-50 ${showPopup && 'overflow-hidden'}`}>
        {children}
        <Popup
          show={showPopup}
          handleClosePopup={handleClosePopup}
        />
      </body>
    </html>
  )
}
