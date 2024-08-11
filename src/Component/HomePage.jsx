import React from 'react';
import avatar from '../../src/img/4737427.jpg';
import ServiceUs from './ServiceUs';
import About from './About';
import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCheckCircle, faClock, faUser } from '@fortawesome/free-solid-svg-icons';


export default function HomePage() {
  const Counter = ({ end, label , icon }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(end / (duration / 10));
  
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 10);
  
      return () => clearInterval(timer);
    }, [end]);
  
    return (
      <div  style={{ textAlign: 'center', color: 'white' }}>
        <FontAwesomeIcon icon={icon} size="2x" style={{ marginBottom: '10px' , color:"#ccaf55" }} />
        <h1>+{count}</h1>
        <h5>{label}</h5>
      </div>
    );
  };
  

  return (<>
   <main className="main ">

<section className="hero section" >

  <div className="container" >
    <div className="row gy-3">
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="100">
        <img src={avatar} style={{ mixBlendMode: 'multiply'}} className='w-100 img-fluid animated'/>
      </div>

      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-md-end"  data-aos="fade-up">
        <h2 style={{color:"#0e776a"}}>عن لاي أوت</h2>
        <div style={{backgroundColor:"#ccaf55" , padding: "1px"}} className=' w-25 my-2'></div>
        <p>لاي أوت متخصصة في مجال التسويق الإلكتروني
نسعي لتقديم أحدث الحلول التسويقية المبتكرة
التي تلبي تطلعات و توقعات عملائنا لتحقيق
النجاح في أعمالهم التجارية بأعلي مستوايات
الجودة و الكفاءة حيث نقوم بتصميم المواقع
الإلكترونية وإدارة الحملات الإعلانية و التسويقية
في المنصات الإلكترونية المختلفة وصناعة
الإنتاج المرئي بطرق مبتكرة و جذابة لعملائنا
وشركائنا.</p>
        <div className="d-flex mt-4 justify-content-center justify-content-md-start">
        </div>
      </div>

    </div>
  </div>

</section>


<section className="services section light-background">

  <div className="container section-title" data-aos="fade-up">
    <h1 className='fw-bolder' style={{color: "#0e776a"}}>نقدم لك؟</h1>
    <p className='fw-bold'>أهدافنا.. هي امتلاكنا لعدد كبير من المميزات حتى نتميز عن منافسينا</p>
  </div>

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        
        <div className="service-item  position-relative " style={{cursor:'pointer'}}>
            <i className="fa-solid fa-bullhorn fa-2xl mb-3" style={{color: "#ccaf55"}}></i>
            <h3 style={{color: "#0e776a"}} >تقديم حلول عصرية</h3>
          <p className='fs-6 fw-bold'>نتميز في بلاك بيرد بتقديم كافة الحلول العصرية ومتابعة أحدث التطورات في عالم التسويق الرقمي والسوشيال ميديا، مع تقديم مقترحات لنمو أعمالك في كافة المجالات وتقديم خطة تسويقية متكاملة.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        
        <div className="service-item  position-relative " style={{cursor:'pointer'}}>
            <i className="fa-solid fa-bullhorn fa-2xl mb-3" style={{color: "#ccaf55"}}></i>
            <h3 style={{color: "#0e776a"}} >تقديم حلول عصرية</h3>
          <p className='fs-6 fw-bold'>نتميز في بلاك بيرد بتقديم كافة الحلول العصرية ومتابعة أحدث التطورات في عالم التسويق الرقمي والسوشيال ميديا، مع تقديم مقترحات لنمو أعمالك في كافة المجالات وتقديم خطة تسويقية متكاملة.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        
        <div className="service-item  position-relative " style={{cursor:'pointer'}}>
            <i className="fa-solid fa-bullhorn fa-2xl mb-3" style={{color: "#ccaf55"}}></i>
            <h3 style={{color: "#0e776a"}} >تقديم حلول عصرية</h3>
          <p className='fs-6 fw-bold'>نتميز في بلاك بيرد بتقديم كافة الحلول العصرية ومتابعة أحدث التطورات في عالم التسويق الرقمي والسوشيال ميديا، مع تقديم مقترحات لنمو أعمالك في كافة المجالات وتقديم خطة تسويقية متكاملة.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        
        <div className="service-item  position-relative " style={{cursor:'pointer'}}>
            <i className="fa-solid fa-bullhorn fa-2xl mb-3" style={{color: "#ccaf55"}}></i>
            <h3 style={{color: "#0e776a"}} >تقديم حلول عصرية</h3>
          <p className='fs-6 fw-bold'>نتميز في بلاك بيرد بتقديم كافة الحلول العصرية ومتابعة أحدث التطورات في عالم التسويق الرقمي والسوشيال ميديا، مع تقديم مقترحات لنمو أعمالك في كافة المجالات وتقديم خطة تسويقية متكاملة.</p>
        </div>
      </div>


      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        
        <div className="service-item  position-relative " style={{cursor:'pointer'}}>
            <i className="fa-solid fa-bullhorn fa-2xl mb-3" style={{color: "#ccaf55"}}></i>
            <h3 style={{color: "#0e776a"}} >تقديم حلول عصرية</h3>
          <p className='fs-6 fw-bold'>نتميز في بلاك بيرد بتقديم كافة الحلول العصرية ومتابعة أحدث التطورات في عالم التسويق الرقمي والسوشيال ميديا، مع تقديم مقترحات لنمو أعمالك في كافة المجالات وتقديم خطة تسويقية متكاملة.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        
        <div className="service-item  position-relative " style={{cursor:'pointer'}}>
            <i className="fa-solid fa-bullhorn fa-2xl mb-3" style={{color: "#ccaf55"}}></i>
            <h3 style={{color: "#0e776a"}} >تقديم حلول عصرية</h3>
          <p className='fs-6 fw-bold'>نتميز في بلاك بيرد بتقديم كافة الحلول العصرية ومتابعة أحدث التطورات في عالم التسويق الرقمي والسوشيال ميديا، مع تقديم مقترحات لنمو أعمالك في كافة المجالات وتقديم خطة تسويقية متكاملة.</p>
        </div>
      </div>



    </div>

  </div>

</section>



{/* خدماتنا */}
<ServiceUs />


{/* الاحتمالات المحتملة */}
<section className='light-background py-5'>
    <div className="container section-title mt-4 " >
    <h1 className='fw-bolder' style={{color: "#0e776a"}}>احصائيات</h1>
    <p className='fw-bold'>فخورين أننا كنا شركاء بصناعة جزء من نجاح شركائنا</p>
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#1c1c1c', padding: '45px' }}>
      <Counter end={17} label="جوائزنا" icon={faTrophy} />
      <Counter end={49} label="عدد المشروعات" icon={faCheckCircle} />
      <Counter end={575} label="ساعات العمل" icon={faClock} />
      <Counter end={199} label="عملاء راضون" icon={faUser} />
    </div>
</section>


{/* فريقنا */}
<About />





</main>



    </>
  )
}
