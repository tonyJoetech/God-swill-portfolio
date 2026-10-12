
function sendMsg() {
    const n = document.getElementById('name').value, e = document.getElementById('email').value, m = document.getElementById('message').value;
    if (!n || !e || !m) { document.getElementById('formStatus').textContent = 'Please fill name, email and message.'; return }
    document.getElementById('formStatus').textContent = 'Message sent! Connect Formspree ID to make it real.';
    console.log({ n, e, m });
}
document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }) }) })
