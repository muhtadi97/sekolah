// Gallery functionality
class Gallery {
    constructor() {
        this.images = [];
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        this.cacheImages();
        this.setupEventListeners();
    }
    
    cacheImages() {
        const galleryItems = document.querySelectorAll('.gallery-item img');
        galleryItems.forEach(img => {
            this.images.push({
                src: img.src,
                alt: img.alt,
                title: img.parentNode.querySelector('.gallery-overlay h4')?.textContent || ''
            });
        });
    }
    
    setupEventListeners() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => this.openModal(index));
        });
        
        // Modal navigation
        document.querySelector('.modal-prev')?.addEventListener('click', () => this.navigate(-1));
        document.querySelector('.modal-next')?.addEventListener('click', () => this.navigate(1));
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.querySelector('.modal.show')) {
                if (e.key === 'ArrowLeft') this.navigate(-1);
                if (e.key === 'ArrowRight') this.navigate(1);
            }
        });
    }
    
    openModal(index) {
        this.currentIndex = index;
        this.updateModal();
        document.querySelector('.modal').classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        document.querySelector('.modal').classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    
    navigate(direction) {
        this.currentIndex += direction;
        
        if (this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
        } else if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }
        
        this.updateModal();
    }
    
    updateModal() {
        const modalImg = document.querySelector('.modal-img');
        const modalTitle = document.querySelector('.modal-title');
        
        if (modalImg && modalTitle) {
            modalImg.src = this.images[this.currentIndex].src;
            modalImg.alt = this.images[this.currentIndex].alt;
            modalTitle.textContent = this.images[this.currentIndex].title;
        }
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.gallery-grid')) {
        new Gallery();
    }
});