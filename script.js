document.getElementById('year').textContent = new Date().getFullYear();

// Typed hero line
const line = "Suvojit Pal — Software Engineer";
const el = document.getElementById('typed-line');
let i = 0;
function type(){
if(i <= line.length){
el.innerHTML = line.slice(0,i) + '<span class="caret"></span>';
i++;
setTimeout(type, 45);
}
}
window.addEventListener('load', type);

function copyEmail(){
navigator.clipboard.writeText('[palsuvojit205@gmail.com](mailto:palsuvojit205@gmail.com)').then(()=>{
const btn = document.getElementById('copy-btn');
const original = btn.textContent;
btn.textContent = 'Copied!';
setTimeout(()=>{ btn.textContent = original; }, 1500);
});
}
