let cart=JSON.parse(localStorage.getItem('cart'))||[]

let cartItemscontainer=document.getElementById('cart-items')
let totalprice=document.getElementById('total-price')
function renderCart(){
    cartItemscontainer.innerHTML=``;
    let total=0;

     cart.forEach((item,index)=>{
        let Itemprice=parseFloat(item.price.replace(/[^\d.]/g,''))
        total+= Itemprice

        let cartItem=document.createElement('div')
        cartItem.classList.add('cart-item')
        cartItem.innerHTML=`
        <img src="${item.img}" alt="${item.name}"/>
        <div class="cart-item-details">
      <h3>${item.name}</h3>
        <p>${item.price}</p>
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `

       cartItemscontainer.appendChild(cartItem)
 })
 totalprice.textContent=total.toFixed(2)
}
function removeItem(index){
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
}
renderCart()