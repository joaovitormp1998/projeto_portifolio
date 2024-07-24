document.addEventListener('DOMContentLoaded', function() {
    const particleContainer = document.querySelector('#particles-js');

    // Function to create a particle with a sign
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = '<i class="fas fa-taurus"></i>'; // Taurus sign icon from Font Awesome
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.transform = `translate(-50%, -50%)`;
        particleContainer.appendChild(particle);

        // Animate particle
        setTimeout(() => {
            particle.style.transition = 'all 1s ease-out';
            particle.style.transform = `translate(-50%, -50%) scale(0.5)`;
            particle.style.opacity = '0';
        }, 100);

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 1100);
    }

    // Example of generating particles on mouse move
    particleContainer.addEventListener('mousemove', function(e) {
        createParticle(e.clientX, e.clientY);
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00aaff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00aaff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});
