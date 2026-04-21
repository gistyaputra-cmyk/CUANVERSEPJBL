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
["E-Book Smart Kids",15000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Belajar seru dalam satu genggaman."],
["E-Book Sejarah Kemerdekaan",10000,"https://i.ibb.co.com/99cFC7xP/Sejarah-kemerdekaan-indonesia.jpg","Belajar Sejarah kemerdekaan lengkap lebih praktis dengan E-book ini."],
["E-Book Survival Guide",10000,"https://i.ibb.co.com/Wv1cw5HP/Survival-Guide.jpg","Tips & Trik Nabung ala anak SMA biar gak tekor"],
["Template Infografis Premium",10000,"https://i.ibb.co.com/C3rxjW19/1-20260421-132923-0001.jpg","Butuh infografis cepat, rapi, dan profesional? Kami siap bantu dari konsep sampai jadi!."],
["Template ID-Card keren",10000,"https://i.ibb.co.com/Tx1NJZ22/2-20260421-115811-0000.jpg","Mulai dari harga terjangkau, desain ID Card siap pakai untuk semua kebutuhan & bisa request tema!."],
["Template Poster Digital",10000,"https://i.ibb.co.com/hr6jZKx/4-20260421-121321-0000.jpg","Bikin poster yang nggak cuma dilihat, tapi juga diingat 👀? just call postech aja!."],
["Template PPT Digital",10000,"https://i.ibb.co.com/xqYhxG16/5-20260421-132923-0000.jpg","Biar nggak cuma baca slide, tapi juga bikin audiens fokus!."],
["Ebook Bisnis",75000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Panduan bisnis online dari nol."],
["Video Editing Pack",95000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Asset editing video lengkap."],
["Music Pack",70000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Musik bebas copyright."],
["Icon Set",30000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Icon modern untuk UI."],
["Landing Page Kit",85000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Template landing page profesional."],
["AI Tools Bundle",200000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Tools AI untuk produktivitas."]
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

