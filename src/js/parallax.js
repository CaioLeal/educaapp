/* =========================================
            PARALLAX GLOBAL (MOUSE)
   ========================================= */
export function initGlobalParallax() {
    // O efeito só é ativado em desktops/monitores (onde existe mouse)
    if (window.matchMedia("(min-width: 769px)").matches) {
        
        // Seleciona os elementos que vão se mover de forma SUAVE (imagens grandes e a onda do hero)
        const floatSlow = document.querySelectorAll('.hero-image-container, .feature-image');
        
        // Seleciona os elementos que vão se mover mais RÁPIDO (ícones, decorações, mockups)
        const floatFast = document.querySelectorAll('.float-item, .decor, .phone-mockup');

        document.addEventListener('mousemove', (e) => {
            // Calcula a posição do mouse a partir do centro da tela (-1 a 1)
            const mouseX = (e.clientX / window.innerWidth - .5) * 2;
            const mouseY = (e.clientY / window.innerHeight - .5) * 2;

            // Movimento mais intenso para os elementos maiores (multiplicador 40)
            gsap.to(floatSlow, {
                x: mouseX * 40,
                y: mouseY * 40,
                duration: 1.5,
                ease: "power2.out",
                overwrite: "auto"
            });

            // Movimento super fluido e perceptível para os ícones e decorações (multiplicador 90)
            gsap.to(floatFast, {
                x: mouseX * 90,
                y: mouseY * 90,
                rotation: mouseX * 15, // Gira bem mais
                duration: 1.2,
                ease: "power2.out",
                overwrite: "auto"
            });
        });
    }
}