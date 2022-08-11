const features = document.querySelector('.features')
const company = document.querySelector('.company')

const featuresArrow = document.querySelector('.arrow-feature')
const companyArrow = document.querySelector('.arrow-company')

const btnNav = document.querySelector('.btn-nav')
const listNav = document.querySelector('.list-nav')
const loginNav = document.querySelector('.login-nav')


const mobileNav = document.querySelector('.mobile-navbar')
const mobileButton = document.querySelector('.mobile-button')
const mobileButtonImg = document.querySelector('#mobile-button')


/* It's a checker. I'm using it to check if user window width is higher than 750px. If true, than it will add a class "hidden" to mobile navbar*/

function checkDimensions() {
    windowWidth = document.body.clientWidth;
}

window.addEventListener("resize", () => {
    checkDimensions();

    if(windowWidth > 750){
        mobileNav.classList.add('hidden')
    }
  
});



/* Functions */

function showMobileNav(){

    mobileButtonImg.src = "images/icon-close-menu.svg"

    !mobileNav.classList.contains('mobile-nav-show') ? mobileNav.classList.add('mobile-nav-show') : mobileNav.classList.remove('mobile-nav-show')

    if(!mobileNav.classList.contains('mobile-nav-show')){
        mobileButtonImg.src = "images/icon-menu.svg"
    }

    if(mobileNav.classList.contains('hidden')){
        mobileNav.classList.remove('hidden')
    }


}


function showListNav(){
    listNav.classList.contains('reveal') ? listNav.classList.remove('reveal') : listNav.classList.add('reveal') 
}



function showLoginNav(){
    loginNav.classList.contains('reveal') ? loginNav.classList.remove('reveal') : loginNav.classList.add('reveal') 
}

function showFeatureBox(){


    featuresArrow.src = "images/icon-arrow-up.svg"


    features.classList.contains('hidden') ? features.classList.remove('hidden') : features.classList.add('hidden')


}

function hideFeatureBox(){
    features.classList.add('hidden')
    featuresArrow.src = "images/icon-arrow-down.svg"

    if(features.classList.contains('hidden')){
        mobileButtonImg.src = "images/icon-arrow-down.svg"
    }

}

function showCompanyBox(){
    companyArrow.src = "images/icon-arrow-up.svg"

    company.classList.contains('hidden') ? company.classList.remove('hidden') : company.classList.add('hidden')
}

function hideCompanyBox(){
    company.classList.add('hidden')
    companyArrow.src = "images/icon-arrow-down.svg"

    if(features.classList.contains('hidden')){
        mobileButtonImg.src = "images/icon-arrow-down.svg"
    }

}


