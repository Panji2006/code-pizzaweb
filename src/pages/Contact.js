import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div 
            className='leftSide'
            style={{ backgroundImage: `url(${PizzaLeft})` }}>
        </div>
        <div className='rightSide'>
            <h1> Kontak Kami </h1>

            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Nama Lengkap</label>
                <input name='name' placeholder='Masukkan Nama Lengkap....' type='text' />
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Masukkan Email' type='email' />
                <label htmlFor='message'>Pesan</label>
                <textarea 
                    rows='6'
                    placeholder='Masukkan Pesan...' 
                    name='message'
                    required>
                </textarea>
                <button type='submit'>Kirim Pesan</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;