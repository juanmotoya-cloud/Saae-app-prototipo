
// ============ SAAE App — script.js ============

// Saudação dinâmica conforme horário
(function setGreeting() {
  const el = document.getElementById('greeting-sub');
  if (!el) return;
  const h = new Date().getHours();
  let msg = 'Boa noite!';
  if (h >= 5 && h < 12) msg = 'Bom dia!';
  else if (h >= 12 && h < 18) msg = 'Boa tarde!';
  el.textContent = msg;
})();

// Toast genérico
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// Botão voltar (páginas internas)
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (window.history.length > 1) window.history.back();
    else window.location.href = 'index.html';
  });
});

// Ações simuladas
document.querySelectorAll('[data-action]').forEach(el => {
  el.addEventListener('click', e => {
    const action = el.getAttribute('data-action');
    if (action === 'soon') {
      e.preventDefault();
      showToast('Funcionalidade em breve!');
    } else if (action === 'pay') {
      e.preventDefault();
      showToast('Redirecionando para o pagamento seguro…');
    }
  });
});

// Contagem regressiva do vencimento (vence daqui a 18 dias, como na base)
(function countdown() {
  const DUE_DAYS = 18;
  const due = new Date();
  due.setDate(due.getDate() + DUE_DAYS);
  const text = 'Vence em ' + DUE_DAYS + ' dias';
  document.querySelectorAll('[data-due]').forEach(el => { el.textContent = text; });
})();
