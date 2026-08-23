import sharp from 'sharp';
import fs from 'fs';

const outDir = 'public/assets';
fs.mkdirSync(outDir, { recursive: true });
const BG = '#F8F4EC';
const G = '#0A4B3E';
const G2 = '#0E6B55';
const GOLD = '#C99638';
const GOLD2 = '#E4C16E';
const INK = '#173F36';
const BROWN = '#7A4A28';
const BROWN2 = '#B4763D';

function wrap(body, defs='') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${GOLD2}"/><stop offset="1" stop-color="${GOLD}"/></linearGradient>
    <linearGradient id="green" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${G2}"/><stop offset="1" stop-color="${G}"/></linearGradient>
    <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${BROWN2}"/><stop offset="1" stop-color="${BROWN}"/></linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="#183a31" flood-opacity=".20"/></filter>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="18"/></filter>
    ${defs}
  </defs>
  <rect width="1200" height="900" fill="${BG}"/>
  <circle cx="920" cy="170" r="210" fill="#EAD9B3" opacity=".20"/>
  <circle cx="160" cy="740" r="180" fill="#BFD8CE" opacity=".20"/>
  ${body}
  </svg>`;
}

async function save(name, svg) {
  await sharp(Buffer.from(svg)).jpeg({ quality: 92, mozjpeg: true }).toFile(`${outDir}/${name}`);
  console.log(name);
}

const quran = wrap(`
  <ellipse cx="600" cy="700" rx="350" ry="62" fill="#1D3B34" opacity=".09"/>
  <g filter="url(#shadow)">
    <path d="M380 660 L565 450 L640 515 L465 705 Z" fill="url(#wood)"/>
    <path d="M820 660 L635 450 L560 515 L735 705 Z" fill="url(#wood)"/>
    <path d="M424 651 L566 493" stroke="#D19A57" stroke-width="8" opacity=".55"/>
    <path d="M776 651 L634 493" stroke="#D19A57" stroke-width="8" opacity=".55"/>
    <path d="M594 515 C510 448 408 423 294 448 C394 497 486 553 594 618 Z" fill="#FFFDF7" stroke="#D8C7A8" stroke-width="6"/>
    <path d="M606 515 C690 448 792 423 906 448 C806 497 714 553 606 618 Z" fill="#FFFDF7" stroke="#D8C7A8" stroke-width="6"/>
    <path d="M600 518 L600 618" stroke="#B99457" stroke-width="5"/>
    <g stroke="#C8B793" stroke-width="4" opacity=".72">
      <path d="M340 475 C430 487 505 523 570 563"/><path d="M326 500 C420 514 495 547 566 586"/><path d="M860 475 C770 487 695 523 630 563"/><path d="M874 500 C780 514 705 547 634 586"/>
    </g>
    <path d="M292 448 C382 415 480 422 594 500" fill="none" stroke="${GOLD}" stroke-width="7"/>
    <path d="M908 448 C818 415 720 422 606 500" fill="none" stroke="${GOLD}" stroke-width="7"/>
  </g>
  <g transform="translate(820 555)"><circle r="50" fill="#0D5A49"/><circle r="35" fill="none" stroke="#DAB15A" stroke-width="4"/><path d="M-15 -8h30M-15 8h30" stroke="#F7EACD" stroke-width="5" stroke-linecap="round"/></g>
  <g transform="translate(320 590)" fill="none" stroke="#0D624E" stroke-width="14" stroke-linecap="round"><path d="M0 0 C70 45 112 50 170 5"/><circle cx="35" cy="13" r="9" fill="#0D624E"/><circle cx="72" cy="28" r="9" fill="#0D624E"/><circle cx="110" cy="31" r="9" fill="#0D624E"/><circle cx="147" cy="18" r="9" fill="#0D624E"/></g>
`);

const lantern = wrap(`
  <ellipse cx="600" cy="735" rx="170" ry="34" fill="#1D3B34" opacity=".10"/>
  <g filter="url(#shadow)">
    <path d="M535 240 Q600 165 665 240 L640 300 H560 Z" fill="url(#gold)"/>
    <rect x="500" y="300" width="200" height="330" rx="34" fill="#77511E" stroke="${GOLD2}" stroke-width="10"/>
    <rect x="535" y="330" width="130" height="245" rx="18" fill="#FFF2BD" opacity=".86"/>
    <path d="M500 370 L700 560 M700 370 L500 560" stroke="#C8902D" stroke-width="10" opacity=".85"/>
    <circle cx="600" cy="464" r="68" fill="#FFD96A" opacity=".30" filter="url(#soft)"/>
    <path d="M600 398 C645 445 628 510 600 538 C572 510 555 445 600 398 Z" fill="#FFD45C"/>
    <rect x="515" y="630" width="170" height="50" rx="20" fill="url(#gold)"/>
    <path d="M570 230 C570 185 630 185 630 230" fill="none" stroke="#8C601E" stroke-width="10"/>
  </g>
`);

const mosque = wrap(`
  <ellipse cx="600" cy="725" rx="390" ry="42" fill="#1D3B34" opacity=".08"/>
  <g filter="url(#shadow)">
    <rect x="340" y="515" width="520" height="180" rx="18" fill="#F2E5CF" stroke="#D8C19B" stroke-width="6"/>
    <path d="M420 515 Q600 315 780 515 Z" fill="#EAE1D2" stroke="#D8C19B" stroke-width="6"/>
    <ellipse cx="600" cy="465" rx="120" ry="95" fill="url(#green)"/>
    <rect x="520" y="465" width="160" height="60" fill="url(#green)"/>
    <path d="M600 335 L620 385 H580 Z" fill="url(#gold)"/><circle cx="600" cy="330" r="12" fill="${GOLD}"/>
    <g fill="#ECE1CF" stroke="#D8C19B" stroke-width="5"><rect x="235" y="330" width="70" height="365" rx="18"/><rect x="895" y="330" width="70" height="365" rx="18"/></g>
    <g fill="url(#gold)"><path d="M270 245 L300 330 H240 Z"/><path d="M930 245 L960 330 H900 Z"/></g>
    <g fill="#DDE8E1"><path d="M380 695V590Q420 535 460 590V695Z"/><path d="M530 695V565Q600 500 670 565V695Z"/><path d="M740 695V590Q780 535 820 590V695Z"/></g>
    <g fill="${GOLD}" opacity=".7"><circle cx="420" cy="612" r="10"/><circle cx="600" cy="595" r="11"/><circle cx="780" cy="612" r="10"/></g>
  </g>
`);

const books = wrap(`
  <ellipse cx="590" cy="720" rx="350" ry="50" fill="#1D3B34" opacity=".09"/>
  <g filter="url(#shadow)">
    <g transform="translate(280 520) rotate(-6 300 80)"><rect x="0" y="0" width="540" height="105" rx="24" fill="#0D5A49"/><rect x="30" y="16" width="480" height="72" rx="16" fill="#F8F0DE"/><rect x="20" y="8" width="24" height="90" fill="${GOLD}"/><rect x="490" y="8" width="24" height="90" fill="${GOLD}"/></g>
    <g transform="translate(325 410) rotate(4 260 70)"><rect x="0" y="0" width="500" height="100" rx="24" fill="#8A5A2B"/><rect x="28" y="15" width="445" height="70" rx="14" fill="#F7EBDD"/><rect x="22" y="9" width="22" height="82" fill="#C99538"/></g>
    <g transform="translate(375 305) rotate(-3 220 60)"><rect x="0" y="0" width="430" height="96" rx="22" fill="#0A463A"/><rect x="26" y="14" width="380" height="68" rx="14" fill="#F7EDDB"/><path d="M90 32h220" stroke="#C89B4E" stroke-width="8"/><path d="M120 52h160" stroke="#C89B4E" stroke-width="6"/></g>
  </g>
  <g transform="translate(820 330)"><path d="M0 220 C-55 120 -45 40 10 0 C35 92 26 155 0 220Z" fill="#0A5E4A"/><path d="M0 220 C65 130 100 72 100 18 C36 42 6 103 0 220Z" fill="#2D7F64"/></g>
`);

const student = wrap(`
  <ellipse cx="610" cy="735" rx="355" ry="50" fill="#1D3B34" opacity=".08"/>
  <g filter="url(#shadow)">
    <rect x="470" y="500" width="370" height="215" rx="18" fill="#D8DDE1"/><rect x="495" y="525" width="320" height="155" rx="12" fill="#F7F8FA"/><circle cx="655" cy="602" r="18" fill="#C8CED3"/>
    <circle cx="380" cy="360" r="95" fill="#D7B28D"/>
    <path d="M278 370 Q310 250 380 250 Q450 250 482 370 Q440 315 380 315 Q320 315 278 370Z" fill="#EFE6DA"/>
    <path d="M280 580 Q330 455 430 455 Q505 470 540 580 L525 720 H255Z" fill="url(#green)"/>
    <rect x="255" y="690" width="585" height="35" rx="17" fill="#A8753C"/>
    <rect x="265" y="620" width="175" height="76" rx="15" fill="#FFFDF8" stroke="#D8C8A8" stroke-width="4"/>
    <path d="M296 642h108M296 661h88" stroke="#B7A98C" stroke-width="5" stroke-linecap="round"/>
    <path d="M337 510 C390 545 400 590 393 640" stroke="#D7B28D" stroke-width="22" stroke-linecap="round"/>
    <circle cx="306" cy="350" r="40" fill="none" stroke="#1F2427" stroke-width="18"/><circle cx="454" cy="350" r="40" fill="none" stroke="#1F2427" stroke-width="18"/><path d="M346 350h68" stroke="#1F2427" stroke-width="18"/>
  </g>
`);

const cert = wrap(`
  <ellipse cx="600" cy="725" rx="310" ry="44" fill="#1D3B34" opacity=".08"/>
  <g filter="url(#shadow)">
    <rect x="270" y="220" width="660" height="440" rx="34" fill="#FFFDF9" stroke="${GOLD}" stroke-width="10"/>
    <rect x="300" y="250" width="600" height="380" rx="25" fill="none" stroke="#E2C584" stroke-width="3"/>
    <path d="M380 340h440M410 390h380M450 440h300" stroke="#CBBEA6" stroke-width="12" stroke-linecap="round" opacity=".65"/>
    <circle cx="600" cy="530" r="70" fill="url(#gold)"/><path d="M565 582 540 700 600 660 660 700 635 582" fill="#0A4B3E"/><path d="M600 488l12 25 28 4-20 20 5 28-25-13-25 13 5-28-20-20 28-4z" fill="#FFF6D6"/>
  </g>
`);

const globe = wrap(`
  <ellipse cx="600" cy="735" rx="290" ry="42" fill="#1D3B34" opacity=".08"/>
  <g filter="url(#shadow)">
    <circle cx="600" cy="420" r="235" fill="#DAEAE4" stroke="#0A5A48" stroke-width="12"/>
    <path d="M365 420h470M600 185c-98 120-98 350 0 470M600 185c98 120 98 350 0 470M410 290c125 72 255 72 380 0M410 550c125-72 255-72 380 0" fill="none" stroke="#6AA18E" stroke-width="8" opacity=".65"/>
    <path d="M485 335c-55 5-78 35-88 72 38 12 61 32 70 73 45-14 72-44 78-95-20-16-33-30-60-50Zm160-18c36 5 74 25 102 66-25 22-37 48-41 81-43 5-77-8-101-36 20-42 20-73 40-111Z" fill="#0A5A48" opacity=".9"/>
    <path d="M500 666h200M540 666l-30 65M660 666l30 65M500 731h200" stroke="#9A6A2A" stroke-width="14" stroke-linecap="round"/>
    <circle cx="520" cy="355" r="12" fill="${GOLD}"/><circle cx="708" cy="470" r="12" fill="${GOLD}"/><circle cx="565" cy="530" r="12" fill="${GOLD}"/>
  </g>
`);

await Promise.all([
  save('hero-quran.jpg', quran),
  save('lantern.jpg', lantern),
  save('mosque.jpg', mosque),
  save('arabic-books.jpg', books),
  save('online-student.jpg', student),
  save('certificate.jpg', cert),
  save('globe-learning.jpg', globe),
  save('academy-books.jpg', books),
  save('arabic-learning.jpg', student),
  save('mosque-arch.jpg', mosque),
  save('certificate-badge.jpg', cert),
  save('global-learning.jpg', globe),
  save('about-orbit.jpg', quran),
  save('contact-lantern.jpg', lantern),
]);
