let myForm=document.getElementById('myForm')
console.log(myForm)
myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    console.log(email,password)


    let stroredData=localStorage.getItem('formData')
    console.log(stroredData)

    if(stroredData){
        let parsedData=JSON.parse(stroredData)
        console.log(parsedData)

        if(email===parsedData.email && password===parsedData.password){
            alert("User Login Successfull")
            window.location.assign('../HomePage.html')
        }
        else{
            alert("Invalid Username and Password")
        }
    }
})