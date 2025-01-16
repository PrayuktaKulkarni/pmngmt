(function () {
  /* ========= Preloader ======== */
  const preloader = document.querySelectorAll('#preloader')

  window.addEventListener('load', function () {
    if (preloader.length) {
      this.document.getElementById('preloader').style.display = 'none'
    }
  })

  /* ========= Add Box Shadow in Header on Scroll ======== */
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    if (window.scrollY > 0) {
      header.style.boxShadow = '0px 0px 30px 0px rgba(200, 208, 216, 0.30)'
    } else {
      header.style.boxShadow = 'none'
    }
  })

  /* ========= sidebar toggle ======== */
  const sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
  const mainWrapper = document.querySelector(".main-wrapper");
  const menuToggleButton = document.querySelector("#menu-toggle");
  const menuToggleButtonIcon = document.querySelector("#menu-toggle i");
  const overlay = document.querySelector(".overlay");

  menuToggleButton.addEventListener("click", () => {
    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");
  });
  overlay.addEventListener("click", () => {
    sidebarNavWrapper.classList.remove("active");
    overlay.classList.remove("active");
    mainWrapper.classList.remove("active");
  });
})();

document.getElementById("signUpForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const phoneNumber = document.getElementById("phoneNumber").value;
  const randomUsername = "User" + Math.floor(Math.random() * 10000);
  const customerName = document.getElementById("custFullName").value;
  const customerEmail = document.getElementById("custEmail").value;
  const password = document.getElementById("password")
  const cpassword = document.getElementById("cPassword")
  const errorDiv = document.getElementById('error');
  const errorMainDiv = document.getElementsByClassName("alert-box")[0];


  /* Phone validation */
  const phoneRegex = /^(?!.*(\d)\1{9})\d{10}$/;
  if (phoneRegex.test(phoneNumber)) {
      return true; // Valid phone number
  } else {
    const successMessage = document.createElement("h3");
    successMessage.textContent = "Invalid Phone Number";
    successMessage.style.color = "red";
    errorDiv.appendChild(successMessage);

    errorMainDiv.style.display = "block";
    setTimeout(function() {
      errorMainDiv.style.display = "none";
      successMessage.textContent = "";
    }, 10000);  

    return;
  }


  /* Password validation */
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{1,30}$/;

  if (passwordPattern.test(cpassword) && passwordPattern.test(password) && password.value == cpassword.value) {
    const successMessage = document.createElement("h3");
    successMessage.textContent = "Consumer Registration successful.";
    successMessage.style.color = "green";
    const usernameDisplay = document.createElement("p");
    usernameDisplay.textContent = `Customer Username: ${randomUsername}`;
    const nameDisplay = document.createElement("p");
    nameDisplay.textContent = `Customer Name: ${customerName}`;
    const emailDisplay = document.createElement("p");
    emailDisplay.textContent = `Email: ${customerEmail}`;

    document.getElementById("signUpForm").reset();

    errorDiv.appendChild(successMessage);
    errorDiv.appendChild(usernameDisplay);
    errorDiv.appendChild(nameDisplay);
    errorDiv.appendChild(emailDisplay);

    errorMainDiv.style.display = "block";
    setTimeout(function() {
      errorMainDiv.style.display = "none";
    }, 10000);  

  } else  {
    const successMessage = document.createElement("h3");
    successMessage.textContent = "Password must be between 1 and 30 characters, and include at least one uppercase letter, one lowercase letter, and one special character or Password does not match!";
    successMessage.style.color = "red";
    errorDiv.appendChild(successMessage);

    errorMainDiv.style.display = "block";
    setTimeout(function() {
      errorMainDiv.style.display = "none";
      successMessage.textContent = "";
    }, 10000);  
  }

});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const password = document.getElementById('loginPassword').value;
  const errorDiv = document.getElementById('error');
  const errorMainDiv = document.getElementsByClassName("alert-box")[0];
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{1,30}$/;

  if (!passwordPattern.test(password)) {
      errorMainDiv.style.display = "block";
      errorDiv.textContent = 'Password must be between 1 and 30 characters, and include at least one uppercase letter, one lowercase letter, and one special character.';
      setTimeout(function() {
        errorMainDiv.style.display = "none";
      }, 10000);          
    } else {
      errorDiv.textContent = '';
      // Proceed with form submission.
      alert('Form submitted successfully!');
  }
});