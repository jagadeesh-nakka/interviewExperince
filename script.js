// Toggle the dropdown menu when the logo is clicked
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
  const dropdown = document.getElementById('dropdown');
  if (!event.target.matches('#logo') && !event.target.matches('.dropdown-item')) {
      if (dropdown.style.display === 'block') {
          dropdown.style.display = 'none';
      }
  }
};

// Add event listener to the logo to toggle the dropdown
document.getElementById('logo').addEventListener('click', toggleDropdown);



// Get the button element
const solveButton = document.getElementById('solveButton');

// Add a click event listener
solveButton.addEventListener('click', function() {
    // Navigate to a new page
    window.location.href = 'index.html'; // Replace with the desired URL
});
