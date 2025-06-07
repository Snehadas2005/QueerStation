// Create floating shapes
function createFloatingShapes() {
    const container = document.getElementById('floatingShapes');
    const shapes = ['●', '■', '▲', '★', '♥', '✦', '◆'];
    const colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b', '#fb5607'];
    
    for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        shape.style.color = colors[Math.floor(Math.random() * colors.length)];
        shape.style.fontSize = Math.random() * 30 + 20 + 'px';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 6 + 's';
        shape.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(shape);
    }
}

// Interactive functions
function showLove() {
    alert('💖 LOVE IS EVERYWHERE! Check out local LGBTQ+ support groups, dating apps for the community, or just spread kindness today! 🏳️‍🌈');
}

function tellStory() {
    const stories = [
        "Your story matters. Every coming out, every struggle, every joy adds to our collective narrative.",
        "Someone needs to hear your story today. Your experience might be the lifeline they're looking for.",
        "From first crushes to chosen family - every queer story deserves to be told and celebrated.",
        "Your journey is unique and beautiful. Share it when you're ready, the community is listening."
    ];
    alert(stories[Math.floor(Math.random() * stories.length)]);
}

function findEvents() {
    alert('🎉 PRIDE EVENTS EVERYWHERE! Check out local Pride parades, drag shows, community meetups, and LGBTQ+ friendly venues in your area. Search online for "[Your City] Pride 2025" or LGBTQ+ community centers!');
}

function getResources() {
    alert('📚 RESOURCES & SUPPORT:\n• The Trevor Project (crisis support)\n• PFLAG (family support)\n• Local LGBTQ+ community centers\n• Trans Lifeline\n• GLAAD for media representation\n• Your local Pride organization');
}

// Add interactive hover effects
function initializeZinePieces() {
    document.querySelectorAll('.zine-piece').forEach(piece => {
        piece.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        piece.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
        
        // Add click interaction
        piece.addEventListener('click', function() {
            const randomRotation = (Math.random() - 0.5) * 10;
            this.style.transform = `rotate(${randomRotation}deg) scale(1.05)`;
            
            setTimeout(() => {
                this.style.transform = `rotate(${randomRotation}deg)`;
            }, 300);
        });
    });
}

// Add keyboard navigation for flags
function initializeFlagNavigation() {
    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.style.transform = 'scale(1.2) rotate(5deg)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            }
        });
    });
}

// Add punk energy with click effects
function initializeClickEffects() {
    document.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON' && !e.target.classList.contains('zine-piece')) {
            const splash = document.createElement('div');
            splash.style.position = 'fixed';
            splash.style.left = e.clientX + 'px';
            splash.style.top = e.clientY + 'px';
            splash.style.width = '20px';
            splash.style.height = '20px';
            splash.style.background = '#ff006e';
            splash.style.borderRadius = '50%';
            splash.style.pointerEvents = 'none';
            splash.style.zIndex = '100';
            splash.style.animation = 'splash 0.6s ease-out forwards';
            document.body.appendChild(splash);
            
            setTimeout(() => splash.remove(), 600);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createFloatingShapes();
    initializeZinePieces();
    initializeFlagNavigation();
    initializeClickEffects();
});