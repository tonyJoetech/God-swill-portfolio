const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('menuOverlay');

function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

// Close when clicking link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close on scroll or resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) closeMenu();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    });
});

function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open')
}
function sendMsg() {
    const n = document.getElementById('name').value, e = document.getElementById('email').value, m = document.getElementById('message').value; if (!n || !e || !m) {
        document.getElementById('formStatus').textContent = 'Fill name, email, message'; return
    } document.getElementById('formStatus').textContent = 'Message sent! (Demo)';
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const h = a.getAttribute('href'); if (document.querySelector(h)) {
            e.preventDefault(); document.querySelector(h).scrollIntoView({
                behavior: 'smooth'

            })
        }
    })

})
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) document.querySelector('nav').style.background = 'rgba(12,18,28,0.95)'; else document.querySelector('nav').style.background = 'rgba(12,18,28,0.9)'
})
function sendMsg() {
    const n = document.getElementById('name').value, e = document.getElementById('email').value, m = document.getElementById('message').value;
    if (!n || !e || !m) {
        document.getElementById('formStatus').textContent = 'Please fill name, email and message.'; return

    }
    document.getElementById('formStatus').textContent = 'Message sent! Connect Formspree ID to make it real.';

}
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

        })
    })
})
