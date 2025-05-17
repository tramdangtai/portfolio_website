
// FORM SECTION
const scriptURL = "https://script.google.com/macros/s/AKfycbxr69TYJOmFoL2ENAHEkf1AIPFYILP9iJNDIPYwW-EJKbrtPFZ0uavJe263FC87E94f/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully. Thanks you!"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 15000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})