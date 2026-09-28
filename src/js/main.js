/* =========================================
                 MAIN APP
   ========================================= */
import { initNavbar } from './navbar.js';
import { initGlobalParallax } from './parallax.js'; // Importação atualizada

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    
    // 1. Inicializa o AOS (Animações de Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 100,
            duration: 800,
        });
    }

    // 2. Inicializa o Lenis (Scroll Manteiga)
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 3. Inicializa o Parallax Global
    if (typeof gsap !== 'undefined') {
        initGlobalParallax();
    } else {
        console.warn('EducaApp: GSAP não carregado. Efeito Parallax desabilitado.');
    }
    
    console.log('EducaApp: Interface carregada com sucesso!');
});