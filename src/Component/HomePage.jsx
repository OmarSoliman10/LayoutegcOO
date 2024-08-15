import React from 'react';
import avatar from '../../src/img/4737427.jpg';
import LOGO from '../../src/img//LOGO.png';
import ServiceUs from './ServiceUs';
import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCheckCircle, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OfferYou from './OfferYou';
import Possibilities from './Possibilities';

export default function HomePage() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };


  

  return (<>
{/* تحت navbar */}
<header className="d-flex align-items-center">
      <div className="header-content text-white ps-4">
        <div className="social-container py-1 text-center">
          <motion.div
            className='m-auto'
            style={{ width: "40%" }}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 1 }}
          >
            <img src={LOGO} className='w-100' alt="Company Logo" />
          </motion.div>

          {/* العنوان مع الحركة */}
          <motion.h1
            className='my-2'
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            شركة تسويق إلكتروني
          </motion.h1>

          {/* الفقرة الأولى مع الحركة */}
          <motion.p
            className='m-0 pt-2 fw-bold'
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1.2 }}
          >
            نقدم حلول مبتكرة واستراتيجيات مدروسة
          </motion.p>

          {/* الفقرة الثانية مع الحركة */}
          <motion.p
            className='m-0 fw-bold'
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1.4 }}
          >
            لتحويل علامتك التجارية الى رمز يثق به الناس
          </motion.p>

        </div>
      </div>
</header>

{/* نقدم لك؟ */}
<OfferYou />

{/* خدماتنا */}
<ServiceUs />

{/* الاحتمالات المحتملة */}
<Possibilities />

{/* تواصل معانا */}
<Contact />


    </>
  )
}
