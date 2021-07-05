const jobPosts = [
    {   
        iconUrl: "./images/photosnap.svg",
        company: "Photosnap",
        flags: ["NEW!", "FEATURED"],
        title: "Senior Frontend Developer",
        timeSincePosted: "1d ago",
        employmentLength: "Full Time",
        location: "USA only",
        filterTags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"]
    },
    {   
        iconUrl: "./images/manage.svg",
        company: "Manage",
        flags: ["NEW!", "FEATURED"],
        title: "Fullstack Developer",
        timeSincePosted: "1d ago",
        employmentLength: "Part Time",
        location: "Remote",
        filterTags: ["Fullstack", "Midweight", "Python", "React"]
    }
]



function renderView(){
    const mainContainer = document.querySelector(".container");
    mainContainer.innerHTML = "";
    
    for(let i = 0; i <jobPosts.length; i+=1){
       console.log(rendercardView(mainContainer, i));
    }

   
}

function rendercardView(DOMContainer, index){
    let view = `
    
    <div class="card filter-container d-flex"></div>
      <div class="card featured">
        <img src="${jobPosts[index].iconUrl}" alt="company icon" class="company-icon">
        <div class="main-info">
          <div class="company-wraper">
            <h2 class="company-name">${jobPosts[index].company}</h2>
            <div class="flags-wrapper"></div>
          </div>
          <h1 class="job-title">${jobPosts[index].title}</h1>
          <div class="job-info-wrapper">
            <p class="time-since-posted">${jobPosts[index].timeSincePosted}</p>
            <p class="employment-length">${jobPosts[index].employmentLength}</p>
            <p class="location">${jobPosts[index].location}</p>
          </div>
        </div> 
        <div class="filter-tags">
          
        </div> 
    </div>`
        DOMContainer.innerHTML = view;
        
        renderFilterTags(jobPosts[index].filterTags);
        renderFlags(jobPosts[index].flags);
}

function renderFilterTags(tags){
    const filterTagsContainer = document.querySelector(".filter-tags");
    filterTagsContainer.textContent = "";
    for (tag of tags){
        let btn = document.createElement("button");
        btn.textContent = tag;
        btn.setAttribute('type', 'button');
        filterTagsContainer.appendChild(btn);
        btn.classList.add("filter-tag");
    }
}

function renderFlags(flags){
    const flagsContainer = document.querySelector(".flags-wrapper");
    flagsContainer.textContent = "";
    for (flagName of flags){
        let flag = document.createElement("P");
        flag.textContent = flagName;
        flagsContainer.appendChild(flag);
        flagName === "NEW!" ? flag.classList.add("flag", "flag--light") : flag.classList.add("flag", "flag--dark");
    }
}

renderView();
