# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/pawelpikus/static-job-listing)
- Live Site URL: [Github Pages](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JS
- Flexbox
- Mobile-first workflow


### What I learned

I created an array of objects and used it to pull the data and then dynamically add the content using a global array of filter tags, which I updated on adding / removing filter tags. In updating the view I used 'style.display' property:
```js
if (tags.every(tagName => jobPosts[i].filterTags.includes(tagName))) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        } 
```
to show/hide the filtered cards. 

My main goal was to practice DOM manipulation using Javascript. In the process I learned how to remove any given element of an array using 'filter' method.

```js
function removeTagfromArray(tagName){
    return arrayFilterTags.filter((elem => elem !==tagName));
}
```

and also how to effectively use template literals to create HTML templates for rendering view.

### Continued development

I like the approach I used in the project to dynamically update the view based on given data. I think the approach is used in frameworks like "React", which I'm going to dig into next.

## Author

- Frontend Mentor - [@pawelpikus](https://www.frontendmentor.io/profile/pawelpikus)

## Acknowledgments

Thanks frontendmentor.io for super cool challenges!


