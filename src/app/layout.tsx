// export const metadata = {
//   title: 'Curso de oratória',
//   description: 'Curso de oratória para pessoas que tem dificuldade para falar em publico',
// }
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

  const { unsubscribe, registerHandler } = useExitIntent({
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
    // unsubscribe();
    
  }

  registerHandler({
    id: 'openModal',
    handler: () => {
      console.log('First handler')
      setShowPopup(true);
    }
  })

  registerHandler({
    id: 'anotherHandler',
    handler: () => {
      console.log('Another handler')
    },
    context: ['onUnsubscribe', 'onMobile', "onDesktop"]
  })

  return (
    <html lang="pt-br">
      <body className={`bg-black text-zinc-50 ${showPopup && 'overflow-hidden'}`}>
        {children}
        <Popup
          show={showPopup}
          handleClosePopup={handleClosePopup}
        />
      </body>
    </html>
  )
}
