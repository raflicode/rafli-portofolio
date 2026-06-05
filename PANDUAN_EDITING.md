# Panduan Editing Portofolio Rafli Aulia

Dokumentasi lengkap untuk mengedit setiap bagian portofolio Anda.

---

## 1. TOMBOL DAN LINK (VIEW WORKS, DOWNLOAD RESUME, EMAIL, GITHUB)

### File yang Perlu Diedit:
**[src/sections/Hero.vue](src/sections/Hero.vue)**

### Lokasi Tombol di File:

#### Tombol "View Works" (Lihat Karya)
```vue
<a 
  href="#projects"  <!-- ← UBAH TUJUAN LINK DI SINI -->
  class="hero-btn group min-h-12 w-full sm:w-auto bg-accent hover:bg-amber-400 ..."
>
  {{ t('hero.btn_works') }}
  <ArrowUpRight :size="14" />
</a>
```
**Lokasi:** Baris ~53
**Untuk mengubah:** Ganti `href="#projects"` dengan URL tujuan baru

---

#### Tombol "Download Resume"
```vue
<a 
  href="/cv.pdf"  <!-- ← UBAH PATH FILE PDF DI SINI -->
  download
  class="hero-btn group min-h-12 ..."
>
  <Download :size="14" />
  {{ t('hero.btn_resume') }}
</a>
```
**Lokasi:** Baris ~65
**Untuk mengubah:** 
- Ganti `href="/cv.pdf"` dengan path file PDF Anda (letakkan file di folder `public/`)
- Contoh: `href="/resume_rafli_2024.pdf"`

---

#### Link "Email"
```vue
<a 
  href="mailto:hello@rafliaulia.dev"  <!-- ← UBAH EMAIL DI SINI -->
  class="hero-social flex items-center gap-2 ..."
>
  <Mail :size="12" class="text-accent" />
  <span>EMAIL</span>
</a>
```
**Lokasi:** Baris ~80
**Untuk mengubah:** Ganti email `hello@rafliaulia.dev` dengan email Anda sendiri

---

#### Link "GitHub"
```vue
<a 
  href="https://github.com/rafliaulia"  <!-- ← UBAH URL GITHUB DI SINI -->
  target="_blank" 
  class="hero-social flex items-center gap-2 ..."
>
  <Github :size="12" class="text-accent" />
  <span>GITHUB</span>
</a>
```
**Lokasi:** Baris ~87
**Untuk mengubah:** Ganti URL dengan profile GitHub Anda

---

## 2. FOTO PROFIL (ABOUT SECTION)

### File yang Perlu Diedit:
**[src/sections/About.vue](src/sections/About.vue)**

### Lokasi Foto Profil:
```vue
<img 
  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"  <!-- ← UBAH SINI -->
  alt="Rafli Aulia Al Giffari" 
  class="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
/>
```
**Lokasi:** Baris ~73

### Kemana Menyimpan Foto Baru?
**Pilihan 1: Folder `public/`** (Disarankan)
```
public/
├── favicon.svg
├── icons.svg
└── profile-photo.jpg  ← LETAKKAN DI SINI
```

Jika menyimpan di folder `public/`, ubah `src` menjadi:
```vue
src="/profile-photo.jpg"
```

**Pilihan 2: Folder `src/assets/`**
```
src/assets/
├── css/
│   └── main.css
└── profile-photo.jpg  ← ATAU LETAKKAN DI SINI
```

Jika menyimpan di folder `src/assets/`, ubah `src` menjadi:
```vue
src="/@/assets/profile-photo.jpg"
```

---

## 3. KONTEN ABOUT ME

### File yang Perlu Diedit:

**File Utama:** [src/sections/About.vue](src/sections/About.vue)  
**File Konten:** 
- [src/locales/en.json](src/locales/en.json) (Bahasa Inggris)
- [src/locales/id.json](src/locales/id.json) (Bahasa Indonesia)

### Lokasi di About.vue:
```vue
<h2 class="about-reveal text-3xl md:text-5xl font-black tracking-tight text-white mb-8 leading-tight font-sans">
  {{ t('about.title_normal') }}
  <span class="text-accent italic font-medium">{{ t('about.title_accent') }}</span>
  {{ t('about.title_normal_2') }}
</h2>

<p class="about-reveal text-text-muted text-sm md:text-base leading-relaxed tracking-wide mb-6">
  {{ t('about.p1') }}
</p>
<p class="about-reveal text-text-muted text-sm md:text-base leading-relaxed tracking-wide mb-12">
  {{ t('about.p2') }}
</p>
```

### Tempat Menyimpan Konten (en.json):
```json
{
  "about": {
    "title_normal": "Engineering with ",
    "title_accent": "Precision & ",
    "title_normal_2": "Purpose",
    "p1": "Dengan fondasi di Rekayasa Perangkat Lunak...",
    "p2": "Fokus saya saat ini terletak pada Integrasi AI..."
  }
}
```

**Untuk mengubah konten About:** Edit teks langsung di dalam JSON di file `en.json` atau `id.json`

---

## 4. STATISTIK ABOUT (YEARS OF EXPERIENCE, PROJECTS COMPLETED, dll)

### File yang Perlu Diedit:

**File Struktur:** [src/sections/About.vue](src/sections/About.vue)  
**File Konten:** [src/locales/en.json](src/locales/en.json) dan [src/locales/id.json](src/locales/id.json)

### Lokasi Statistik di About.vue:
```vue
<div class="about-reveal flex gap-16 pt-4 border-t border-white/5 w-full">
  <div>
    <h3 class="text-3xl md:text-4xl font-light text-accent tracking-tight">3+</h3>
    <p class="text-[10px] font-bold tracking-widest text-text-muted mt-1">
      {{ t('about.exp_years') }}  <!-- ← UBAH LABEL DI en.json/id.json -->
    </p>
  </div>
  <div>
    <h3 class="text-3xl md:text-4xl font-light text-accent tracking-tight">24+</h3>
    <p class="text-[10px] font-bold tracking-widest text-text-muted mt-1">
      {{ t('about.global_proj') }}  <!-- ← UBAH LABEL DI en.json/id.json -->
    </p>
  </div>
</div>
```

### Mengubah Angka Statistik:
**Di About.vue**, ubah angka langsung di tag `<h3>`:
```vue
<h3 class="text-3xl md:text-4xl font-light text-accent tracking-tight">3+</h3>
<!-- Ubah 3+ menjadi angka yang Anda inginkan -->

<h3 class="text-3xl md:text-4xl font-light text-accent tracking-tight">24+</h3>
<!-- Ubah 24+ menjadi angka yang Anda inginkan -->
```

### Mengubah Label Statistik:
**Di en.json:**
```json
{
  "about": {
    "exp_years": "YEARS OF CRAFT",      <!-- ← UBAH LABEL -->
    "global_proj": "GLOBAL PROJECTS"    <!-- ← UBAH LABEL -->
  }
}
```

**Di id.json:**
```json
{
  "about": {
    "exp_years": "TAHUN BERKARYA",      <!-- ← UBAH LABEL -->
    "global_proj": "PROYEK GLOBAL"      <!-- ← UBAH LABEL -->
  }
}
```

---

## 5. SKILLS (DAFTAR KEAHLIAN)

### File yang Perlu Diedit:
**[src/sections/Skills.vue](src/sections/Skills.vue)**

### Lokasi Data Skills:
```javascript
const skillsData = [
  { name: 'HTML5', icon: Code2, label: 'HTML', status: 'expert' },
  { name: 'CSS3', icon: Layers, label: 'CSS', status: 'expert' },
  { name: 'JAVASCRIPT', icon: FileJson, label: 'JS', status: 'advanced' },
  { name: 'PHP', icon: Terminal, label: 'PHP', status: 'advanced' },
  { name: 'MYSQL', icon: Database, label: 'MYSQL', status: 'advanced' },
  { name: 'LARAVEL', icon: Server, label: 'Laravel', status: 'advanced' },
  { name: 'VUEJS', icon: Cpu, label: 'VUE.JS', status: 'advanced' },
  { name: 'GIT', icon: Code2, label: 'GIT', status: 'intermediate' },
  { name: 'GITHUB', icon: Github, label: 'GITHUB', status: 'intermediate' },
  { name: 'FIGMA', icon: Figma, label: 'FIGMA', status: 'advanced' }
]
```
**Lokasi:** Baris ~16-27

---

### Cara Menambah Skill Baru:

#### Step 1: Tentukan Icon
Daftar icon yang tersedia di atas (di bagian import):
```javascript
import { 
  Code2, FileJson, Cpu, Database, Server, 
  Layers, Terminal, Github, Figma 
} from 'lucide-vue-next'
```

Jika icon yang Anda inginkan tidak ada, tambahkan import baru. Daftar lengkap icon tersedia di: https://lucide.dev/

#### Step 2: Tambah Object Skill Baru ke Array
Contoh menambah Python:
```javascript
const skillsData = [
  // ... skill lainnya
  { name: 'PYTHON', icon: Terminal, label: 'Python', status: 'advanced' }
]
```

**Penjelasan setiap field:**
- `name`: Nama skill (tampil di kartu)
- `icon`: Ikon dari lucide-vue-next
- `label`: Label singkat (tampil di atas ikon)
- `status`: Level (expert/advanced/intermediate) - label dari i18n

---

### Cara Menghapus Skill:
Cukup hapus baris skill yang ingin dihapus dari array `skillsData`.

---

### Cara Mengubah Skill:
Edit field di dalam object skill:
```javascript
// Sebelum:
{ name: 'JAVASCRIPT', icon: FileJson, label: 'JS', status: 'advanced' }

// Setelah:
{ name: 'TYPESCRIPT', icon: FileJson, label: 'TS', status: 'expert' }
```

---

## 6. PROJECTS (PROYEK DAN PORTFOLIO)

### File yang Perlu Diedit:

**File Struktur Utama:**
- [src/sections/Projects.vue](src/sections/Projects.vue)
- [src/components/ProjectCard.vue](src/components/ProjectCard.vue)

**File Konten:**
- [src/locales/en.json](src/locales/en.json)
- [src/locales/id.json](src/locales/id.json)

### Lokasi Gambar Project:
```javascript
const featuredProjects = ref([
  {
    key: 'kami_yayuk',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200', // ← UBAH DI SINI
    categories: ['web_app', 'ui_ux'],
    techStack: ['PHP', 'LARAVEL', 'VUE.JS', 'TAILWIND'],
    liveUrl: '#',
    repoUrl: 'https://github.com/rafliaulia'
  }
])
```
**Lokasi:** [src/sections/Projects.vue](src/sections/Projects.vue) baris ~14

---

### Kemana Menyimpan Gambar Project?

**Disarankan: Folder `public/`**
```
public/
├── favicon.svg
├── icons.svg
└── projects/
    ├── kami-yayuk.jpg
    ├── project-2.jpg
    └── project-3.jpg
```

Kemudian ubah `image` menjadi:
```javascript
image: '/projects/kami-yayuk.jpg'
```

---

### Cara Menambah Project Baru:

#### Step 1: Siapkan Gambar Project
Simpan gambar di folder `public/projects/` dengan nama yang jelas.

#### Step 2: Tambah Data Project di Projects.vue
```javascript
const featuredProjects = ref([
  // Project yang sudah ada...
  {
    key: 'kami_yayuk',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
    categories: ['web_app', 'ui_ux'],
    techStack: ['PHP', 'LARAVEL', 'VUE.JS', 'TAILWIND'],
    liveUrl: '#',
    repoUrl: 'https://github.com/rafliaulia'
  },
  // Project baru ← TAMBAHKAN DI SINI
  {
    key: 'project_baru',  // ← Key unik untuk project ini
    image: '/projects/project-baru.jpg',
    categories: ['web_app'],
    techStack: ['VUE.JS', 'NODE.JS', 'MONGODB'],
    liveUrl: 'https://project-baru.com',
    repoUrl: 'https://github.com/rafliaulia/project-baru'
  }
])
```

#### Step 3: Tambah Data Konten di en.json
**Di en.json:**
```json
{
  "projects": {
    "items": {
      "kami_yayuk": { ... },
      "project_baru": {
        "title": "Project Baru",
        "description": "Deskripsi singkat project baru Anda"
      }
    },
    "categories": {
      "web_app": "WEB APPLICATION",
      "ui_ux": "UI/UX DESIGN"
    }
  }
}
```

#### Step 4: Tambah Data Konten di id.json
**Di id.json:**
```json
{
  "projects": {
    "items": {
      "project_baru": {
        "title": "Project Baru",
        "description": "Deskripsi singkat project baru Anda dalam bahasa Indonesia"
      }
    }
  }
}
```

---

### Cara Mengubah Project:

**Mengubah Judul:**
Edit di en.json dan id.json:
```json
"project_baru": {
  "title": "Judul Baru",  ← UBAH DI SINI
  "description": "..."
}
```

**Mengubah Deskripsi:**
```json
"project_baru": {
  "title": "...",
  "description": "Deskripsi baru yang lebih detail"  ← UBAH DI SINI
}
```

**Mengubah Teknologi yang Digunakan:**
Di Projects.vue, ubah array `techStack`:
```javascript
{
  key: 'project_baru',
  techStack: ['REACT', 'TYPESCRIPT', 'TAILWIND'],  ← UBAH DI SINI
  ...
}
```

**Mengubah Link Demo:**
Di Projects.vue, ubah `liveUrl`:
```javascript
{
  key: 'project_baru',
  liveUrl: 'https://url-demo-baru.com',  ← UBAH DI SINI
  ...
}
```

**Mengubah Link GitHub:**
Di Projects.vue, ubah `repoUrl`:
```javascript
{
  key: 'project_baru',
  repoUrl: 'https://github.com/username/repo-baru',  ← UBAH DI SINI
  ...
}
```

**Mengubah Gambar:**
Di Projects.vue, ubah `image`:
```javascript
{
  key: 'project_baru',
  image: '/projects/gambar-baru.jpg',  ← UBAH DI SINI
  ...
}
```

**Mengubah Kategori:**
Di Projects.vue, ubah array `categories`:
```javascript
{
  key: 'project_baru',
  categories: ['web_app', 'ui_ux'],  ← UBAH DI SINI
  ...
}
```

---

## 7. EXPERIENCE (PENGALAMAN KERJA/MAGANG)

### File yang Perlu Diedit:

**File Struktur:** [src/sections/Experience.vue](src/sections/Experience.vue)

**File Konten:**
- [src/locales/en.json](src/locales/en.json)
- [src/locales/id.json](src/locales/id.json)

### Lokasi Data Experience:
```javascript
const experiences = [
  {
    id: '01',
    key: 'exp_1'
  },
  {
    id: '02',
    key: 'exp_2'
  }
]
```
**Lokasi:** [src/sections/Experience.vue](src/sections/Experience.vue) baris ~15

---

### Tempat Menyimpan Konten Experience:

**Di en.json:**
```json
{
  "experience": {
    "items": {
      "exp_1": {
        "date": "2023 - PRESENT",
        "role": "Fullstack Developer Intern",
        "desc": "Leading the development of performance-critical internal tools..."
      },
      "exp_2": {
        "date": "2023",
        "role": "Systems Architecture BootCamp",
        "desc": "Intensive immersion into distributed systems..."
      }
    }
  }
}
```

**Di id.json:**
```json
{
  "experience": {
    "items": {
      "exp_1": {
        "date": "2023 - SEKARANG",
        "role": "Magang Fullstack Developer",
        "desc": "Memimpin pengembangan alat internal..."
      },
      "exp_2": {
        "date": "2023",
        "role": "BootCamp Arsitektur Sistem",
        "desc": "Imersi intensif ke dalam sistem terdistribusi..."
      }
    }
  }
}
```

---

### Cara Menambah Experience Baru:

#### Step 1: Tambah Item di experiences Array (Experience.vue)
```javascript
const experiences = [
  {
    id: '01',
    key: 'exp_1'
  },
  {
    id: '02',
    key: 'exp_2'
  },
  {
    id: '03',          // ← TAMBAHKAN DI SINI
    key: 'exp_3'
  }
]
```

#### Step 2: Tambah Data di en.json
```json
{
  "experience": {
    "items": {
      "exp_1": { ... },
      "exp_2": { ... },
      "exp_3": {
        "date": "2024",
        "role": "Senior Developer",
        "desc": "Deskripsi pengalaman baru Anda"
      }
    }
  }
}
```

#### Step 3: Tambah Data di id.json
```json
{
  "experience": {
    "items": {
      "exp_3": {
        "date": "2024",
        "role": "Senior Developer",
        "desc": "Deskripsi pengalaman baru Anda dalam bahasa Indonesia"
      }
    }
  }
}
```

---

### Cara Mengubah Experience:

Edit konten langsung di en.json dan id.json:
```json
"exp_1": {
  "date": "2024 - PRESENT",        // ← Ubah tanggal
  "role": "Senior Developer",      // ← Ubah posisi
  "desc": "Konten baru..."         // ← Ubah deskripsi
}
```

---

## 8. CERTIFICATES (SERTIFIKAT)

### File yang Perlu Diedit:

**File Struktur:** [src/sections/Certificates.vue](src/sections/Certificates.vue)

**File Konten:**
- [src/locales/en.json](src/locales/en.json)
- [src/locales/id.json](src/locales/id.json)

### Lokasi Data Certificates:
```javascript
const certificates = [
  { key: 'cert_1', url: '#' },
  { key: 'cert_2', url: '#' }
]
```
**Lokasi:** [src/sections/Certificates.vue](src/sections/Certificates.vue) baris ~15

---

### Kemana Menyimpan Gambar Sertifikat?

**Pilihan 1: Folder `public/` (Disarankan)**
```
public/
├── favicon.svg
├── icons.svg
└── certificates/
    ├── hackerrank-cert.pdf
    ├── deeplearning-cert.pdf
    └── cert-3.pdf
```

**Pilihan 2: Folder `src/assets/`**
```
src/assets/
├── css/
│   └── main.css
└── certificates/
    ├── hackerrank-cert.pdf
    └── deeplearning-cert.pdf
```

---

### Cara Menambah Sertifikat Baru:

#### Step 1: Simpan File Sertifikat
Letakkan file sertifikat (PDF, gambar, atau link) di folder yang sudah Anda pilih.

#### Step 2: Tambah Item di certificates Array
```javascript
const certificates = [
  { key: 'cert_1', url: '#' },
  { key: 'cert_2', url: '#' },
  { key: 'cert_3', url: 'https://link-sertifikat-baru.com' }  // ← TAMBAHKAN
]
```

#### Step 3: Tambah Data di en.json
```json
{
  "certificates": {
    "items": {
      "cert_1": { ... },
      "cert_2": { ... },
      "cert_3": {
        "title": "Advanced Python Programming",
        "issuer": "Coursera",
        "date": "2024"
      }
    }
  }
}
```

#### Step 4: Tambah Data di id.json
```json
{
  "certificates": {
    "items": {
      "cert_3": {
        "title": "Pemrograman Python Lanjutan",
        "issuer": "Coursera",
        "date": "2024"
      }
    }
  }
}
```

---

### Cara Mengubah Link Sertifikat:

Di Certificates.vue, ubah `url` di array `certificates`:
```javascript
const certificates = [
  { key: 'cert_1', url: 'https://credentials.hackerrank.com/...' },  // ← UBAH URL
  { key: 'cert_2', url: '/certificates/deeplearning-cert.pdf' }      // ← UBAH URL
]
```

---

## 9. CONTACT FORM (FORM KONTAK)

### File yang Perlu Diedit:
**[src/sections/Contact.vue](src/sections/Contact.vue)**

### Bagaimana Form Bekerja Sekarang?
```javascript
const formData = ref({ name: '', email: '', message: '' })

const handleSubmit = () => {
  alert(`Message sent by ${formData.value.name}! (Simulated)`)
}
```
**Lokasi:** Baris ~17-21

**Status saat ini:** Form hanya menampilkan alert simulasi, **BELUM mengirim email sebenarnya**.

---

### Cara Membuat Form Mengirim Email Sebenarnya:

Anda memiliki beberapa pilihan:

#### **PILIHAN 1: Menggunakan Formspree (PALING MUDAH - GRATIS)**

Formspree adalah layanan gratis untuk mengirim form langsung ke email Anda tanpa backend.

**Step 1:** Daftar di https://formspree.io
- Klik "Sign Up"
- Gunakan email Anda
- Buat project baru

**Step 2:** Dapatkan Form ID Anda
Setelah membuat project, Anda akan mendapat Form ID (contoh: `f1234abcd`)

**Step 3:** Update Contact.vue
```javascript
const handleSubmit = async () => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message
      })
    })
    
    if (response.ok) {
      alert('Pesan berhasil dikirim!')
      formData.value = { name: '', email: '', message: '' }
    }
  } catch (error) {
    alert('Gagal mengirim pesan')
  }
}
```

**Step 4:** Ubah template form untuk menggunakan form standard HTML
```vue
<form @submit.prevent="handleSubmit" class="...">
  <!-- Form inputs di sini -->
</form>
```

---

#### **PILIHAN 2: Menggunakan EmailJS (LEBIH FLEKSIBEL)**

EmailJS memungkinkan mengirim email langsung dari frontend tanpa backend.

**Step 1:** Install EmailJS
```bash
npm install @emailjs/browser
```

**Step 2:** Daftar di https://www.emailjs.com
- Buat akun
- Setup Email Service (Gmail, Outlook, dll)
- Buat Email Template
- Dapatkan Public Key

**Step 3:** Update main.js
```javascript
import emailjs from '@emailjs/browser'

emailjs.init("YOUR_PUBLIC_KEY")
```

**Step 4:** Update Contact.vue
```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = async () => {
  try {
    const templateParams = {
      to_email: 'your-email@example.com',
      from_name: formData.value.name,
      from_email: formData.value.email,
      message: formData.value.message
    }
    
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    alert('Pesan berhasil dikirim!')
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    alert('Gagal mengirim pesan: ' + error.message)
  }
}
```

---

#### **PILIHAN 3: Menggunakan Backend Sendiri (PALING AMAN)**

Jika Anda memiliki backend (Node.js, PHP, Laravel, dll):

**Backend (Node.js + Express contoh):**
```javascript
const nodemailer = require('nodemailer')

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    })
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
```

**Frontend (Contact.vue):**
```javascript
const handleSubmit = async () => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })
    
    if (response.ok) {
      alert('Pesan berhasil dikirim!')
      formData.value = { name: '', email: '', message: '' }
    }
  } catch (error) {
    alert('Gagal mengirim pesan')
  }
}
```

---

### Apakah Perlu SMTP atau Layanan Email Lain?

| Pilihan | SMTP? | Biaya | Kemudahan |
|---------|-------|-------|-----------|
| **Formspree** | Tidak perlu | Gratis (hingga 50/bulan) | ⭐⭐⭐⭐⭐ Sangat Mudah |
| **EmailJS** | Tidak perlu | Gratis (200/bulan) | ⭐⭐⭐⭐ Mudah |
| **Backend + Nodemailer** | Ya (Gmail, dll) | Gratis/Berbayar | ⭐⭐⭐ Sedang |
| **Backend + SendGrid** | Tidak perlu | Gratis (100/hari) | ⭐⭐⭐ Sedang |

**Rekomendasi:** Gunakan **Formspree** untuk yang paling mudah, atau **EmailJS** untuk fleksibilitas lebih.

---

## RINGKASAN FILE YANG PERLU DIEDIT

| Bagian | File | Tipe |
|--------|------|------|
| Tombol & Link | `src/sections/Hero.vue` | HTML/Template |
| Foto About | `src/sections/About.vue` | HTML/Template |
| Konten About | `src/locales/en.json`, `id.json` | JSON |
| Statistik About | `src/sections/About.vue` + Locales | HTML + JSON |
| Skills | `src/sections/Skills.vue` | JavaScript Array |
| Projects | `src/sections/Projects.vue`, Locales | JavaScript + JSON |
| Experience | `src/sections/Experience.vue`, Locales | JavaScript + JSON |
| Certificates | `src/sections/Certificates.vue`, Locales | JavaScript + JSON |
| Contact Form | `src/sections/Contact.vue` | JavaScript + HTML |

---

## STRUKTUR FOLDER ASSET

```
rafli-portofolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── cv.pdf                    ← Resume PDF
│   ├── profile-photo.jpg         ← Foto profil
│   ├── projects/
│   │   ├── project-1.jpg
│   │   └── project-2.jpg
│   └── certificates/
│       ├── cert-1.pdf
│       └── cert-2.pdf
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css
│   │   └── hero-bg-crystals.png
│   ├── components/
│   │   └── ProjectCard.vue
│   ├── composables/
│   │   └── useDark.js
│   ├── locales/
│   │   ├── en.json              ← Konten Inggris
│   │   └── id.json              ← Konten Indonesia
│   ├── sections/
│   │   ├── About.vue
│   │   ├── Certificates.vue
│   │   ├── Contact.vue
│   │   ├── Experience.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── Navbar.vue
│   │   ├── Projects.vue
│   │   └── Skills.vue
│   ├── App.vue
│   └── main.js
```

---

## TIPS EDITING

1. **Untuk mengubah konten teks** → Edit file `en.json` atau `id.json`
2. **Untuk mengubah struktur/layout** → Edit file `.vue`
3. **Untuk mengubah data (arrays)** → Edit file `.vue` di bagian `<script setup>`
4. **Untuk menambah/mengubah gambar** → Letakkan di `public/` atau `src/assets/`
5. **Untuk file CSS** → Edit `src/assets/css/main.css`
6. **Untuk dark mode** → File `src/composables/useDark.js`

---

## CARA TESTING PERUBAHAN ANDA

Setelah membuat perubahan, jalankan development server:

```bash
npm run dev
```

Kemudian buka browser ke `http://localhost:5173` untuk melihat perubahan real-time.

---

Semoga panduan ini membantu Anda mengedit portofolio dengan mudah!
