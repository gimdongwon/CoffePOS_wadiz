import axios from 'axios'
const postAPI = axios.create({
  baseURL: "http://localhost:3000" //process.env.API_URL
});


const rootEl = document.querySelector(".root");

const templates = {
  index: document.querySelector("#index").content,
  indexItem: document.querySelector("#index-item").content,
  button: document.querySelector("#button").content,
  buttonItem: document.querySelector("#button-item").content
}

function render(fragment){
  rootEl.textContent = '';
  rootEl.appendChild(fragment);
}
indexPage();
function indexPage(){
  // const res = await postAPI.get(`/buttons`)
  const indexFragment = document.importNode(templates.index, true)
  const fragment = document.importNode(templates.indexItem, true)
  const selectBtn = fragment.querySelector(".select")
  const couponBtn = fragment.querySelector(".coupon");
  const payBtn = fragment.querySelector(".pay");
  selectBtn.addEventListener('click', e=>{
    buttonPage();
  })
  couponBtn.addEventListener('click', e => {
    couponPage();
  })
  payBtn.addEventListener('click', e => {
    payPage();
  })
  indexFragment.querySelector(".index").appendChild(fragment)
  render(indexFragment)
}



let first_Num = 0;                       
function buttonPage(){
  const buttonFragment = document.importNode(templates.button, true)
  const fragment = document.importNode(templates.buttonItem, true)
  const americano = fragment.querySelector(".americano")
  const takeOut = fragment.querySelector(".americano-takeout");
  const latte = fragment.querySelector(".latte")
  const caramel = fragment.querySelector(".caramel")

  americano.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    first_Num+=1000;
    sum.textContent = first_Num;
  })
  takeOut.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    first_Num+=500;
    sum.textContent = first_Num;
  })
  latte.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    first_Num+=1500;
    sum.textContent = first_Num;
  })
  caramel.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    first_Num+=2000;
    sum.textContent = first_Num;
  })
  
  buttonFragment.querySelector(".button").appendChild(fragment)
  render(buttonFragment)

}

function coupon() {
  console.log("hihi")
}

function payPage(){
  console.log("paypage");
}