import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default function Contact() {

  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#1c1c1c',
      color: 'white',
      borderRadius: '10px'
    },
    heading: {
      textAlign: 'center',
      color: '#A36EFF'
    },
    subheading: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    formGroup: {
      marginBottom: '15px'
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxSizing: 'border-box'
    },
    buttonContainer: {
      textAlign: 'center'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#243f3b',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      cursor: 'pointer'
    },
    successMessage: {
      color: 'green',
      textAlign: 'center',
      marginTop: '20px'
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginTop: '20px'
    }
  };
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send('service_db5jmrd', 'template_9kxw5sl', formData, 'AdW3TwGYz5CV7z-gc')
      .then((result) => {
        setSuccess(true);
        setSending(false);
        toast.success('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, (error) => {
        setSuccess(false);
        setSending(false);
        toast.error('There was an error sending your message. Please try again later.');
      });
  };



  return (<>

<div className='my-5' style={styles.container}>
      <h2 style={styles.heading}>إرسال رسالة</h2>
      <p style={styles.subheading}>يمكنك التواصل معنا بأي وقت وسنقوم بالرد عليكم في أسرع وقت</p>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="اكتب اسمك *"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="اكتب إيميلك الخاص *"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="phone"
            placeholder="رقم الجوال *"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="subject"
            placeholder="اكتب موضوعك"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <textarea
            name="message"
            placeholder="اكتب رسالتك هنا *"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ ...styles.input, height: '100px' }}
          />
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button} disabled={sending}>
            {sending ? 'جاري الإرسال...' : 'إرسال رسالة'}
          </button>
        </div>
      </form>
      {success === true && <p style={styles.successMessage}>تم إرسال رسالتك بنجاح!</p>}
      {success === false && <p style={styles.errorMessage}>حدث خطأ أثناء الإرسال، حاول مرة أخرى.</p>}
    </div>

</>
    )
  }