var egeaGunlukFiyat = 1300;
var egeaHaftalikFiyat = 8000;
var egeaAylikFiyat = 28000;

var focusGunlukFiyat = 1800;
var focusHaftalikFiyat = 12000;
var focusAylikFiyat = 35000;

var fiorinoGunlukFiyat = 1500;
var fiorinoHaftalikFiyat = 12000;
var fiorinoAylikFiyat = 30000;

var meganGunlukFiyat = 2300;
var meganHaftalikFiyat = 14000;
var meganAylikFiyat = 35000;

var passat4x4GunlukFiyat = 4000;
var passat4x4HaftalikFiyat = 25000;
var passat4x4AylikFiyat = 90000;

var vitoGunlukFiyat = 4000;
var vitoHaftalikFiyat = 25000;
var vitoAylikFiyat = 90000;

var passat1_6GunlukFiyat = 3000;
var passat1_6HaftalikFiyat = 20000;
var passat1_6AylikFiyat = 70000;

var l200GunlukFiyat = 3500;
var l200HaftalikFiyat = 22000;
var l200AylikFiyat = 60000;

var hiluxGunlukFiyat = 3000;
var hiluxHaftalikFiyat = 20000;
var hiluxAylikFiyat = 55000;



document.getElementById("egea_gunluk").innerText = egeaGunlukFiyat;
document.getElementById("egea_haftalik").innerText = egeaHaftalikFiyat;
document.getElementById("egea_aylik").innerText = egeaAylikFiyat;

document.getElementById("focus_gunluk").innerText = focusGunlukFiyat;
document.getElementById("focus_haftalik").innerText = focusHaftalikFiyat;
document.getElementById("focus_aylik").innerText = focusAylikFiyat;

document.getElementById("fiorino_gunluk").innerText = fiorinoGunlukFiyat;
document.getElementById("fiorino_haftalik").innerText = fiorinoHaftalikFiyat;
document.getElementById("fiorino_aylik").innerText = fiorinoAylikFiyat;

document.getElementById("megan_gunluk").innerText = meganGunlukFiyat;
document.getElementById("megan_haftalik").innerText = meganHaftalikFiyat;
document.getElementById("megan_aylik").innerText = meganAylikFiyat;

document.getElementById("passat4x4_gunluk").innerText = passat4x4GunlukFiyat;
document.getElementById("passat4x4_haftalik").innerText = passat4x4HaftalikFiyat;
document.getElementById("passat4x4_aylik").innerText = passat4x4AylikFiyat;

document.getElementById("vito_gunluk").innerText = vitoGunlukFiyat;
document.getElementById("vito_haftalik").innerText = vitoHaftalikFiyat;
document.getElementById("vito_aylik").innerText = vitoAylikFiyat;

document.getElementById("passat1_6_gunluk").innerText = passat1_6GunlukFiyat;
document.getElementById("passat1_6_haftalik").innerText = passat1_6HaftalikFiyat;
document.getElementById("passat1_6_aylik").innerText = passat1_6AylikFiyat;

document.getElementById("l200_gunluk").innerText = l200GunlukFiyat;
document.getElementById("l200_haftalik").innerText = l200HaftalikFiyat;
document.getElementById("l200_aylik").innerText = l200AylikFiyat;

document.getElementById("hilux_gunluk").innerText = hiluxGunlukFiyat;
document.getElementById("hilux_haftalik").innerText = hiluxHaftalikFiyat;
document.getElementById("hilux_aylik").innerText = hiluxAylikFiyat;








function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showSection('iletisim');
  });
  
  