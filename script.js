function handleSubmit(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    alert(`Your message has been submitted. Thank you ${name}, we will contact you at ${email}.`);
    event.target.submit();

}