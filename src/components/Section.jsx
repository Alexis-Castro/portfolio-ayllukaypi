
export const Section = ({ className, children }) => {
   return (
      <section className={`lg:px-14 lg:py-28 px-14 py-14 relative ${className}`}>
         {children}
      </section>
   )
}
