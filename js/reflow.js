[...document.querySelectorAll('[data-src]')].map(img => img.addEventListener('click', e => img.src = img.dataset.src))
