const userProfile = document.getElementById("companyProfile");
const profileImage = document.getElementById("companyLogo");
const companyName = document.getElementById("companyName");
const companyWebsite = document.getElementById("website"); 
const companyFunding = document.getElementById("funding"); 
const companyMission = document.getElementById("mission"); 
//const profileAge = document.getElementById("profile-age");
const companyDescription = document.getElementById("about");
//const logoButton = document.getElementById("nextButton");

const curr_profile = 0;

// Sample user data
var userData = {
    name: ["Wingcopter", ".406 Ventures"],
    description: ["Worldwide drone solutions", "Venture Capitalist"],
    imageSrc: ["copter.jpg", "venture.jpg"],
    website: ["wingcopter.com", "www.406ventures.com/"], 
    funding: ["250 Mil", "100 Mil"], 
    mission: ["Save lives using drones", "Prototype and Early Revenue investing"],
};

function nextProfile() {
    // Display the user profile
    companyMission.innerHTML = userData[curr_profile].mission; 
    companyName.innerHTML = userData[curr_profile].name;
    companyDescription.innerHTML = userData[curr_profile].description; 
    companyWebsite.innerHTML = userData[curr_profile].website; 
    companyFunding.innerHTML = userData[curr_profile].funding;
    profileImage.src=userData[curr_profile].imageSrc;  
    curr_profile++;   
};