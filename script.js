function switchTimeline(type) {
    const educationSection = document.getElementById('education');
    const workSection = document.getElementById('work');

    if (type === 'education') {
        educationSection.style.display = 'block';
        workSection.style.display = 'none';
    } else {
        educationSection.style.display = 'none';
        workSection.style.display = 'block';
    }
}
