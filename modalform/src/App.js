import React, { useState, useEffect, useRef } from 'react';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const formRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      // Clicked outside the form, close it
      closeModal();
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the form
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Date of Birth validation (basic validation)
    const currentDate = new Date();
    if (dob > currentDate) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      setDob(null); // Reset the date to clear the input field
    
    } else {
      setDob(dob);
    }

    // Perform other actions on successful form submission
    //alert('Form submitted successfully!');
    
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
          <div className="floating-form" ref={formRef}>
          <form onSubmit={handleSubmit}>
            <h2>Fill Details</h2>

            <label htmlFor="username">Username:</label>
            <input 
            type="text"
             id="username" 
             value={username} 
             onChange={(e) => setUsername(e.target.value)} 
             required />

            <label htmlFor="email">Email Address:</label>
            <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required />

            <label htmlFor="phone">Phone Number:</label>
            <input 
            type="tel" 
            id="phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required />

            <label htmlFor="dob">Date of Birth:</label>
            <input 
            type="date" 
            id="dob" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
            required/>
            
           

            <button className="submit-button" onClick={openModal}>Submit</button>
            </form>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default App;