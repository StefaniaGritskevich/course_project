const requestURL = "https://raw.githubusercontent.com/StefaniaGritskevich/course_project/master/html/tour.xml"; 

function Open(){
const xhr = new XMLHttpRequest(); 
 
xhr.open('GET',requestURL , false); 
xhr.send(); 
 
let xmlData = xhr; 
xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml");
let hashA = window.location.hash.substring(1);
let tour = xmlData.getElementById(hashA); 

document.getElementById('country').textContent=tour.getElementsByTagName('country')[0].textContent;
document.getElementById('sity').textContent=tour.getElementsByTagName('sity')[0].textContent;
document.getElementById('price').textContent=tour.getElementsByTagName('price')[0].textContent;
//console.log(tour.getElementsByTagName('transport')[0].textContent);
document.getElementById('transport-1').textContent=tour.getElementsByTagName('transport')[0].textContent;
document.getElementById('rout-1').textContent=tour.getElementsByTagName('rout')[0].textContent;
document.getElementById('lenth-1').textContent=tour.getElementsByTagName('lenth')[0].textContent;
document.getElementById('money-1').textContent=tour.getElementsByTagName('money')[0].textContent;
document.getElementById('date-1').textContent=tour.getElementsByTagName('date')[0].textContent;
document.getElementById('text').textContent=tour.getElementsByTagName('text')[0].textContent;

console.log(tour.getElementsByTagName('pg')[0].textContent);
let pictures = document.querySelectorAll('[class^="pic"]');
for(let i = 0; i < 5; i++){

    pictures[i].getElementsByTagName('p')[0].textContent = tour.getElementsByTagName('pg')[i].textContent;
    let newImage = tour.getElementsByTagName('pic')[i].textContent;
    pictures[i].style.backgroundImage = `url(${newImage})`;
}
let slid = document.getElementsByClassName('sim-slider-element');
for(let i = 0; i < 4; i++){

    let newImage = tour.getElementsByTagName('slider')[i].textContent;
    slid[i].getElementsByTagName('img')[0].src = newImage;
}
}
window.addEventListener('hashchange', Open);

Open();
