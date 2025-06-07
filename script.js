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

function initializeZinePieces() {
    document.querySelectorAll('.zine-piece').forEach(piece => {
        piece.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        piece.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
        
        piece.addEventListener('click', function() {
            const randomRotation = (Math.random() - 0.5) * 10;
            this.style.transform = `rotate(${randomRotation}deg) scale(1.05)`;
            
            setTimeout(() => {
                this.style.transform = `rotate(${randomRotation}deg)`;
            }, 300);
        });
    });
}

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

document.addEventListener('DOMContentLoaded', function() {
    createFloatingShapes();
    initializeZinePieces();
    initializeFlagNavigation();
    initializeClickEffects();
});

function showLove() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('lovePage').classList.add('active');
}

function tellStory() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('storiesPage').classList.add('active');
    loadStoriesFromStorage();
}

function findEvents() {
    window.open('https://www.google.com/search?q=pride+events+in+india', '_blank');
}

function getResources() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('resourcesPage').classList.add('active');
}

function goHome() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('homePage').classList.add('active');
}

let stories = [];

function addStory(name, story) {
    const newStory = {
        id: Date.now(),
        name: name || 'Anonymous',
        story: story,
        timestamp: new Date().toLocaleDateString()
    };
    stories.push(newStory);
    saveStoriesToStorage();
    displayStories();
}

function saveStoriesToStorage() {
}

function loadStoriesFromStorage() {
    displayStories();
}

function displayStories() {
    const storiesGrid = document.getElementById('storiesGrid');
    if (!storiesGrid) return;
    
    storiesGrid.innerHTML = '';
    
    if (stories.length === 0) {
        storiesGrid.innerHTML = '<p class="no-stories">No stories yet. Be the first to share your experience!</p>';
        return;
    }
    
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <div class="story-header">
                <strong>${story.name}</strong>
                <span class="story-date">${story.timestamp}</span>
            </div>
            <div class="story-text">${story.story}</div>
        `;
        storiesGrid.appendChild(storyCard);
    });
}

function initializeFormHandlers() {
    const loveForm = document.getElementById('loveForm');
    if (loveForm) {
        loveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('💖 Your message of love has been sent! Thank you for spreading positivity in our community! 🏳️‍🌈');
            this.reset();
        });
    }
    
    const storyForm = document.getElementById('storyForm');
    if (storyForm) {
        storyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('storyName').value.trim();
            const story = document.getElementById('storyContent').value.trim();
            
            if (story) {
                addStory(name, story);
                alert('🌟 Your story has been posted enormously! Thank you for sharing your truth! 🏳️‍🌈');
                this.reset();
            }
        });
    }
}

//Special thanks to Niko from Axrisi 
const flags = document.querySelectorAll('.flag');    
        const targetUrl = 'https://94dgq4.csb.app/';

        flags.forEach(flag => {
            flag.addEventListener('click', () => {
                window.open(targetUrl, '_blank');
            });

            flag.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open(targetUrl, '_blank');
                }
            });
        });