
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      toggle.classList.remove('active');
      links.classList.remove('active');
    });
  });
}); document.getElementById('mobileMenu').classList.toggle('open')

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
