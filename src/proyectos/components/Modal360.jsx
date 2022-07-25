// import { useState } from 'react';
// import styles from '../styles/Modal360.module.css';

// export const Modal360 = ({ className = ""}) => {

//    const [showModal, setShowModal] = useState(false);

//    return (
//       <div className={`${styles.modal} ${className} inset-0`} id="embed-360">
//          <div className={`${styles['modal-background']} absolute inset-0`}></div>

//          <div className="modal-content-360 h-full left-0 fixed top-0 w-full z-[500]">

//             <iframe 
//                src="https://ayllukaypi.pe/files/360/villa-los-parques" 
//                // className="min-h-screen" 
//                width="100%" 
//                height="100%"
//                frameBorder="0"
//                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                allowFullScreen

//             >
//             </iframe>

//          </div>

//          <button
//             className="text-white w-full md:w-auto md:first:mb-0 bg-azul-oscuro rounded-lg text-sm px-4 py-1.5 text-center uppercase font-bold shadow-lg transition-transform duration-200 hover:scale-105 md:text-lg first:mb-3 flex items-center absolute top-20 right-0 z-[1000]"
//             id="close-360"
//             aria-label="close"
//             onClick={() => setShowModal(false)}
//          >
//             Volver
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
//                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//             </svg>
//          </button>
//       </div>
//    )
// }
