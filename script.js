const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
};

const sendNewsletter = () => {
    const inputData = document.querySelector("#email-newsletter")
    const btnSubmit = document.querySelector(".newsletter-btn-submit")
    btnSubmit.addEventListener('click', (e)=>{
        e.preventDefault()
        if((inputData.value).trim() !== '' && validateEmail(inputData.value)){
            document.querySelector(".error-message").classList.remove("show")
            document.querySelector(".error-message").classList.add("hide")
            document.querySelector("#email-newsletter").classList.remove("error")
        }else{
            document.querySelector(".error-message").classList.remove("hide")
            document.querySelector(".error-message").classList.add("show")
            document.querySelector("#email-newsletter").classList.add("error")
        }
    })
}
document.addEventListener("DOMContentLoaded", ()=>{
    sendNewsletter()
})