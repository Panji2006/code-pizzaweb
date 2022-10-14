import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div 
            className='aboutTop'
            style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
        <div className='aboutBottom'>
            <h1> Tentang Kami </h1>
            <p>
            Cerita kami dimulai di tahun 1958, di kota Bekasi. Saat itu dua orang bersaudara bernama Arsyila dan Darel berinisiatif membuat sebuah kedai Pizza sederhana. Ternyata, Pizza yang mereka bikin disukai banyak orang hingga akhirnya menyebar ke seluruh Indonesia.
            Di Bekasi, Restoran pertama kami dibuka di Kecamatan Tambun Utara pada tahun 2021. Dalam waktu cukup singkat, Darel Pizza menyebar ke seluruh Indonesia, sampai ada lebih dari 500 outlet kami dari ujung barat ke ujung timur negeri. Keren kan? Nah resep rahasia di balik semua itu adalah service terbaik dan inovasi!
            Darel Pizza Indonesia terdiri dari Pizza Restaurant dan Delivery dengan layanan “30 menit pasti tiba”. Karena kami mengerti, kesibukan dan terbatasnya waktu bikin kamu ingin semuanya serba cepat, jadi pesanan kamu tetap hangat dan nikmat saat tiba di tujuan.
            </p>
        </div>
    </div>
  );
}

export default About;