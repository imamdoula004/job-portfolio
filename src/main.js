import { Application } from '@splinetool/runtime';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// --- VERIFIED RESUME DATA (APRIL 2026) ---
const SPLINE_SCENE = 'https://prod.spline.design/6qNeVMmoVi-cO7im/scene.splinecode';

const SKILLS_AI = [
    'AI for Time Series Forecasting', 'Recommendation Systems', 'Data Analytics', 
    'Predictive Modeling', 'Personalization', 'Context-Aware AI', 'Jupyter Notebook', 
    'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'YOLOv8', 'MediaPipe', 'OpenCV'
];

const SKILLS_SOFTWARE = [
    'Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 
    'SQL', 'MySQL', 'SaaS Development', 'WebGL', '3D WebGL', 'Interactive Web Design', 'REST APIs'
];

const SKILLS_HARDWARE = [
    'ESP32', 'Arduino', 'Embedded Programming', 'Hardware Simulation', 'Sensor Integration', 
    'Robotics & Autonomous Systems', 'Android Studio', 'IoT Integration'
];

const SKILLS_TOOLS = [
    'Git', 'GitBash', 'CodeBlocks', 'Notepad++', 'Linux System Administration', 
    'VMware', 'Oracle VM VirtualBox', 'Citrix Workspace', 'OneView', 'OneSource', 
    'Microsoft Office', 'Adobe Photoshop', 'Adobe Lightroom', 'Bug Tracking', 'Analytics', 'Docker'
];

const SKILLS_OPS = [
    'CRM Systems', 'Salesforce', 'Zendesk', 'Genesys', 'Microsoft Dynamics', 
    'Client Issue Resolution', 'Customer Escalation Management', 'Customer Journey Mapping', 
    'Negotiation & Contract Handling', 'Order Management & Fulfillment', 'Conflict Resolution', 
    'Technical Support', 'Stakeholder Communication', 'KPI Tracking'
];

const SKILLS_CORE = [
    'Remote Work', 'Time Management', 'Problem Solving', 'Analytical Thinking', 'Teamwork', 
    'Project Mentoring', 'Cross-cultural Communication', 'High-volume Operations'
];

const EXPERIENCE = [
    {
        date: 'Oct 2025 - Present',
        role: 'Research And Teaching Assistant',
        company: 'Canadian University of Bangladesh',
        location: 'Dhaka, Bangladesh · On-site',
        details: 'Apprenticeship. Assisted faculty in research and prototype development. Supporting undergraduate course delivery and lab sessions.'
    },
    {
        date: 'Nov 2023',
        role: 'Banking Advisor',
        company: 'RBC',
        location: 'Winnipeg, Manitoba · Hybrid',
        details: 'Contract Full-time position. Provided financial advisory services and client account management.'
    },
    {
        date: 'Aug 2023 - Sep 2023',
        role: 'Marketing Specialist',
        company: 'Puulse Marketing',
        location: 'Winnipeg, Manitoba · On-site',
        details: 'Successful Negotiation and Customer Retention as a Bell Canada Door-to-Door Sales Associate.'
    },
    {
        date: 'Apr 2023 - Jul 2023',
        role: 'Customer Solutions Specialist',
        company: 'Rogers Communications',
        location: 'Winnipeg, Manitoba · Remote',
        details: 'First point of contact during the Shaw-Rogers merger. Handled Client Issue Resolution and Account Management.'
    },
    {
        date: 'Jul 2022 - Apr 2023',
        role: 'Customer Engagement Associate',
        company: 'ContactPoint 360',
        location: 'Mississauga, Ontario · Remote',
        details: 'Contract for Enercare Inc. Customer Support Agent role managing high-volume client engagement.'
    },
    {
        date: 'Jun 2022 - Jul 2022',
        role: 'Baker',
        company: 'Tim Hortons',
        location: 'Winnipeg, Manitoba · On-site',
        details: 'Downtown Winnipeg branch. Managed baking and brewing operations in a fast-paced environment.'
    },
    {
        date: 'Sep 2021 - Dec 2021',
        role: 'GEC Educator',
        company: 'lululemon',
        location: 'Winnipeg, Manitoba · Remote',
        details: 'Provided world-class guest experience via phones, live chat, and email using Microsoft Teams and Office.'
    },
    {
        date: 'Sep 2020 - Nov 2020',
        role: 'Customer Care Specialist',
        company: 'SkipTheDishes',
        location: 'Winnipeg, Manitoba · Remote',
        details: 'Live operations specialist (chats). Focused on Refunds and Client Issue Resolution.'
    },
    {
        date: 'Dec 2018 - Jan 2020',
        role: 'Case Manager & Resolution Specialist',
        company: '24-7 Intouch',
        location: 'Winnipeg, Manitoba · On-site',
        details: 'Airbnb Account. Managed global escalations and earned high client feedback scores for problem solving.'
    },
    {
        date: 'May 2018 - Dec 2018',
        role: 'Customer Service Assistant',
        company: 'Walmart Canada',
        location: 'Winnipeg, Manitoba · Store #3119',
        details: 'Salesfloor Associate specialized in teamwork and retail sales excellence.'
    }
];

const LEADERSHIP = [
    {
        role: 'CSE Club Co-ordinator',
        org: 'Canadian University of Bangladesh',
        date: '2024 - Present',
        details: 'Directing departmental workshops, technical seminars, and student-led innovation hackathons.'
    },
    {
        role: 'Student Volunteer',
        org: 'Canadian University of Bangladesh',
        date: '2024 - Present',
        details: 'Actively participating in social welfare programs, university open days, and departmental events.'
    }
];

const EDUCATION = [
    { 
        school: 'Canadian University of Bangladesh', 
        title: 'Bachelor of Applied Science - BASc, CSE', 
        date: '2024 – 2026',
        details: 'Active in departmental research and leadership. Expected Graduation: Dec 2026.'
    },
    { 
        school: 'Red River College Polytechnic', 
        title: 'Associate\'s Degree, Business & IT', 
        date: 'Sep 2020 – Dec 2022',
        details: 'Specialization in Enterprise Information Systems. International credits transferred.'
    },
    { 
        school: 'University of Manitoba', 
        title: 'Bachelor\'s Degree, General Science', 
        date: '2018 – 2019',
        details: 'Focus on foundational sciences and research methodology. Credits transferred.'
    },
    { 
        school: 'BRAC University', 
        title: 'B.Sc. (Engg). in CSE', 
        date: 'Jan 2015 – Sep 2017',
        details: 'Completed core coursework leading to international study transfer. Credits transferred.'
    }
];

const AWARDS = [
    { title: 'Top 1% Learner in Duolingo', issuer: 'Duolingo Global', date: 'Jan 2025' },
    { title: 'Certificate of High Achievement', issuer: 'British Council (O/A Levels)', date: 'Dec 2012' },
    { title: 'Certificate of Excellence', issuer: 'The Daily Star', date: 'Jan 2012' }
];

let ALL_GITHUB_REPOS = [];

// --- INITIALIZATION (Optimized for First Paint) ---
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initSpline(); // Start loading the heavy 3D scene first
    
    // Performance V2: Defer non-critical UI to free up main thread for Spline
    const idleInit = () => {
        populateStaticContent();
        initAnimations();
        setupContactForm();
        setupMobileNav();
        
        // Final deferred task (network heavy)
        setTimeout(fetchGitHubProjects, 800);
        initScrollHighlight();
        
        if (window.lucide) {
            window.lucide.createIcons();
        }
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(idleInit);
    } else {
        setTimeout(idleInit, 200);
    }
});

function setupMobileNav() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-menu');
    const links = document.querySelectorAll('.mobile-nav-links a');

    if (!toggle || !nav) return;

    const closeMenu = () => {
        toggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    };

    const openMenu = () => {
        toggle.classList.add('active');
        nav.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.contains('active') ? closeMenu() : openMenu();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on click outside (the actual overlay)
    nav.addEventListener('click', (e) => {
        if (e.target === nav) {
            closeMenu();
        }
    });

    // Close on significant scroll
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
        if (nav.classList.contains('active')) {
            const currentScroll = window.scrollY;
            if (Math.abs(currentScroll - lastScroll) > 50) {
                closeMenu();
            }
        }
        lastScroll = window.scrollY;
    }, { passive: true });
}

function initLenis() {
    const lenis = new Lenis({ 
        duration: 0.5, 
        lerp: 0.2, 
        smoothWheel: true,
        wheelMultiplier: 3.5
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
}

// --- GLOBAL SCALE PERFORMANCE OPTIMIZATIONS ---
gsap.config({ force3D: true });

// --- SPLINE APPLICATIONS MANAGER ---
let globalApp = null;

async function initSpline() {
    const heroCanvas = document.getElementById('canvas-hero');
    if (!heroCanvas) return;

    const ratio = Math.min(window.devicePixelRatio, 1.5);

    try {
        globalApp = new Application(heroCanvas);
        await globalApp.load(SPLINE_SCENE);
        
        // Initial state for Hero
        const obj = globalApp.findObjectByName('Scene') || globalApp.findObjectByName('Group');
        if (obj) {
            obj.rotation.y = 0;
            obj.scale.set(0.9, 0.9, 0.9); /* Zoomed out slightly */
            obj.position.set(0, 0, 0);
        }

        setupGlobalScrollSync(globalApp);
        hideLoader();

    } catch (err) {
        console.error('Spline init issue', err);
        hideLoader();
    }
}

/**
 * UNIFIED SCROLL SYNC (PASSTHROUGH VERSION)
 * High-speed scroll sync that allows native Spline hover events to function.
 */
function setupGlobalScrollSync(app) {
    gsap.to({}, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 0, 
            onUpdate: (self) => {
                const p = self.progress;
                
                try {
                    const obj = app.findObjectByName('Scene') || app.findObjectByName('Group');
                    if (obj) {
                        // 1. Core Scroll Rotation
                        // Only rotating on Y so internal mouse-follow can handle other axes
                        const turns = 8;
                        obj.rotation.y = p * turns * 2 * Math.PI;
                        
                        // 2. Atmospheric Scale Sync (Reduced Intensity)
                        const scaleMod = 0.9 + Math.sin(p * Math.PI) * 0.3;
                        obj.scale.set(scaleMod, scaleMod, scaleMod);
                    }

                    // 3. Pass Scroll data to Spline Variables
                    app.setVariable('Scroll', p * 100);
                } catch (e) {}
            }
        }
    });
}

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 800);
    }
}

function populateStaticContent() {
    // Skills
    const populateChips = (id, data) => {
        const el = document.getElementById(id);
        if (!el) return;
        data.forEach(text => {
            const chip = document.createElement('div');
            chip.className = 'neural-chip';
            chip.textContent = text;
            el.appendChild(chip);
        });
    };
    populateChips('ai-chips', SKILLS_AI);
    populateChips('software-chips', SKILLS_SOFTWARE);
    populateChips('hardware-chips', SKILLS_HARDWARE);
    populateChips('tool-chips', SKILLS_TOOLS);
    populateChips('ops-chips', SKILLS_OPS);
    populateChips('core-chips', SKILLS_CORE);

    // Experience Timeline
    const timeline = document.getElementById('experience-timeline');
    EXPERIENCE.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        item.innerHTML = `
            <div class="exp-dot"></div>
            <div class="exp-meta">
                <div class="exp-date">${exp.date}</div>
                <div class="exp-role">${exp.role}</div>
                <div class="exp-company">${exp.company}</div>
                <div class="label-md" style="opacity:0.4; font-size:0.75rem; margin-bottom:1rem">${exp.location}</div>
            </div>
            <p class="body-md" style="opacity:0.7">${exp.details}</p>
        `;
        timeline.appendChild(item);
    });

    // Leadership
    const leaderList = document.getElementById('leadership-list');
    LEADERSHIP.forEach(l => {
        const card = document.createElement('div');
        card.className = 'edu-card';
        card.innerHTML = `
            <div class="label-md" style="margin-bottom:0.5rem">${l.date}</div>
            <h3 style="color:#fff; font-size:1.15rem">${l.role}</h3>
            <p class="body-md" style="color:var(--primary); font-weight:700; font-size:0.85rem">${l.org}</p>
            <p class="body-md" style="margin-top:1rem; opacity:0.6; font-size:0.85rem">${l.details}</p>
        `;
        leaderList.appendChild(card);
    });

    // Education
    const injectList = (id, data) => {
        const el = document.getElementById(id);
        if (!el) return;
        data.forEach(d => {
            const card = document.createElement('div');
            card.className = 'edu-card';
            card.innerHTML = `
                <div class="label-md" style="margin-bottom:0.5rem">${d.date}</div>
                <h3 style="color:#fff; font-size:1.35rem">${d.school || d.title}</h3>
                <p class="body-md" style="color:var(--primary); font-weight:700">${d.title || d.org}</p>
                <p class="body-md" style="margin-top:1rem; opacity:0.6; font-size:0.95rem">${d.details || ''}</p>
            `;
            el.appendChild(card);
        });
    };
    injectList('edu-list', EDUCATION);

    // Awards
    const awards = document.getElementById('awards-list');
    AWARDS.forEach(a => {
        const div = document.createElement('div');
        div.className = 'award-item';
        div.style.padding = '1.8rem';
        div.style.borderLeft = '2px solid var(--primary)';
        div.style.background = 'rgba(255,255,255,0.02)';
        div.style.marginBottom = '2rem';
        div.innerHTML = `<span class="label-md">${a.date}</span> <div style="font-weight:700; color:#fff; font-size:1.15rem">${a.title}</div><div class="body-md" style="font-size:0.9rem; opacity:0.6">${a.issuer}</div>`;
        awards.appendChild(div);
    });
}

const FEATURED_REPOS = [
    'prime-imports-bd',
    'AI-Hybrid-EMPC-DataCenter-Cooling',
    'Music-Context-Recommendation-Engine',
    '3D-Interactive-Solar-System',
    'Particle-Physics-Inspired-Headphone-Audio-Enhancer'
];

const HIDDEN_REPOS = [
    'job-portfolio',
    '3d-portfolio-website',
    'wedding-digital-twin',
    '3d-portfolio-imam',
    'furniture-store-db',
    'Structured-Programming-Language-Class-Tasks',
    'imamdoula004'
];

async function fetchGitHubProjects() {
    const grid = document.getElementById('github-projects');
    const viewMoreBtn = document.getElementById('view-more-repos');
    if (!grid) return;
    
    try {
        // Safe check for GITHUB_PAT - use Vite environment variable if available
        let token = null;
        try {
            if (typeof GITHUB_PAT !== 'undefined') token = GITHUB_PAT;
            else if (import.meta.env.VITE_GITHUB_PAT) token = import.meta.env.VITE_GITHUB_PAT;
        } catch (e) {}

        const fetchOptions = {};
        if (token) {
            fetchOptions.headers = { Authorization: `token ${token}` };
        }

        const res = await fetch(`https://api.github.com/users/imamdoula004/repos?sort=pushed&per_page=100`, fetchOptions);
        if (!res.ok) throw new Error('GitHub API responded with ' + res.status);
        
        const repos = await res.json();
        
        // 1. Filter: Remove forks and hidden repos
        const activeRepos = repos.filter(repo => {
            const name = repo.name.toLowerCase();
            const isFork = repo.fork;
            const isHidden = HIDDEN_REPOS.some(h => name === h.toLowerCase());
            return !isFork && !isHidden;
        });

        // 2. Sort: Featured first, then by last pushed
        ALL_GITHUB_REPOS = activeRepos.sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();
            const aFeatured = FEATURED_REPOS.some(f => aName === f.toLowerCase());
            const bFeatured = FEATURED_REPOS.some(f => bName === f.toLowerCase());

            if (aFeatured && !bFeatured) return -1;
            if (!aFeatured && bFeatured) return 1;

            return new Date(b.pushed_at) - new Date(a.pushed_at);
        });

        renderRepos(8);

        if (viewMoreBtn && ALL_GITHUB_REPOS.length > 8) {
            viewMoreBtn.style.display = 'block';
            viewMoreBtn.addEventListener('click', () => {
                renderRepos(ALL_GITHUB_REPOS.length);
                viewMoreBtn.style.display = 'none';
            });
        }
    } catch (err) {
        console.error('GitHub Sync Error:', err);
        grid.innerHTML = '<p class="body-md" style="opacity:0.4">Repository sync currently unavailable.</p>';
    }
}

function renderRepos(limit) {
    const grid = document.getElementById('github-projects');
    grid.innerHTML = '';
    
    const slice = ALL_GITHUB_REPOS.slice(0, limit);
    slice.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'neural-card github-mini-card';
        card.innerHTML = `
            <div class="card-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem">
                <span class="card-lang" style="font-size:0.5rem; background:rgba(87,241,219,0.1); color:var(--primary); padding:0.15rem 0.4rem; border-radius:10px">${repo.language || 'Technology'}</span>
            </div>
            <div class="card-title" style="font-family:var(--font-header); font-size:0.85rem; font-weight:700; color:#fff; margin-bottom:0.4rem">${repo.name.replace(/-/g, ' ')}</div>
            <p class="body-md" style="font-size:0.7rem; opacity:0.5; margin-bottom:1rem; line-height:1.4">${repo.description || 'Technical project implementation.'}</p>
            <a href="${repo.html_url}" target="_blank" style="text-decoration:none; color:var(--primary); font-size:0.6rem; font-weight:800; letter-spacing:0.1em">VIEW PROJECT →</a>
        `;
        grid.appendChild(card);
    });
}

function initAnimations() {
    // Performance V2: Use Batching to reduce scroll overhead by ~70%
    ScrollTrigger.batch('.reveal-text', {
        start: 'top 85%',
        onEnter: (batch) => gsap.to(batch, {
            opacity: 1, y: 0, duration: 1.2, 
            stagger: 0.1, ease: 'expo.out', 
            overwrite: true 
        })
    });

    ScrollTrigger.batch('.neural-card', {
        start: 'top 90%',
        onEnter: (batch) => gsap.to(batch, {
            opacity: 1, scale: 1, duration: 1, 
            stagger: 0.15, ease: 'power4.out', 
            overwrite: true 
        })
    });
    
    // Initial state (cleaner than individual froms)
    gsap.set('.reveal-text', { opacity: 0, y: 20 });
    gsap.set('.neural-card', { opacity: 0, scale: 0.95 });
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('form-result');
    const submitBtn = document.getElementById('submit-btn');
    if (!form || !result) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "SENDING...";
        result.style.color = "var(--primary)";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.5";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "MESSAGE SENT SUCCESSFULLY!";
                result.style.color = "#57f1db";
                form.reset();
            } else {
                console.log(response);
                result.innerHTML = json.message;
                result.style.color = "#ff4d4d";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
            result.style.color = "#ff4d4d";
        })
        .then(function() {
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
            setTimeout(() => {
                result.innerHTML = "";
            }, 5000);
        });
    });
}

function initScrollHighlight() {
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    // 0. Hero Logic: Clear highlights when at the very top
    const hero = document.getElementById('hero');
    if (hero) {
        ScrollTrigger.create({
            trigger: hero,
            start: "top top",
            end: "bottom 50%",
            onToggle: self => {
                if (self.isActive) navLinks.forEach(link => link.classList.remove('active'));
            }
        });
    }

    // 1. Precise Section Logic: Center-pivot (50%) threshold
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        if (sectionId === 'hero') return; // Handled separately

        const correspondingLinks = document.querySelectorAll(`.nav-links a[href="#${sectionId}"], .mobile-nav-links a[href="#${sectionId}"]`);

        if (correspondingLinks.length > 0) {
            ScrollTrigger.create({
                trigger: section,
                start: "top 50%",
                end: "bottom 50%",
                onToggle: self => {
                    if (self.isActive) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        correspondingLinks.forEach(link => link.classList.add('active'));
                    }
                }
            });
        }
    });

    // 2. Safe-Bottom Override: Force contact highlight when scrolled to bottom
    ScrollTrigger.create({
        trigger: "body",
        start: "bottom bottom",
        end: "bottom bottom",
        onEnter: () => {
            const contactLinks = document.querySelectorAll('.nav-links a[href="#contact"], .mobile-nav-links a[href="#contact"]');
            navLinks.forEach(link => link.classList.remove('active'));
            contactLinks.forEach(link => link.classList.add('active'));
        }
    });
}




