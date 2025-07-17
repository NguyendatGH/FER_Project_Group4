import React, { useState } from 'react';
   import SectionTitle from '../Common/SectionTitle';
   import ModalVideo from 'react-modal-video';
  //  import {ShapeSvg} from '../../../public/images/video/shape.svg'; 
   import './Video.css';

   const Video = () => {
     const [isOpen, setOpen] = useState(false);

     return (
       <section className="video-section">
         <div className="container">
           <SectionTitle
             title="We are ready to help"
             paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
             center
             mb="80px"
           />
           <div className="video-wrapper">
             <div className="video-container">
               <div className="video-image-wrapper">
                 {/* <img src={ShapeSvg} alt="video-imgage" className="video-image" /> */}
                 <div className="play-button-wrapper">
                   <button
                     aria-label="video play button"
                     onClick={() => setOpen(true)}
                     className="play-button"
                   >
                     <svg
                       width="16"
                       height="18"
                       viewBox="0 0 16 18"
                       className="fill-current"
                     >
                       <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                     </svg>
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <ModalVideo
           channel="youtube"
           autoplay={true}
           start={true}
           isOpen={isOpen}
           videoId="L61p2uyiMSo"
           onClose={() => setOpen(false)}
         />
         {/* <div className="background-shape" style={{ backgroundImage: `url(${ShapeSvg})` }}></div>  */}
       </section>
     );
   };

   export default Video;