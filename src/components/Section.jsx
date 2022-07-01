import React from 'react'

export const Section = ({ className, children }) => {
   return (
      <section className={`lg:px-14 lg:py-14 px-11 py-14 relative ${className}`}>
         {children}
      </section>
   )
}
