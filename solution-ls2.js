//! ÖDEV 1 Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.
// let toplam=0;
// let sayac=0;
// let sayi;
// do{ let sayi = +prompt("Notunuzu giriniz:");
    
//         toplam += sayi;
//         sayac += 1;  

//     } while (
//         if (sayi="Q"){break;}
//     );

// console.log (`Not ortalamanız: ${toplam/sayac}`);

//! ÖDEV 2:TAHMİN OYUNU
do {
    let hak = 5;
    const rastgele = Math.round(Math.random() * 100);
    console.log(rastgele);
    let tahmin;
    do {
        tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
        hak -= 1;
        if (tahmin === rastgele) {
            console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
            break;
        } else if (tahmin < rastgele) {10
            console.log("ARTTIR ⬆️");
        } else {
            console.log("AZALT ⬇️");
        }
    } while (hak > 0);

    if (tahmin !== rastgele) {
        console.log("Uzgunuz oyunu kaybettiniz 😔😔");
    } 
    cevap= prompt ("tekrar oynamak ister misiniz? (e/h)");
} while ( cevap==="e")
