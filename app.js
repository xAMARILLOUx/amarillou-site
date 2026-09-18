const menu = document.querySelector("#site-menu");
const toggle = document.querySelector(".menu-toggle");
const closeButton = document.querySelector(".menu-close");

if (menu && toggle && closeButton) {
  const setMenuState = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  const closeMenu = (returnFocus = false) => {
    if (menu.open) {
      menu.close();
    }

    setMenuState(false);

    if (returnFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    if (menu.open) {
      closeMenu(true);
      return;
    }

    menu.showModal();
    setMenuState(true);
    closeButton.focus();
  });

  closeButton.addEventListener("click", () => closeMenu(true));

  menu.addEventListener("close", () => setMenuState(false));

  menu.addEventListener("click", (event) => {
    if (event.target === menu) {
      closeMenu(true);
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu(false));
  });
}
