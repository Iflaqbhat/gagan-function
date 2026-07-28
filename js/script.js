// Falling petals
const petalHost = document.getElementById('petals');
const count = window.innerWidth < 600 ? 14 : 26;
for (let i = 0; i < count; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.left = (Math.random() * 100) + 'vw';
  p.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
  p.style.animationDuration = (7 + Math.random() * 8) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  p.style.opacity = 0.4 + Math.random() * 0.5;
  const size = 6 + Math.random() * 8;
  p.style.width = size + 'px';
  p.style.height = size + 'px';
  petalHost.appendChild(p);
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in-view'); }
  });
}, { threshold: .2 });
document.querySelectorAll('.reveal, .rangoli-wrap').forEach(el => io.observe(el));

// Countdown to event: 08 Aug 2026, 12:30 (local time)
const target = new Date(2026, 7, 8, 12, 30, 0).getTime();
function updateCountdown() {
  const now = Date.now();
  let diff = target - now;
  if (diff < 0) diff = 0;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById('cd-days').textContent = d;
  document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
  document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
  document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);
