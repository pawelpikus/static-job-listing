const jobPosts = [{
        iconUrl: "./images/photosnap.svg",
        company: "Photosnap",
        flags: ["NEW!", "FEATURED"],
        isfeatured: true,
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
        isfeatured: true,
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
        isfeatured: false,
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
        isfeatured: false,
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
        isfeatured: false,
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
        isfeatured: false,
        title: "Junior Backend Developer",
        timeSincePosted: "2w ago",
        employmentLength: "Full Time",
        location: "UK only",
        filterTags: ["Backend", "Junior", "Ruby", "RoR"]
    },
    {
        iconUrl: "./images/shortly.svg",
        company: "Shortly",
        flags: [],
        isfeatured: false,
        title: "Junior Developer",
        timeSincePosted: "2w ago",
        employmentLength: "Full Time",
        location: "Worldwide",
        filterTags: ["Frontend", "Junior", "HTML", "JavaScript", "Sass"]
    },
    {
        iconUrl: "./images/insure.svg",
        company: "Insure",
        flags: [],
        isfeatured: false,
        title: "Junior Frontend Developer",
        timeSincePosted: "2w ago",
        employmentLength: "Full Time",
        location: "USA only",
        filterTags: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"]
    },
    {
        iconUrl: "./images/eyecam-co.svg",
        company: "Eyecam co.",
        flags: [],
        isfeatured: false,
        title: "Fullstack Engineer",
        timeSincePosted: "3w ago",
        employmentLength: "Full Time",
        location: "Wordwide",
        filterTags: ["Fullstack", "Midweight", "JavaScript", "Python", "Django"]
    },
    {
        iconUrl: "./images/the-air-filter-company.svg",
        company: "The Air Filter Company",
        flags: [],
        isfeatured: false,
        title: "Frontend Dev",
        timeSincePosted: "1m ago",
        employmentLength: "Part Time",
        location: "Wordwide",
        filterTags: ["Frontend", "Junior", "React", "Sass"]
    }

]

renderCards();

const filterMainContainer = document.querySelector(".filter-container");
const filteredtagsContainer = document.querySelector(".filtered-tags-container");
const filterTags = document.querySelectorAll(".filter-tag");
const clearBtn = document.querySelector(".clear-btn");
let filteredTagsArray = [];

filterTags.forEach(tag => {
    tag.addEventListener("click", () => {
        filterMainContainer.classList.add("active");
        if (!filteredTagsArray.includes(tag.textContent)) {
            
            const tagView = `
            <div class="filter-tag-wrapper">
                <button type="button" class="filter-tag clicked">${tag.textContent}</button>
                <button type="button" class="clr-tag-btn">✖</button>
            </div>
            `
            filteredtagsContainer.innerHTML += tagView;
            filteredTagsArray.push(tag.textContent);
            filterCards(filteredTagsArray);
        }

        const clearTagBtns = document.querySelectorAll(".clr-tag-btn");
        clearTagBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.target.parentNode.remove();
                filteredTagsArray.shift();
                                                
                if (filteredTagsArray.length) {
                    filterCards(filteredTagsArray);
                } else {
                    filterMainContainer.classList.remove("active");
                    filteredTagsArray = [];
                    showAllCards();
                }
              
            });
        });
    });
});

clearBtn.addEventListener("click", () => {
    filterMainContainer.classList.remove("active");
    filteredTagsArray = [];
    while (filteredtagsContainer.firstChild) {
        filteredtagsContainer.firstChild.remove()
    }
    showAllCards();
})

function showAllCards(){
    const cards = document.querySelectorAll(".card");
    for (let card of cards){
        card.style.display = "";
    }
}

function filterCards(tags) {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < jobPosts.length; i += 1) {
        if (jobPosts[i].filterTags.some(tagName => tags.includes(tagName))) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}


function renderCards() {
    const mainContainer = document.querySelector(".card-container");
    mainContainer.innerHTML = "";
    for (let i = 0; i < jobPosts.length; i += 1) {
        mainContainer.innerHTML += rendercardView(i);
        renderFilterTags(i);
        renderFlags(i);
    }
    renderFeatured();
}

function rendercardView(index) {
    let view = `
    <div class="card">
        <div class="main-content">
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
        </div>
        <div class="filter-tags">
          
        </div> 
    </div>`
    return view;

}

function renderFilterTags(index) {
    const filterTagsContainers = document.querySelectorAll(".filter-tags");

    for (let tag = 0; tag < jobPosts[index].filterTags.length; tag += 1) {
        let btn = document.createElement("button");
        btn.textContent = jobPosts[index].filterTags[tag];
        btn.setAttribute('type', 'button');
        filterTagsContainers[filterTagsContainers.length - 1].appendChild(btn);
        btn.classList.add("filter-tag");
    }
}


function renderFlags(index) {
    const flagsContainers = document.querySelectorAll(".flags-wrapper");
    for (let flagName = 0; flagName < jobPosts[index].flags.length; flagName += 1) {
        let flag = document.createElement("P");
        flag.textContent = jobPosts[index].flags[flagName];
        flagsContainers[flagsContainers.length - 1].appendChild(flag);
        jobPosts[index].flags[flagName] === "NEW!" ? flag.classList.add("flag", "flag--light") : flag.classList.add("flag", "flag--dark");
    }
}

function renderFeatured() {
    const cards = document.querySelectorAll(".card");
    for (let card = 0; card < cards.length; card += 1) {
        if (jobPosts[card].isfeatured) {
            cards[card].classList.add("featured");
        }
    }
}