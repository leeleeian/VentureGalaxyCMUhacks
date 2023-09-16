const userProfile = document.getElementById("companyProfile");
const profileImage = document.getElementById("companyLogo");
const companyName = document.getElementById("companyName");
const companyWebsite = document.getElementById("website"); 
const companyFunding = document.getElementById("funding"); 
const companyMission = document.getElementById("mission"); 
//const profileAge = document.getElementById("profile-age");
const companyDescription = document.getElementById("about");
//const logoButton = document.getElementById("nextButton");

var curr_profile = 0;


// Sample user data
var userData = {
    name: ["Wingcopter", ".406 Ventures"],
    description: ["Worldwide drone solutions", "Venture Capitalist"],
    imageSrc: ["copter.jpg", "venture.jpg"],
    website: ["wingcopter.com", "www.406ventures.com/"], 
    funding: ["250 Mil", "100 Mil"], 
    mission: ["Save lives using drones", "Prototype and Early Revenue investing"],
    mail: ["invest@wingcopter.com", "contact@406ventures.com"]
};

function nextProfile() {
    // Display the user profile
    companyMission.innerHTML = userData.mission[curr_profile]; 
    companyName.innerHTML = userData.name[curr_profile];
    companyDescription.innerHTML = userData.description[curr_profile]; 
    companyWebsite.innerHTML = userData.website[curr_profile]; 
    companyFunding.innerHTML = userData.funding[curr_profile];
    profileImage.src=userData.imageSrc[curr_profile];  
    if(curr_profile<2){
        curr_profile++;   
    }
};

function copyMail() {
    navigator.clipboard.writeText(userData.mail[curr_profile-1]);
  
    // Alert the copied text
    alert("Copied the email: " + userData.mail[curr_profile-1]);
  }
