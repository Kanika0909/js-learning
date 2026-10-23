const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const profile = document.getElementById("profile");

//Listen for form submission

searchForm.addEventListener("submit", async(event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if(!username){
        message.textContent = "Please Enter a username: ";
        return;
    }

    //Start Loading

    profile.classList.add("hidden");
    message.textContent = "Loading Profile...";
    searchBtn.disabled = true;

    try{
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

        if(response.status === 404){
            throw new Error("Github user not found.")
        }
        if(!response.ok){
            throw new Error(`Request failed: ${response.status}`);
        }
        //Convert JSON response into a javascript objects

        const user = await response.json();

        document.getElementById("avatar").src = user.avatar_url;

        document.getElementById("name").textContent = user.name || "Name not provided";

        document.getElementById("login").textContent = `@${user.login}`;

        document.getElementById("followers").textContent = user.followers;

        document.getElementById("following").textContent = user.following;

        document.getElementById("repos").textContent = user.public_repos;

        document.getElementById("profileLink").href = user.html_url;

        //Show the url
        message.textContent = "";
        profile.classList.remove("hidden");
    }catch(error){
        message.textContent = error.message || "Something went wrong. Please try again."

    }finally{
        searchBtn.disabled = false;
    }
});