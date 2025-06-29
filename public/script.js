document.getElementById('panicBtn').addEventListener('click', () => {
  fetch('/alert', { method: 'POST' })
    .finally(() => window.location.href = 'https://weather.com');
});
