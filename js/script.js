const accordion = document.querySelectorAll('.faq');


/**
 * 
 * [toggle faq aria-expanded attribute & faq icon]
 * 
 * @param {string} faq - The faq that is clicked on.
 */

function setAriaExpandedAtt(faq) {

    let ariaExpandedValue = faq.getAttribute("aria-expanded");

    const accordionIcon = faq.firstElementChild.lastElementChild;

    if (ariaExpandedValue === "true") {
        ariaExpandedValue = "false";
        accordionIcon.setAttribute("src", "assets/images/icon-plus.svg");
    } else {
        ariaExpandedValue = "true";
        accordionIcon.setAttribute("src", "assets/images/icon-minus.svg");
    }

    faq.setAttribute("aria-expanded", ariaExpandedValue);
}

accordion.forEach(faq => {
    faq.addEventListener('click', e => {

        setAriaExpandedAtt(faq);
    })
})