import React from 'react';
import logo from '../../assets/logo.png';
import mail from '../../assets/mail.svg';
import phone from '../../assets/call.svg';
const Footer = () => {
  return (
    <footer className='bg-[#092469] border border-red-600 w-full flex justify-between px-4'>
      <div className='py-4'>
        <a href='mailto:unikolorxela@gmail.com' className='flex gap-3 px-4' target='_blank' rel='noopener noreferrer'>
          <img src={mail} alt="mail" />
          <p className='text-white'>Mayoristas</p>
        </a>
        <a href='https://wa.me/50236885254' className='flex gap-3 px-4' target='_blank' rel='noopener noreferrer'>
          <img src={phone} alt="phone" />
          <p className='text-white'>+502 3688-5254</p>
        </a>
      </div>
      <div className=''>
        <img className='mx-auto w-14 h-14' src={logo} alt="logo" />
        <p className='m-0 text-white text-center'>©2024 Quetzalcoat</p>
      </div>
    </footer>
  );
}

export default Footer;
