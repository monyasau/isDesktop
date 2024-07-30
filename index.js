const isDesktop=()=> {
    // User-Agent Analysis
    const ua = navigator.userAgent;
    const isDesktopUA = /Windows|Macintosh|Linux/.test(ua) && !/Mobile|Android|iPhone|iPad|iPod/.test(ua);

    // Screen Size Detection
    const isDesktopScreen = window.innerWidth > 1024;

    // Feature Detection: Mouse and Context Menu
    let hasMouse = false;
    document.addEventListener('mousemove', () => hasMouse = true, { once: true });
    const hasContextMenu = 'oncontextmenu' in document;

    // Device Memory (Assuming desktop has more memory)
    const deviceMemory = navigator.deviceMemory || 4; // Assuming default as 4GB if not available
    const isDesktopMemory = deviceMemory >= 4;

    // Behavioral Analysis
    let isDesktopBehavior = false;
    document.addEventListener('mousemove', () => isDesktopBehavior = true, { once: true });
    document.addEventListener('touchstart', () => isDesktopBehavior = false, { once: true });

    // Combined Check
    return isDesktopUA && isDesktopScreen && hasMouse && hasContextMenu && isDesktopMemory && isDesktopBehavior;
}

export default isDesktop;
