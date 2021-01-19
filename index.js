

 (function() {

    let hamburger_menu_button = document.querySelector(".fa.fa-bars");
    let hamburger_menu_nav = document.querySelector(".header__nav");
    let close = document.querySelector(".fa.fa-times");

    
    [hamburger_menu_button, close].forEach(item => {
      item.addEventListener("click", () => {
        if(hamburger_menu_nav.style.display === "flex") {
          hamburger_menu_nav.style.display = "none";
          close.style.display = "none";
          hamburger_menu_button.style.display = "flex";
        } else {
          hamburger_menu_nav.style.cssText = "display: flex; flex-direction: column";
          close.style.display = "flex";
          hamburger_menu_button.style.display = "none";
        }
      })
    });
    
 })();
  