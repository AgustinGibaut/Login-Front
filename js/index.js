function generateStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = window.innerWidth < 768 ? 100 : 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
    
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
       
        const size = Math.random() * 2 + 1;
        
        
        const opacity = Math.random() * 0.8 + 0.2;
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--opacity', opacity);
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);
        
        starsContainer.appendChild(star);
    }
}


function switchForm(formType) {
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const loginTab = document.querySelectorAll('.tab')[0];
    const registerTab = document.querySelectorAll('.tab')[1];
    const switchText = document.getElementById('switch-text');
    const switchLink = document.querySelector('.form-switch a');
    
    if (formType === 'login') {
        loginForm.classList.add('active-form');
        registerForm.classList.remove('active-form');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        switchText.textContent = '¿No tienes una cuenta?';
        switchLink.textContent = 'Regístrate';
    } else {
        registerForm.classList.add('active-form');
        loginForm.classList.remove('active-form');
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        switchText.textContent = '¿Ya tienes una cuenta?';
        switchLink.textContent = 'Inicia sesión';
    }
}

function toggleFormSwitch() {
    const loginForm = document.querySelector('.login-form');
    if (loginForm.classList.contains('active-form')) {
        switchForm('register');
    } else {
        switchForm('login');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    generateStars();
    
    
    setTimeout(() => {
        document.querySelector('.indicator-1').style.display = 'block';
    }, 2000);
});