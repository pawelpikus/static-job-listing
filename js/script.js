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
    },
    {   
        iconUrl: "./images/account.svg",
        company: "Account",
        flags: ["NEW!"],
        title: "Junior Frontend Developer",
        timeSincePosted: "2d ago",
        employmentLength: "Part Time",
        location: "USA only",
        filterTags: ["Frontend", "Junior", "Javascript", "React", "Sass"]
    },
    {   
        iconUrl: "./images/myhome.svg",
        company: "MyHome",
        flags: [],
        title: "Junior Frontend Developer",
        timeSincePosted: "5d ago",
        employmentLength: "Contract",
        location: "USA only",
        filterTags: ["Frontend", "Junior", "CSS", "JavaScript"]
    },
    {   
        iconUrl: "./images/loop-studios.svg",
        company: "Loop Studios",
        flags: [],
        title: "Software Engineer",
        timeSincePosted: "1w ago",
        employmentLength: "Full Time",
        location: "Worldwide",
        filterTags: ["Fullstack", "Midweight", "Ruby", "JavaScript", "Sass"]
    },
    {   
        iconUrl: "./images/faceit.svg",
        company: "FaceIt",
        flags: [],
        title: "Junior Backend Developer",
        timeSincePosted: "2w ago",
        employmentLength: "Full Time",
        location: "UK only",
        filterTags: ["Backend", "Junior", "Ruby", "RoR"]
    }
]

renderView();


function renderView(){
    const mainContainer = document.querySelector(".container");
    mainContainer.innerHTML = "";
    
    for(let i = 0; i <jobPosts.length; i+=1){
       mainContainer.innerHTML +=rendercardView(i);
    }
    
    renderFilterTags();
    renderFlags();
      
}


function rendercardView(index){
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
        return view;
                
}

function renderFilterTags(){
    const filterTagsContainers = document.querySelectorAll(".filter-tags");
    for(let container = 0; container < filterTagsContainers.length; container+=1){
        filterTagsContainers[container].textContent = "";
        for (let tag = 0; tag<jobPosts[container].filterTags.length; tag+=1){
            let btn = document.createElement("button");
            btn.textContent = jobPosts[container].filterTags[tag];
            btn.setAttribute('type', 'button');
            filterTagsContainers[container].appendChild(btn);
            btn.classList.add("filter-tag");
        }
    }
    
    
}

function renderFlags(){
    const flagsContainers = document.querySelectorAll(".flags-wrapper");
    for (let container = 0; container < flagsContainers.length; container+=1){
        flagsContainers[container].textContent = "";
        for (let flagName = 0; flagName<jobPosts[container].flags.length; flagName+=1){
            let flag = document.createElement("P");
            flag.textContent = jobPosts[container].flags[flagName];
            flagsContainers[container].appendChild(flag);
            jobPosts[container].flags[flagName] === "NEW!" ? flag.classList.add("flag", "flag--light") : flag.classList.add("flag", "flag--dark");
        }
    }
}


