// Form validation for PPDB and contact forms
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (!this.form) return;
        
        this.fields = this.form.querySelectorAll('input, select, textarea');
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.validateForm(e));
        this.setupFieldValidation();
    }
    
    setupFieldValidation() {
        this.fields.forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => this.clearError(field));
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Required validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Field ini wajib diisi';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Format email tidak valid';
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Format nomor telepon tidak valid';
            }
        }
        
        // Min length validation
        const minLength = field.getAttribute('minlength');
        if (minLength && value.length < minLength) {
            isValid = false;
            errorMessage = `Minimal ${minLength} karakter`;
        }
        
        // Max length validation
        const maxLength = field.getAttribute('maxlength');
        if (maxLength && value.length > maxLength) {
            isValid = false;
            errorMessage = `Maksimal ${maxLength} karakter`;
        }
        
        if (!isValid) {
            this.showError(field, errorMessage);
        } else {
            this.clearError(field);
        }
        
        return isValid;
    }
    
    validateForm(e) {
        e.preventDefault();
        
        let isValid = true;
        const invalidFields = [];
        
        this.fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
                invalidFields.push(field);
            }
        });
        
        if (isValid) {
            this.submitForm();
        } else {
            invalidFields[0].focus();
            this.showToast('Harap perbaiki data yang masih salah', 'error');
        }
    }
    
    showError(field, message) {
        this.clearError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 5px;
        `;
        
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#ef4444';
    }
    
    clearError(field) {
        const errorDiv = field.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.style.borderColor = '';
    }
    
    submitForm() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            this.showToast('Form berhasil dikirim!', 'success');
            this.form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    showToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize form validators
document.addEventListener('DOMContentLoaded', () => {
    // PPDB Form
    if (document.getElementById('ppdbForm')) {
        new FormValidator('ppdbForm');
    }
    
    // Contact Form
    if (document.getElementById('contactForm')) {
        new FormValidator('contactForm');
    }
    
    // Teacher Form
    if (document.getElementById('teacherForm')) {
        new FormValidator('teacherForm');
    }
});