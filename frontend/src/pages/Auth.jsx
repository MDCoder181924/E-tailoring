import React, { useState, useEffect } from 'react';
import '../css/auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const [identity, setIdentity] = useState('customer'); // customer | tailor
    const [activeForm, setActiveForm] = useState('login'); // login | signup

    useEffect(() => {
        document.body.setAttribute('data-theme', identity);
        return () => {
            document.body.removeAttribute('data-theme');
        }
    }, [identity]);

    const handleIdentitySwitch = (type) => {
        setIdentity(type);
        setActiveForm('login'); // Reset to login when switching identity
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // Basic Password Match Validation
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
                alert(`Successfully submitted!`);
                btn.innerText = originalText;
                btn.style.background = ''; // reset to CSS default
                btn.style.opacity = '1';

                // If login, redirect to home
                if (activeForm === 'login') {
                    navigate('/');
                }
            }, 1000);
        }, 1000);
    };

    return (
        <div className="auth-wrapper">
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>

            <div className="auth-card">
                <div className="auth-header">
                    <Link to="/" className="back-link">← Back to Home</Link>
                    <h2 className="brand-title">E-Tailoring</h2>
                    <div className="identity-switch">
                        <button
                            className={`identity-btn ${identity === 'customer' ? 'active' : ''}`}
                            onClick={() => handleIdentitySwitch('customer')}
                        >
                            Customer
                        </button>
                        <button
                            className={`identity-btn ${identity === 'tailor' ? 'active' : ''}`}
                            onClick={() => handleIdentitySwitch('tailor')}
                        >
                            Tailor
                        </button>
                    </div>
                </div>

                <div className="forms-container">
                    {/* CUSTOMER FORMS */}
                    {identity === 'customer' && (
                        <div id="customer-forms" className="user-section active">
                            {/* Customer Login */}
                            {activeForm === 'login' && (
                                <form id="customer-login" className="auth-form active" onSubmit={handleFormSubmit}>
                                    <h3>Customer Login</h3>
                                    <p className="subtitle">Welcome back! Please login to your account.</p>

                                    <div className="input-group">
                                        <label htmlFor="c-login-id">Email or Name</label>
                                        <input type="text" id="c-login-id" placeholder="Enter your email or name" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="c-login-pass">Password</label>
                                        <input type="password" id="c-login-pass" placeholder="Enter your password" required />
                                    </div>

                                    <button type="submit" className="btn-primary">Login</button>

                                    <div className="form-footer">
                                        <p>Don't have an account? <span className="toggle-mode" onClick={() => setActiveForm('signup')}>Sign Up</span></p>
                                    </div>
                                </form>
                            )}

                            {/* Customer Signup */}
                            {activeForm === 'signup' && (
                                <form id="customer-signup" className="auth-form active" onSubmit={handleFormSubmit}>
                                    <h3>Customer Sign Up</h3>
                                    <p className="subtitle">Create an account to order custom designs.</p>

                                    <div className="input-group">
                                        <label htmlFor="c-signup-name">Full Name</label>
                                        <input type="text" id="c-signup-name" placeholder="Enter your full name" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="c-signup-email">Email Address</label>
                                        <input type="email" id="c-signup-email" placeholder="Enter your email" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="c-signup-pass">Password</label>
                                        <input type="password" id="c-signup-pass" placeholder="Create a password" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="c-signup-confirm">Confirm Password</label>
                                        <input type="password" id="c-signup-confirm" placeholder="Confirm your password" required />
                                    </div>

                                    <button type="submit" className="btn-primary">Sign Up</button>

                                    <div className="form-footer">
                                        <p>Already have an account? <span className="toggle-mode" onClick={() => setActiveForm('login')}>Login</span></p>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}

                    {/* TAILOR FORMS */}
                    {identity === 'tailor' && (
                        <div id="tailor-forms" className="user-section active">
                            {/* Tailor Login */}
                            {activeForm === 'login' && (
                                <form id="tailor-login" className="auth-form active" onSubmit={handleFormSubmit}>
                                    <h3>Tailor Login</h3>
                                    <p className="subtitle">Access your dashboard and manage orders.</p>

                                    <div className="input-group">
                                        <label htmlFor="t-login-id">Email or Name</label>
                                        <input type="text" id="t-login-id" placeholder="Enter your email or name" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="t-login-pass">Password</label>
                                        <input type="password" id="t-login-pass" placeholder="Enter your password" required />
                                    </div>

                                    <button type="submit" className="btn-primary">Login</button>

                                    <div className="form-footer">
                                        <p>New to E-Tailoring? <span className="toggle-mode" onClick={() => setActiveForm('signup')}>Join as Tailor</span></p>
                                    </div>
                                </form>
                            )}

                            {/* Tailor Signup */}
                            {activeForm === 'signup' && (
                                <form id="tailor-signup" className="auth-form active" onSubmit={handleFormSubmit}>
                                    <h3>Tailor Registration</h3>
                                    <p className="subtitle">Join our network of master tailors.</p>

                                    <div className="input-group">
                                        <label htmlFor="t-signup-name">Full Name</label>
                                        <input type="text" id="t-signup-name" placeholder="Enter your full name" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="t-signup-email">Email Address</label>
                                        <input type="email" id="t-signup-email" placeholder="Enter your email" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="t-signup-mobile">Mobile Number</label>
                                        <input type="tel" id="t-signup-mobile" placeholder="Enter your mobile number" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="t-signup-pass">Password</label>
                                        <input type="password" id="t-signup-pass" placeholder="Create a password" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="t-signup-confirm">Confirm Password</label>
                                        <input type="password" id="t-signup-confirm" placeholder="Confirm your password" required />
                                    </div>

                                    <button type="submit" className="btn-primary">Register Now</button>

                                    <div className="form-footer">
                                        <p>Already registered? <span className="toggle-mode" onClick={() => setActiveForm('login')}>Login</span></p>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;
