//קשר1= 1.852 קמ"ש
const butKm = document.querySelector("#km-btn")
const butKn = document.querySelector("#kn-btn")

function knToKm(){
 const inKn = document.querySelector("#input-kn")
 const inKm = document.querySelector("#input-km")
 inKm.value = (inKn.value*1.852).toFixed(2)
  
}
function kmToKn(){
 const inKn = document.querySelector("#input-kn")
 const inKm = document.querySelector("#input-km")

  inKn.value = (inKm.value/1.852).toFixed(2)
  
}
butKm.onclick = kmToKn
butKn.onclick = knToKm





