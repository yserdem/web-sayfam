import React from 'react';
import "../styles/Profile.css";
import profileimg from "../images/profile.jpg"
const Profile = () => {
  return (
    <div className='profile-container'>
      <h1>Profile</h1>
      <div className='profile-content'>
        <div className='basic-info'>
          <h2 className='info-header'>Basic Information</h2>
          <div className='profile-info'>
            <div className='profile-titles'>
              <p>Doğum tarihi</p>
              <p>İkamet Şehri</p>
              <p>Eğitim Durumu</p>
              <p>Tercih Ettiği Rol</p>
            </div>
            <div className='profile-attributes'>
              <p>24.03.1996</p>
              <p>Ankara</p>
              <p>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        <img src={profileimg} alt="profileimg" className="profile-img" />
        <div className='about-box'>
          <h2 className='info-header'>About Me</h2>
          <p className='info-paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
          <p className='info-paragraph'>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;