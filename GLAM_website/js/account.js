// Get all tabs and tab contents
const tabs = document.querySelectorAll('.account__tab');
const tabContents = document.querySelectorAll('.tab__content');

// Add event listener to each tab
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    // Get the target tab content ID
    const targetId = e.target.getAttribute('data-target');

    // Remove active class from all tabs and tab contents
    tabs.forEach((t) => t.classList.remove('active'));
    tabContents.forEach((tc) => tc.classList.remove('active-tab'));

    // Add active class to the current tab and tab content
    e.target.classList.add('active');
    document.querySelector(targetId).classList.add('active-tab');
  });
});