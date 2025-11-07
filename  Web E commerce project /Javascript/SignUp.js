let myForm=document.getElementById('myForm')
console.log(myForm)
myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let formData={}
    let input=document.querySelectorAll('input')
    console.log(input)
    input.forEach((input)=>{
        formData[input.name]=input.value
        
    })
    console.log(formData)

    localStorage.setItem('formData',JSON.stringify(formData))
    alert(" User Registration Successfull")
    window.location.assign('../Login.html')
})