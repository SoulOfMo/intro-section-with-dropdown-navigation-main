const features = document.querySelector(".features"),
    dropDown = document.querySelector(".dropdown"),
    company = document.querySelector(".company"),
    dropDown1 = document.querySelector(".dropdown1"),
    aside = document.querySelector(".aside"),
    bars = document.querySelector(".bars"),
    cancel = document.querySelector(".cancel"),
    asideFeatures = document.querySelector(".aside-features"),
    asideCompany = document.querySelector(".aside-company"),
    asideDropdown = document.querySelector(".aside-dropdown"),
    asideDropdown1 = document.querySelector(".aside-dropdown1")

features.addEventListener("click", function () {
    // console.log(dropDown.classList.contains('dropdown'))
    // if(dropDown.classList.contains('show-dropdown')){
    //     dropDown.classList.remove('show-dropdown')
    // }
    // else{
    //     dropDown.classList.add('show-dropdown')
    // }

    dropDown.classList.toggle('show-dropdown')
})


company.addEventListener("click", function () {
    // if(dropDown1.classList.contains('show-dropdown')){
    //     dropDown1.classList.remove('show-dropdown')
    // }else{
    //     dropDown1.classList.add('show-dropdown')
    // }
    // console.log(dropDown1.classList.contains('dropdown1'))
    dropDown1.classList.toggle('show-dropdown')
})

asideFeatures.addEventListener("click", function () {
    asideDropdown.classList.toggle('show-aside-dropdown')
})

asideCompany.addEventListener("click", function () {
    asideDropdown1.classList.toggle('show-aside-dropdown')
})

bars.addEventListener("click", function () {
    aside.classList.add('show-aside')
})

cancel.addEventListener("click", function () {
    aside.classList.remove('show-aside')
})
