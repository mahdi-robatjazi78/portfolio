import React from 'react'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const VercelAnalyticsComponent = ({children}) => {
  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
  </>
  )
}

export default VercelAnalyticsComponent