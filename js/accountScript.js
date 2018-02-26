function showDropdownMenu() {
    const showMenuItems = document.getElementById("headerDropdown").classList.toggle("show");
}

const userAccount = document.querySelector(".account-btn");

userAccount.addEventListener("click", showDropdownMenu);
