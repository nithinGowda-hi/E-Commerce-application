let cart=JSON.parse(localStorage.getItem('cart'))||[]
let cartCountElement=document.getElementById('cart-count')
console.log(cartCountElement)
function updateCartCount(){
    cartCountElement.textContent=cart.length
}

updateCartCount()

let button=document.querySelectorAll('button')
button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let product=e.target.closest('.product');
        let name=product.querySelector('h3').textContent;
        let price=product.querySelector('p').textContent;
        let img=product.querySelector('img').src

        let items={name,price,img}

        cart.push(items)
        localStorage.setItem('cart',JSON.stringify(cart))

        updateCartCount()

        alert(`${name} added to cart`)

    })
})