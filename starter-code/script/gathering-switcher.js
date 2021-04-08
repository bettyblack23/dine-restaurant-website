const family = document.querySelectorAll('.family-events');
const special = document.querySelectorAll('.special-events');
const social = document.querySelectorAll('.social-events');


const justFamily = () => {
    family.forEach((element) => {
        element.classList.remove("non-active");
        element.classList.add("sw-active");
    });

    special.forEach((element) => {
        element.classList.remove("sw-active");
        element.classList.add("non-active");
    });

    social.forEach((element) => {
        element.classList.remove("sw-active");
        element.classList.add("non-active");
    });

    
    document.querySelector(".first-line").classList.add("non-transparent");
    document.querySelector(".second-line").classList.remove("non-transparent");
    document.querySelector(".third-line").classList.remove("non-transparent");

    document.getElementById('family_link').classList.add("non-transparent");
    document.getElementById('special_link').classList.remove("non-transparent");
    document.getElementById('social_link').classList.remove("non-transparent");
}


const justSpecial = () => {
    special.forEach((element) => {
        element.classList.remove("non-active");
        element.classList.add("sw-active");
    });

    family.forEach((element) => {
        element.classList.remove("sw-active");
        element.classList.add("non-active");
    });

    social.forEach((element) => {
        element.classList.remove("sw-active");
        element.classList.add("non-active");
    });
    
    document.querySelector(".first-line").classList.remove("non-transparent");
    document.querySelector(".second-line").classList.add("non-transparent");
    document.querySelector(".third-line").classList.remove("non-transparent");

    
    document.getElementById('family_link').classList.remove("non-transparent");
    document.getElementById('special_link').classList.add("non-transparent");
    document.getElementById('social_link').classList.remove("non-transparent");
}



const justSocial = () => {
    social.forEach((element) => {
        element.classList.remove("non-active");
        element.classList.add("sw-active");
    });

    family.forEach((element) => {
        element.classList.remove("sw-active");
        element.classList.add("non-active");
    });

    special.forEach((element) => {
        element.classList.remove("sw-active");
        element.classList.add("non-active");
    });

    document.querySelector(".first-line").classList.remove("non-transparent");
    document.querySelector(".second-line").classList.remove("non-transparent");
    document.querySelector(".third-line").classList.add("non-transparent");

    
    document.getElementById('family_link').classList.remove("non-transparent");
    document.getElementById('special_link').classList.remove("non-transparent");
    document.getElementById('social_link').classList.add("non-transparent");
}

document.getElementById('family_link').addEventListener("click", justFamily);
document.getElementById('special_link').addEventListener("click", justSpecial);
document.getElementById('social_link').addEventListener("click", justSocial);
