import React from 'react'
import Footer_menuFooter from './Footer_menuFooter'
import { Footer_location } from './Footer_location'
import { Footer_info } from './Footer_info'

export const Footer = () => {
  return (
    <footer id="footer">
        <div className="wrap">
			<Footer_menuFooter></Footer_menuFooter>
			<Footer_location></Footer_location>
			<Footer_info></Footer_info>

        </div>
    </footer>
  )
}
