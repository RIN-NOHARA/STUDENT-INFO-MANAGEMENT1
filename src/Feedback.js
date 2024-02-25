import React, { useState } from 'react';
import axios from 'axios';


const Feedback= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data1 = {
        name: name,
        email: email,
        message: message,
      };
      await axios.post('/feedback', data1); // Use the "/feedback" endpoint here
      alert('Feedback submitted successfully');
      // Optionally, you can reset the form after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
        console.error('Error occurred:', error.message);
         alert('Failed to submit feedback. Please try again later.');
       }
  };

  return (
    <div className='he1'>
      {/* Rest of your component JSX */}
      <div className='back'>
        <marquee behavior='alternate' direction='right'>
          <h1>GIVE YOUR FEEDBACK HERE</h1>
        </marquee>
        <div className='bod9'>
          {/* Your form JSX */}
          <form className='reservation-form'>
            <div className='clr'>
              <div className='form-group'>
                <label>Name:</label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  placeholder='Your Name'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className='form-group'>
                <label>Email:</label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className='form-group'>
                <label>Message:</label>
                <textarea
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <br />
              <br />
              <br />
              <div className='form-group'>
                <button type='submit' onClick={handleSubmit}>
                  Submit Feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;