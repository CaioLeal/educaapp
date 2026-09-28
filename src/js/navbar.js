/* =========================================
               COMPONENTE NAVBAR
   ========================================= */
export function initNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <nav class="navbar">
                <div class="logo">educaApp</div>
                <div class="nav-options">
                    <!-- Conteúdo removido conforme solicitado -->
                </div>
            </nav>
        `;
    }
}