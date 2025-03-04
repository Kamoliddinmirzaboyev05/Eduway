import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="rootPart">
      <div className="page">
        <div className="homeHero">
          <div className="container">
            <div className="aboutPlatform">
              <h2 className="mainTitle">
                {" "}
                Eduway – Kelajak IT Mutaxassislari Uchun Ta`lim Platformasi
              </h2>
              <p>
                Eduway – bu IT kasblarni o‘rganmoqchi bo‘lganlar uchun
                yaratilgan innovatsion ta’lim platformasi. Platforma orqali
                yangi boshlovchilardan tortib, tajribali mutaxassislargacha o‘z
                bilimlarini mustahkamlashlari, yangi texnologiyalarni
                o‘rganishlari va amaliy tajriba orttirishlari mumkin.
              </p>
              <div className="aboutBlock">
                <div className="forWhom">
                  <h2>
                    <i class="fa-solid fa-users-viewfinder fa-bounce"></i>{" "}
                    Kimlar uchun?
                  </h2>{" "}
                  <p>
                    <i class="fa-solid fa-user-tie fa-beat-fade"></i>{" "}
                    <span>
                      {" "}
                      Dasturlashni o‘rganmoqchi bo‘lganlar – Noldan
                      boshlovchilar uchun tushunarli va amaliy kurslar.
                    </span>
                  </p>
                  <p>
                    <i class="fa-solid fa-user-tie fa-beat-fade"></i>{" "}
                    <span>
                      IT mutaxassislari – Bilimlarini mustahkamlash va yangi
                      texnologiyalarni o‘rganish imkoniyati.
                    </span>
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-user-tie fa-beat-fade"></i>{" "}
                    <span>
                      {" "}
                      Talabalar – Amaliy topshiriqlar va real loyihalar bilan
                      tajriba orttirish.
                    </span>
                  </p>
                  <p>
                    <i class="fa-solid fa-user-tie fa-beat-fade"></i>{" "}
                    <span>
                      {" "}
                      Frilanserlar – Kasbiy mahoratini oshirib, rezyume yaratish
                      imkoniyati.
                    </span>
                  </p>
                </div>
                <div className="opportunities">
                  <h2>
                    <i class="fa-solid fa-rocket fa-bounce"></i> Eduway'da Sizni
                    Nima Kutmoqda?
                  </h2>

                  <p>
                    <i class="fa-solid fa-square-check fa-shake"></i>{" "}
                    Topshiriqlar va amaliy mashg‘ulotlar – O‘z bilimlaringizni
                    sinab ko‘rib, real muammolarni hal qilish tajribasi.
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-square-check fa-shake"></i> Resurslar
                    va qo‘llanmalar – Foydali maqolalar, darsliklar va
                    qo‘llanmalar.
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-square-check fa-shake"></i> Resume
                    Builder – O‘z rezyumengizni tayyorlab, ish beruvchilarga
                    taqdim etish imkoniyati.
                  </p>
                </div>
              </div>
            </div>
            <div className="departmentInfo">
              <div className="departmentCard">
                <div className="cardTitle">
                  <div className="cardImg">
                  <i class="fa-solid fa-computer fa-fade"></i>
                  </div>
                  <h2>Kurslar</h2>
                </div>
                <p>
                  Bu bo'limda mavjud kurslar bo'yicha bepul videodarsliklardan
                  foydalangan holda o'z bilim - ko'nikmalaringizni oshirishingiz
                  mumkin. Bo'lim doimiy ravishda yangi kurslar bilan to'ldirilib
                  boriladi.
                </p>
              </div>
            
              <div className="departmentCard">
                <div className="cardTitle">
                  <div className="cardImg">
                  <i class="fa-solid fa-list-check fa-beat-fade"></i>
                  </div>
                  <h2>Topshiriqlar</h2>
                </div>
                <p>
                  Bu bo'limda mavjud kurslar bo'yicha bepul videodarsliklardan
                  foydalangan holda o'z bilim - ko'nikmalaringizni oshirishingiz
                  mumkin. Bo'lim doimiy ravishda yangi kurslar bilan to'ldirilib
                  boriladi.
                </p>
              </div>
              <div className="departmentCard">
                <div className="cardTitle">
                  <div className="cardImg">
                  <i class="fa-solid fa-file-pdf fa-shake"></i>
                  </div>
                  <h2>Resume Builder</h2>
                </div>
                <p>
                  Bu bo'limda mavjud kurslar bo'yicha bepul videodarsliklardan
                  foydalangan holda o'z bilim - ko'nikmalaringizni oshirishingiz
                  mumkin. Bo'lim doimiy ravishda yangi kurslar bilan to'ldirilib
                  boriladi.
                </p>
              </div>
              <div className="departmentCard">
                <div className="cardTitle">
                  <div className="cardImg">
                  <i class="fa-solid fa-user-tie fa-bounce"></i>
                  </div>
                  <h2>Dashboard</h2>
                </div>
                <p>
                  Bu bo'limda mavjud kurslar bo'yicha bepul videodarsliklardan
                  foydalangan holda o'z bilim - ko'nikmalaringizni oshirishingiz
                  mumkin. Bo'lim doimiy ravishda yangi kurslar bilan to'ldirilib
                  boriladi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
