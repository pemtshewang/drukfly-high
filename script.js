let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    if (n > slides.length - 1) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    const slider = document.querySelector('.hero-slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);
function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return false;
    }

    if (email === '') {
        alert('Please enter your email address.');
        return false;
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (subject === '') {
        alert('Please enter a subject.');
        return false;
    }

    if (message === '') {
        alert('Please enter your message.');
        return false;
    }

    // If all fields are valid, submit the form
    return true;
}

function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateBookingForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let package = document.getElementById('package').value;
    let travelers = document.getElementById('travelers').value;
    let startDate = document.getElementById('startDate').value;

    if (name === '') {
        showToast('Please enter your name.');
        return false;
    }

    if (email === '') {
        showToast('Please enter your email address.');
        return false;
    } else if (!isValidEmail(email)) {
        showToast('Please enter a valid email address.');
        return false;
    }

    if (package === '') {
        showToast('Please select a package.');
        return false;
    }

    if (travelers === '') {
        showToast('Please enter the number of travelers.');
        return false;
    }

    if (startDate === '') {
        showToast('Please select a start date.');
        return false;
    }

    // If all fields are valid, submit the form
    showToast('Your booking has been submitted successfully!', true);
    return true;
}

function showToast(message, isSuccess = false) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    if (isSuccess) {
        toast.style.backgroundColor = '#4CAF50';
    } else {
        toast.style.backgroundColor = '#F44336';
    }
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}