import { Contacto } from '../components/Contacto'
import { Documentos } from '../components/Documentos'
import { Inicio } from '../components/Inicio'
import { InversionRentabilidad } from '../components/InversionRentabilidad'
import { Legal } from '../components/Legal'
import { Nosotros } from '../components/Nosotros'
import { PortadaFin } from '../components/PortadaFin'
import { Premio } from '../components/Premio'
import { Proyectos } from '../components/Proyectos'
import { Ubicacion } from '../components/Ubicacion'

export const Layout = () => {
   return (
      <>
         <Inicio />

         <Nosotros />

         <Proyectos />

         <Legal />

         <Documentos />

         <Ubicacion />

         <InversionRentabilidad />

         <Contacto />

         <Premio />

         <PortadaFin />

         {/* <Section className={"bg-slate-400"}>
            <div className="container mx-auto">
               
            </div>
         </Section> */}

      </>
   )
}
