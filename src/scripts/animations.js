// =========================================
// TOUTES LES ANIMATIONS DU SITE
// 1. AOS           → apparitions simples au scroll
// 2. GSAP          → intro de la page d'accueil
// 3. ScrollTrigger → dossiers projets + étoiles
// =========================================
import AOS from "aos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// L'utilisateur a-t-il demandé moins d'animations ? (accessibilité)
const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- 1. AOS ----------
AOS.init({
    duration: 600,
    once: true, // l'animation ne se joue qu'une fois
    offset: 60,
    disable: reduit, // si "moins d'animations" : tout est affiché directement
});

if (!reduit) {
    // ---------- 2. HERO (seulement sur l'accueil) ----------
    if (document.querySelector(".hero")) {
        // steps(4) = mouvement en 4 petits sauts, comme dans un jeu 8 bits
        const intro = gsap.timeline({
            defaults: { duration: 0.4, ease: "steps(4)" },
        });

        // "-=0.2" = commence un peu avant la fin de l'animation précédente
        intro
            .from(".hero__panel", { scale: 0.95, opacity: 0 })
            .from(".hero__label", { y: 12, opacity: 0 }, "-=0.2")
            .from(".hero h1", { y: 16, opacity: 0 }, "-=0.2")
            .from(".hero__texte", { y: 12, opacity: 0 }, "-=0.2")
            .from(".hero .pixel-btn", { opacity: 0, clearProps: "opacity" }, "-=0.2")
            .from(".hero .pixel-star", { scale: 0, stagger: 0.1 }, "-=0.2");
    }

    // ---------- 3a. DOSSIERS PROJETS (accueil + page Projets) ----------
    if (document.querySelector(".emplacement")) {
        gsap.from(".emplacement", {
            y: 24,
            scale: 0.95,
            opacity: 0,
            duration: 0.45,
            ease: "steps(5)",
            stagger: 0.12, // les dossiers arrivent l'un après l'autre
            clearProps: "transform", // rend la main au survol CSS à la fin
            scrollTrigger: {
                trigger: ".emplacement",
                start: "top 85%", // quand le haut des dossiers atteint 85 % de l'écran
            },
        });
    }

    // ---------- 3b. PARALLAXE LÉGÈRE SUR LES ÉTOILES ----------
    gsap.utils.toArray(".pixel-star").forEach((etoile) => {
        gsap.to(etoile, {
            y: -40,
            ease: "none",
            scrollTrigger: {
                trigger: etoile.parentElement,
                start: "top top",
                end: "bottom top",
                scrub: true, // suit le scroll, sans le bloquer
            },
        });
    });
}
