// breakpoints.js
import { writable, derived } from 'svelte/store';

// Définition des breakpoints
const breakpoints = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
};

// Écouteur pour le redimensionnement de la fenêtre
const screenSize = writable([0, 0]);
if (typeof window !== "undefined") {
    window.addEventListener('resize', () => screenSize.set([window.innerWidth, window.innerHeight]));
    screenSize.set([window.innerWidth, window.innerHeight]);
}

// Les stores pour chaque type de device
export const isMobile = derived(screenSize, $screenSize => $screenSize[0] < breakpoints.tablet);
export const isTablet = derived(screenSize, $screenSize => $screenSize[0] >= breakpoints.tablet && $screenSize[0] < breakpoints.desktop);
export const isDesktop = derived(screenSize, $screenSize => $screenSize[0] >= breakpoints.desktop);
