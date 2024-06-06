document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const query = document.querySelector("#search-query").value.toLowerCase();
        const jobListings = document.querySelectorAll("#job-listings li");
        jobListings.forEach(job => {
            const title = job.querySelector("h3").textContent.toLowerCase();
            const company = job.querySelector("p").textContent.toLowerCase();
            if (title.includes(query) || company.includes(query)) {
                job.style.display = "block";
            } else {
                job.style.display = "none";
            }
        });
    });
});

function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function showJobDetails(title, company, location, description) {
    document.getElementById('job-title').textContent = title;
    document.getElementById('job-company').textContent = 'Company: ' + company;
    document.getElementById('job-location').textContent = 'Location: ' + location;
    document.getElementById('job-description').textContent = 'Description: ' + description;
    showSection('job-detail');
}

function showApplicationForm() {
    showSection('application-form');
}

// Initialize the page by showing the home section
showSection('home');
