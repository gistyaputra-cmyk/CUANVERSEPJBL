let selectedProduct="";

function showSection(id){
document.getElementById("about").style.display="none";
document.getElementById("market").style.display="none";
document.getElementById(id).style.display="block";
}

function logout(){
window.location.href="index.html";
}

function goJual(){
window.location.href="jual.html";
}

let products=[
["E-Book Study Hacks",10000,"https://i.ibb.co.com/RppV4BKN/Study-Hacks.jpg","Belajar cerdas, bukan belajar keras."],
["E-Book Materi Cerpen",10000,"https://i.ibb.co.com/SXxhGqdx/Whats-App-Image-2026-04-21-at-13-01-15.jpg","Belajar materi cerpen lebih mudah dengan E-Book Materi Cerpen."],
["E-Book Smart Kids",15000,"https://i.ibb.co.com/nMbS4v6g/Desain-tanpa-judul-20260422-200724-0000-jpg.jpg","Belajar seru dalam satu genggaman."],
["E-Book Sejarah Kemerdekaan",10000,"https://i.ibb.co.com/BHYKQBSW/Whats-App-Image-2026-04-21-at-20-18-02.jpg","Belajar Sejarah kemerdekaan lengkap lebih praktis dengan E-book ini."],
["E-Book Survival Guide",10000,"https://i.ibb.co.com/Wv1cw5HP/Survival-Guide.jpg","Tips & Trik Nabung ala anak SMA biar gak tekor"],
["Template Infografis Premium",10000,"https://i.ibb.co.com/C3rxjW19/1-20260421-132923-0001.jpg","Butuh infografis cepat, rapi, dan profesional? Kami siap bantu dari konsep sampai jadi!."],
["Template ID-Card keren",10000,"https://i.ibb.co.com/Tx1NJZ22/2-20260421-115811-0000.jpg","Mulai dari harga terjangkau, desain ID Card siap pakai untuk semua kebutuhan & bisa request tema!."],
["Template Poster Digital",10000,"https://i.ibb.co.com/hr6jZKx/4-20260421-121321-0000.jpg","Bikin poster yang nggak cuma dilihat, tapi juga diingat 👀? just call postech aja!."],
["Template PPT Digital",10000,"https://i.ibb.co.com/xqYhxG16/5-20260421-132923-0000.jpg","Biar nggak cuma baca slide, tapi juga bikin audiens fokus!."],
["E-Book Sejarah: Jika Indonesia Tanpa Soekarno",10000,"https://i.ibb.co.com/MxzJJ87J/Whats-App-Image-2026-04-21-at-20-48-12.jpg","Bukan sekadar sejarah, tapi cara baru memahami Indonesia."],
["E-book Mewarnai Digital PDF Printable",10000,"https://i.ibb.co.com/SXMShRBJ/thumbnail.jpg","Aktivitas Seru yang bermanfaat untuk Si Kecil."],
["Template Scarpbook lucu Sweetstrip #A",7000,"https://i.ibb.co.com/YYG54x0/1.jpg","Punya banyak foto tapi bingung postingnya? Swettstrip akan jadi solusi terbaikmu."],
["Template Scarpbook lucu Sweetstrip #B",7000,"https://i.ibb.co.com/k6hXPYmd/Tanpa-judul-Konten-Instagram-45.jpg","Punya banyak foto tapi bingung postingnya? Swettstrip akan jadi solusi terbaikmu."],
["Template Scarpbook lucu Sweetstrip #C",7000,"https://i.ibb.co.com/BV56Dv0g/3.jpg","Punya banyak foto tapi bingung postingnya? Swettstrip akan jadi solusi terbaikmu."],
["Template Scarpbook lucu Sweetstrip #D",7000,"https://i.ibb.co.com/hRfBMB15/Tanpa-judul-Konten-Instagram-45-1.jpg","Punya banyak foto tapi bingung postingnya? Swettstrip akan jadi solusi terbaikmu."]
];

let list=document.getElementById("productList");

if(list){
products.forEach(p=>{
let div=document.createElement("div");
div.className="product";

div.innerHTML=`
<img src="${p[2]}">
<p>${p[0]}</p>
<small>Rp${p[1]}</small>
`;

div.onclick=function(){showProduct(p[0],p[1],p[2],p[3]);};
list.appendChild(div);
});
}

function showProduct(n,p,img,desc){
selectedProduct=n;

document.getElementById("popup").style.display="flex";
document.getElementById("productName").innerText=n;
document.getElementById("price").innerText="Rp"+p;
document.getElementById("desc").innerText=desc;
document.getElementById("productImage").src=img;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function beli(){
window.open("https://wa.me/6285708829924?text=Saya ingin membeli "+selectedProduct);
}

