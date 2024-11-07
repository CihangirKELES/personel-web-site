import React, { useContext } from 'react'
import { myContext } from '../context/myContext'
import profilePhoto from '../assets/profile-2.jpg'


const Profile = () => {
  const { english } = useContext(myContext)
  return (
    <div className=" flex flex-col w-[960px] pt-24 pb-32 px-0 ">
      <h2 className="text-5xl text-[#CBF281] font-bold pb-7">
        {!english ? 'Profil' : 'Profile'}
      </h2>
      <div className="flex justify-between flex-row">
        <div className="flex flex-col ">
          <h3 className="text-3xl text-white font-normal w-[300px] text-left pb-8">
            {!english ? 'Temel Bilgiler' : 'Basic Information'}
          </h3>
          <div className="flex flex-col justify-between text-base leading-[1.5] gap-1 items-start">
            <div className="flex justify-between items-center">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                {!english ? 'Doğum Tarihi' : 'Basic Information'}
              </p>
              <p className="w-48 text-white">
                {!english ? '31.07.1998' : '31.07.1998'}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                {!english ? 'İkamet Şehri' : 'City of Residence'}
              </p>
              <p className="w-48 text-white">İstanbul</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="w-1/3 font-semibold text-[#CBF281]">
                {!english ? 'Eğitim Durumu' : 'Education Info'}
              </p>
              <p className="w-48 text-white">
                {!english
                  ? 'Anadolu Üniversitesi - İşletme'
                  : 'Anadolu University - Business Administration'}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                {!english ? 'Tercih Ettiği Rol' : 'Preferred Role'}
              </p>
              <p className="w-48 text-white">Frontend, UI</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img className="  object-cover rounded-lg" src={profilePhoto}></img>
        </div>

        <div className="flex flex-col gap-y-6  w-[300px]">
          <h3 className="text-3xl text-white font-normal w-[300px] mt-[-60px]">
            {english ? 'About Me' : 'Hakkımda'}
          </h3>
          <div className="h-20 flex flex-col justify-between text-white  leading-[1.5] text-left">
          <p>
              {!english
                ? "1998'de İstanbul'da doğdum. Lisans eğitimimi Anadolu Üniversitesi İşletme bölümünde tamamladım. Mali İşler Uzmanı olarak firmalarda çalıştım. Yazılıma merakım ve uzaktan takip etme durumum hep olsa da, bir türlü 'iş değişikliği' adımını almaya cesaret edemedim."
                : "I was born in 1998 in Istanbul. I completed my undergraduate education in Business Administration at Anadolu University. I worked as a Financial Affairs Specialist in various companies. Although my interest in software and following developments in the field was always there, I never had the courage to make the 'career change' step."}
            </p>
            <p>
              {!english
                ? "Sonrasındaysa, bu işi baştan sona öğreten; iyi referansları olan Workintech kurumu ile tanıştım. Kendi adıma aldığım en iyi karar neticesiyle, yazılım alanında yeni teknolojiler öğrenerek kariyerimi ileriye taşımayı hedefliyorum."
                : "Later on, I met Workintech, an institution that teaches this field from start to finish with great references. As a result of the best decision I made for myself, I aim to advance my career by learning new technologies in the software field."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;