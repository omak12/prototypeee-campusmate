/* CampusMate - Prototype Web (Universitas Madura)
   Vanilla JS, tanpa build. Data = contoh sesuai prototype. */

// ---------- Ikon (SVG inline) ----------
const P = {
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  hash: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  clip: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  out: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>',
};
const ic = (n) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;

// ---------- Data contoh ----------
const TODAY = new Date(2026, 9, 20); // 20 Oktober 2026 (sesuai prototype)
const BULAN = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const HARI = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const fmt = (d, short) => `${d.getDate()} ${short ? BULAN[d.getMonth()].slice(0,3) : BULAN[d.getMonth()]} ${d.getFullYear()}`;

const SCHEDULE = {
  Sen: { full: 'Senin, 19 Oktober 2026', items: [
    { name: 'Algoritma & Pemrograman', type: 'Teori', start: '08:00', end: '09:40', room: 'Ruang 201', sks: 3 },
    { name: 'Matematika Diskrit', type: 'Teori', start: '10:00', end: '11:40', room: 'Ruang 105', sks: 3 } ] },
  Sel: { full: 'Selasa, 20 Oktober 2026', items: [
    { name: 'Struktur Data', type: 'Praktikum', start: '08:00', end: '09:40', room: 'Lab Komputer 2', sks: 3 },
    { name: 'Basis Data', type: 'Teori', start: '10:00', end: '11:40', room: 'Ruang 204', sks: 3 },
    { name: 'Pemrograman Web', type: 'Teori', start: '13:00', end: '14:40', room: 'Ruang 301', sks: 3 } ] },
  Rab: { full: 'Rabu, 21 Oktober 2026', items: [
    { name: 'Pendidikan Pancasila', type: 'Teori', start: '09:00', end: '10:40', room: 'Ruang 110', sks: 2 },
    { name: 'Bahasa Inggris', type: 'Teori', start: '13:00', end: '14:40', room: 'Ruang 112', sks: 2 } ] },
  Kam: { full: 'Kamis, 22 Oktober 2026', items: [
    { name: 'Basis Data', type: 'Praktikum', start: '08:00', end: '09:40', room: 'Lab Komputer 1', sks: 3 },
    { name: 'Jaringan Komputer', type: 'Teori', start: '10:00', end: '11:40', room: 'Ruang 205', sks: 3 } ] },
  Jum: { full: 'Jumat, 23 Oktober 2026', items: [
    { name: 'Pemrograman Web', type: 'Praktikum', start: '08:00', end: '09:40', room: 'Lab Komputer 2', sks: 3 } ] },
};
const DAYS = Object.keys(SCHEDULE);

const DEFAULT_TASKS = [
  { id: 1, title: 'Tugas Struktur Data', sub: 'Implementasi Linked List', due: '2026-10-20' },
  { id: 2, title: 'Laporan Praktikum Basis Data', sub: 'Basis Data', due: '2026-10-22' },
  { id: 3, title: 'Proyek Mini Pemrograman Web', sub: 'Pemrograman Web', due: '2026-10-25' },
  { id: 4, title: 'Makalah Pancasila', sub: 'Pendidikan Pancasila', due: '2026-10-28' },
];
const ANNOUNCEMENTS = [
  { icon: 'award', title: 'Jadwal UTS Semester Ganjil telah dirilis', meta: 'Info Akademik  •  18 Okt 2026' },
  { icon: 'book', title: 'Pembaruan layanan perpustakaan digital', meta: 'Perpustakaan  •  15 Okt 2026' },
];

// ---------- State (disimpan di localStorage) ----------
const store = {
  get(k, d) { try { const v = localStorage.getItem('cm_' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('cm_' + k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem('cm_' + k); } catch {} },
};
let user = store.get('user', null);
let done = store.get('done', []);
let day = 'Sel';

// ---------- Helper ----------
const $app = document.getElementById('app');
const $status = document.getElementById('statusbar');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const firstName = (n) => { const w = (n || '').trim().split(/\s+/).filter(Boolean); return w.length > 1 ? w[1] : (w[0] || 'Mahasiswa'); };
const initials = (n) => (n || '').trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase() || 'MH';
const daysLeft = (iso) => { const [y, m, d] = iso.split('-').map(Number); return Math.round((new Date(y, m - 1, d) - TODAY) / 864e5); };
const dueLabel = (n) => (n <= 0 ? ['Hari ini', 'c-red'] : n <= 2 ? [`${n} hari lagi`, 'c-amber'] : [`${n} hari lagi`, 'c-blue']);
const pending = () => DEFAULT_TASKS.filter((t) => !done.includes(t.id)).sort((a, b) => a.due.localeCompare(b.due));
const toDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };

const NAV = [['home', 'Beranda', 'home'], ['jadwal', 'Jadwal', 'cal'], ['tugas', 'Tugas', 'clip'], ['info', 'Info', 'info'], ['profil', 'Profil', 'user']];
const nav = (active) => `<nav class="nav">${NAV.map(([r, l, i]) =>
  `<button class="${r === active ? 'on' : ''}" data-go="${r}" aria-label="${l}">${ic(i)}<span>${l}</span></button>`).join('')}</nav>`;
const header = (title, sub) => `
  <header class="header">
    <div class="brand"><div class="l"><img src="logo-unira.png" alt="Logo Universitas Madura" />CampusMate</div>${ic('bell')}</div>
    <h1>${title}</h1><p>${sub}</p>
  </header>`;
const shell = (active, title, sub, body) => `${header(title, sub)}<div class="content">${body}</div>${nav(active)}`;

// ---------- Halaman ----------
const pages = {
  login() {
    const u = user || {};
    return `<div class="screen auth" style="flex:1;display:flex;flex-direction:column;align-items:center">
      <img class="logo" src="logo-unira.png" alt="Logo Universitas Madura" />
      <h1>CampusMate</h1><div class="sub">Universitas Madura</div>
      <form class="box" id="loginForm" novalidate>
        <h2>Masuk</h2><p>Isi identitas akademikmu untuk melanjutkan.</p>
        <label for="nama">Nama Lengkap</label>
        <div class="field">${ic('user')}<input id="nama" value="${esc(u.nama || 'Ahmad Satrio Wibowo')}" autocomplete="name" /></div>
        <label for="prodi">Identitas Akademik (Program Studi)</label>
        <div class="field">${ic('book')}<input id="prodi" value="${esc(u.prodi || 'Informatika')}" /></div>
        <label for="nim">NIM</label>
        <div class="field">${ic('hash')}<input id="nim" inputmode="numeric" value="${esc(u.nim || '2025520060')}" /></div>
        <div class="err" id="err" role="alert"></div>
        <button class="btn" type="submit" style="margin-top:8px">Masuk</button>
      </form>
      <div class="foot">Universitas Madura &nbsp;•&nbsp; CampusMate</div>
    </div>`;
  },
  home() {
    const todayCls = SCHEDULE.Sel.items;
    const t = pending();
    const next = todayCls[0];
    return shell('home', `Halo, ${esc(firstName(user.nama))}!`, `Mahasiswa ${esc(user.prodi)} &nbsp;•&nbsp; NIM ${esc(user.nim)}`, `
      <button class="card stat" data-go="jadwal"><div class="ic">${ic('cal')}</div><div class="t"><small>Jadwal hari ini</small><b>${todayCls.length} Kelas</b></div><span class="arrow">${ic('right')}</span></button>
      <button class="card stat" data-go="tugas"><div class="ic">${ic('clip')}</div><div class="t"><small>Tugas belum selesai</small><b>${t.length} Tugas</b></div><span class="arrow">${ic('right')}</span></button>
      ${t[0] ? `<button class="deadline" data-go="info"><small>Deadline terdekat</small><h3>${esc(t[0].title)}</h3><p>${fmt(toDate(t[0].due))} &nbsp;•&nbsp; ${dueLabel(daysLeft(t[0].due))[0]}</p></button>`
             : `<div class="deadline"><small>Deadline terdekat</small><h3>Semua tugas selesai 🎉</h3></div>`}
      <div class="section-title">Kelas berikutnya</div>
      <div class="card next"><div class="time"><b>${next.start}</b><span>${next.end}</span></div><div class="info"><b>${esc(next.name)}</b><span>${esc(next.room)} &nbsp;•&nbsp; ${next.sks} SKS</span></div></div>
      <div class="date-foot">${fmt(TODAY)}</div>`);
  },
  jadwal() {
    const d = SCHEDULE[day];
    const list = d.items.map((c) => `
      <div class="card cls"><div class="tm"><b>${c.start}</b><span>${c.end}</span></div>
        <div class="bd"><div class="top"><b>${esc(c.name)}</b><span class="badge">${c.type}</span></div>
        <div class="loc">${ic('pin')}${esc(c.room)} &nbsp;•&nbsp; ${c.sks} SKS</div></div></div>`).join('');
    return shell('jadwal', 'Jadwal Kuliah', `${d.full} &nbsp;•&nbsp; ${d.items.length} kelas hari ini`, `
      <div class="tabs">${DAYS.map((k) => `<button class="tab ${k === day ? 'on' : ''}" data-day="${k}">${k}</button>`).join('')}</div>${list}`);
  },
  tugas() {
    const list = DEFAULT_TASKS.map((t) => {
      const isDone = done.includes(t.id);
      const [lbl, cls] = isDone ? ['Selesai', 'c-green'] : dueLabel(daysLeft(t.due));
      return `<div class="card task ${isDone ? 'done' : ''}">
        <button class="chk" data-task="${t.id}" aria-label="Tandai selesai: ${esc(t.title)}">${ic('check')}</button>
        <div class="tt"><b>${esc(t.title)}</b><span>${esc(t.sub)}</span></div>
        <div class="dd"><b>${fmt(toDate(t.due), true)}</b><em class="${cls}">${lbl}</em></div></div>`;
    }).join('');
    return shell('tugas', 'Daftar Tugas', `${pending().length} tugas belum selesai`, list);
  },
  info() {
    const t = pending()[0];
    return shell('info', 'Info Kampus', 'Pengingat dan pengumuman terbaru', `
      ${t ? `<div class="deadline row"><div class="ic">${ic('clock')}</div><div><small>Deadline terdekat</small><h3>${esc(t.title)}</h3><p>${fmt(toDate(t.due))} &nbsp;•&nbsp; ${dueLabel(daysLeft(t.due))[0]}</p></div></div>` : ''}
      <div class="section-title">Pengumuman</div>
      ${ANNOUNCEMENTS.map((a) => `<div class="card ann"><div class="ic">${ic(a.icon)}</div><div><b>${a.title}</b><span>${a.meta}</span></div></div>`).join('')}`);
  },
  profil() {
    const row = (i, l, v) => `<div class="prow">${ic(i)}<div><small>${l}</small><b>${esc(v)}</b></div></div>`;
    return shell('profil', 'Profil Saya', 'Informasi akun mahasiswa', `
      <div class="card prof"><div class="avatar">${esc(initials(user.nama))}</div><div><b>${esc(user.nama)}</b><span class="s">Mahasiswa Universitas Madura</span><span class="badge act">Mahasiswa Aktif</span></div></div>
      <div class="section-title">Informasi Pribadi</div>
      <div class="card plist">
        ${row('hash', 'NIM', user.nim)}
        ${row('mail', 'Email', 'satrio.mahasiswa@kampus.ac.id')}
        ${row('book', 'Program Studi', user.prodi)}
        ${row('cal', 'Semester', 'Semester 3  •  Angkatan 2025')}
      </div>
      <button class="btn-out" id="logout">${ic('out')}Log Out</button>`);
  },
  keluar() {
    return `<div class="screen auth" style="flex:1;display:flex;flex-direction:column;align-items:center">
      <div class="bye"><img class="logo" src="logo-unira.png" alt="Logo" /><div class="ok" style="margin-top:12px">${ic('check')}</div>
        <h2>Kamu telah keluar</h2><p>Sampai jumpa lagi, ${esc(firstName(user && user.nama || store.get('lastName', 'Satrio')))}! Terima kasih sudah menggunakan CampusMate.</p>
        <button class="btn" id="relogin">Masuk Kembali</button></div>
      <div class="foot" style="margin-top:16px">Universitas Madura &nbsp;•&nbsp; CampusMate</div></div>`;
  },
};

// ---------- Router (hash) ----------
const PROTECTED = ['home', 'jadwal', 'tugas', 'info', 'profil'];
function route() {
  let r = location.hash.replace('#', '') || (user ? 'home' : 'login');
  if (!pages[r]) r = 'login';
  if (PROTECTED.includes(r) && !user) r = 'login';
  if (r === 'login' && user && location.hash === '') r = 'home';
  const light = !['login', 'keluar'].includes(r);
  $status.classList.toggle('dark', false);
  $app.innerHTML = pages[r]();
  bind(r);
  const c = $app.querySelector('.content'); if (c) c.scrollTop = 0;
}
const go = (r) => { if (location.hash === '#' + r) route(); else location.hash = r; };

function bind(r) {
  $app.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => go(b.dataset.go)));
  $app.querySelectorAll('[data-day]').forEach((b) => b.addEventListener('click', () => { day = b.dataset.day; route(); }));
  $app.querySelectorAll('[data-task]').forEach((b) => b.addEventListener('click', () => {
    const id = Number(b.dataset.task);
    done = done.includes(id) ? done.filter((x) => x !== id) : [...done, id];
    store.set('done', done); route();
  }));
  if (r === 'login') {
    $app.querySelector('#loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = $app.querySelector('#nama').value.trim();
      const prodi = $app.querySelector('#prodi').value.trim();
      const nim = $app.querySelector('#nim').value.trim();
      const err = $app.querySelector('#err');
      if (!nama || !prodi || !nim) { err.textContent = 'Semua kolom wajib diisi.'; return; }
      if (!/^\d{6,15}$/.test(nim)) { err.textContent = 'NIM harus berupa angka (6–15 digit).'; return; }
      user = { nama, prodi, nim }; store.set('user', user); go('home');
    });
  }
  if (r === 'profil') $app.querySelector('#logout').addEventListener('click', () => {
    store.set('lastName', firstName(user.nama)); user = null; store.del('user'); go('keluar');
  });
  if (r === 'keluar') $app.querySelector('#relogin').addEventListener('click', () => go('login'));
}

window.addEventListener('hashchange', route);
route();
