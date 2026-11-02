(function () {
  var CORRECT = 'welikedogs';
  var STORAGE_KEY = 'bb_wedding_gate_ok';

  function alreadyUnlocked() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === 'yes' || localStorage.getItem(STORAGE_KEY) === 'yes';
    } catch (e) {
      return false;
    }
  }

  function unlock(remember) {
    var gate = document.getElementById('site-password-gate');
    if (gate) {
      gate.classList.add('gate-hidden');
      setTimeout(function () {
        gate.style.display = 'none';
      }, 300);
    }
    try {
      if (remember) {
        localStorage.setItem(STORAGE_KEY, 'yes');
      } else {
        sessionStorage.setItem(STORAGE_KEY, 'yes');
      }
    } catch (e) { /* private browsing or storage disabled, ignore */ }
  }

  // If already unlocked this session (or remembered), hide immediately, no flash.
  if (alreadyUnlocked()) {
    var gate = document.getElementById('site-password-gate');
    if (gate) gate.style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('gate-form');
    var input = document.getElementById('gate-password');
    var error = document.getElementById('gate-error');
    var remember = document.getElementById('gate-remember');

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var guess = (input.value || '').trim().toLowerCase();
      if (guess === CORRECT) {
        unlock(remember && remember.checked);
      } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
      }
    });
  });
})();
