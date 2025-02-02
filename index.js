const wrapper= document.querySelector(".wrapper");
const mode = document.querySelector(".mode");
const container = document.querySelector(".container");
const searchContainer = document.querySelector(".searchbar-container")
const profileContainer = document.querySelector(".profile-container");
const input = document.querySelector("input");
const profileContent = document.querySelector(".profile-status-wrapper");
const statValue = document.querySelectorAll(".stat-value");
const modeValue = document.querySelector("[modeValue]");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun")
const x = document.querySelector(".x");
const search= document.querySelector("[search]");
const noResult = document.querySelector("[noResult]");
const link = document.querySelectorAll("a");
const button = document.querySelector("[btn]");


changeMode();
noResult.classList.add("active")
sun.classList.add("active");
modeValue.innerText ="Light";
function changeMode (){
        wrapper.classList.toggle("add");
        container.classList.toggle("add")
        profileContainer.classList.toggle("addd");
        searchContainer.classList.toggle("addd")
        input.classList.toggle("addd");
        input.classList.toggle("adddd");
      profileContent.classList.toggle("add");
      statValue.forEach((e)=>{
        e.classList.toggle("add");
      });
      link.forEach((e)=>{
        e.classList.toggle("addd");
      });
}




mode.addEventListener("click",()=>{
    if(modeValue.innerText === "Dark"){
        moon.classList.remove("active");
        sun.classList.add("active");
        modeValue.innerText = "Light";
        changeMode();
    }else{
        modeValue.innerText = "Dark";
        sun.classList.remove("active");
        moon.classList.add("active");
        changeMode();
    }
   
})

search.addEventListener("input",()=>{
    noResult.classList.remove("active");
    if(search.value == ""){
        x.classList.remove("active");
    }else{
        x.classList.add("active");
    }


})


x.addEventListener("click",()=>{
    search.value="";
    x.classList.remove("active");
    
})



async function fetchGitHubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();
        updateProfile(data); // Update UI with fetched data
    } catch (error) {
        noResult.classList.add("active"); // Show "No search results" message
    }
}

// Function to update the profile with fetched data
function updateProfile(data) {
    document.querySelector(".profile-pic img").src = data.avatar_url;
    document.querySelector(".profile-info-wrapper .linkk").href = data.html_url;
    document.querySelector(".profile-info-wrapper .linkk h2").innerText= data.name|| "No name";
    document.querySelector(".profile-info-wrapper p").innerText = `Joined ${new Date(data.created_at).toDateString()}`;
    document.querySelector(".profile-content > p").innerText = data.bio || "No bio available";
    
    // Update stats
    document.querySelectorAll(".stat-value")[0].innerText = data.public_repos;
    document.querySelectorAll(".stat-value")[1].innerText = data.followers;
    document.querySelectorAll(".stat-value")[2].innerText = data.following;
    
    // Update additional info
    document.querySelector(".profile-buttom-wrapper .profile-info:nth-child(1) p").innerText = data.location || "Not Available";
    document.querySelector(".profile-buttom-wrapper .profile-info:nth-child(2) a").href = data.blog || "#";
    document.querySelector(".profile-buttom-wrapper .profile-info:nth-child(2) a").innerText = data.blog || "Not Available";
    document.querySelector(".profile-buttom-wrapper .profile-info:nth-child(3) a").href = `https://twitter.com/${data.twitter_username}` || "#";
    document.querySelector(".profile-buttom-wrapper .profile-info:nth-child(3) a").innerText = data.twitter_username || "Not Available";
    document.querySelector(".profile-buttom-wrapper .profile-info:nth-child(4) p").innerText = data.company || "Not Available";
}


search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission
        if (search.value.trim() !== "") {
            fetchGitHubUser(search.value.trim()); // Fetch user data
        }
    }
});



button.addEventListener("click",(e)=>{
    e.preventDefault();
    if (search.value.trim() !== "") {
        fetchGitHubUser(search.value.trim()); // Fetch GitHub user data
    }
})