document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const body = document.body;
    const identityBtns = document.querySelectorAll('.identity-btn');
    const userSections = document.querySelectorAll('.user-section');
    const toggleLinks = document.querySelectorAll('.toggle-mode');
    const forms = document.querySelectorAll('form');

    // State management
    let state = {
        identity: 'customer', // customer | tailor
    };

    // Initialize Theme
    updateTheme(state.identity);

    // 1. Handle Identity Switching (Customer vs Tailor)
    identityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const newType = btn.dataset.type;

            // Update State
            state.identity = newType;
            updateTheme(newType);

            // Update Buttons UI
            identityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Switch User Section (Customer Forms vs Tailor Forms)
            userSections.forEach(section => {
                section.classList.remove('active');
            });
            const activeSection = document.getElementById(`${newType}-forms`);
            activeSection.classList.add('active');

            // Reset to Login View within that section
            const loginForm = activeSection.querySelector('form:first-child');
            const signupForm = activeSection.querySelector('form:last-child');

            // Ensure we start at login prompt when switching identity
            if (signupForm.classList.contains('active')) {
                signupForm.classList.remove('active');
                loginForm.classList.add('active');
            }
        });
    });

    // 2. Handle Mode Switching (Login vs Signup) inside forms
    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.dataset.target; // e.g., 'customer-signup'
            const currentForm = link.closest('form');
            const targetForm = document.getElementById(targetId);

            if (currentForm && targetForm) {
                currentForm.classList.remove('active');
                targetForm.classList.add('active');
            }
        });
    });

    // 3. Form Submission & Validation
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple Password Match Validation
            const passInput = form.querySelector('input[type="password"]:not([id$="-confirm"])');
            const confirmInput = form.querySelector('input[id$="-confirm"]');

            if (confirmInput && passInput) {
                if (passInput.value !== confirmInput.value) {
                    alert("Passwords do not match!");
                    return;
                }
            }

            // Demo Success Logic
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Processing...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerText = 'Success!';
                btn.style.background = '#4CAF50';
                btn.style.color = '#fff';

                setTimeout(() => {
                    // Redirect or Reset
                    alert(`Successfully submitted: ${form.querySelector('h3').innerText}`);
                    btn.innerText = originalText;
                    btn.style.background = ''; // reset to CSS default
                    btn.style.opacity = '1';

                    // If login, redirect to home
                    if (form.id.includes('login')) {
                        window.location.href = 'index.html';
                    }
                }, 1000);
            }, 1000);
        });
    });

    // Helper: Update CSS properties based on identity
    function updateTheme(type) {
        body.setAttribute('data-theme', type);
    }
});
