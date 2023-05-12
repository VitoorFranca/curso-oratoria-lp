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
      <head>
        {`<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '944392455614277');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=944392455614277&ev=PageView&noscript=1"
/></noscript>`}
      </head>
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
