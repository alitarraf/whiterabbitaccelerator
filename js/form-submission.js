/**
 * Handles form submissions for White Rabbit Accelerator.
 * Sends data to Google Sheets via Google Apps Script (Web App).
 */

// CONFIGURATION
// Replace this URL with your deployed Web App URL from Google Apps Script
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxi33UjZRVLXOg1yry8ZXXBWdAWeYdr-eJk2Q12vnPN6MMt7l6fzp-1alU9_MNhSsFZ/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
});

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';

  // 1. Basic Validation (HTML5 validation runs before this, but good to check)
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // 2. Prepare UI
  if (submitBtn) {
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
  }

  // 3. Collect Data
  const formData = new FormData(form);
  const data = {};

  // Handle multi-select checkboxes (e.g. mentor_expertise)
  const multiValues = {};

  formData.forEach((value, key) => {
    // If we already have this key, it's likely a checkbox group
    if (data.hasOwnProperty(key)) {
      if (!Array.isArray(multiValues[key])) {
        multiValues[key] = [data[key]];
      }
      multiValues[key].push(value);
      // Update the main data object with the joined string
      data[key] = multiValues[key].join(', ');
    } else {
      data[key] = value;
    }
  });

  // 4. Send Data
  // We use 'no-cors' mode because Google Apps Script redirects to a different domain,
  // which fetch blocks by default in CORS. 
  // IMPORTANT: With 'no-cors', we can't read the response JSON. We assume success if no network error.

  // To actually read the response, we would need to use a proxy or JSONP, but 'no-cors' is simplest for this stack.
  // Alternatively, we can use a hidden iframe hack, but fetch is cleaner.

  // Actually, standard practice for simple Forms -> Sheets is using URLSearchParams
  // and content-type application/x-www-form-urlencoded

  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // <--- This is CRITICAL for Apps Script
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "text/plain;charset=utf-8", // "text/plain" avoids CORS preflight checklist
    },
  })
    .then(response => {
      // With no-cors, response.ok is always false (opaque). 
      // We assume it worked if we got here without a network error.
      showSuccess(form);
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('There was a problem submitting your application. Please check your internet connection and try again.');
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
}

function showSuccess(form) {
  // Get custom success message from form data attributes, or use defaults
  const title = form.dataset.successTitle || 'Application Received!';
  const message = form.dataset.successMessage || 'Thank you for your submission. Your information has been successfully recorded.';

  // Replace form content with success message or redirect
  const formWrap = document.querySelector('.form-wrap') || form.closest('.doc-wrap') || form.parentElement;

  if (formWrap) {
    // Check if we are in the one-pager (special case, don't replace everything, just alert)
    if (form.id === 'onepager-form') {
      alert(title + '\n\n' + message);
      return;
    }

    formWrap.innerHTML = `
      <div class="submit-block" style="margin-top: 0; background: var(--jungle); border-color: var(--lime);">
        <h3 style="color: var(--lime);">${title}</h3>
        <p style="color: var(--white); font-size: 20px;">${message}</p>
        <a href="index.html" class="btn-primary" style="margin-top: 20px; display: inline-block;">Back to Home</a>
      </div>
    `;
    // Scroll to top of message
    formWrap.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert(title + '\n\n' + message);
    window.location.href = 'index.html';
  }
}
