var EstimatorModule = (function () {
  var estData = {};
  var selectedFeatures = [];
  var agencyConfig = null;

  function init(config) {
    agencyConfig = config;
    setupFeatureCards();
    setupSubmitHandler();
  }

  function setupFeatureCards() {
    document.querySelectorAll('.feat-card').forEach(function (card) {
      /* Click handler */
      card.addEventListener('click', function () {
        toggleFeature(card);
      });

      /* Keyboard handler — Space and Enter */
      card.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggleFeature(card);
        }
      });
    });
  }

  function toggleFeature(card) {
    card.classList.toggle('selected');
    var isSelected = card.classList.contains('selected');
    card.setAttribute('aria-checked', isSelected ? 'true' : 'false');

    var feat = card.dataset.feat;
    if (isSelected) {
      selectedFeatures.push(feat);
    } else {
      selectedFeatures = selectedFeatures.filter(function (f) { return f !== feat; });
    }
  }

  function setFieldError(el, msgEl, message) {
    if (!el || !msgEl) return;
    msgEl.textContent = message;
    msgEl.hidden = !message;
    el.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function clearFieldError(el, msgEl) {
    if (!el || !msgEl) return;
    msgEl.textContent = '';
    msgEl.hidden = true;
    el.removeAttribute('aria-invalid');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  }

  function isValidPhone(phone) {
    var cleaned = (phone || '').trim();
    var hasPlus = cleaned.startsWith('+');
    cleaned = cleaned.replace(/[^\d]/g, '');
    if (hasPlus && phone.trim().startsWith('+') && cleaned.length < 8) return false;
    return cleaned.length >= 7 && cleaned.length <= 15;
  }

  function showFailure(message) {
    var failure = document.getElementById('estFailure');
    var failureMsg = document.getElementById('estFailureMsg');
    var loading = document.getElementById('estLoading');
    var result = document.getElementById('estResult');

    if (loading) loading.classList.remove('show');
    if (result) result.classList.remove('show');

    if (failureMsg) failureMsg.textContent = message || 'Something went wrong. Please try again.';
    if (failure) {
      failure.hidden = false;
      failure.classList.add('show');
    }
  }

  function resetFailure() {
    var failure = document.getElementById('estFailure');
    if (!failure) return;
    failure.hidden = true;
    failure.classList.remove('show');
    var failureMsg = document.getElementById('estFailureMsg');
    if (failureMsg) failureMsg.textContent = '';
  }

  function clearStep3Errors() {
    var nameEl = document.getElementById('estName');
    var waEl = document.getElementById('estWhatsapp');
    var emailEl = document.getElementById('estEmail');
    clearFieldError(nameEl, document.getElementById('err-estName'));
    clearFieldError(waEl, document.getElementById('err-estWhatsapp'));
    clearFieldError(emailEl, document.getElementById('err-estEmail'));
  }

  window.estNext = function (step) {
    var currentStep = document.querySelector('.est-step.active');
    if (!currentStep) return;
    var currentNum = parseInt(currentStep.dataset.step);

    if (currentNum === 1 && step > 1) {
      var biz = document.getElementById('bizType').value;
      var loc = document.getElementById('bizLocation').value.trim();
      var goal = document.querySelector('input[name="goal"]:checked');

      if (!biz || !loc || !goal) {
        resetFailure();
        showFailure('Please fill out the business type, location, and goal to continue.');
        return;
      }

      estData.bizType = biz;
      estData.location = loc;
      estData.goal = goal.value;
      if (typeof trackEvent === 'function') trackEvent('estimator_started');
    }

    if (currentNum === 2 && step > 2) {
      var tl = document.querySelector('input[name="timeline"]:checked');
      if (!tl) {
        resetFailure();
        showFailure('Please select a timeline to continue.');
        return;
      }

      estData.pages = parseInt(document.getElementById('pageCount').value);
      estData.features = selectedFeatures.slice();
      estData.timeline = tl.value;
    }

    resetFailure();
    clearStep3Errors();

    document.querySelectorAll('.est-step').forEach(function (s) { s.classList.remove('active'); });
    var nextEl = document.querySelector('.est-step[data-step="' + step + '"]');
    if (nextEl) {
      nextEl.classList.add('active');
      /* Focus first input in new step for accessibility */
      var firstInput = nextEl.querySelector('input, select, textarea');
      if (firstInput) setTimeout(function () { firstInput.focus(); }, 100);
    }

    document.querySelectorAll('.est-step-indicator').forEach(function (ind) {
      var s = parseInt(ind.dataset.step);
      ind.classList.remove('active', 'done');
      if (s < step) ind.classList.add('done');
      else if (s === step) ind.classList.add('active');
    });

    var fills = document.querySelectorAll('.est-progress-line .fill');
    if (fills.length > 0) fills[0].style.width = step >= 2 ? '100%' : '0%';
    if (fills.length > 1) fills[1].style.width = step >= 3 ? '100%' : '0%';

    /* Update progressbar */
    var progressbar = document.querySelector('.est-progress');
    if (progressbar) progressbar.setAttribute('aria-valuenow', step);
  };

  function setupSubmitHandler() {
    var submitBtn = document.getElementById('estSubmitBtn');
    if (!submitBtn || !agencyConfig) return;

    var retryBtn = document.getElementById('estRetryBtn');
    if (retryBtn) {
      retryBtn.addEventListener('click', function () {
        resetFailure();
        clearStep3Errors();
        document.querySelectorAll('.est-step').forEach(function (s) { s.classList.remove('active'); });
        var step3 = document.querySelector('.est-step[data-step="3"]');
        if (step3) {
          step3.classList.add('active');
          var firstInput = step3.querySelector('input, select, textarea');
          if (firstInput) firstInput.focus();
        }
        var estProg = document.querySelector('.est-progress');
        if (estProg) estProg.style.display = '';
        var loading = document.getElementById('estLoading');
        if (loading) loading.classList.remove('show');
        var result = document.getElementById('estResult');
        if (result) result.classList.remove('show');
      });
    }

    submitBtn.addEventListener('click', function () {
      resetFailure();
      clearStep3Errors();

      var nameEl = document.getElementById('estName');
      var waEl = document.getElementById('estWhatsapp');
      var emailEl = document.getElementById('estEmail');
      var name = (nameEl && nameEl.value ? nameEl.value : '').trim();
      var whatsapp = (waEl && waEl.value ? waEl.value : '').trim();
      var email = (emailEl && emailEl.value ? emailEl.value : '').trim();
      var notes = (document.getElementById('estNotes') && document.getElementById('estNotes').value) ? document.getElementById('estNotes').value.trim() : '';

      var errName = document.getElementById('err-estName');
      var errWhatsapp = document.getElementById('err-estWhatsapp');
      var errEmail = document.getElementById('err-estEmail');

      clearFieldError(nameEl, errName);
      clearFieldError(waEl, errWhatsapp);
      clearFieldError(emailEl, errEmail);

      var hasError = false;

      if (!name) {
        setFieldError(nameEl, errName, 'Name is required.');
        hasError = true;
      } else if (name.length < 2) {
        setFieldError(nameEl, errName, 'Please enter a valid name.');
        hasError = true;
      }

      if (!whatsapp) {
        setFieldError(waEl, errWhatsapp, 'WhatsApp number is required.');
        hasError = true;
      } else if (!isValidPhone(whatsapp)) {
        setFieldError(waEl, errWhatsapp, 'Please enter a valid phone number (include country code if possible).');
        hasError = true;
      }

      if (!email) {
        setFieldError(emailEl, errEmail, 'Email is required.');
        hasError = true;
      } else if (!isValidEmail(email)) {
        setFieldError(emailEl, errEmail, 'Please enter a valid email address.');
        hasError = true;
      }

      if (hasError) {
        var firstInvalid = document.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      estData.name = name;
      estData.whatsapp = whatsapp;
      estData.email = email;
      estData.notes = notes;

      document.querySelectorAll('.est-step').forEach(function (s) { s.classList.remove('active'); });
      var estProg = document.querySelector('.est-progress');
      if (estProg) estProg.style.display = 'none';

      var loading = document.getElementById('estLoading');
      if (loading) loading.classList.add('show');

      setTimeout(function () {
        if (loading) loading.classList.remove('show');

        var payload = {
          name: sanitizeInput(name),
          email: sanitizeInput(email),
          whatsapp: sanitizeInput(whatsapp),
          businessType: sanitizeInput(estData.bizType),
          features: sanitizeInput((estData.features || []).join(', ')),
          estimate: 'Consultation Proposal Prepared',
          notes: sanitizeInput(notes),
          _subject: 'New consultation lead from ' + sanitizeInput(agencyConfig.name) + ': ' + sanitizeInput(name)
        };

        fetch('https://formsubmit.co/' + agencyConfig.email, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        })
          .then(function (res) {
            if (!res || !res.ok) {
              return res.text().then(function(text) {
                throw new Error('Submission failed: ' + text);
              });
            }
            return res.json().catch(function () { return {}; });
          })
          .then(function () {
            var result = document.getElementById('estResult');
            if (result) {
              result.classList.add('show');
              result.focus();
            }

            document.getElementById('resPrice').textContent = 'Consultation Proposal Prepared';
            document.getElementById('resDelivery').textContent = 'Flexible timeline options: ASAP (' + (estData.timeline === 'ASAP' ? '3-5' : '7-14') + ' Days) or Standard Schedule';

            var ul = document.getElementById('resIncluded');
            if (ul) {
              ul.innerHTML = '';
              var summaryList = [
                'Founder-led custom blueprint',
                'Pages selected: ' + estData.pages,
                'Target goal: ' + estData.goal
              ];
              if (estData.features && estData.features.length) {
                summaryList.push('Included: ' + estData.features.join(', '));
              }
              summaryList.forEach(function (f) {
                var li = document.createElement('li');
                li.textContent = f;
                ul.appendChild(li);
              });
            }

            var upsell = document.getElementById('resUpsell');
            if (upsell) upsell.innerHTML = '<strong>Next Step:</strong> Let\'s discuss your project on a brief consultation call to finalize scope, architecture, and launch strategy.';
            var disclaimer = document.getElementById('resDisclaimer');
            if (disclaimer) disclaimer.textContent = 'This request has been logged. Our founder will review your selections and connect via WhatsApp/Email within 24 hours.';

            var waText = encodeURIComponent('Hi! I just completed the project planner on your website for a ' + estData.bizType + ' (' + estData.pages + ' pages). I\'d like to schedule our consultation.');
            var resWhatsapp = document.getElementById('resWhatsapp');
            if (resWhatsapp) resWhatsapp.href = 'https://wa.me/' + agencyConfig.whatsapp.replace(/[^0-9]/g, '') + '?text=' + waText;

            var emailBtn = document.getElementById('resEmail');
            if (emailBtn) {
              emailBtn.textContent = 'Schedule Consultation via Email';
              emailBtn.onclick = function () {
                var subject = encodeURIComponent('Consultation Request: ' + agencyConfig.name);
                var body = encodeURIComponent('Hi,\n\nI filled out the project estimator for my ' + estData.bizType + ' project.\nPages: ' + estData.pages + '\nGoal: ' + estData.goal + '\nFeatures: ' + (estData.features || []).join(', ') + '\n\nI\'d like to schedule our brief consultation call.\n\nThanks!\n' + name);
                window.location.href = 'mailto:' + agencyConfig.email + '?subject=' + subject + '&body=' + body;
              };
            }

            if (typeof trackEvent === 'function') trackEvent('lead_submitted', { name: name, email: email });
          })
          .catch(function () {
            var result = document.getElementById('estResult');
            if (result) result.classList.remove('show');

            showFailure('We couldn\u2019t submit your request right now. Please check your connection and try again.');
          });
      }, 1200);
    });
  }

  return { init: init };
})();
