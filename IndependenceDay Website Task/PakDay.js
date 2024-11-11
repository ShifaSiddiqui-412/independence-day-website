document.getElementById('navbar-toggle').addEventListener('click', function() {
    var links = document.getElementById('navbar-links');
    links.classList.toggle('active');
});

document.querySelectorAll('.sidebar ul li').forEach(function(item) {
    item.addEventListener('click', function() {
        var videoUrl = item.getAttribute('data-video');
        document.getElementById('main-video').src = videoUrl;
    });
});


function updateCountdown() {
    const currentYear = new Date().getFullYear();
    const nextIndependenceDay = new Date(`August 14, ${currentYear}`);
    const now = new Date();
    if (now > nextIndependenceDay) {
        nextIndependenceDay.setFullYear(currentYear + 1);
    }

    const timeDifference = nextIndependenceDay - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    setTimeout(updateCountdown, 1000);
}

window.onload = updateCountdown;
