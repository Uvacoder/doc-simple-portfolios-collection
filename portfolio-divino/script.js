const USERNAME                  = "vrfdivino";
const GITHUB_USER_RESOURCE      = `https://api.github.com/users/${USERNAME}`;
const GITHUB_USER_REPO_RESOURCE = `https://api.github.com/users/${USERNAME}/repos`;

const userProfileDOM = document.querySelector("#profile");
const userProjectsDOM = document.querySelector("#projects");

const getUserProfile = async dom => {
    const data = await fetch(GITHUB_USER_RESOURCE).then(res => res.json());
    const img = document.createElement("img");
    img.src = data.avatar_url;
    dom.appendChild(img);
    return;
};

const getUserProjects = async dom => {
    const data = await fetch(GITHUB_USER_REPO_RESOURCE).then(res => res.json());
    data.forEach(project => {
        if (project.name && project.html_url && project.description) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${project.html_url}">${project.name}</a> - ${project.description}`;
            dom.appendChild(li);
        }
    });
};

getUserProfile(userProfileDOM);
getUserProjects(userProjectsDOM);
