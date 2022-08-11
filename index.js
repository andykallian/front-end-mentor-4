const features = document.querySelector('.features')
const company = document.querySelector('.company')

const featuresArrow = document.querySelector('.arrow-feature')
const companyArrow = document.querySelector('.arrow-company')





function showFeatureBox(){


    featuresArrow.src = "images/icon-arrow-up.svg"


    features.classList.contains('hidden') ? features.classList.remove('hidden') : features.classList.add('hidden')


}

function hideFeatureBox(){
    features.classList.add('hidden')
    featuresArrow.src = "images/icon-arrow-down.svg"

}

function showCompanyBox(){
    companyArrow.src = "images/icon-arrow-up.svg"

    company.classList.contains('hidden') ? company.classList.remove('hidden') : company.classList.add('hidden')
}

function hideCompanyBox(){
    company.classList.add('hidden')
    companyArrow.src = "images/icon-arrow-down.svg"

}


