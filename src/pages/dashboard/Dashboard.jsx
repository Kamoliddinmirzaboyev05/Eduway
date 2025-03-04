import React from "react";

function Dashboard() {
  return (
    <div className="rootPart">
      <div className="page">
        <div className="homeHero">
          <div className="container">
            <div className="aboutPlatform">
              <h2>
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
              <div className="forWhom">
                <h2>🎯 Kimlar uchun?</h2>{" "}
                <p>
                  Dasturlashni o‘rganmoqchi bo‘lganlar – Noldan boshlovchilar
                  uchun tushunarli va amaliy kurslar.
                </p>
                <p>
                  IT mutaxassislari – Bilimlarini mustahkamlash va yangi
                  texnologiyalarni o‘rganish imkoniyati.
                </p>
                <p>
                  {" "}
                  Talabalar – Amaliy topshiriqlar va real loyihalar bilan
                  tajriba orttirish.
                </p>
                <p>
                  Frilanserlar – Kasbiy mahoratini oshirib, rezyume yaratish
                  imkoniyati.
                </p>
              </div>
              <div className="opportunities">
                <h2>🚀 Eduway'da Sizni Nima Kutmoqda?</h2>
                <p>
                  {" "}
                  ✅ Interaktiv kurslar – Dasturlash, veb-ishlab chiqish, sun’iy
                  intellekt va boshqa yo‘nalishlarda sifatli ta’lim.
                </p>
                <p>
                  ✅ Topshiriqlar va amaliy mashg‘ulotlar – O‘z bilimlaringizni
                  sinab ko‘rib, real muammolarni hal qilish tajribasi.
                </p>
                <p>
                  {" "}
                  ✅ Resurslar va qo‘llanmalar – Foydali maqolalar, darsliklar
                  va qo‘llanmalar.
                </p>
                <p>
                  ✅ Eduway – zamonaviy IT kasblarni o‘rganish va professional
                  rivojlanish uchun eng qulay platforma!
                </p>
                <p>
                  {" "}
                  ✅ Resume Builder – O‘z rezyumengizni tayyorlab, ish
                  beruvchilarga taqdim etish imkoniyati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
