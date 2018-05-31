import axios from 'axios'
const postAPI = axios.create({
  baseURL: "http://localhost:3000" //process.env.API_URL
});


const rootEl = document.querySelector(".root");

const templates = {
  wait: document.querySelector("#wait").content,
  waitItem: document.querySelector("#wait-item").content,
  button: document.querySelector("#button").content,
  buttonItem: document.querySelector("#button-item").content
}

function render(fragment){
  rootEl.textContent = '';
  rootEl.appendChild(fragment);
}
buttonPage();

function waitPage(){
  // const res = await postAPI.get(`/buttons`)
  const waitFragment = document.importNode(templates.wait, true)
  const fragment = document.importNode(templates.waitItem, true)
  const selectBtn = fragment.querySelector(".select")
  selectBtn.addEventListener('click', e=>{
    buttonPage();
  })
  waitFragment.querySelector(".wait").appendChild(fragment)
  render(waitFragment)
}

let first_Num = 0;
function buttonPage(){
  const buttonFragment = document.importNode(templates.button, true)
  const fragment = document.importNode(templates.buttonItem, true)
  const americano = fragment.querySelector(".americano")
  const takeOut = fragment.querySelector(".americano-takeout");
  const latte = fragment.querySelector(".latte")
  const caramel = fragment.querySelector(".caramel")
  const fiveDiscount = fragment.querySelector(".coupon__five")
  const tenDiscount = fragment.querySelector(".coupon__ten")
  const payCash = fragment.querySelector(".pay-cash");
  const payCard = fragment.querySelector(".pay-card");

  americano.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    first_Num+=1000;
    sum.textContent = "총 결제 금액은 "+ first_Num;
  })
  let takeout_num=0;
  takeOut.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    first_Num+=500;
    sum.textContent = "총 결제 금액은 "+ first_Num;
    takeout_num++;
  })
  latte.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    first_Num+=1500;
    sum.textContent = "총 결제 금액은 "+ first_Num;
  })
  caramel.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    first_Num+=2000;
    sum.textContent = "총 결제 금액은 "+ first_Num;
  })

  fiveDiscount.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    if(takeout_num){
      first_Num *= 0.95;
      first_Num += takeout_num * 25;
      alert("takeout은 할인 안되세요!");
    }
    else{
      first_Num *= 0.95;
    }
    sum.textContent = "총 결제 금액은 "+ first_Num;
  })
  
  tenDiscount.addEventListener('click', e => {
    let sum = document.querySelector(".sum");
    if(takeout_num){
      first_Num *= 0.9;
      first_Num += takeout_num *50;
      alert("takeout은 할인 안되세요!")
    }else{
      first_Num *= 0.9;
    }
    sum.textContent = "총 결제 금액은 "+ first_Num;
  })

  let count = 0;
  payCash.addEventListener('click', e => {
    let sum = document.querySelector(".sum");
      first_Num *= 0.95;
      sum.textContent = "총 결제 금액은 "+ first_Num;
       count++;
       if(count === 2){
         first_Num = 0;
         alert("결제중입니다.");
         waitPage();
       }else{
         alert("현금결제는 5% 할인됩니다! ^^ 결제 버튼 한번 더 눌러주세요!");
       }}
    
  )

  payCard.addEventListener('click', e=>{
    let sum = document.querySelector(".sum");
    alert("결제중입니다.")
    first_Num = 0;
    waitPage();
  })

  buttonFragment.querySelector(".button-title").appendChild(fragment)
  render(buttonFragment)
}