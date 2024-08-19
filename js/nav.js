//DROPDOWN NAV MENU
// Function to toggle the dropdown menu
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    var isVisible = dropdownContent.style.display === "block";

    // Toggle the display of the dropdown menu
    dropdownContent.style.display = isVisible ? "none" : "block";

    if (!isVisible) {
        // If the dropdown is being opened, add the event listener to close it on outside click
        document.addEventListener('click', closeDropdownOnClickOutside);
    } else {
        // If the dropdown is being closed, remove the event listener
        document.removeEventListener('click', closeDropdownOnClickOutside);
    }
}

// Function to close the dropdown if clicking outside of it
function closeDropdownOnClickOutside(event) {
    var dropdownContent = document.getElementById("dropdown-content");
    var dropdownButton = document.getElementById("dropdown-menu");

    // Check if the click is outside the dropdown menu and the dropdown button
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = "none";
        document.removeEventListener('click', closeDropdownOnClickOutside);
    }
}

// Automatically close the dropdown menu when an item is clicked
document.querySelectorAll('#dropdown-content ul li a').forEach(item => {
    item.addEventListener('click', function() {
        var dropdownContent = document.getElementById("dropdown-content");
        dropdownContent.style.display = "none";
        document.removeEventListener('click', closeDropdownOnClickOutside);
    });
});