import React from 'react'
import Script from 'next/script'
const Contact = () => {
  return (
    <div>
        <Script>
            {`alert("Welcome to contact page")`}
        </Script>
        Contact</div>
  )
}

export default Contact

//title next to favicon for contact page

export const metadata = {
    title: "Contact Facebook",
    description: "This is Contact Facebook which is a social media platform",
  };