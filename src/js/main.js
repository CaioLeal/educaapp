/* =========================================
                 MAIN APP
   ========================================= */
// Importando os módulos
import { initNavbar } from './navbar.js';
import { initFooterAnimations } from './footer.js';

// Inicializa os componentes quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    
    // Verifica se a biblioteca GSAP carregou no HTML antes de iniciar a animação
    if (typeof gsap !== 'undefined') {
        initFooterAnimations();
    } else {
        console.warn('EducaApp: GSAP não carregado. Animações do footer desabilitadas.');
    }
    
    console.log('EducaApp: Interface carregada com sucesso!');
});