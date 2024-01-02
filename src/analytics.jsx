import React from 'react'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

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