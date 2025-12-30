const app = document.getElementById("app");

/* ============================
   NAVBAR
============================ */
const navbar = document.createElement("header");
navbar.className = "navbar";

const navContainer = document.createElement("div");
navContainer.className = "container";

// LOGO
const logo = document.createElement("h2");
logo.className = "logo";
logo.textContent = "CREODEX DIGITAL INDONESIA";

// MENU
const nav = document.createElement("nav");
nav.className = "menu";

const menuList = ["Home", "About", "Services", "Package", "Contact"];

menuList.forEach(item => {
    const a = document.createElement("a");
    // Mengarahkan ke ID section
    if (item === "Home") {
        a.href = "#home";
    } else {
        a.href = `#${item.toLowerCase()}`;
    }
    a.textContent = item;
    nav.appendChild(a);
});

// BUTTON NAV
const navBtn = document.createElement("a");
navBtn.href = "#contact"; // DIREVISI: Mengarah ke Contact
navBtn.className = "btn-nav";
navBtn.textContent = "Get Started";

// HAMBURGER ICON
const hamburgerBtn = document.createElement("button");
hamburgerBtn.className = "hamburger";
hamburgerBtn.innerHTML = `
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
`;

// EVENT LISTENER UNTUK TOGGLE MENU
hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Menutup menu mobile saat mengklik link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// ASSEMBLE NAVBAR
navContainer.appendChild(logo);
navContainer.appendChild(hamburgerBtn);
navContainer.appendChild(nav);
navContainer.appendChild(navBtn);

navbar.appendChild(navContainer);
app.appendChild(navbar);

/* ============================
   HERO SECTION
============================ */

const hero = document.createElement("section");
hero.className = "hero";
hero.id = "home";

const heroContainer = document.createElement("div");
heroContainer.className = "container hero-flex";

// TEXT WRAPPER
const heroText = document.createElement("div");
heroText.className = "hero-text";

const heroTitle = document.createElement("h1");
heroTitle.innerHTML = "Jasa Pembuatan<br>Website Terpercaya";

const heroDesc = document.createElement("p");
heroDesc.innerHTML = "Bangun & Tingkatkan kepercayaan bisnismu dengan website desain profesional<br>Bersama Kami";

// BUTTONS
const heroBtns = document.createElement("div");
heroBtns.className = "hero-btns";

const btnStart = document.createElement("a");
btnStart.href = "#contact"; // DIREVISI: Mengarah ke Contact
btnStart.className = "btn-primary";
btnStart.textContent = "Get Started";

heroBtns.appendChild(btnStart);

heroText.appendChild(heroTitle);
heroText.appendChild(heroDesc);
heroText.appendChild(heroBtns);

// IMAGE
const heroImgWrap = document.createElement("div");
heroImgWrap.className = "hero-img animated-float";

const heroImg = document.createElement("img");
heroImg.src = "/img/hero-img.png";
heroImg.alt = "Hero Image";

heroImgWrap.appendChild(heroImg);

// Combine
heroContainer.appendChild(heroText);
heroContainer.appendChild(heroImgWrap);
hero.appendChild(heroContainer);

app.appendChild(hero);

/* ============================
   ABOUT + SKILL SECTION
============================ */

const aboutSection = document.createElement("section");
aboutSection.className = "about-skill";
aboutSection.id = "about";

const aboutContainer = document.createElement("div");
aboutContainer.className = "container about-skill-grid";

/* ========= LEFT TEXT (ABOUT) ========= */
const aboutLeft = document.createElement("div");
aboutLeft.className = "about-left";

const aboutTitle = document.createElement("h2");
aboutTitle.className = "section-title";
aboutTitle.textContent = "ABOUT US";

const aboutLine = document.createElement("div");
aboutLine.className = "section-line";

const aboutDesc = document.createElement("p");
aboutDesc.textContent =
    "Creodex Digital Indonesia adalah Jasa Layanan pembuatan Website profesional & sesuai dengan yang kamu inginkan. Wujudkan website idamanmu! Bersama Kami. Kami menghadirkan website yang menarik, responsif, dirancang khusus untuk mencerminkan identitas brand Anda.";

const list1 = document.createElement("ul");
list1.className = "about-list";

["Website Portofolio", "Web Company Profile", "Ecommerce"].forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `✔ ${t}`;
    list1.appendChild(li);
});

/* ========= RIGHT TEXT (ABOUT) ========= */
const aboutRight = document.createElement("div");
aboutRight.className = "about-right";

const aboutYear = document.createElement("p");
aboutYear.textContent =
    "Creodex Digital Indonesia di dirikan pada tanggal 22 November 2025";

const readBtn = document.createElement("a");
readBtn.href = "#";
readBtn.className = "readmore-btn";
readBtn.textContent = "Read More →";

/* ========= SKILLS BOX ========= */
const skillBox = document.createElement("div");
skillBox.className = "skill-box";

const skillTitle = document.createElement("h2");
skillTitle.className = "section-title";
skillTitle.textContent = "Technical Skills";

const skills = [{
        name: "HTML",
        value: 100
    },
    {
        name: "CSS",
        value: 90
    },
    {
        name: "JAVASCRIPT",
        value: 75
    },
    {
        name: "PHP",
        value: 55
    }
];

skills.forEach(skill => {
    const wrap = document.createElement("div");
    wrap.className = "skill-item";

    const label = document.createElement("div");
    label.className = "skill-label";
    label.textContent = `${skill.name}`;

    const percent = document.createElement("span");
    percent.textContent = `${skill.value}%`;

    label.appendChild(percent);

    const bar = document.createElement("div");
    bar.className = "skill-bar";

    const fill = document.createElement("div");
    fill.className = "skill-fill";
    fill.style.width = skill.value + "%";

    bar.appendChild(fill);
    wrap.appendChild(label);
    wrap.appendChild(bar);
    skillBox.appendChild(wrap);
});

/* ========= ASSEMBLE ABOUT/SKILL ========= */

aboutLeft.appendChild(aboutTitle);
aboutLeft.appendChild(aboutLine);
aboutLeft.appendChild(aboutDesc);
aboutLeft.appendChild(list1);

aboutRight.appendChild(aboutYear);
aboutRight.appendChild(readBtn);

aboutContainer.appendChild(aboutLeft);
aboutContainer.appendChild(aboutRight);
aboutContainer.appendChild(skillBox);

aboutSection.appendChild(aboutContainer);
app.appendChild(aboutSection);

/* ============================
   SERVICES SECTION
============================ */

const servicesSection = document.createElement("section");
servicesSection.className = "services-section";
servicesSection.id = "services";

const servicesContainer = document.createElement("div");
servicesContainer.className = "container";

/* TITLE */
const servicesTitle = document.createElement("h2");
servicesTitle.className = "section-title";
servicesTitle.textContent = "SERVICES";

const servicesLine = document.createElement("div");
servicesLine.className = "section-line";

const servicesSub = document.createElement("p");
servicesSub.className = "services-sub";
servicesSub.textContent = "Menyediakan Jasa Layanan";

/* SERVICES DATA */
const serviceList = [{
        icon: "📈",
        title: "Graphic Designer",
        desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    },
    {
        icon: "🟦",
        title: "Web Designer",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
        icon: "🗂️",
        title: "Web Development",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
    },
    {
        icon: "📡",
        title: "Web Hosting",
        desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    }
];

/* GRID */
const serviceGrid = document.createElement("div");
serviceGrid.className = "service-grid";

/* GENERATE SERVICE BOXES */
serviceList.forEach(svc => {
    const box = document.createElement("div");
    box.className = "service-box";

    const icon = document.createElement("div");
    icon.className = "service-icon";
    icon.textContent = svc.icon;

    const h3 = document.createElement("h3");
    h3.textContent = svc.title;

    const p = document.createElement("p");
    p.textContent = svc.desc;

    box.appendChild(icon);
    box.appendChild(h3);
    box.appendChild(p);

    serviceGrid.appendChild(box);
});

/* ASSEMBLE SERVICES */
servicesContainer.appendChild(servicesTitle);
servicesContainer.appendChild(servicesLine);
servicesContainer.appendChild(servicesSub);
servicesContainer.appendChild(serviceGrid);

servicesSection.appendChild(servicesContainer);
app.appendChild(servicesSection);

/* ============================
   PACKAGE / PRICING SECTION
============================ */

const pricingSection = document.createElement("section");
pricingSection.className = "pricing-section";
pricingSection.id = "package";

const pricingContainer = document.createElement("div");
pricingContainer.className = "container";

/* TITLE */
const pricingTitle = document.createElement("h2");
pricingTitle.className = "section-title";
pricingTitle.textContent = "PILIH PAKET";

const pricingLine = document.createElement("div");
pricingLine.className = "section-line";

const pricingSub = document.createElement("p");
pricingSub.className = "pricing-sub";
pricingSub.textContent =
    "Berikut adalah daftar harga Website profile perusahaan yang Kami tawarkan untuk Anda";

/* PACKAGE DATA */
const packageList = [{
        name: "Basic",
        price: "1.000.000",
        period: "/ Bulan",
        highlight: false,
        features: [{
                text: "Halaman Website",
                ok: true
            },
            {
                text: "Aktif 1 Tahun",
                ok: true
            },
            {
                text: "Nulla at volutpat diam uteera",
                ok: true
            },
            {
                text: "Responsif",
                ok: false
            },
            {
                text: "Basic Landing Page Design",
                ok: false
            }
        ]
    },
    {
        name: "Premium",
        price: "3.500.000",
        period: "/ Bulan",
        highlight: true,
        features: [{
                text: "Halaman Website",
                ok: true
            },
            {
                text: "Free Shared Hosting 1 Tahun",
                ok: true
            },
            {
                text: "Gratis 1 Logo",
                ok: true
            },
            {
                text: "Desain Premium",
                ok: true
            },
            {
                text: "Copywriting standar",
                ok: true
            },
            {
                text: "Multi Bahasa",
                ok: true
            },
            {
                text: "30+ Halaman Konten",
                ok: true
            },
            {
                text: "CProduct Katalog",
                ok: true
            }
        ]
    },
    {
        name: "Business",
        price: "5.000.000",
        period: "/ Bulan",
        highlight: false,
        features: [{
                text: "Free Domain .com .id .org.or.id",
                ok: true
            },
            {
                text: "Free Cloud Hosting 1 Tahun",
                ok: true
            },
            {
                text: "Gratis 1 Logo",
                ok: true
            },
            {
                text: "Desain Modern & Profesional",
                ok: true
            },
            {
                text: "Advanced Copywritting",
                ok: true
            },
            {
                text: "Multi Bahasa",
                ok: true
            },
            {
                text: "50+ Halaman Konten",
                ok: true
            },
            {
                text: "Toko Online",
                ok: true
            },
            {
                text: "Checkout Via Payment Gateway",
                ok: true
            },
            {
                text: "Live Chat Integrasi Apps",
                ok: true
            },
            {
                text: "Email Domain",
                ok: true
            }
        ]
    }
];

/* GRID */
const pricingGrid = document.createElement("div");
pricingGrid.className = "pricing-grid";

/* GENERATE CARD */
packageList.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "pricing-card";
    if (pkg.highlight) card.classList.add("highlight");

    const title = document.createElement("h3");
    title.textContent = pkg.name;

    const price = document.createElement("h4");
    price.innerHTML = `Rp<span>${pkg.price}</span> ${pkg.period}`;

    const ul = document.createElement("ul");
    ul.className = "pricing-features";

    pkg.features.forEach(f => {
        const li = document.createElement("li");
        li.innerHTML = f.ok ?
            `<span class="ok">✔</span> ${f.text}` :
            `<span class="no">✖</span> ${f.text}`;
        if (!f.ok) li.classList.add("disabled");
        ul.appendChild(li);
    });

    const btn = document.createElement("a");
    btn.href = "#";
    btn.className = "buy-btn";
    btn.textContent = "Buy Now";

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(ul);
    card.appendChild(btn);

    pricingGrid.appendChild(card);
});

/* ASSEMBLE PRICING */
pricingContainer.appendChild(pricingTitle);
pricingContainer.appendChild(pricingLine);
pricingContainer.appendChild(pricingSub);
pricingContainer.appendChild(pricingGrid);

pricingSection.appendChild(pricingContainer);
app.appendChild(pricingSection);

/* ============================
   CONTACT SECTION
============================ */

const contactSection = document.createElement("section");
contactSection.className = "contact-section";
contactSection.id = "contact";

const contactContainer = document.createElement("div");
contactContainer.className = "container";

/* TITLE */
const contactTitle = document.createElement("h2");
contactTitle.className = "section-title";
contactTitle.textContent = "CONTACT";

const contactLine = document.createElement("div");
contactLine.className = "section-line";

const contactSub = document.createElement("p");
contactSub.className = "contact-sub";
contactSub.textContent =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";

/* GRID WRAPPER */
const contactGrid = document.createElement("div");
contactGrid.className = "contact-grid";

/* LEFT BOX (INFO + MAP) */
const leftBox = document.createElement("div");
leftBox.className = "contact-info-box";

/* address */
const infoAddress = document.createElement("div");
infoAddress.className = "info-item";
infoAddress.innerHTML = `
    <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
    <div>
        <h4>Address</h4>
        <p>Jl. Tegal Sari, RW 09, Kecamatan Pasar Rebo, Kota Jakarta Timur, Indonesia</p>
    </div>
`;

/* phone */
const infoPhone = document.createElement("div");
infoPhone.className = "info-item";
infoPhone.innerHTML = `
    <div class="icon"><i class="fas fa-phone"></i></div>
    <div>
        <h4>Call Us</h4>
        <p>+62 851 3708 1114</p>
    </div>
`;

/* email */
const infoEmail = document.createElement("div");
infoEmail.className = "info-item";
infoEmail.innerHTML = `
    <div class="icon"><i class="fas fa-envelope"></i></div>
    <div>
        <h4>Email Us</h4>
        <p>support@creodex.id</p>
    </div>
`;

/* MAP - DIREVISI untuk menggunakan lokasi Jakarta Timur */
const mapFrame = document.createElement("iframe");
mapFrame.className = "contact-map";
// Menggunakan embed URL Google Maps yang fokus pada Jakarta Timur
// (Koordinat: -6.2954, 106.9142, Search Query: Pasar Rebo, Jakarta Timur)
mapFrame.src =
    "https://maps.google.com/maps?q=Kecamatan%20Pasar%20Rebo,%20Kota%20Jakarta%20Timur,%20Indonesia&t=&z=12&ie=UTF8&iwloc=&output=embed";

leftBox.appendChild(infoAddress);
leftBox.appendChild(infoPhone);
leftBox.appendChild(infoEmail);
leftBox.appendChild(mapFrame);

/* RIGHT BOX (FORM) */
const rightBox = document.createElement("div");
rightBox.className = "contact-form-box";

rightBox.innerHTML = `
    <form class="contact-form">
        <div class="form-row">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
        </div>

        <input type="text" placeholder="Subject" class="full">

        <textarea placeholder="Message" rows="6" class="full"></textarea>

        <button type="submit" class="send-btn">Send Message</button>
    </form>
`;

/* assemble contact */
contactGrid.appendChild(leftBox);
contactGrid.appendChild(rightBox);

contactContainer.appendChild(contactTitle);
contactContainer.appendChild(contactLine);
contactContainer.appendChild(contactSub);
contactContainer.appendChild(contactGrid);

contactSection.appendChild(contactContainer);

app.appendChild(contactSection);

/* ============================
   TEAM SECTION
============================ */

const teamSection = document.createElement("section");
teamSection.className = "team-section";
teamSection.id = "team"; // Tambahkan ID untuk Team

const teamContainer = document.createElement("div");
teamContainer.className = "container";

/* TITLE */
const teamTitle = document.createElement("h2");
teamTitle.className = "section-title";
teamTitle.textContent = "TEAM";

const teamLine = document.createElement("div");
teamLine.className = "section-line";

const teamSub = document.createElement("p");
teamSub.className = "team-sub";
teamSub.textContent = "Necessitatibus eius consetetur ex aliquid fuga eum quidem sint consectetur velit";

/* TEAM MEMBER DATA */
const teamMembers = [{
        name: "Nama",
        title: "Chief Executive Officer",
        desc: "Explicabo voluptatem mollitia et et repetai qui dolirum quasi lorem ipsum dolote is",
        social: ["X", "ⓕ", "ⓘ", "in"],
        img: "https://www.alphajwc.com/wp-content/uploads/2023/04/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background.jpg"
    },
    {
        name: "Nama",
        title: "Product Manager",
        desc: "Aut maiores voluptates amet et quas prasentium qui senda para lorem ipsum dulore is",
        social: ["X", "ⓕ", "ⓘ", "in"],
        img: "https://s44783.pcdn.co/wp-content/uploads/2023/11/Digital-Product-Manager-1024x536.png"
    },
    {
        name: "Nama",
        title: "CTO",
        desc: "Quisqam fugaciis cum velit labroum corrupti fugi reum quia lorem ipsum dulatais",
        social: ["X", "ⓕ", "ⓘ", "in"],
        img: "https://storage.googleapis.com/ekrutassets/home/deploy/ekrut/releases/20210709094712/public/ckeditor_assets/pictures/7355/content_unnamed_%281%29.png"
    },
    {
        name: "Nama",
        title: "Accountant",
        desc: "Dolorum tempora officiis odit laborios officiios officiis et et accessmum dulote iis",
        social: ["X", "ⓕ", "ⓘ", "in"],
        img: "https://t3.ftcdn.net/jpg/03/27/29/54/360_F_327295497_1tuc1lHUlUqNOcILvesVlV3lLOzroi8g.jpg"
    },
];

/* GRID */
const teamGrid = document.createElement("div");
teamGrid.className = "team-grid";

/* GENERATE TEAM CARDS */
teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.className = "team-card";

    const imgWrap = document.createElement("div");
    imgWrap.className = "member-img";

    const img = document.createElement("img");
    img.src = member.img;
    img.alt = member.name;
    img.className = "team-img";
    imgWrap.appendChild(img);

    const content = document.createElement("div");
    content.className = "member-info";

    const h3 = document.createElement("h4");
    h3.textContent = member.name;

    const h4 = document.createElement("span");
    h4.textContent = member.title;

    const p = document.createElement("p");
    p.textContent = member.desc;

    content.appendChild(h3);
    content.appendChild(h4);
    content.appendChild(p);

    const socialDiv = document.createElement("div");
    socialDiv.className = "member-social";

    member.social.forEach(icon => {
        const a = document.createElement("a");
        a.href = "#";
        a.className = "social-icon";
        a.textContent = icon;
        socialDiv.appendChild(a);
    });

    card.appendChild(imgWrap);
    card.appendChild(content);
    card.appendChild(socialDiv);

    teamGrid.appendChild(card);
});

/* ASSEMBLE TEAM SECTION */
teamContainer.appendChild(teamTitle);
teamContainer.appendChild(teamLine);
teamContainer.appendChild(teamSub);
teamContainer.appendChild(teamGrid);

teamSection.appendChild(teamContainer);
app.appendChild(teamSection);

/* ============================
   FOOTER
============================ */

const footer = document.createElement("footer");
footer.className = "footer";

const footerContainer = document.createElement("div");
footerContainer.className = "container footer-grid";

// --- COLUMN 1: Address and Contact ---
const col1 = document.createElement("div");
col1.className = "footer-col-1";

const footerLogo = document.createElement("h2");
footerLogo.className = "footer-logo";
footerLogo.textContent = "CREODEX DIGITAL INDONESIA";

const addressList = [
    "Jl. Tegal Sari, RW 09",
    "Kecamatan Pasar Rebo",
    "Kota Jakarta Timur, Indonesia",
    "Kode Pos 13790"
];

const addressP = document.createElement("p");
addressP.className = "footer-address";
addressP.innerHTML = addressList.join('<br>');

const contactInfo = document.createElement("div");
contactInfo.className = "footer-contact";
contactInfo.innerHTML = `
    <strong>Phone:</strong> +62 851 3708 1114<br>
    <strong>Email:</strong> support@creodex.id
`;

col1.appendChild(footerLogo);
col1.appendChild(addressP);
col1.appendChild(contactInfo);

// --- COLUMN 2: Useful Links (DIREVISI: Mengarahkan ke ID yang benar) ---
const col2 = document.createElement("div");
col2.className = "footer-col";

const col2Title = document.createElement("h4");
col2Title.textContent = "Useful Links";

const linksData = [{
        text: "Home",
        href: "#home"
    },
    {
        text: "About us",
        href: "#about"
    },
    {
        text: "Services",
        href: "#services"
    },
    {
        text: "Team",
        href: "#team"
    },
    {
        text: "Terms of service",
        href: "#"
    }
];

const ulLinks = document.createElement("ul");
ulLinks.className = "footer-links";
linksData.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="chevron-icon">▶</i> <a href="${item.href}">${item.text}</a>`;
    ulLinks.appendChild(li);
});

col2.appendChild(col2Title);
col2.appendChild(ulLinks);

// --- COLUMN 3: Our Services ---
const col3 = document.createElement("div");
col3.className = "footer-col";

const col3Title = document.createElement("h4");
col3Title.textContent = "Our Services";

const servicesList = [
    "Web Design",
    "Web Development",
    "Product Management",
    "Marketing",
    "Graphic Design"
];
const ulServices = document.createElement("ul");
ulServices.className = "footer-links";
servicesList.forEach(text => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="chevron-icon">▶</i> <a href="#">${text}</a>`;
    ulServices.appendChild(li);
});

col3.appendChild(col3Title);
col3.appendChild(ulServices);

// --- COLUMN 4: Follow Us ---
const col4 = document.createElement("div");
col4.className = "footer-col-4";

const col4Title = document.createElement("h4");
col4Title.textContent = "Follow Us";

const col4Desc = document.createElement("p");
col4Desc.textContent =
    "Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies";

const socialLinks = document.createElement("div");
socialLinks.className = "social-links";

// Placeholder untuk ikon sosial
socialLinks.innerHTML = `
    <a href="#" class="social-icon">X</a>
    <a href="#" class="social-icon">ⓕ</a>
    <a href="#" class="social-icon">ⓘ</a>
    <a href="#" class="social-icon">in</a>
`;

col4.appendChild(col4Title);
col4.appendChild(col4Desc);
col4.appendChild(socialLinks);

// Assemble Footer Grid
footerContainer.appendChild(col1);
footerContainer.appendChild(col2);
footerContainer.appendChild(col3);
footerContainer.appendChild(col4);

footer.appendChild(footerContainer);

// --- Footer Bottom (Copyright) BARIS TERPISAH ---
const footerBottom = document.createElement("div");
footerBottom.className = "footer-bottom";
footerBottom.innerHTML = `
    <div class="container">
        © Copyright <strong>Creodex Digital Indonesia</strong>. All Rights Reserved
    </div>
`;
footer.appendChild(footerBottom);

app.appendChild(footer);

/* ============================
   WHATSAPP BUTTON (FLOATING)
============================ */

const whatsappNumber = "6285137081114";

const whatsappBtn = document.createElement("a");
whatsappBtn.href = `https://wa.me/${whatsappNumber}`;
whatsappBtn.target = "_blank";
whatsappBtn.id = "whatsapp-float";
whatsappBtn.className = "whatsapp-float-btn";
// Menggunakan ikon Font Awesome
whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';

app.appendChild(whatsappBtn);


/* ============================
   SMOOTH SCROLL HANDLER 
============================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hash = this.getAttribute('href');

        // Lewati jika hanya "#" atau jika elemen target tidak ada
        // Juga lewati jika ini adalah tautan WhatsApp karena sudah punya target="_blank"
        if (hash === '#' || hash.includes('wa.me')) return;

        // Cek elemen target sebelum mencegah default
        if (document.getElementById(hash.substring(1))) {
            e.preventDefault();

            // Ambil target ID
            const targetId = hash.substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Opsional: Untuk mengupdate URL hash tanpa melompat/mengganggu smooth scroll
            if (hash !== '#home' && hash !== '#') {
                history.pushState(null, null, hash);
            }
        }
    });
});
