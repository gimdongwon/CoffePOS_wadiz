import axios from 'axios'

const templates = {
  menu: document.querySelector("#menu").content,
  coupon: document.querySelector("#coupon"),content,
  pay: document.querySelector("#pay").content,
  menuLoading: document.querySelector("#menu_loading").content
}

async function menu(){
  const fragment = document.importNode(templates.menu, true)
  
}