import './index.css';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-lucide]').forEach(function(icon) {
        var name = icon.getAttribute('data-lucide');
        if (name) {
            var kebabName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            icon.setAttribute('data-lucide', kebabName);
        }
    });
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    initAnalisesScroll();
});

function initAnalisesScroll() {
    const section = document.getElementById('odontto-analises');
    const track = document.getElementById('analises-track');
    
    if (!section || !track) return;
    
    const items = track.querySelectorAll('.analise-item');

    function update() {
        if (window.innerWidth < 1024) {
            track.style.transform = 'none';
            items.forEach(item => item.style.opacity = '1');
            return;
        }

        const ITEM_H = 150;
        const VISIBLE = 2;
        const MAX_FLOAT = items.length - VISIBLE; // 6
        
        const rect = section.getBoundingClientRect();
        let progress = -rect.top / (section.offsetHeight - window.innerHeight);
        progress = Math.max(0, Math.min(1, progress));

        const activeFloat = progress * MAX_FLOAT;
        const yTrack = -activeFloat * ITEM_H - (VISIBLE * ITEM_H) / 2;

        track.style.transform = `translateY(${yTrack}px)`;

        items.forEach((item, idx) => {
            let dist = 0;
            if (idx < activeFloat) dist = activeFloat - idx;
            else if (idx > activeFloat + 1) dist = idx - (activeFloat + 1);
            
            const isHovered = item.matches(':hover');
            const op = isHovered ? 1 : Math.max(0.15, 1 - dist * 0.7);
            item.style.opacity = op;
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    
    items.forEach(item => {
        item.addEventListener('mouseenter', update);
        item.addEventListener('mouseleave', update);
    });

    update();
}
