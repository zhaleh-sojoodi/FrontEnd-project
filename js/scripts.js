onload = function(){

    // Site Variables
    siteTitle = document.getElementById("js-site-title")
    logo = document.getElementById("js-logo")
    menuBtnContainer = document.getElementById("js-menu-icon")
    menuBtn = document.getElementById("js-menu")
    siteNav = document.getElementById("js-nav")
    header = document.getElementById("js-header")

    // Toggle mobile menu
    menuBtn.onclick = function(){
        menuBtn.classList.toggle("open-nav")
        siteNav.classList.toggle("open-nav")
    }

    // Change header if scroll position > 50
    if(window.scrollY >= 50){
        changeHeaderScrollClasses("add")
    }

    // Change header when scrolling down page
    window.onscroll = checkHeaderState
}

// Changes site header color when scrolling
function checkHeaderState(){
    let y = window.scrollY
    if(y >= 50){
        changeHeaderScrollClasses("add")
    } else{
        changeHeaderScrollClasses("remove")
    }
}

function changeHeaderScrollClasses(method){
    if(method == "add"){
        logo.classList.add("site-header-scroll")
        siteTitle.classList.add("site-header-scroll")
        menuBtn.classList.add("site-header-scroll")
        menuBtnContainer.classList.add("site-header-scroll")
        header.classList.add("site-header-scroll")
        siteNav.classList.add("site-header-scroll")
    } else if(method == "remove"){
        logo.classList.remove("site-header-scroll")
        siteTitle.classList.remove("site-header-scroll")
        menuBtn.classList.remove("site-header-scroll")
        menuBtnContainer.classList.remove("site-header-scroll")
        header.classList.remove("site-header-scroll")
        siteNav.classList.remove("site-header-scroll")
    }
} 