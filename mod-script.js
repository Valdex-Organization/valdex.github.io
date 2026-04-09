function toggleNav() {
    const nav = document.getElementById('main-nav');
    const icon = document.getElementById('mob-icon');
    nav.classList.toggle('open');
    icon.className = nav.classList.contains('open') ? 'bi bi-x-lg' : 'bi bi-list';
}
