/* =========================================
               COMPONENTE FOOTER
   ========================================= */
export function initFooterAnimations() {
    const waveBack = document.querySelector('.wave-back');
    const waveMid = document.querySelector('.wave-mid');
    const waveFront = document.querySelector('.wave-front');
    const waveContainer = document.querySelector('.footer-wave-container');
    const icons = document.querySelectorAll('.mouse-react');
    
    // --- ESTADOS DA ÁGUA (CALMA) ---
    // Faz a água se mexer constantemente mesmo sem interação
    const calmAnimations = [
        gsap.to(waveBack, { attr: { d: "M0,150 C300,120 900,180 1200,150 L1200,200 L0,200 Z" }, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" }),
        gsap.to(waveMid, { attr: { d: "M0,160 C400,190 800,130 1200,160 L1200,200 L0,200 Z" }, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" }),
        gsap.to(waveFront, { attr: { d: "M0,170 C300,190 900,150 1200,170 L1200,200 L0,200 Z" }, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" })
    ];

    // Ícones flutuando levemente
    const iconFloat = gsap.to(icons, {
        y: "-=15",
        rotation: "+=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut"
    });

    // --- EFEITO "AFOGAMENTO" (INTERAÇÃO) ---
    if (window.matchMedia("(min-width: 769px)").matches) {
        
        // Quando o mouse passa por cima da água
        waveContainer.addEventListener('mouseenter', () => {
            // Pausa a animação calma
            calmAnimations.forEach(anim => anim.pause());
            iconFloat.pause();

            // A água sobe bruscamente e fica turbulenta (Altera o Y das curvas Bezier para subir)
            gsap.to(waveBack, { attr: { d: "M0,60 C300,-10 900,110 1200,60 L1200,200 L0,200 Z" }, duration: 0.8, ease: "power2.out", overwrite: "auto" });
            gsap.to(waveMid, { attr: { d: "M0,80 C400,130 800,20 1200,80 L1200,200 L0,200 Z" }, duration: 1, ease: "power2.out", overwrite: "auto" });
            gsap.to(waveFront, { attr: { d: "M0,100 C300,30 900,150 1200,100 L1200,200 L0,200 Z" }, duration: 0.9, ease: "power2.out", overwrite: "auto" });

            // Os ícones afundam girando (Efeito afogamento)
            gsap.to(icons, {
                y: 150, // Puxa para baixo da água
                rotation: "+=180", // Gira rápido
                scale: 0.3, // Diminui como se estivesse afundando
                opacity: 0,
                duration: 1.2,
                stagger: 0.1, // Um de cada vez
                ease: "back.in(1.5)",
                overwrite: "auto"
            });
        });

        // Efeito de movimento do mouse agitando ainda mais a água
        waveContainer.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const agito = mouseX * 150;
            
            gsap.to(waveFront, {
                attr: { d: `M0,100 C${300 + agito},30 ${900 - agito},150 1200,100 L1200,200 L0,200 Z` },
                duration: 0.5,
                ease: "power1.out",
                overwrite: "auto"
            });
        });

        // Quando o mouse sai, tudo volta ao normal
        waveContainer.addEventListener('mouseleave', () => {
            // Água desce
            gsap.to(waveBack, { attr: { d: "M0,150 C300,180 900,120 1200,150 L1200,200 L0,200 Z" }, duration: 1.5, ease: "bounce.out", onComplete: () => calmAnimations[0].play() });
            gsap.to(waveMid, { attr: { d: "M0,160 C400,130 800,190 1200,160 L1200,200 L0,200 Z" }, duration: 1.5, ease: "bounce.out", onComplete: () => calmAnimations[1].play() });
            gsap.to(waveFront, { attr: { d: "M0,170 C300,150 900,190 1200,170 L1200,200 L0,200 Z" }, duration: 1.5, ease: "bounce.out", onComplete: () => calmAnimations[2].play() });

            // Ícones voltam a boiar
            gsap.to(icons, {
                y: 0,
                rotation: "-=180",
                scale: 1,
                opacity: 1,
                duration: 1.5,
                stagger: 0.15,
                ease: "elastic.out(1, 0.5)",
                onComplete: () => iconFloat.play()
            });
        });
    }
}