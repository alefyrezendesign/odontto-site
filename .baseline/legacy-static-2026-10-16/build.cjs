const fs = require('fs');
const path = require('path');

function jsxToHtml(jsx, pageName) {
    if (!jsx) return '';
    let result = jsx
        .replace(/className=/g, 'class=')
        .replace(/<Image([\s\S]*?)\/?>/g, function(match, inner) {
            let srcMatch = inner.match(/src="([^"]+)"/);
            let src = srcMatch ? srcMatch[1] : '';
            let altMatch = inner.match(/alt="([^"]*)"/);
            let alt = altMatch ? altMatch[1] : '';
            let classMatch = inner.match(/class="([^"]+)"/); // It's already converted to class= above
            let classes = classMatch ? classMatch[1] : '';
            
            if (inner.includes(' fill') || inner.includes('fill ') || inner.includes('fill=')) {
                classes = ('absolute inset-0 h-full w-full ' + classes).trim();
            }
            
            let classAttr = classes ? ` class="${classes}"` : '';
            return `<img src="${src}" alt="${alt}"${classAttr}>`;
        })
        .replace(/<Link([^>]*)href="([^"]+)"([^>]*)>(.*?)<\/Link>/gs, function(match, before, href, after, content) {
            let attrs = (before + ' ' + after).replace(/className=/g, 'class=').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
            attrs = attrs.replace(/onClick=\{[^}]+\}/g, '');
            
            if (attrs.includes('rounded-full px-4 py-2')) {
                let activeClass = 'class="block rounded-full px-4 py-2 text-sm font-bold text-secondary transition-colors hover:bg-white hover:text-navy bg-white text-navy shadow-line"';
                let inactiveClass = 'class="block rounded-full px-4 py-2 text-sm font-bold text-secondary transition-colors hover:bg-white hover:text-navy"';
                
                // Remove the existing class attribute
                attrs = attrs.replace(/class="[^"]+"/, '');
                
                if (pageName === 'home' && href === '/') attrs += ' aria-current="page" ' + activeClass;
                else if (pageName === 'sobre-nos' && href === '/sobre-nos') attrs += ' aria-current="page" ' + activeClass;
                else if (pageName === 'contato' && href === '/contato') attrs += ' aria-current="page" ' + activeClass;
                else attrs += ' ' + inactiveClass;
            }
            
            // Fix hrefs for static HTML
            if (href === '/sobre-nos') href = 'sobre-nos.html';
            if (href === '/contato') href = 'contato.html';
            if (href === '/') href = 'index.html';
            
            return '<a href="' + href + '" ' + attrs + '>' + content + '</a>';
        })
        .replace(/htmlFor=/g, 'for=')
        .replace(/<([A-Z][a-zA-Z0-9]*)\s+size=\{([0-9]+)\}\s*(\/?)>/g, '<i data-lucide="$1" style="width: $2px; height: $2px;"></i>')
        .replace(/<([A-Z][a-zA-Z0-9]*)\s+size=\{([0-9]+)\}\s+class(?:Name)?="([^"]*)"\s*(\/?)>/g, '<i data-lucide="$1" class="$3" style="width: $2px; height: $2px;"></i>')
        .replace(/<([A-Z][a-zA-Z0-9]*)\s+class(?:Name)?="([^"]*)"\s+size=\{([0-9]+)\}\s*(\/?)>/g, '<i data-lucide="$1" class="$2" style="width: $3px; height: $3px;"></i>')
        .replace(/<([A-Z][a-zA-Z0-9]*)\s+class(?:Name)?="([^"]*)"\s*(\/?)>/g, '<i data-lucide="$1" class="$2"></i>')
        .replace(/<([A-Z][a-zA-Z0-9]*)\s*(\/?)>/g, (m, p1) => {
            if (p1 === 'Link' || p1 === 'Image') return m;
            return '<i data-lucide="' + p1 + '"></i>';
        })
        .replace(/<\/[A-Z][a-zA-Z0-9]*>/g, '</i>')
        .replace(/priority/g, '')
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, '') // Remove JSX comments
        .replace(/style=\{\{([^}]*)\}(?:\s*as\s+React\.CSSProperties)?\}/g, function(match, inner) {
            return 'style="' + inner.replace(/'/g, '').replace(/,/g, ';').replace(/([a-zA-Z0-9-]+):/g, function(m, prop) {
                return prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + ':';
            }) + '"';
        });
        
    // Change "Solicitar diagnóstico grátis" to "Falar com especialista" in Header
    result = result.replace(/Solicitar diagnóstico grátis/g, 'Falar com especialista');
    
    // Add working mobile menu toggle
    result = result.replace(/onclick=\{toggleMenu\}/gi, 'onclick="document.getElementById(\'menu-mobile\').classList.toggle(\'hidden\')"');
    
    // Remove react variables
    result = result.replace(/\{new Date\(\)\.getFullYear\(\)\}/g, new Date().getFullYear().toString());
    result = result.replace(/\{isMenuOpen\s*&&\s*\(/g, '');
    result = result.replace(/\)\}/g, '');
    result = result.replace(/lg:hidden block/g, 'lg:hidden hidden'); // Hide menu by default
    result = result.replace(/\{/g, '').replace(/\}/g, ''); // Remove any remaining curly braces
    
    return result;
}

const headerJSX = fs.readFileSync('../site-odontto/src/components/Header.tsx', 'utf8');
const footerJSX = fs.readFileSync('../site-odontto/src/components/Footer.tsx', 'utf8');
const pageJSX = fs.readFileSync('../site-odontto/src/app/page.tsx', 'utf8');
const contatoJSX = fs.readFileSync('../site-odontto/src/app/contato/page.tsx', 'utf8');
const sobreJSX = fs.readFileSync('../site-odontto/src/app/sobre-nos/page.tsx', 'utf8');

const headerMatch = headerJSX.match(/return \([\s\S]*?(<header[\s\S]*?<\/header>)[\s\S]*?\);\s*}\s*$/);
const footerMatch = footerJSX.match(/return \([\s\S]*?(<footer[\s\S]*?<\/footer>)[\s\S]*?\);\s*}\s*$/);
const pageMatch = pageJSX.match(/return \(\s*<>([\s\S]*?)<\/>\s*\);\s*}\s*$/);
const contatoMatch = contatoJSX.match(/return \(\s*<>([\s\S]*?)<\/>\s*\);\s*}\s*$/);
const sobreMatch = sobreJSX.match(/return \(\s*<>([\s\S]*?)<\/>\s*\);\s*}\s*$/);

function wrapPage(pageHtml, title, pageName) {
    pageHtml = pageHtml.replace(/<i data-lucide="Link".*?<\/i>/g, '</a>');
    pageHtml = pageHtml.replace(/<i data-lucide="Image".*?<\/i>/g, '');
    
    const headerHtml = headerMatch ? jsxToHtml(headerMatch[1], pageName) : '';
    const footerHtml = footerMatch ? jsxToHtml(footerMatch[1], pageName) : '';
    
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <script type="module" src="/main.js"></script>
</head>
<body class="flex min-h-screen flex-col font-sans text-navy antialiased">
    <svg aria-hidden="true" class="absolute" focusable="false" height="0" width="0">
        <defs>
            <linearGradient id="odontto-icon-gradient" gradientUnits="userSpaceOnUse" x1="2" x2="22" y1="2" y2="22">
                <stop offset="0%" stop-color="#00C8BD" />
                <stop offset="100%" stop-color="#C6D53A" />
            </linearGradient>
            <linearGradient id="odontto-gradient-solutions-card-0" gradientUnits="userSpaceOnUse" x1="0" x2="24" y1="12" y2="12">
                <stop offset="0%" stop-color="#00C8BD"></stop>
                <stop offset="100%" stop-color="#C6D53A"></stop>
            </linearGradient>
            <linearGradient id="odontto-gradient-solutions-card-1" gradientUnits="userSpaceOnUse" x1="0" x2="24" y1="12" y2="12">
                <stop offset="0%" stop-color="#00C8BD"></stop>
                <stop offset="100%" stop-color="#C6D53A"></stop>
            </linearGradient>
            <linearGradient id="odontto-gradient-solutions-card-2" gradientUnits="userSpaceOnUse" x1="0" x2="24" y1="12" y2="12">
                <stop offset="0%" stop-color="#00C8BD"></stop>
                <stop offset="100%" stop-color="#C6D53A"></stop>
            </linearGradient>
        </defs>
    </svg>

    ${headerHtml}
    
    <main id="conteudo">
        ${pageHtml}
    </main>

    ${footerHtml}

</body>
</html>`;
}

fs.writeFileSync('index.html', wrapPage(pageMatch ? jsxToHtml(pageMatch[1], 'home') : '', 'Odontto Contabilidade', 'home'));
fs.writeFileSync('contato.html', wrapPage(contatoMatch ? jsxToHtml(contatoMatch[1], 'contato') : '', 'Contato - Odontto Contabilidade', 'contato'));
fs.writeFileSync('sobre-nos.html', wrapPage(sobreMatch ? jsxToHtml(sobreMatch[1], 'sobre-nos') : '', 'Sobre Nós - Odontto Contabilidade', 'sobre-nos'));

console.log('Pages created successfully with fixed links');
