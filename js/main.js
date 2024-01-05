// Sheet - Ana Campos, Mariana Godinho, Inês Aleixo, Inês Ferreira

//EFEITO-MENU
window.onload = function () {
    const menu_btn = document.querySelector('.menu');
    const mobile_menu = document.querySelector('.menumovel');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
    mobile_menu.addEventListener('click', function () {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    });
}


//EFEITO-ACORDEÃO
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        const currentlyActiveAccordionItemHeader = document.querySelector (".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight=0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    });
});