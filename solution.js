 //! ÖDEV 1: HESAP MAKİNASI
// const n1 = +prompt ("sayı1:");
// const op = prompt ("Yapmak istediğiniz işlemi (+,-,*,/) giriniz:");
// const n2 = +prompt ("sayı2");

// if (op=="+") {
//     let sonuc= n1 + n2;
//     console.log (sonuc);
// }

// else if (op=="-") {
//     let sonuc= n1 - n2;
//     console.log (sonuc);
// }

// else if (op=="*") {
//     let sonuc= n1 * n2;
//     console.log (sonuc);
// }

// else if (op=="/") {
//     let sonuc= n1 / n2;
//     console.log (sonuc);
// }

//! ÖDEV 2: HAFTALIK DERS VE ETKİNLİK PROGRAMI

// const day = prompt ("Please enter a day (mon,tue,wed,thu,fri,sat,sun)");
// switch (day) {
//     case "mon":
//         console.log ("InClass"); 
//         break;
    
//     case "tue":
//         console.log ("InClass");
//         break;

//     case "wed":
//         console.log ("InClass");
//         break;

//     case "thu":
//         console.log ("InClass");
//         break;

//     case "fri":
//         console.log ("Teamwork");
//         break;
        
//     case "sat":
//         console.log ("InClass + Workshop");
//         break;

//     case "sun":
//         console.log ("Self-Study");
//         break;

//     default:
//         console.log ("The wrong day was entered.");
//         break;
// }

//! ÖDEV 3: ZAM HESABI

// let maas = +prompt ("Maaşınızı giriniz:");
// maas= maas < 6471 ? maas=maas * 1.5 : maas=maas * 1.801;

// console.log ("Yeni maaşınız:",maas);


//! ÖDEV 4: KREDİ RİSK PROGRAMI

const gelir = +prompt("Lütfen aylık gelirinizi giriniz:");
const gider = +prompt("Lütfen aylık giderinizi giriniz:");

gelir >= (gider + 6471) ? console.log("Kredi verilebilir.") : console.log("Kredi verilemez.");