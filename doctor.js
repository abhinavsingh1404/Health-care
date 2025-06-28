const bar = document.getElementById('bar');
const nav = document.querySelector('nav ul');
const filterButtons = document.querySelectorAll('.specialty-filter button');

// Mobile menu toggle
bar.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Specialty filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const specialty = button.textContent.toLowerCase();
        const doctorCards = document.querySelectorAll('.doctor-card');
        
        doctorCards.forEach(card => {
            const doctorSpecialty = card.querySelector('p').textContent.toLowerCase();
            
            if (specialty === 'all specialists') {
                card.style.display = 'block';
            } else if (specialty === 'surgeons' && doctorSpecialty.includes('surgeon')) {
                card.style.display = 'block';
            } else if (specialty === 'physicians' && doctorSpecialty.includes('physician')) {
                card.style.display = 'block';
            } else if (specialty === 'specialists' && 
                      !doctorSpecialty.includes('surgeon') && 
                      !doctorSpecialty.includes('physician')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}); 