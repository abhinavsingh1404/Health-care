document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const genderSelected = document.querySelector('input[name="gender"]:checked');
  
    const message = document.getElementById("message");

    if (!name || !email || !dob || !phone || !address || !genderSelected) {
      message.textContent = "Please fill all the required fields.";
      message.style.color = "red";
      return;
    }
    message.textContent = "Patient details submitted successfully!";
    message.style.color = "green";
    this.reset();
  
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 1500);
  });
  