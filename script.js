// Load dynamic JSON content
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Homepage welcome message
    const dynamicText = document.getElementById("dynamicText");
    if(dynamicText) dynamicText.innerText = data.welcome;

    // Services list
    const serviceList = document.getElementById("serviceList");
    if(serviceList){
        data.services.forEach(service => {
            const li = document.createElement("li");
            li.textContent = service;
            serviceList.appendChild(li);
        });
    }

    // Team display
    const teamContainer = document.getElementById("teamContainer");
    if(teamContainer){
        data.team.forEach(member => {
            const div = document.createElement("div");
            div.className = "team-member";
            div.innerHTML = `<img src="images/${member.image}" alt="${member.role}"><p>${member.role}: ${member.name}</p>`;
            teamContainer.appendChild(div);
        });
    }
});

// Registration form validation
document.getElementById("regForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const feedback = document.getElementById("formFeedback");

    if(username.length < 3){ feedback.textContent="Username must be at least 3 characters."; feedback.style.color="red"; return; }
    if(password.length < 6){ feedback.textContent="Password must be at least 6 characters."; feedback.style.color="red"; return; }

    feedback.textContent="Registration successful!"; feedback.style.color="green";
});

// Enquiry & Contact form validation
document.querySelectorAll(".validateForm").forEach(form => {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        let valid = true;
        this.querySelectorAll("input, textarea, select").forEach(input => {
            if(input.value.trim() === ""){
                valid = false;
                input.style.border="1px solid red";
            } else {
                input.style.border="1px solid #ccc";
            }
        });
        if(valid){
            alert("Form submitted successfully!");
            this.reset();
        }
    });
});
