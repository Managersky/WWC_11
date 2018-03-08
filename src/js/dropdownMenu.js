function showDropdownMenu(e) {
    e.preventDefault();
    const dropDownMenu = this.querySelector(".dropdown");
    dropDownMenu.classList.toggle("show");
}

const userAccount = document.querySelector(".account-btn");
const sortList = document.querySelector(".sort-by");

userAccount.addEventListener("click", showDropdownMenu);
sortList.addEventListener("click", showDropdownMenu);
