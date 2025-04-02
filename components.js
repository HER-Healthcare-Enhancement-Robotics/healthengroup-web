// Navigation Component
class NavComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="bg-white shadow-lg">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-wrap justify-between items-center py-5">
                        <div class="flex items-center w-full sm:w-auto justify-between">
                            <div class="flex-shrink-0">
                                <img class="h-10-w-auto" src="images/healthen-simp-noshad.png" alt="Healthen Group Logo">
                            </div>
                            <div class="sm:hidden">
                                <button id="mobile-menu-toggle" class="text-gray-500 hover:text-gray-600 focus:outline-none">
                                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <div id="mobile-menu" class="hidden w-full sm:flex sm:items-center sm:w-auto sm:space-x-8 mt-4 sm:mt-0">
                            <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                                <div class="nav-item relative">
                                    <a href="#" class="nav-link text-gray-900 hover:text-gray-700 text-sm font-medium text-center">
                                        Solutions
                                    </a>
                                    <div class="tooltip">Explore Our AI+Robotics Solutions</div>
                                </div>
                                <div class="nav-item relative">
                                    <a href="#" class="nav-link text-gray-900 hover:text-gray-700 text-sm font-medium text-center">
                                        Technologies
                                    </a>
                                    <div class="tooltip">Discover Cutting-Edge Technologies</div>
                                </div>
                                <div class="nav-item relative">
                                    <a href="#" class="nav-link text-gray-900 hover:text-gray-700 text-sm font-medium text-center">
                                        About Us
                                    </a>
                                    <div class="tooltip">Learn About Healthen Group</div>
                                </div>
                                <div class="nav-item relative">
                                    <a href="#" class="nav-link text-gray-900 hover:text-gray-700 text-sm font-medium text-center">
                                        Contact
                                    </a>
                                    <div class="tooltip">Get in Touch with Our Team</div>
                                </div>
                            </div>
                            <div class="mt-4 sm:mt-0">
                                <button type="button" class="btn-primary w-full sm:w-auto">
                                    Request Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

class HeroComponent extends HTMLElement {
    constructor() {
        super();
        this.backgroundColors = [
            'bg-gradient-to-r from-blue-100 to-blue-300', 
            'bg-gradient-to-r from-purple-100 to-purple-300', 
            'bg-gradient-to-r from-teal-100 to-teal-300', 
            'bg-gradient-to-r from-pink-100 to-pink-300'
        ];
        this.backgroundImages = [
            '/api/placeholder/1600/900?text=AI+Robotics+1',
            '/api/placeholder/1600/900?text=AI+Robotics+2',
            '/api/placeholder/1600/900?text=AI+Robotics+3'
        ];
        this.currentColorIndex = 0;
        this.currentImageIndex = 0;
    }

    connectedCallback() {
        this.render();
        this.startBackgroundTransition();
    }

    startBackgroundTransition() {
        // Alternate between color gradients and image carousel
        setInterval(() => {
            this.currentColorIndex = (this.currentColorIndex + 1) % this.backgroundColors.length;
            this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
            this.updateBackground();
        }, 5000); // Change every 5 seconds
    }

    updateBackground() {
        const backgroundContainer = this.querySelector('.dynamic-background');
        
        // Fade out current background
        backgroundContainer.classList.add('opacity-0');
        
        setTimeout(() => {
            // Update background classes
            backgroundContainer.className = `dynamic-background absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${this.backgroundColors[this.currentColorIndex]}`;
            
            // Optional: Uncomment to use image carousel instead of color gradients
            // backgroundContainer.style.backgroundImage = `url('${this.backgroundImages[this.currentImageIndex]}')`;
            // backgroundContainer.style.backgroundSize = 'cover';
            // backgroundContainer.style.backgroundPosition = 'center';
            // backgroundContainer.style.filter = 'blur(8px)';
            
            // Fade in new background
            backgroundContainer.classList.remove('opacity-0');
        }, 1000);
    }

    render() {
        this.innerHTML = `
            <div class="relative bg-white overflow-hidden h-screen">
                <!-- Dynamic Background -->
                <div class="dynamic-background absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${this.backgroundColors[this.currentColorIndex]}"></div>
                
                <div class="relative z-10 h-full flex items-center">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div class="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg">
                            <div class="text-center lg:text-left">
                                <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                                    <span class="block xl:inline">AI+Robotics</span>
                                    <span class="block accent-pink xl:inline">Solutions</span>
                                </h2>
                                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                                    Transforming through innovative AI and robotic technologies. Empowering medical professionals with cutting-edge solutions.
                                </p>
                                <div class="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3">
                                    <a href="#" class="btn-primary inline-flex items-center justify-center w-full sm:w-auto">
                                        Explore Solutions
                                    </a>
                                    <a href="#" class="btn-primary inline-flex items-center justify-center w-full sm:w-auto bg-white text-blue-600 border-blue-600">
                                        Contact Sales
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
// Features Component
class FeaturesComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="py-12 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <h3 class="text-base accent-pink font-semibold tracking-wide uppercase">Our Solutions</h3>
                        <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Revolutionizing with AI and Robotics
                        </h2>
                    </div>

                    <div class="mt-10">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div class="feature-card flex flex-col items-center text-center">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md feature-icon text-white mb-4">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-2">Precision Diagnostics</h3>
                                <p class="text-base text-gray-500">
                                    Advanced AI algorithms for accurate and rapid medical diagnostics.
                                </p>
                            </div>

                            <div class="feature-card flex flex-col items-center text-center">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md feature-icon text-white mb-4">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-2">Robotic Assistance</h3>
                                <p class="text-base text-gray-500">
                                    Cutting-edge robotic systems to support surgical and care procedures.
                                </p>
                            </div>

                            <div class="feature-card flex flex-col items-center text-center">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md feature-icon text-white mb-4">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-2">Smart Analytics</h3>
                                <p class="text-base text-gray-500">
                                    Predictive analytics to optimize patient care and operational efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Footer Component
class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-white">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col sm:flex-row items-center justify-between">
                        <div class="order-2 sm:order-1 mt-4 sm:mt-0">
                            <p class="text-center text-base text-gray-400">&copy; 2025 Healthen Group. All rights reserved.</p>
                        </div>
                        <div class="order-1 sm:order-2 flex justify-center space-x-6">
                            <a href="#" class="text-gray-400 hover:text-gray-500 transition-colors duration-300">
                                <span class="sr-only">LinkedIn</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-500 transition-colors duration-300">
                                <span class="sr-only">Instagram</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.013 7.053.07 2.695.272.273 2.69.073 7.052.013 8.333 0 8.741 0 12c0 3.259.013 3.668.07 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.07 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.07-1.689.07-4.948 0-3.259-.011-3.667-.07-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Define custom elements
customElements.define('nav-component', NavComponent);
customElements.define('hero-component', HeroComponent);
customElements.define('features-component', FeaturesComponent);
customElements.define('footer-component', FooterComponent);