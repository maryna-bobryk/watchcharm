// Desktop-Menüindikator
const navItems = document.querySelectorAll('.nav-list .nav-link');
const indicator = document.createElement('div');
indicator.classList.add('indicator');

// Füge den Indikator zum Header-Menü hinzu
document.querySelector('.header-nav').appendChild(indicator);

// Event: Wenn die Maus über die Links fährt
navItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    const target = e.target.getBoundingClientRect(); // Position des Links
    const nav = document.querySelector('.header-nav').getBoundingClientRect(); // Position des Menüs

    const indicatorPosition = target.left - nav.left + target.width / 2 - indicator.offsetWidth / 2;

    // Bewege den Indikator
    indicator.style.transform = `translateX(${indicatorPosition}px)`;
  });
});

// Zurücksetzen des Indikators beim Verlassen des Menüs
document.querySelector('.header-nav').addEventListener('mouseleave', () => {
  indicator.style.transform = 'translateX(0)';
});