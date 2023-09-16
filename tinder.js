const userProfile = document.getElementById("companyProfile");
const profileImage = document.getElementById("companyLogo");
const companyName = document.getElementById("companyName");
const companyWebsite = document.getElementById("website"); 
const companyFunding = document.getElementById("funding"); 
const companyMission = document.getElementById("mission"); 
//const profileAge = document.getElementById("profile-age");
const companyDescription = document.getElementById("about");
//const logoButton = document.getElementById("nextButton");

// Sample user data
const userData = {
    name: "John Doe",
    age: 30,
    description: "I love hiking and exploring new places!",
    imageSrc: "johndoe.jpg",
    website: "johndoe.com", 
    funding: "50K", 
    mission: "john doe"
};

function nextProfile() {
    // Display the user profile
    companyMission.innerHTML = userData.mission; 
    companyName.innerHTML = userData.name;
    companyDescription.innerHTML = userData.description; 
    companyWebsite.innerHTML = userData.website; 
    companyFunding.innerHTML = userData.funding;
    profileImage.src=userData.imageSrc;     
};