// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hero Section Animations
window.addEventListener('load', function () {
  const title = document.querySelector('.hero-title');
  const subtitle = document.querySelector('.hero-subtitle');
  const button = document.querySelector('.hero-button');

  setTimeout(() => title.classList.add('show'), 500);
  setTimeout(() => subtitle.classList.add('show'), 1000);
  setTimeout(() => button.classList.add('show'), 1500);
});

// Load Courses Dynamically Using AJAX
document.addEventListener('DOMContentLoaded', function () {
  const courseList = document.getElementById('courseList');

  fetch('courses.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(course => {
        const courseCard = `
          <div class="col-md-3">
            <div class="card">
              <img src="${course.image}" class="card-img-top" alt="${course.title}">
              <div class="card-body">
                <h5 class="card-title">${course.title}</h5>
                <p class="card-text">${course.description}</p>
                <a href="contact.html" class="btn btn-primary">Enroll Now</a>
              </div>
            </div>
          </div>
        `;
        courseList.innerHTML += courseCard;
      });
    })
    .catch(error => console.error('Error loading courses:', error));
});

// Notification Pop-Up
//document.addEventListener('DOMContentLoaded', function () {
 // alert("Welcome to the E-Learning Platform!");
//});
