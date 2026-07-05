// ========================================
// MOCK DATA
// ========================================
let mockPenjualan = [
  { id: 1, tanggal: '2 JANUARI 2025', nama: 'KENTANG MUSTOFA', kode: 'KM 1', jumlah: 4, harga: 100000, total: 400000, hargaBeli: 95000, totalBeli: 380000, untung: 20000 },
  { id: 2, tanggal: '3 JANUARI 2025', nama: 'AQUA', kode: 'AB', jumlah: 5, harga: 3000, total: 15000, hargaBeli: 2500, totalBeli: 12500, untung: 2500 },
  { id: 3, tanggal: '3 JANUARI 2025', nama: 'AQUA GELAS', kode: 'AG', jumlah: 10, harga: 500, total: 5000, hargaBeli: 300, totalBeli: 3000, untung: 2000 },
  { id: 4, tanggal: '3 JANUARI 2025', nama: 'AQUA BOTOL BESAR', kode: 'ABB', jumlah: 4, harga: 5000, total: 20000, hargaBeli: 4500, totalBeli: 18000, untung: 2000 },
  { id: 5, tanggal: '4 JANUARI 2025', nama: 'NASI UDUK', kode: 'NU', jumlah: 6, harga: 7000, total: 42000, hargaBeli: 6000, totalBeli: 36000, untung: 6000 },
  { id: 6, tanggal: '4 JANUARI 2025', nama: 'NASI KUNING', kode: 'NK', jumlah: 6, harga: 7000, total: 42000, hargaBeli: 6000, totalBeli: 36000, untung: 6000 },
  { id: 7, tanggal: '31 JANUARI 2025', nama: 'AQUA GELAS', kode: 'AG', jumlah: 10, harga: 500, total: 5000, hargaBeli: 300, totalBeli: 3000, untung: 2000 },
  { id: 8, tanggal: '31 JANUARI 2025', nama: 'AQUA BOTOL BESAR', kode: 'ABB', jumlah: 4, harga: 5000, total: 20000, hargaBeli: 4500, totalBeli: 18000, untung: 2000 },
];

let mockKasHarian = [
  { id: 1, tanggal: '2 JANUARI 2025', bukti: '', uraian: 'SALDO BULAN DESEMBER', inJml: '', inHrg: '', inTot: '', outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2200000 },
  { id: 2, tanggal: '3 JANUARI 2025', bukti: '', uraian: 'PENJUALAN KENTANG MUSTOFA', inJml: 4, inHrg: 100000, inTot: 400000, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2600000 },
  { id: 3, tanggal: '3 JANUARI 2025', bukti: '', uraian: 'PENJUALAN AQUA', inJml: 5, inHrg: 3000, inTot: 15000, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2615000 },
  { id: 4, tanggal: '3 JANUARI 2025', bukti: '', uraian: 'PENJUALAN AQUA GELAS', inJml: 10, inHrg: 500, inTot: 5000, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2620000 },
  { id: 5, tanggal: '4 JANUARI 2025', bukti: '', uraian: 'PENJUALAN AQUA BOTOL BESAR', inJml: 4, inHrg: 5000, inTot: 20000, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2640000 },
  { id: 6, tanggal: '4 JANUARI 2025', bukti: '', uraian: 'PEMBELIAN AQUA GELAS 48', inJml: '', inHrg: '', inTot: '', outJml: 48, outHrg: 300, outTot: 14400, biaya: '', saldo: 2625600 },
  { id: 7, tanggal: '4 JANUARI 2025', bukti: '', uraian: 'TRANSPORT PEMBELIAN AQUA', inJml: '', inHrg: '', inTot: '', outJml: '', outHrg: '', outTot: '', biaya: 15000, saldo: 2610600 },
  { id: 8, tanggal: '4 JANUARI 2025', bukti: '', uraian: 'PEMBELIAN PLASTIK', inJml: '', inHrg: '', inTot: '', outJml: '', outHrg: '', outTot: '', biaya: 17000, saldo: 2593600 },
  { id: 9, tanggal: '4 JANUARI 2025', bukti: '', uraian: 'BIAYA OPERASIONAL (PEMBERIAN MINUMAN)', inJml: '', inHrg: '', inTot: '', outJml: '', outHrg: '', outTot: '', biaya: 50000, saldo: 2543600 },
];

const mockKartuStok = {
  nama: 'AQUA GELAS', kode: 'AG', supplier: 'PT TIRTA', kontak: '08123456789',
  riwayat: [
    { id: 1, tanggal: 'SISA AKHIR DESEMBER 2024', masuk: '', keluar: '', sisa: 5, paraf: '✓' },
    { id: 2, tanggal: '1 JANUARI 2025', masuk: 25, keluar: '', sisa: 30, paraf: '✓' },
    { id: 3, tanggal: '1 JANUARI 2025', masuk: '', keluar: 7, sisa: 23, paraf: '✓' },
    { id: 4, tanggal: '4 JANUARI 2025', masuk: '', keluar: 5, sisa: 18, paraf: '✓' },
    { id: 5, tanggal: '30 JANUARI 2025', masuk: '', keluar: 17, sisa: 1, paraf: '✓' },
  ]
};

let mockRekap = [
  { id: 1, blnIn: 'JAN', uraianIn: 'PENJUALAN', jmlIn: 633000, blnOut: 'JAN', uraianOut: 'PEMBELANJAAN', jmlOut: 524000 },
  { id: 2, blnIn: '', uraianIn: '', jmlIn: '', blnOut: '', uraianOut: 'BIAYA', jmlOut: 96400 },
  { id: 3, blnIn: 'FEB', uraianIn: 'PENJUALAN', jmlIn: 0, blnOut: 'FEB', uraianOut: 'PEMBELANJAAN', jmlOut: 0 },
];

// ========================================
// DASHBOARD DATA
// ========================================
const dashboardData = {
  penjualanHariIni: 425000,
  transaksiHariIni: 12,
  stokRendah: 3,
  keuntunganBulanIni: 54500,
  penjualanMingguan: [
    { hari: 'Sen', jumlah: 320000 },
    { hari: 'Sel', jumlah: 450000 },
    { hari: 'Rab', jumlah: 280000 },
    { hari: 'Kam', jumlah: 510000 },
    { hari: 'Jum', jumlah: 390000 },
    { hari: 'Sab', jumlah: 620000 },
    { hari: 'Min', jumlah: 425000 },
  ],
  barangStokRendah: [
    { nama: 'Nasi Uduk', kode: 'NU', stok: 5, minStok: 10 },
    { nama: 'Aqua Gelas', kode: 'AG', stok: 8, minStok: 20 },
    { nama: 'Frost Bite Crunchy', kode: 'FB-LAVA', stok: 3, minStok: 10 },
  ],
  transaksiTerakhir: [
    { waktu: '09:15', barang: 'Frost Bite Chocolate Vanilla', jumlah: 3, total: 15000 },
    { waktu: '09:32', barang: 'Aqua Botol 600ml', jumlah: 2, total: 6000 },
    { waktu: '10:05', barang: 'Nasi Uduk', jumlah: 1, total: 7000 },
    { waktu: '10:22', barang: 'Frost Bite Boba Milk Tea', jumlah: 5, total: 25000 },
    { waktu: '11:45', barang: 'Aqua Gelas', jumlah: 10, total: 5000 },
  ]
};

// ========================================
// AUTH STATE
// ========================================
let authState = {
  isLoggedIn: false,
  user: null,
  rememberMe: false,
};

// Flag untuk mode halaman login wajib (tidak bisa ditutup manual)
let isLoginScreenMode = false;

// ========================================
// SETTINGS STATE
// ========================================
let settingsState = {
  activeSection: 'store',
  data: {
    // Informasi Toko
    storeName: 'GrossMart',
    storeAddress: 'Jl. Merdeka No. 123, Jakarta Pusat',
    storePhone: '021-12345678',
    storeEmail: 'info@grossmart.com',
    storeLogo: 'asset/logo-rptra.png',
    storeFooter: 'Terima kasih atas kunjungan Anda!',
    
    // Tampilan
    theme: 'light',
    language: 'id',
    fontSize: 'medium',
    
    // Transaksi
    currency: 'IDR',
    taxEnabled: true,
    taxRate: 10,
    defaultDiscount: 0,
    dateFormat: 'DD/MM/YYYY',
    transactionPrefix: 'TRX',
    
    // Pencetakan
    paperSize: '58mm',
    autoPrint: false,
    showLogoOnReceipt: true,
    showFooterOnReceipt: true,
    
    // Notifikasi
    notifLowStock: true,
    notifTransaction: true,
    notifDailyReport: false,
    notifSound: true,
    
    // Backup
    lastBackup: '2025-01-15 09:30',
    autoBackup: true,
  }
};

function loadSettingsFromStorage() {
  try {
    const saved = localStorage.getItem('grossmart_settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      settingsState.data = { ...settingsState.data, ...parsed };
    }
  } catch (e) {
    console.warn('Gagal memuat pengaturan:', e);
  }
}

function saveSettingsToStorage() {
  try {
    localStorage.setItem('grossmart_settings', JSON.stringify(settingsState.data));
    return true;
  } catch (e) {
    console.warn('Gagal menyimpan pengaturan:', e);
    return false;
  }
}

// Mock users database (bisa diganti dengan API call)
const mockUsers = [
  { username: 'admin', password: 'admin123', nama: 'Administrator', role: 'Admin' },
  { username: 'kasir', password: 'kasir123', nama: 'Kasir Toko', role: 'Kasir' },
  { username: 'demo',  password: 'demo',    nama: 'User Demo',    role: 'Viewer' },
];

// Load session dari localStorage saat aplikasi dimulai
function loadAuthSession() {
  try {
    const saved = localStorage.getItem('grossmart_session');
    if (saved) {
      const session = JSON.parse(saved);
      if (session && session.username) {
        const user = mockUsers.find(u => u.username === session.username);
        if (user) {
          authState.isLoggedIn = true;
          authState.user = user;
          authState.rememberMe = true;
        }
      }
    }
  } catch (e) {
    console.warn('Gagal memuat sesi:', e);
  }
}

// ========================================
// AUTH STATE (PERBAIKAN)
// ========================================

function saveAuthSession() {
  if (authState.isLoggedIn && authState.user) {
    const sessionData = {
      username: authState.user.username,
      loginAt: new Date().toISOString(),
    };
    
    // Jika "Ingat saya" dicentang -> simpan di localStorage (persisten meski browser ditutup)
    // Jika tidak dicentang -> simpan di sessionStorage (tetap login saat refresh, logout jika tab ditutup)
    if (authState.rememberMe) {
      localStorage.setItem('grossmart_session', JSON.stringify(sessionData));
    } else {
      sessionStorage.setItem('grossmart_session', JSON.stringify(sessionData));
    }
  }
}

function loadAuthSession() {
  try {
    // Cek localStorage dulu, jika tidak ada cek sessionStorage
    const savedLocal = localStorage.getItem('grossmart_session');
    const savedSession = sessionStorage.getItem('grossmart_session');
    const saved = savedLocal || savedSession;

    if (saved) {
      const session = JSON.parse(saved);
      if (session && session.username) {
        const user = mockUsers.find(u => u.username === session.username);
        if (user) {
          authState.isLoggedIn = true;
          // Perbaikan: Jangan simpan password di authState.user
          authState.user = { username: user.username, nama: user.nama, role: user.role };
          // Set rememberMe true hanya jika sesi berasal dari localStorage
          authState.rememberMe = !!savedLocal; 
        }
      }
    }
  } catch (e) {
    console.warn('Gagal memuat sesi:', e);
  }
}

function clearAuthSession() {
  // Hapus dari kedua storage saat logout
  localStorage.removeItem('grossmart_session');
  sessionStorage.removeItem('grossmart_session');
}

// ========================================
// NOTIFICATION SYSTEM (PROFESIONAL)
// ========================================
const Notification = {
  container: null,
  
  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'notification-container position-top-right';
      document.body.appendChild(this.container);
    }
  },
  
  show(message, type = 'info', options = {}) {
    this.init();
    
    const config = {
      duration: options.duration || 3000,
      closable: options.closable !== false,
      icon: options.icon !== false,
      ...options
    };
    
    const notification = this.create(message, type, config);
    this.container.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    if (config.duration > 0) {
      setTimeout(() => this.remove(notification), config.duration);
    }
    
    return notification;
  },
  
  create(message, type, config) {
    const el = document.createElement('div');
    el.className = `notification notification-${type}`;
    
    const icons = { success: 'check-circle', error: 'x-circle', warning: 'alert-triangle', info: 'info' };
    const titles = { success: 'Berhasil!', error: 'Gagal!', warning: 'Peringatan!', info: 'Informasi' };
    
    el.innerHTML = `
      <div class="notification-content">
        ${config.icon ? `<div class="notification-icon"><i data-lucide="${icons[type]}" class="w-5 h-5"></i></div>` : ''}
        <div class="notification-body">
          <div class="notification-title">${titles[type]}</div>
          <div class="notification-message">${message}</div>
        </div>
        ${config.closable ? `<button class="notification-close" aria-label="Tutup"><i data-lucide="x" class="w-4 h-4"></i></button>` : ''}
      </div>
      <div class="notification-progress"></div>
    `;
    
    if (config.closable) {
      el.querySelector('.notification-close').addEventListener('click', (e) => {
        e.stopPropagation();
        this.remove(el);
      });
    }
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return el;
  },
  
  remove(notification) {
    notification.classList.remove('show');
    notification.classList.add('hide');
    setTimeout(() => notification.remove(), 300);
  },
  
  success(message, options) { return this.show(message, 'success', options); },
  error(message, options) { return this.show(message, 'error', options); },
  warning(message, options) { return this.show(message, 'warning', options); },
  info(message, options) { return this.show(message, 'info', options); }
};

// Custom Confirm Dialog (Pengganti confirm() browser)
const CustomConfirm = {
  show(message, options = {}) {
    return new Promise((resolve) => {
      const modal = document.createElement('div');
      modal.className = 'custom-confirm-overlay';
      
      const type = options.type || 'warning';
      const confirmText = options.confirmText || 'Ya, Lanjutkan';
      const cancelText = options.cancelText || 'Batal';
      const confirmClass = options.confirmClass || 'btn-danger';
      
      const icons = { warning: 'alert-triangle', danger: 'shield-alert', info: 'info', question: 'help-circle' };
      
      modal.innerHTML = `
        <div class="custom-confirm">
          <div class="custom-confirm-icon ${type}"><i data-lucide="${icons[type]}" class="w-8 h-8"></i></div>
          <div class="custom-confirm-message">${message}</div>
          <div class="custom-confirm-actions">
            <button class="custom-confirm-btn btn-cancel">${cancelText}</button>
            <button class="custom-confirm-btn ${confirmClass}">${confirmText}</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      if (typeof lucide !== 'undefined') lucide.createIcons();
      
      setTimeout(() => modal.classList.add('show'), 10);
      
      modal.querySelector('.btn-cancel').addEventListener('click', () => { this.hide(modal); resolve(false); });
      modal.querySelector(`.${confirmClass}`).addEventListener('click', () => { this.hide(modal); resolve(true); });
      modal.addEventListener('click', (e) => { if (e.target === modal) { this.hide(modal); resolve(false); } });
      
      const escHandler = (e) => {
        if (e.key === 'Escape') { this.hide(modal); document.removeEventListener('keydown', escHandler); resolve(false); }
      };
      document.addEventListener('keydown', escHandler);
    });
  },
  
  hide(modal) {
    modal.classList.remove('show');
    modal.classList.add('hide');
    setTimeout(() => modal.remove(), 300);
  }
};

// ========================================
// LOGIN MODAL
// ========================================
function renderLoginModal() {
  return `
    <div class="login-overlay" id="loginOverlay">
      <div class="login-card" role="dialog" aria-modal="true">
        <!-- Header -->
        <div class="login-header">
          <button class="login-close-btn" id="loginCloseBtn" aria-label="Tutup">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

                    <!-- LOGO DIPERBAIKI: Menggunakan struktur dan efek yang sama dengan header -->
          <div class="relative group mx-auto mb-5 w-28 h-14">
            <!-- Efek Ping (Background Blur) -->
            <div class="absolute inset-0 bg-teal-400 rounded-xl animate-ping opacity-20"></div>
            
            <!-- Kotak Logo -->
            <div class="relative w-full h-full bg-white rounded-xl flex items-center justify-center shadow-lg border border-teal-200 z-10 overflow-hidden">
              <img src="asset/logo-rptra.png" alt="Logo RPTRA" class="w-full h-full object-contain p-1" />
            </div>

            <!-- Titik-titik Warna -->
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
              <div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-sm border border-teal-600"></div>
              <div class="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-75 shadow-sm border border-teal-600"></div>
              <div class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse delay-150 shadow-sm border border-teal-600"></div>
            </div>
          </div>

          <h2 class="login-title">Selamat Datang</h2>
          <p class="login-subtitle">Masuk ke akun GrossMart Anda</p>
        </div>

        <!-- Body -->
        <div class="login-body">
          <div class="login-error" id="loginError">
            <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0"></i>
            <span id="loginErrorMsg">Username atau password salah</span>
          </div>

          <form id="loginForm" autocomplete="on" novalidate>
            <!-- Username -->
            <div class="login-input-group">
              <label class="login-input-label" for="loginUsername">Username</label>
              <div class="login-input-wrapper">
                <i data-lucide="user" class="login-input-icon"></i>
                <input
                  type="text"
                  id="loginUsername"
                  class="login-input"
                  placeholder="Masukkan username"
                  autocomplete="username"
                  required
                />
              </div>
            </div>

            <!-- Password -->
            <div class="login-input-group">
              <label class="login-input-label" for="loginPassword">Password</label>
              <div class="login-input-wrapper">
                <i data-lucide="lock" class="login-input-icon"></i>
                <input
                  type="password"
                  id="loginPassword"
                  class="login-input"
                  placeholder="Masukkan password"
                  autocomplete="current-password"
                  required
                />
                <button type="button" class="login-toggle-pwd" id="togglePwdBtn" aria-label="Tampilkan password">
                  <i data-lucide="eye" id="togglePwdIcon"></i>
                </button>
              </div>
            </div>

            <!-- Options -->
            <div class="login-options">
              <label class="login-remember">
                <input type="checkbox" id="loginRemember" />
                <span>Ingat saya</span>
              </label>
              <a href="#" class="login-forgot" onclick="Notification.info('Hubungi administrator untuk reset password.', { duration: 3000 }); return false;">Lupa password ?</a>
            </div>

            <!-- Submit -->
            <button type="submit" class="login-submit-btn" id="loginSubmitBtn">
              <span id="loginBtnText">Masuk</span>
            </button>
          </form>
        </div>

        <!-- Footer -->
        <div class="login-footer">
          <strong>Demo:</strong> admin / admin123 &nbsp;•&nbsp; kasir / kasir123
        </div>
      </div>
    </div>
  `;
}

function openLoginModal() {
  // Jika sudah login, tampilkan dropdown user, bukan modal login
  if (authState.isLoggedIn) {
    toggleUserDropdown();
    return;
  }

  let overlay = document.getElementById('loginOverlay');
  if (!overlay) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = renderLoginModal();
    document.body.appendChild(wrapper.firstElementChild);
    overlay = document.getElementById('loginOverlay');
  }

  overlay.classList.add('active');
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';

  // Reset form state
  const form = document.getElementById('loginForm');
  if (form) form.reset();
  hideLoginError();

  // Focus ke username
  setTimeout(() => {
    document.getElementById('loginUsername')?.focus();
  }, 300);

  setupLoginEventListeners();
}

function showLoginScreen() {
  isLoginScreenMode = true;
  
  let overlay = document.getElementById('loginOverlay');
  if (!overlay) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = renderLoginModal();
    document.body.appendChild(wrapper.firstElementChild);
    overlay = document.getElementById('loginOverlay');
  }
  
  overlay.classList.add('active');
  
  // Sembunyikan tombol close (X) karena ini halaman login wajib
  const closeBtn = document.getElementById('loginCloseBtn');
  if (closeBtn) closeBtn.style.display = 'none';
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';
  
  // Reset form state
  const form = document.getElementById('loginForm');
  if (form) form.reset();
  hideLoginError();
  
  // Focus ke username
  setTimeout(() => {
    document.getElementById('loginUsername')?.focus();
  }, 300);
  
  setupLoginEventListeners();
}

function closeLoginModal() {
  // 🚫 Cegah penutupan jika dalam mode halaman login wajib
  if (isLoginScreenMode) return;
  
  const overlay = document.getElementById('loginOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.remove();
    }, 300);
  }
  document.body.style.overflow = '';
}

function setupLoginEventListeners() {
  const form = document.getElementById('loginForm');
  const closeBtn = document.getElementById('loginCloseBtn');
  const overlay = document.getElementById('loginOverlay');
  const toggleBtn = document.getElementById('togglePwdBtn');

  if (form) form.addEventListener('submit', handleLoginSubmit);
  if (toggleBtn) toggleBtn.addEventListener('click', togglePasswordVisibility);

  // ✅ Hanya tambahkan event close jika BUKAN mode halaman login wajib
  if (!isLoginScreenMode) {
    if (closeBtn) closeBtn.addEventListener('click', closeLoginModal);
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLoginModal();
      });
    }
    // ESC untuk menutup
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeLoginModal();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }
}

function togglePasswordVisibility() {
  const pwdInput = document.getElementById('loginPassword');
  const icon = document.getElementById('togglePwdIcon');
  if (!pwdInput || !icon) return;

  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    icon.setAttribute('data-lucide', 'eye-off');
  } else {
    pwdInput.type = 'password';
    icon.setAttribute('data-lucide', 'eye');
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function showLoginError(message) {
  const errorBox = document.getElementById('loginError');
  const errorMsg = document.getElementById('loginErrorMsg');
  if (errorBox && errorMsg) {
    errorMsg.textContent = message;
    errorBox.classList.add('show');
  }
}

function hideLoginError() {
  const errorBox = document.getElementById('loginError');
  if (errorBox) errorBox.classList.remove('show');
}

function handleLoginSubmit(e) {
  e.preventDefault();
  hideLoginError();

  const usernameInput = document.getElementById('loginUsername');
  const passwordInput = document.getElementById('loginPassword');
  const rememberInput = document.getElementById('loginRemember');
  const submitBtn = document.getElementById('loginSubmitBtn');
  const btnText = document.getElementById('loginBtnText');

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  // Validasi client-side
  if (!username || !password) {
    showLoginError('Username dan password wajib diisi');
    return;
  }

  // Loading state
  submitBtn.disabled = true;
  btnText.innerHTML = '<span class="spinner"></span> Memverifikasi...';

  // Simulasi delay API (800ms)
  setTimeout(() => {
    const user = mockUsers.find(u => u.username === username && u.password === password);

    if (user) {
      // Login berhasil
      authState.isLoggedIn = true;
      authState.user = { username: user.username, nama: user.nama, role: user.role };
      authState.rememberMe = rememberInput.checked;

            // Selalu simpan sesi (otomatis memilih localStorage atau sessionStorage)
      saveAuthSession();

      showLoginSuccess();

      setTimeout(() => {
        // ✅ Reset flag mode login screen
        isLoginScreenMode = false;
        closeLoginModal();
        renderUserMenu();
        renderBottomNav(); // ✅ Refresh bottom nav untuk tampilkan/sembunyikan tab Master Data
        switchTab('dashboard'); // ✅ Langsung ke dashboard setelah login
        showCartFeedback(`👋 Halo, ${user.nama}!`);
      }, 1200);
    } else {
      // Login gagal
      showLoginError('Username atau password salah. Silakan coba lagi.');
      submitBtn.disabled = false;
      btnText.textContent = 'Masuk';
      passwordInput.value = '';
      passwordInput.focus();
    }
  }, 800);
}

function showLoginSuccess() {
  const body = document.querySelector('.login-body');
  if (!body) return;

  body.innerHTML = `
    <div class="login-success">
      <div class="login-success-icon">
        <i data-lucide="check-circle-2" class="w-10 h-10"></i>
      </div>
      <h3>Login Berhasil!</h3>
      <p>Mengalihkan ke dashboard...</p>
    </div>
  `;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========================================
// SETTINGS MODAL
// ========================================
function showSettingsModal() {
  // 🔒 Proteksi: Hanya Admin
  if (!checkAdminAccess()) {
    Notification.error('Fitur Pengaturan hanya dapat diakses oleh Administrator.', {
  duration: 4000
});
    return;
  }

  closeUserDropdown();
  loadSettingsFromStorage();

  const sections = [
    { id: 'store', label: 'Informasi Toko', icon: 'store', color: '#0d9488' },
    { id: 'appearance', label: 'Tampilan', icon: 'palette', color: '#8b5cf6' },
    { id: 'transaction', label: 'Transaksi & Pajak', icon: 'receipt', color: '#2563eb' },
    { id: 'printing', label: 'Pencetakan', icon: 'printer', color: '#d97706' },
    { id: 'notifications', label: 'Notifikasi', icon: 'bell', color: '#dc2626' },
    { id: 'backup', label: 'Backup & Data', icon: 'database', color: '#059669' },
    { id: 'about', label: 'Tentang', icon: 'info', color: '#64748b' },
  ];

  const settingsHtml = `
    <div class="settings-modal-overlay active" id="settingsModalOverlay">
      <div class="settings-modal">
        
        <!-- Sidebar -->
        <aside class="settings-sidebar">
          <div class="settings-sidebar-header">
            <div class="settings-sidebar-icon">
              <i data-lucide="settings" class="w-6 h-6"></i>
            </div>
            <div>
              <h2>Pengaturan</h2>
              <p>Konfigurasi Sistem</p>
            </div>
          </div>
          
          <nav class="settings-nav">
            ${sections.map(s => `
              <button class="settings-nav-item ${settingsState.activeSection === s.id ? 'active' : ''}" 
                      data-section="${s.id}"
                      style="--nav-color: ${s.color}">
                <i data-lucide="${s.icon}" class="w-4 h-4"></i>
                <span>${s.label}</span>
              </button>
            `).join('')}
          </nav>
          
          <div class="settings-sidebar-footer">
            <button class="settings-close-sidebar-btn" id="settingsCloseBtn">
              <i data-lucide="x" class="w-4 h-4"></i>
              <span>Tutup</span>
            </button>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="settings-main">
          <div class="settings-main-header">
            <div>
              <h2 id="settingsSectionTitle">${getSectionTitle(settingsState.activeSection)}</h2>
              <p id="settingsSectionDesc">${getSectionDesc(settingsState.activeSection)}</p>
            </div>
            <button class="settings-mobile-close" id="settingsMobileCloseBtn">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
          
          <div class="settings-content" id="settingsContent">
            ${renderSettingsSection(settingsState.activeSection)}
          </div>
          
          <div class="settings-footer">
            <button class="settings-btn settings-btn-ghost" id="settingsResetBtn">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              Reset Default
            </button>
            <button class="settings-btn settings-btn-primary" id="settingsSaveBtn">
              <i data-lucide="save" class="w-4 h-4"></i>
              Simpan Perubahan
            </button>
          </div>
        </main>

      </div>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = settingsHtml;
  document.body.appendChild(wrapper.firstElementChild);

  if (typeof lucide !== 'undefined') lucide.createIcons();
  setupSettingsEventListeners();
}

function getSectionTitle(sectionId) {
  const titles = {
    store: 'Informasi Toko',
    appearance: 'Tampilan & Bahasa',
    transaction: 'Transaksi & Pajak',
    printing: 'Pengaturan Pencetakan',
    notifications: 'Notifikasi',
    backup: 'Backup & Data',
    about: 'Tentang Aplikasi'
  };
  return titles[sectionId] || 'Pengaturan';
}

function getSectionDesc(sectionId) {
  const descs = {
    store: 'Kelola informasi dasar toko Anda',
    appearance: 'Sesuaikan tampilan aplikasi',
    transaction: 'Atur format transaksi, pajak, dan diskon',
    printing: 'Konfigurasi struk dan pencetakan',
    notifications: 'Kelola preferensi notifikasi sistem',
    backup: 'Cadangkan dan pulihkan data',
    about: 'Informasi versi dan lisensi aplikasi'
  };
  return descs[sectionId] || '';
}

function renderSettingsSection(sectionId) {
  const d = settingsState.data;
  
  const sections = {
    store: `
      <div class="settings-form-grid">
        <div class="settings-form-group full">
          <label>Nama Toko <span class="required">*</span></label>
          <input type="text" id="setStoreName" value="${d.storeName}" placeholder="Nama toko Anda" />
        </div>
        <div class="settings-form-group full">
          <label>Alamat Lengkap</label>
          <textarea id="setStoreAddress" rows="2" placeholder="Alamat toko">${d.storeAddress}</textarea>
        </div>
        <div class="settings-form-group">
          <label>Nomor Telepon</label>
          <input type="text" id="setStorePhone" value="${d.storePhone}" placeholder="021-xxxxxxx" />
        </div>
        <div class="settings-form-group">
          <label>Email</label>
          <input type="email" id="setStoreEmail" value="${d.storeEmail}" placeholder="email@toko.com" />
        </div>
        <div class="settings-form-group full">
          <label>Logo Toko</label>
          <div class="settings-logo-upload">
            <div class="settings-logo-preview">
              <img src="${d.storeLogo}" alt="Logo" onerror="this.src='asset/logo-rptra.png'" />
            </div>
            <div class="settings-logo-info">
              <input type="text" id="setStoreLogo" value="${d.storeLogo}" placeholder="path/ke/logo.png" />
              <small>Format: PNG, JPG (Maks. 2MB)</small>
            </div>
          </div>
        </div>
        <div class="settings-form-group full">
          <label>Footer Struk</label>
          <textarea id="setStoreFooter" rows="2" placeholder="Pesan di bagian bawah struk">${d.storeFooter}</textarea>
        </div>
      </div>
    `,
    
    appearance: `
      <div class="settings-section-block">
        <h3>Tema Aplikasi</h3>
        <div class="settings-theme-grid">
          ${['light', 'dark', 'auto'].map(t => `
            <label class="settings-theme-option ${d.theme === t ? 'selected' : ''}">
              <input type="radio" name="theme" value="${t}" ${d.theme === t ? 'checked' : ''} />
              <div class="theme-preview theme-${t}">
                <div class="theme-preview-header"></div>
                <div class="theme-preview-body">
                  <div class="theme-preview-line"></div>
                  <div class="theme-preview-line short"></div>
                </div>
              </div>
              <span>${t === 'light' ? 'Terang' : t === 'dark' ? 'Gelap' : 'Otomatis'}</span>
            </label>
          `).join('')}
        </div>
      </div>
      
      <div class="settings-section-block">
        <h3>Bahasa</h3>
        <select id="setLanguage" class="settings-select">
          <option value="id" ${d.language === 'id' ? 'selected' : ''}>🇮🇩 Bahasa Indonesia</option>
          <option value="en" ${d.language === 'en' ? 'selected' : ''}>🇬🇧 English</option>
        </select>
      </div>
      
      <div class="settings-section-block">
        <h3>Ukuran Font</h3>
        <div class="settings-radio-group">
          ${['small', 'medium', 'large'].map(s => `
            <label class="settings-radio-item">
              <input type="radio" name="fontSize" value="${s}" ${d.fontSize === s ? 'checked' : ''} />
              <span>${s === 'small' ? 'Kecil' : s === 'medium' ? 'Sedang' : 'Besar'}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `,
    
    transaction: `
      <div class="settings-section-block">
        <h3>Format Transaksi</h3>
        <div class="settings-form-grid">
          <div class="settings-form-group">
            <label>Mata Uang</label>
            <select id="setCurrency" class="settings-select">
              <option value="IDR" ${d.currency === 'IDR' ? 'selected' : ''}>IDR - Rupiah (Rp)</option>
              <option value="USD" ${d.currency === 'USD' ? 'selected' : ''}>USD - Dollar ($)</option>
            </select>
          </div>
          <div class="settings-form-group">
            <label>Format Tanggal</label>
            <select id="setDateFormat" class="settings-select">
              <option value="DD/MM/YYYY" ${d.dateFormat === 'DD/MM/YYYY' ? 'selected' : ''}>DD/MM/YYYY</option>
              <option value="MM/DD/YYYY" ${d.dateFormat === 'MM/DD/YYYY' ? 'selected' : ''}>MM/DD/YYYY</option>
              <option value="YYYY-MM-DD" ${d.dateFormat === 'YYYY-MM-DD' ? 'selected' : ''}>YYYY-MM-DD</option>
            </select>
          </div>
          <div class="settings-form-group full">
            <label>Prefix Nomor Transaksi</label>
            <input type="text" id="setTransactionPrefix" value="${d.transactionPrefix}" placeholder="TRX" />
            <small>Contoh: ${d.transactionPrefix}-20250115-001</small>
          </div>
        </div>
      </div>
      
      <div class="settings-section-block">
        <h3>Pajak & Diskon</h3>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Aktifkan Pajak (PPN)</div>
            <div class="toggle-row-desc">Terapkan pajak pada setiap transaksi</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setTaxEnabled" ${d.taxEnabled ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="settings-form-grid" style="margin-top: 12px;">
          <div class="settings-form-group">
            <label>Tarif Pajak (%)</label>
            <input type="number" id="setTaxRate" value="${d.taxRate}" min="0" max="100" />
          </div>
          <div class="settings-form-group">
            <label>Diskon Default (%)</label>
            <input type="number" id="setDefaultDiscount" value="${d.defaultDiscount}" min="0" max="100" />
          </div>
        </div>
      </div>
    `,
    
    printing: `
      <div class="settings-section-block">
        <h3>Ukuran Kertas Struk</h3>
        <div class="settings-radio-group">
          ${['58mm', '80mm', 'A4'].map(p => `
            <label class="settings-radio-item">
              <input type="radio" name="paperSize" value="${p}" ${d.paperSize === p ? 'checked' : ''} />
              <span>${p}</span>
            </label>
          `).join('')}
        </div>
      </div>
      
      <div class="settings-section-block">
        <h3>Opsi Pencetakan</h3>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Auto-Print Struk</div>
            <div class="toggle-row-desc">Otomatis cetak struk setelah transaksi</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setAutoPrint" ${d.autoPrint ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Tampilkan Logo di Struk</div>
            <div class="toggle-row-desc">Cetak logo toko di bagian atas struk</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setShowLogo" ${d.showLogoOnReceipt ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Tampilkan Footer di Struk</div>
            <div class="toggle-row-desc">Cetak pesan footer di bagian bawah struk</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setShowFooter" ${d.showFooterOnReceipt ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      
      <div class="settings-section-block">
        <h3>Preview Struk</h3>
        <div class="settings-receipt-preview">
          <div class="receipt-header">
            <strong>${d.storeName}</strong>
            <small>${d.storeAddress}</small>
            <small>Telp: ${d.storePhone}</small>
          </div>
          <div class="receipt-divider"></div>
          <div class="receipt-item">
            <span>Contoh Produk</span>
            <span>${formatRp(10000)}</span>
          </div>
          <div class="receipt-divider"></div>
          <div class="receipt-total">
            <span>TOTAL</span>
            <span>${formatRp(10000)}</span>
          </div>
          <div class="receipt-footer">
            <small>${d.storeFooter}</small>
          </div>
        </div>
      </div>
    `,
    
    notifications: `
      <div class="settings-section-block">
        <h3>Notifikasi Sistem</h3>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Peringatan Stok Rendah</div>
            <div class="toggle-row-desc">Tampilkan notifikasi saat stok barang menipis</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setNotifLowStock" ${d.notifLowStock ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Notifikasi Transaksi</div>
            <div class="toggle-row-desc">Tampilkan notifikasi saat ada transaksi baru</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setNotifTransaction" ${d.notifTransaction ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Laporan Harian</div>
            <div class="toggle-row-desc">Kirim ringkasan laporan setiap akhir hari</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setNotifDailyReport" ${d.notifDailyReport ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Suara Notifikasi</div>
            <div class="toggle-row-desc">Putar suara saat ada notifikasi masuk</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setNotifSound" ${d.notifSound ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    `,
    
    backup: `
      <div class="settings-section-block">
        <h3>Backup Otomatis</h3>
        <div class="settings-toggle-row">
          <div>
            <div class="toggle-row-title">Aktifkan Auto-Backup</div>
            <div class="toggle-row-desc">Backup data secara otomatis setiap hari</div>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="setAutoBackup" ${d.autoBackup ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="settings-info-box">
          <i data-lucide="info" class="w-4 h-4"></i>
          <div>
            <strong>Backup Terakhir:</strong> ${d.lastBackup}
          </div>
        </div>
      </div>
      
      <div class="settings-section-block">
        <h3>Aksi Data</h3>
        <div class="settings-action-grid">
          <button class="settings-action-btn" onclick="exportData()">
            <div class="action-icon" style="background: #dbeafe; color: #2563eb;">
              <i data-lucide="download" class="w-5 h-5"></i>
            </div>
            <div>
              <strong>Export Data</strong>
              <small>Unduh semua data dalam format JSON</small>
            </div>
          </button>
          <button class="settings-action-btn" onclick="importData()">
            <div class="action-icon" style="background: #d1fae5; color: #059669;">
              <i data-lucide="upload" class="w-5 h-5"></i>
            </div>
            <div>
              <strong>Import Data</strong>
              <small>Muat data dari file backup</small>
            </div>
          </button>
          <button class="settings-action-btn danger" onclick="resetAllData()">
            <div class="action-icon" style="background: #fee2e2; color: #dc2626;">
              <i data-lucide="trash-2" class="w-5 h-5"></i>
            </div>
            <div>
              <strong>Reset Semua Data</strong>
              <small>Hapus semua data dan kembalikan ke default</small>
            </div>
          </button>
        </div>
      </div>
    `,
    
    about: `
      <div class="settings-about-card">
        <div class="about-logo">
          <img src="asset/logo-rptra.png" alt="Logo" onerror="this.style.display='none'" />
        </div>
        <h2>GrossMart</h2>
        <p class="about-version">Versi 1.0.0 (Build 2025.01)</p>
        <p class="about-desc">Sistem Informasi Pengelolaan Toko Modern</p>
      </div>
      
      <div class="settings-section-block">
        <h3>Informasi Aplikasi</h3>
        <div class="settings-info-list">
          <div class="info-row">
            <span>Versi</span>
            <strong>1.0.0</strong>
          </div>
          <div class="info-row">
            <span>Build Date</span>
            <strong>15 Januari 2025</strong>
          </div>
          <div class="info-row">
            <span>Developer</span>
            <strong>GrossMart Team</strong>
          </div>
          <div class="info-row">
            <span>Lisensi</span>
            <strong>Proprietary</strong>
          </div>
          <div class="info-row">
            <span>Teknologi</span>
            <strong>HTML, CSS, JavaScript</strong>
          </div>
        </div>
      </div>
      
      <div class="settings-section-block">
        <h3>Cek Pembaruan</h3>
        <button class="settings-btn settings-btn-primary" onclick="checkUpdate()">
          <i data-lucide="refresh-cw" class="w-4 h-4"></i>
          Cek Versi Terbaru
        </button>
      </div>
    `
  };
  
  return sections[sectionId] || '';
}

function setupSettingsEventListeners() {
  // Close buttons
  document.getElementById('settingsCloseBtn')?.addEventListener('click', closeSettingsModal);
  document.getElementById('settingsMobileCloseBtn')?.addEventListener('click', closeSettingsModal);
  
  // Click outside
  document.getElementById('settingsModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'settingsModalOverlay') closeSettingsModal();
  });
  
  // ESC
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeSettingsModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
  
  // Nav items
  document.querySelectorAll('.settings-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.dataset.section;
      switchSettingsSection(sectionId);
    });
  });
  
  // Save button
  document.getElementById('settingsSaveBtn')?.addEventListener('click', saveSettings);
  
  // Reset button
  document.getElementById('settingsResetBtn')?.addEventListener('click', resetSettings);
}

function switchSettingsSection(sectionId) {
  settingsState.activeSection = sectionId;
  
  // Update nav
  document.querySelectorAll('.settings-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === sectionId);
  });
  
  // Update header
  document.getElementById('settingsSectionTitle').textContent = getSectionTitle(sectionId);
  document.getElementById('settingsSectionDesc').textContent = getSectionDesc(sectionId);
  
  // Update content with animation
  const content = document.getElementById('settingsContent');
  content.style.opacity = '0';
  content.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    content.innerHTML = renderSettingsSection(sectionId);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    content.style.transition = 'all 0.3s ease';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }, 150);
}

function saveSettings() {
  const section = settingsState.activeSection;
  const d = settingsState.data;
  
  // Collect values based on active section
  if (section === 'store') {
    d.storeName = document.getElementById('setStoreName')?.value || d.storeName;
    d.storeAddress = document.getElementById('setStoreAddress')?.value || d.storeAddress;
    d.storePhone = document.getElementById('setStorePhone')?.value || d.storePhone;
    d.storeEmail = document.getElementById('setStoreEmail')?.value || d.storeEmail;
    d.storeLogo = document.getElementById('setStoreLogo')?.value || d.storeLogo;
    d.storeFooter = document.getElementById('setStoreFooter')?.value || d.storeFooter;
  } else if (section === 'appearance') {
    d.theme = document.querySelector('input[name="theme"]:checked')?.value || d.theme;
    d.language = document.getElementById('setLanguage')?.value || d.language;
    d.fontSize = document.querySelector('input[name="fontSize"]:checked')?.value || d.fontSize;
  } else if (section === 'transaction') {
    d.currency = document.getElementById('setCurrency')?.value || d.currency;
    d.dateFormat = document.getElementById('setDateFormat')?.value || d.dateFormat;
    d.transactionPrefix = document.getElementById('setTransactionPrefix')?.value || d.transactionPrefix;
    d.taxEnabled = document.getElementById('setTaxEnabled')?.checked ?? d.taxEnabled;
    d.taxRate = parseInt(document.getElementById('setTaxRate')?.value) || d.taxRate;
    d.defaultDiscount = parseInt(document.getElementById('setDefaultDiscount')?.value) || d.defaultDiscount;
  } else if (section === 'printing') {
    d.paperSize = document.querySelector('input[name="paperSize"]:checked')?.value || d.paperSize;
    d.autoPrint = document.getElementById('setAutoPrint')?.checked ?? d.autoPrint;
    d.showLogoOnReceipt = document.getElementById('setShowLogo')?.checked ?? d.showLogoOnReceipt;
    d.showFooterOnReceipt = document.getElementById('setShowFooter')?.checked ?? d.showFooterOnReceipt;
  } else if (section === 'notifications') {
    d.notifLowStock = document.getElementById('setNotifLowStock')?.checked ?? d.notifLowStock;
    d.notifTransaction = document.getElementById('setNotifTransaction')?.checked ?? d.notifTransaction;
    d.notifDailyReport = document.getElementById('setNotifDailyReport')?.checked ?? d.notifDailyReport;
    d.notifSound = document.getElementById('setNotifSound')?.checked ?? d.notifSound;
  } else if (section === 'backup') {
    d.autoBackup = document.getElementById('setAutoBackup')?.checked ?? d.autoBackup;
  }
  
  if (saveSettingsToStorage()) {
    showCartFeedback('✅ Pengaturan berhasil disimpan');
  } else {
    showCartFeedback('⚠️ Gagal menyimpan pengaturan');
  }
}

async function resetSettings() {
  if (!await CustomConfirm.show('Kembalikan semua pengaturan ke nilai default? Perubahan yang belum disimpan akan hilang.', {
    type: 'warning',
    confirmText: 'Ya, Reset',
    cancelText: 'Batal',
    confirmClass: 'btn-primary'
    })) return;

    localStorage.removeItem('grossmart_settings');
    settingsState.data = {
    storeName: 'GrossMart',
    storeAddress: 'Jl. Merdeka No. 123, Jakarta Pusat',
    storePhone: '021-12345678',
    storeEmail: 'info@grossmart.com',
    storeLogo: 'asset/logo-rptra.png',
    storeFooter: 'Terima kasih atas kunjungan Anda!',
    theme: 'light',
    language: 'id',
    fontSize: 'medium',
    currency: 'IDR',
    taxEnabled: true,
    taxRate: 10,
    defaultDiscount: 0,
    dateFormat: 'DD/MM/YYYY',
    transactionPrefix: 'TRX',
    paperSize: '58mm',
    autoPrint: false,
    showLogoOnReceipt: true,
    showFooterOnReceipt: true,
    notifLowStock: true,
    notifTransaction: true,
    notifDailyReport: false,
    notifSound: true,
    lastBackup: '2025-01-15 09:30',
    autoBackup: true,
  };
  
  // Re-render current section
  document.getElementById('settingsContent').innerHTML = renderSettingsSection(settingsState.activeSection);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  showCartFeedback('🔄 Pengaturan dikembalikan ke default');
}

function closeSettingsModal() {
  const overlay = document.getElementById('settingsModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
}

// Helper functions for backup
function exportData() {
  const data = {
    settings: settingsState.data,
    products: mockProducts,
    sales: mockPenjualan,
    cash: mockKasHarian,
    exportDate: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `grossmart-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  showCartFeedback('✅ Data berhasil di-export');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.settings) settingsState.data = data.settings;
        showCartFeedback('✅ Data berhasil di-import');
      } catch (err) {
        showCartFeedback('⚠️ File tidak valid');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

async function resetAllData() {
  if (!await CustomConfirm.show('PERINGATAN! Semua data akan dihapus permanen:\n• Data produk\n• Data transaksi\n• Data kas\n• Pengaturan\n\nTindakan ini tidak dapat dibatalkan!', {
    type: 'danger',
    confirmText: 'Hapus Semua',
    cancelText: 'Batal',
    confirmClass: 'btn-danger'
  })) return;

  if (!await CustomConfirm.show('Yakin 100% ingin melanjutkan? Semua data akan hilang!', {
    type: 'danger',
    confirmText: 'Ya, Hapus!',
    cancelText: 'Batal',
    confirmClass: 'btn-danger'
  })) return;

  localStorage.clear();
  sessionStorage.clear();
  location.reload();
}

function checkUpdate() {
  showCartFeedback('✅ Anda menggunakan versi terbaru (1.0.0)');
}

// ========================================
// PROFILE MODAL
// ========================================
function showProfileModal() {
  if (!authState.isLoggedIn || !authState.user) {
    openLoginModal();
    return;
  }

  closeUserDropdown();

  const user = authState.user;
  const initial = user.nama.charAt(0).toUpperCase();
  const joinDate = new Date().toLocaleDateString('id-ID', { 
    day: 'numeric', month: 'long', year: 'numeric' 
  });

  const profileHtml = `
    <div class="profile-modal-overlay active" id="profileModalOverlay">
      <div class="profile-modal">
        
        <!-- Header dengan Cover & Avatar -->
        <div class="profile-header">
          <div class="profile-cover"></div>
          <button class="profile-close-btn" id="profileCloseBtn" aria-label="Tutup">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
          
          <div class="profile-avatar-section">
            <div class="profile-avatar-large">
              <div class="profile-avatar-circle-large">${initial}</div>
              <div class="profile-avatar-badge">
                <i data-lucide="${user.role === 'Admin' ? 'shield-check' : user.role === 'Kasir' ? 'shopping-bag' : 'eye'}"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Body -->
        <div class="profile-body">
          
          <!-- Info Utama -->
          <div class="profile-main-info">
            <h2 class="profile-name">${user.nama}</h2>
            <div class="profile-role-badge">
              <i data-lucide="${user.role === 'Admin' ? 'shield-check' : user.role === 'Kasir' ? 'shopping-bag' : 'eye'}" class="w-3.5 h-3.5"></i>
              ${user.role}
            </div>
            <p class="profile-username">@${user.username}</p>
            <p class="profile-join-date">
              <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
              Bergabung sejak ${joinDate}
            </p>
          </div>

          <!-- Tab Navigation -->
          <div class="profile-tabs">
            <button class="profile-tab active" data-tab="info">
              <i data-lucide="user" class="w-4 h-4"></i>
              <span>Informasi</span>
            </button>
            <button class="profile-tab" data-tab="security">
              <i data-lucide="lock" class="w-4 h-4"></i>
              <span>Keamanan</span>
            </button>
            <button class="profile-tab" data-tab="preferences">
              <i data-lucide="settings" class="w-4 h-4"></i>
              <span>Preferensi</span>
            </button>
          </div>

          <!-- Tab Content: Informasi -->
          <div class="profile-tab-content active" id="profileTabInfo">
            <div class="profile-section">
              <h3 class="profile-section-title">
                <i data-lucide="info" class="w-4 h-4"></i>
                Informasi Akun
              </h3>
              <div class="profile-info-grid">
                <div class="profile-info-item">
                  <label>Nama Lengkap</label>
                  <div class="profile-info-value">${user.nama}</div>
                </div>
                <div class="profile-info-item">
                  <label>Username</label>
                  <div class="profile-info-value">${user.username}</div>
                </div>
                <div class="profile-info-item">
                  <label>Role / Peran</label>
                  <div class="profile-info-value">
                    <span class="profile-role-tag ${user.role.toLowerCase()}">${user.role}</span>
                  </div>
                </div>
                <div class="profile-info-item">
                  <label>Status Akun</label>
                  <div class="profile-info-value">
                    <span class="profile-status-badge active">
                      <span class="status-dot"></span>
                      Aktif
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="profile-section">
              <h3 class="profile-section-title">
                <i data-lucide="shield" class="w-4 h-4"></i>
                Hak Akses
              </h3>
              <div class="profile-permissions">
                ${getPermissionList(user.role).map(perm => `
                  <div class="permission-item">
                    <div class="permission-icon ${perm.granted ? 'granted' : 'denied'}">
                      <i data-lucide="${perm.granted ? 'check-circle' : 'x-circle'}" class="w-4 h-4"></i>
                    </div>
                    <div class="permission-info">
                      <div class="permission-name">${perm.name}</div>
                      <div class="permission-desc">${perm.description}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Tab Content: Keamanan -->
          <div class="profile-tab-content" id="profileTabSecurity">
            <div class="profile-section">
              <h3 class="profile-section-title">
                <i data-lucide="key" class="w-4 h-4"></i>
                Ubah Password
              </h3>
              <form id="changePasswordForm" class="profile-form">
                <div class="profile-form-group">
                  <label>Password Lama <span class="required">*</span></label>
                  <input type="password" id="oldPassword" placeholder="Masukkan password lama" required />
                </div>
                <div class="profile-form-group">
                  <label>Password Baru <span class="required">*</span></label>
                  <input type="password" id="newPassword" placeholder="Minimal 8 karakter" required />
                  <div class="password-strength" id="passwordStrength"></div>
                </div>
                <div class="profile-form-group">
                  <label>Konfirmasi Password Baru <span class="required">*</span></label>
                  <input type="password" id="confirmPassword" placeholder="Ulangi password baru" required />
                </div>
                <button type="submit" class="profile-btn profile-btn-primary">
                  <i data-lucide="save" class="w-4 h-4"></i>
                  Update Password
                </button>
              </form>
            </div>

            <div class="profile-section">
              <h3 class="profile-section-title">
                <i data-lucide="activity" class="w-4 h-4"></i>
                Aktivitas Login Terakhir
              </h3>
              <div class="profile-activity-list">
                <div class="activity-item">
                  <div class="activity-icon success">
                    <i data-lucide="log-in" class="w-4 h-4"></i>
                  </div>
                  <div class="activity-info">
                    <div class="activity-title">Login berhasil</div>
                    <div class="activity-meta">Hari ini, ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} • Browser saat ini</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon success">
                    <i data-lucide="log-in" class="w-4 h-4"></i>
                  </div>
                  <div class="activity-info">
                    <div class="activity-title">Login berhasil</div>
                    <div class="activity-meta">Kemarin, 09:15 • Chrome di Windows</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab Content: Preferensi -->
          <div class="profile-tab-content" id="profileTabPreferences">
            <div class="profile-section">
              <h3 class="profile-section-title">
                <i data-lucide="bell" class="w-4 h-4"></i>
                Notifikasi
              </h3>
              <div class="profile-preference-list">
                <div class="preference-item">
                  <div class="preference-info">
                    <div class="preference-name">Notifikasi Stok Rendah</div>
                    <div class="preference-desc">Terima peringatan saat stok barang menipis</div>
                  </div>
                  <label class="preference-toggle">
                    <input type="checkbox" checked />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                <div class="preference-item">
                  <div class="preference-info">
                    <div class="preference-name">Notifikasi Transaksi</div>
                    <div class="preference-desc">Terima notifikasi saat ada transaksi baru</div>
                  </div>
                  <label class="preference-toggle">
                    <input type="checkbox" checked />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                <div class="preference-item">
                  <div class="preference-info">
                    <div class="preference-name">Laporan Harian</div>
                    <div class="preference-desc">Kirim ringkasan laporan setiap akhir hari</div>
                  </div>
                  <label class="preference-toggle">
                    <input type="checkbox" />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="profile-section">
              <h3 class="profile-section-title">
                <i data-lucide="palette" class="w-4 h-4"></i>
                Tampilan
              </h3>
              <div class="profile-preference-list">
                <div class="preference-item">
                  <div class="preference-info">
                    <div class="preference-name">Mode Gelap</div>
                    <div class="preference-desc">Aktifkan tema gelap untuk kenyamanan mata</div>
                  </div>
                  <label class="preference-toggle">
                    <input type="checkbox" />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                <div class="preference-item">
                  <div class="preference-info">
                    <div class="preference-name">Animasi</div>
                    <div class="preference-desc">Aktifkan efek animasi pada antarmuka</div>
                  </div>
                  <label class="preference-toggle">
                    <input type="checkbox" checked />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="profile-footer">
          <button class="profile-btn profile-btn-danger" id="profileLogoutBtn">
            <i data-lucide="log-out" class="w-4 h-4"></i>
            Keluar dari Akun
          </button>
        </div>

      </div>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = profileHtml;
  document.body.appendChild(wrapper.firstElementChild);

  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Event Listeners
  setupProfileEventListeners();
}

function getPermissionList(role) {
  const permissions = {
    Admin: [
      { name: 'Kelola Master Data', description: 'Tambah, edit, hapus data barang', granted: true },
      { name: 'Lihat Laporan Keuangan', description: 'Akses laporan penjualan, kas, dan rekap', granted: true },
      { name: 'Kelola Transaksi', description: 'Buat dan kelola transaksi penjualan', granted: true },
      { name: 'Kelola Pengguna', description: 'Tambah dan kelola akun pengguna', granted: true },
      { name: 'Pengaturan Sistem', description: 'Akses konfigurasi aplikasi', granted: true },
    ],
    Kasir: [
      { name: 'Kelola Master Data', description: 'Tambah, edit, hapus data barang', granted: false },
      { name: 'Lihat Laporan Keuangan', description: 'Akses laporan penjualan, kas, dan rekap', granted: true },
      { name: 'Kelola Transaksi', description: 'Buat dan kelola transaksi penjualan', granted: true },
      { name: 'Kelola Pengguna', description: 'Tambah dan kelola akun pengguna', granted: false },
      { name: 'Pengaturan Sistem', description: 'Akses konfigurasi aplikasi', granted: false },
    ],
    Viewer: [
      { name: 'Kelola Master Data', description: 'Tambah, edit, hapus data barang', granted: false },
      { name: 'Lihat Laporan Keuangan', description: 'Akses laporan penjualan, kas, dan rekap', granted: true },
      { name: 'Kelola Transaksi', description: 'Buat dan kelola transaksi penjualan', granted: false },
      { name: 'Kelola Pengguna', description: 'Tambah dan kelola akun pengguna', granted: false },
      { name: 'Pengaturan Sistem', description: 'Akses konfigurasi aplikasi', granted: false },
    ]
  };
  return permissions[role] || permissions.Viewer;
}

function setupProfileEventListeners() {
  // Close button
  document.getElementById('profileCloseBtn')?.addEventListener('click', closeProfileModal);
  
  // Click outside to close
  document.getElementById('profileModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'profileModalOverlay') closeProfileModal();
  });

  // ESC to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeProfileModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);

  // Tab switching
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      switchProfileTab(tabId);
    });
  });

  // Logout button
  document.getElementById('profileLogoutBtn')?.addEventListener('click', () => {
    closeProfileModal();
    setTimeout(() => handleLogout(), 300);
  });

  // Password form
  document.getElementById('changePasswordForm')?.addEventListener('submit', handleChangePassword);
  
  // Password strength indicator
  document.getElementById('newPassword')?.addEventListener('input', (e) => {
    updatePasswordStrength(e.target.value);
  });
}

function switchProfileTab(tabId) {
  // Update tab buttons
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.tab === tabId) tab.classList.add('active');
  });

  // Update tab content
  document.querySelectorAll('.profile-tab-content').forEach(content => {
    content.classList.remove('active');
  });

  const contentMap = {
    'info': 'profileTabInfo',
    'security': 'profileTabSecurity',
    'preferences': 'profileTabPreferences'
  };

  const contentId = contentMap[tabId];
  if (contentId) {
    document.getElementById(contentId)?.classList.add('active');
  }
}

function closeProfileModal() {
  const overlay = document.getElementById('profileModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
}

function handleChangePassword(e) {
  e.preventDefault();
  
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validasi
  if (!oldPassword || !newPassword || !confirmPassword) {
    showCartFeedback('⚠️ Semua field wajib diisi');
    return;
  }

  if (newPassword.length < 8) {
    showCartFeedback('⚠️ Password baru minimal 8 karakter');
    return;
  }

  if (newPassword !== confirmPassword) {
    showCartFeedback('⚠️ Konfirmasi password tidak cocok');
    return;
  }

  // Simulasi update password (dalam aplikasi nyata, ini akan memanggil API)
  showCartFeedback('✅ Password berhasil diubah');
  
  // Reset form
  document.getElementById('changePasswordForm').reset();
  document.getElementById('passwordStrength').innerHTML = '';
}

function updatePasswordStrength(password) {
  const strengthBar = document.getElementById('passwordStrength');
  if (!strengthBar) return;

  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;

  const strengthLevels = [
    { label: 'Sangat Lemah', color: '#dc2626', width: '25%' },
    { label: 'Lemah', color: '#f59e0b', width: '50%' },
    { label: 'Sedang', color: '#eab308', width: '75%' },
    { label: 'Kuat', color: '#10b981', width: '100%' }
  ];

  if (password.length === 0) {
    strengthBar.innerHTML = '';
    return;
  }

  const level = strengthLevels[Math.max(0, strength - 1)] || strengthLevels[0];
  
  strengthBar.innerHTML = `
    <div class="password-strength-bar">
      <div class="password-strength-fill" style="width: ${level.width}; background: ${level.color};"></div>
    </div>
    <span class="password-strength-label" style="color: ${level.color};">${level.label}</span>
  `;
}

// ========================================
// USER MENU (Avatar di Header)
// ========================================
async function handleLogout() {
  if (!await CustomConfirm.show('Yakin ingin keluar dari akun?', {
    type: 'question',
    confirmText: 'Keluar',
    cancelText: 'Batal',
    confirmClass: 'btn-danger'
  })) return;

  authState.isLoggedIn = false;
  authState.user = null;
  authState.rememberMe = false;
  clearAuthSession();

  closeUserDropdown();
  renderUserMenu();
  renderBottomNav();
  switchTab('penjualan');
  Notification.info('Anda telah berhasil keluar', { duration: 2500 });
  showLoginScreen();
}

function renderUserMenu() {
  const userMenuContainer = document.getElementById('userMenuContainer');
  if (!userMenuContainer) return;

  if (authState.isLoggedIn && authState.user) {
    const initial = authState.user.nama.charAt(0).toUpperCase();
    userMenuContainer.innerHTML = `
      <div class="user-menu-wrapper">
        <button class="user-avatar-btn" id="userAvatarBtn" aria-label="Menu Pengguna">
          <div class="user-avatar-circle">${initial}</div>
          <span class="user-avatar-name hidden sm:inline">${authState.user.nama}</span>
          <i data-lucide="chevron-down"></i>
        </button>
        <div class="user-dropdown" id="userDropdown">
          <div class="user-dropdown-header">
            <div class="user-dropdown-name">${authState.user.nama}</div>
            <div class="user-dropdown-role">${authState.user.role}</div>
          </div>

          <button class="user-dropdown-item" onclick="showProfileModal()">
            <i data-lucide="user"></i> Profil Saya
          </button>
          
          <button class="user-dropdown-item" onclick="showSettingsModal()">
            <i data-lucide="settings"></i> Pengaturan
          </button>

          <button class="user-dropdown-item danger" id="logoutBtn">
            <i data-lucide="log-out"></i> Keluar
          </button>
        </div>
      </div>
    `;
  } else {
    userMenuContainer.innerHTML = `
    <button class="p-1 bg-teal-600 hover:bg-teal-500 rounded-full transition-colors" id="loginBtn" title="Login">
        <i data-lucide="user-circle" class="w-[28px] h-[28px]"></i>
    </button>
    `;
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Attach events
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) loginBtn.addEventListener('click', openLoginModal);

  const avatarBtn = document.getElementById('userAvatarBtn');
  if (avatarBtn) avatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleUserDropdown();
  });

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
}

function toggleUserDropdown() {
  const dropdown = document.getElementById('userDropdown');
  if (dropdown) dropdown.classList.toggle('active');
}

function closeUserDropdown() {
  const dropdown = document.getElementById('userDropdown');
  if (dropdown) dropdown.classList.remove('active');
}

let kartuStokState = {
  selectedProductId: 6, // Default: Aqua Gelas (AG)
};

// ========================================
// MASTER DATA BARANG (Admin Only)
// ========================================
let masterDataState = {
  search: '',
  filterKategori: 'all',
  editingId: null,
};

function checkAdminAccess() {
  return authState.isLoggedIn && authState.user && authState.user.role === 'Admin';
}

function renderAccessDenied() {
  return `
    <div class="space-y-4 pb-20 animate-tab">
      <div class="access-denied">
        <div class="access-denied-icon">
          <i data-lucide="shield-x"></i>
        </div>
        <h2>Akses Ditolak</h2>
        <p>Maaf, fitur Master Data Barang hanya dapat diakses oleh <strong>Administrator</strong>. Silakan login sebagai admin untuk mengakses fitur ini.</p>
        <button class="access-denied-btn" onclick="openLoginModal()">
          <i data-lucide="log-in" class="w-4 h-4 inline-block mr-1"></i> Login sebagai Admin
        </button>
      </div>
    </div>
  `;
}

function renderTabMasterData() {
  // 🔒 Proteksi akses
  if (!checkAdminAccess()) {
    return renderAccessDenied();
  }

  const filtered = mockProducts.filter(p => {
    const matchSearch = masterDataState.search === '' ||
      p.nama.toLowerCase().includes(masterDataState.search.toLowerCase()) ||
      p.kode.toLowerCase().includes(masterDataState.search.toLowerCase());
    const matchKategori = masterDataState.filterKategori === 'all' || p.kategori === masterDataState.filterKategori;
    return matchSearch && matchKategori;
  });

  // Statistik
  const totalBarang = mockProducts.length;
  const totalStok = mockProducts.reduce((sum, p) => sum + (p.stok || 0), 0);
  const stokRendah = mockProducts.filter(p => (p.stok || 0) < 10).length;
  const nilaiInventaris = mockProducts.reduce((sum, p) => sum + ((p.stok || 0) * p.hargaBeli), 0);

  return `
    <div class="space-y-4 pb-20 animate-tab">
      <!-- Header -->
      <div class="master-data-header">
        <div class="master-data-title">
          <div class="icon-box">
            <i data-lucide="package" class="w-6 h-6"></i>
          </div>
          <div>
            <h2>Master Data Barang</h2>
            <p class="text-xs text-slate-500">Kelola data produk dan stok barang</p>
          </div>
        </div>

        <!-- Stats -->
        <div class="master-stats">
          <div class="stat-card info">
            <div class="stat-value">${totalBarang}</div>
            <div class="stat-label">Total Produk</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${totalStok}</div>
            <div class="stat-label">Total Stok</div>
          </div>
          <div class="stat-card ${stokRendah > 0 ? 'danger' : 'warning'}">
            <div class="stat-value">${stokRendah}</div>
            <div class="stat-label">Stok Rendah</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${formatRp(nilaiInventaris)}</div>
            <div class="stat-label">Nilai Inventaris</div>
          </div>
        </div>

        <!-- Toolbar -->
        <div class="master-toolbar">
          <div class="master-search">
            <i data-lucide="search"></i>
            <input type="text" id="masterSearch" placeholder="Cari nama atau kode barang..." value="${masterDataState.search}" />
          </div>
          <select class="master-filter" id="masterFilter">
            <option value="all">Semua Kategori</option>
            ${kategoriList.map(k => `<option value="${k}" ${masterDataState.filterKategori === k ? 'selected' : ''}>${k}</option>`).join('')}
          </select>
          <button class="master-btn master-btn-primary" id="masterAddBtn">
            <i data-lucide="plus"></i>
            <span>Tambah Barang</span>
          </button>
        </div>
      </div>

      <!-- Table -->
      <div class="master-table-wrapper">
        ${filtered.length === 0 ? `
          <div class="master-empty">
            <i data-lucide="package-x"></i>
            <h3>Tidak ada data</h3>
            <p>Barang tidak ditemukan dengan filter saat ini</p>
          </div>
        ` : `
          <div style="overflow-x: auto;">
            <table class="master-table">
              <thead>
<tr>
<th style="width: 50px;">No</th>
<th style="width: 60px;">Foto</th>
<th>Kode</th>
<th>Nama Barang</th>
<th>Kategori</th>
<th>Tanggal Masuk</th> <!-- KOLOM BARU -->
<th>Harga Beli</th>
<th>Harga Jual</th>
<th style="text-align: center;">Stok</th>
<th style="text-align: center; width: 100px;">Aksi</th>
</tr>
</thead>
<tbody>
${filtered.map((p, i) => `
<tr>
<td>${i + 1}</td>
<td>
${p.image
? `<img src="${p.image}" class="product-thumb" alt="${p.nama}" onerror="this.style.display='none'">`
: `<div class="product-thumb" style="display:flex;align-items:center;justify-content:center;font-size:1.2rem;">📦</div>`
}
</td>
<td><span class="product-code">${p.kode}</span></td>
<td style="font-weight: 600;">${p.nama}</td>
<td><span class="category-badge">${p.kategori}</span></td>
<td><span class="date-badge">${p.tanggal || '-'}</span></td> <!-- DATA TANGGAL -->
<td style="color: #64748b;">${formatRp(p.hargaBeli)}</td>
<td style="font-weight: 700; color: #0d9488;">${formatRp(p.harga)}</td>
<td>
${(p.stok || 0) < 10
? `<span class="stock-low">${p.stok || 0}</span>`
: `<span class="stock-ok">${p.stok || 0}</span>`
}
</td>
<td>
<div class="action-btns">
<button class="action-icon-btn edit" data-edit-id="${p.id}" title="Edit">
<i data-lucide="pencil"></i>
</button>
<button class="action-icon-btn delete" data-delete-id="${p.id}" title="Hapus">
<i data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
`).join('')}
</tbody>
            </table>
          </div>
        `}
      </div>
    </div>
  `;
}

function setupMasterDataListeners() {
  // 🔒 Proteksi: hanya admin
  if (!checkAdminAccess()) return;

  const searchInput = document.getElementById('masterSearch');
  const filterSelect = document.getElementById('masterFilter');
  const addBtn = document.getElementById('masterAddBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      masterDataState.search = e.target.value;
      refreshMasterData();
    });
  }
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      masterDataState.filterKategori = e.target.value;
      refreshMasterData();
    });
  }
  if (addBtn) {
    addBtn.addEventListener('click', () => openMasterDataModal());
  }

  // Edit buttons
  document.querySelectorAll('[data-edit-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.dataset.editId);
      openMasterDataModal(id);
    });
  });

    // Delete buttons
  document.querySelectorAll('[data-delete-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.dataset.deleteId);
      deleteMasterData(id);
    });
  });
}

function refreshMasterData() {
  const mainContent = document.getElementById('mainContent');
  if (mainContent && activeTab === 'master') {
    mainContent.innerHTML = renderTabMasterData();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setupMasterDataListeners();
    // Restore focus ke search jika ada
    const searchInput = document.getElementById('masterSearch');
    if (searchInput && masterDataState.search) {
      searchInput.focus();
      searchInput.setSelectionRange(masterDataState.search.length, masterDataState.search.length);
    }
  }
}

function openMasterDataModal(editId = null) {
  // 🔒 Proteksi ganda
  if (!checkAdminAccess()) {
    Notification.error('Hanya admin yang dapat mengelola data barang!', { duration: 3000 });
    return;
  }

  masterDataState.editingId = editId;
  const product = editId ? mockProducts.find(p => p.id === editId) : null;
  const isEdit = !!product;

  const modalHtml = `
    <div class="md-modal-overlay active" id="mdModalOverlay">
      <div class="md-modal">
        <div class="md-modal-header">
          <h3>
            <i data-lucide="${isEdit ? 'pencil' : 'plus-circle'}"></i>
            ${isEdit ? 'Edit Barang' : 'Tambah Barang Baru'}
          </h3>
          <button class="md-modal-close" id="mdModalClose">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>
        <div class="md-modal-body">
          <form id="mdForm">
            <div class="md-form-grid">
<div class="md-form-group">
<label>Kode Barang <span class="required">*</span></label>
<input type="text" id="mdKode" value="${product?.kode || ''}" placeholder="Contoh: FB-001" required />
</div>
<!-- INPUT TANGGAL BARU -->
<div class="md-form-group">
<label>Tanggal Masuk <span class="required">*</span></label>
<input type="date" id="mdTanggal" value="${product?.tanggal || new Date().toISOString().split('T')[0]}" required />
</div>
<div class="md-form-group">
<label>Kategori <span class="required">*</span></label>
<select id="mdKategori" required>
                  <option value="">-- Pilih Kategori --</option>
                  ${kategoriList.map(k => `<option value="${k}" ${product?.kategori === k ? 'selected' : ''}>${k}</option>`).join('')}
                </select>
              </div>
              <div class="md-form-group full">
                <label>Nama Barang <span class="required">*</span></label>
                <input type="text" id="mdNama" value="${product?.nama || ''}" placeholder="Nama lengkap barang" required />
              </div>
              <div class="md-form-group">
                <label>Harga Beli <span class="required">*</span></label>
                <input type="number" id="mdHargaBeli" value="${product?.hargaBeli || ''}" placeholder="0" min="0" required />
              </div>
              <div class="md-form-group">
                <label>Harga Jual <span class="required">*</span></label>
                <input type="number" id="mdHargaJual" value="${product?.harga || ''}" placeholder="0" min="0" required />
              </div>
              <div class="md-form-group">
                <label>Stok <span class="required">*</span></label>
                <input type="number" id="mdStok" value="${product?.stok ?? ''}" placeholder="0" min="0" required />
              </div>

                              <div class="md-form-group full">
                <label>Gambar Produk</label>
                <div class="image-upload-container">
                  <div class="image-preview-area" id="imagePreviewArea">
                    ${product?.image ? `
                      <img src="${product.image}" alt="Preview" class="preview-image" />
                      <button type="button" class="remove-image-btn" id="removeImageBtn">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                      </button>
                    ` : `
                      <div class="upload-placeholder">
                        <i data-lucide="image-plus" class="w-12 h-12"></i>
                        <p>Belum ada gambar</p>
                      </div>
                    `}
                  </div>
                  <div class="image-upload-options">
                    <label class="upload-btn" for="mdImageUpload">
                      <i data-lucide="upload" class="w-4 h-4"></i>
                      <span>Upload Foto</span>
                      <input type="file" id="mdImageUpload" accept="image/*" style="display: none;" />
                    </label>
                    <button type="button" class="upload-btn camera-btn" id="cameraBtn">
                      <i data-lucide="camera" class="w-4 h-4"></i>
                      <span>Ambil Foto</span>
                    </button>
                    <button type="button" class="url-toggle-btn" id="urlToggleBtn">
                      <i data-lucide="link" class="w-4 h-4"></i>
                      <span>Gunakan URL</span>
                    </button>
                  </div>
                  <div class="image-url-input" id="imageUrlInput" style="display: none;">
                    <input type="text" id="mdImageUrl" value="${product?.image || ''}" placeholder="https://example.com/gambar.jpg" />
                    <button type="button" class="apply-url-btn" id="applyUrlBtn">Terapkan</button>
                  </div>
                  <small class="upload-hint">Format: JPG, PNG, WebP (Maks. 2MB) • Atau gunakan kamera</small>
                </div>
              </div>

            </div>
          </form>
        </div>
        <div class="md-modal-footer">
          <button class="md-btn md-btn-cancel" id="mdCancelBtn">Batal</button>
          <button class="md-btn md-btn-save" id="mdSaveBtn">
            <i data-lucide="save" class="w-4 h-4"></i>
            ${isEdit ? 'Update' : 'Simpan'}
          </button>
        </div>
      </div>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = modalHtml;
  document.body.appendChild(wrapper.firstElementChild);

  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Event listeners
  document.getElementById('mdModalClose').addEventListener('click', closeMasterDataModal);
  document.getElementById('mdCancelBtn').addEventListener('click', closeMasterDataModal);
  document.getElementById('mdModalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'mdModalOverlay') closeMasterDataModal();
  });
    document.getElementById('mdSaveBtn').addEventListener('click', () => saveMasterData());

  // ESC to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeMasterDataModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);

  // Focus ke field pertama
  setTimeout(() => document.getElementById('mdKode')?.focus(), 200);
  // Image upload handlers
  setupImageUploadHandlers();

// Camera modal HTML
  const cameraModalHtml = `
    <div class="camera-modal-overlay" id="cameraModalOverlay" style="display: none;">
      <div class="camera-modal">
        <div class="camera-modal-header">
          <h3><i data-lucide="camera" class="w-5 h-5"></i> Ambil Foto Produk</h3>
          <button class="camera-close-btn" id="cameraCloseBtn">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>
        <div class="camera-modal-body">
          <div class="camera-container">
            <video id="cameraVideo" autoplay playsinline></video>
            <canvas id="cameraCanvas" style="display: none;"></canvas>
          </div>
          <div class="camera-controls">
            <button class="camera-action-btn cancel" id="cameraCancelBtn">
              <i data-lucide="x" class="w-5 h-5"></i>
              Batal
            </button>
            <button class="camera-action-btn capture" id="cameraCaptureBtn">
              <i data-lucide="camera" class="w-6 h-6"></i>
              Ambil Foto
            </button>
            <button class="camera-action-btn retake" id="cameraRetakeBtn" style="display: none;">
              <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
              Ulangi
            </button>
            <button class="camera-action-btn save" id="cameraSaveBtn" style="display: none;">
              <i data-lucide="check" class="w-5 h-5"></i>
              Gunakan Foto
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  const cameraWrapper = document.createElement('div');
  cameraWrapper.innerHTML = cameraModalHtml;
  document.body.appendChild(cameraWrapper.firstElementChild);
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
  
  // Setup camera handlers
  setupCameraHandlers();

}

function setupImageUploadHandlers() {
  const fileInput = document.getElementById('mdImageUpload');
  const previewArea = document.getElementById('imagePreviewArea');
  const removeBtn = document.getElementById('removeImageBtn');
  const urlToggleBtn = document.getElementById('urlToggleBtn');
  const imageUrlInput = document.getElementById('imageUrlInput');
  const applyUrlBtn = document.getElementById('applyUrlBtn');
  const urlInput = document.getElementById('mdImageUrl');
  
  let uploadedFile = null;
  
  // Handle file upload
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      // Validasi file
      if (!file.type.startsWith('image/')) {
        Notification.warning('File harus berupa gambar!', { duration: 3000 });
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) {
        Notification.warning('Ukuran gambar maksimal 2MB!', { duration: 3000 });
        return;
      }
      
      uploadedFile = file;
      
      // Preview gambar
      const reader = new FileReader();
      reader.onload = (e) => {
        previewArea.innerHTML = `
          <img src="${e.target.result}" alt="Preview" class="preview-image" />
          <button type="button" class="remove-image-btn" id="removeImageBtn">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        // Re-attach remove button event
        document.getElementById('removeImageBtn')?.addEventListener('click', removeImage);
      };
      reader.readAsDataURL(file);
    });
  }
  
  // Handle remove image
  function removeImage() {
    uploadedFile = null;
    previewArea.innerHTML = `
      <div class="upload-placeholder">
        <i data-lucide="image-plus" class="w-12 h-12"></i>
        <p>Belum ada gambar</p>
      </div>
    `;
    if (fileInput) fileInput.value = '';
    if (urlInput) urlInput.value = '';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
  
  if (removeBtn) {
    removeBtn.addEventListener('click', removeImage);
  }
  
  // Toggle URL input
  if (urlToggleBtn) {
    urlToggleBtn.addEventListener('click', () => {
      if (imageUrlInput.style.display === 'none') {
        imageUrlInput.style.display = 'flex';
        urlToggleBtn.innerHTML = '<i data-lucide="upload" class="w-4 h-4"></i><span>Upload Foto</span>';
        if (urlInput) urlInput.focus();
      } else {
        imageUrlInput.style.display = 'none';
        urlToggleBtn.innerHTML = '<i data-lucide="link" class="w-4 h-4"></i><span>Gunakan URL</span>';
      }
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  }
  
  // Apply URL
  if (applyUrlBtn) {
    applyUrlBtn.addEventListener('click', () => {
      const url = urlInput?.value?.trim();
      if (!url) {
        Notification.warning('Masukkan URL gambar!', { duration: 3000 });
        return;
      }
      
      // Validasi URL
      if (!url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i)) {
        Notification.warning('URL harus berakhiran .jpg, .png, .gif, .webp, atau .svg', { duration: 3000 });
        return;
      }
      
      previewArea.innerHTML = `
        <img src="${url}" alt="Preview" class="preview-image" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23f0f0f0%22 width=%22100%22 height=%22100%22/><text fill=%22%23999%22 x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22>Gambar Tidak Valid</text></svg>'" />
        <button type="button" class="remove-image-btn" id="removeImageBtn">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      `;
      
      imageUrlInput.style.display = 'none';
      urlToggleBtn.innerHTML = '<i data-lucide="link" class="w-4 h-4"></i><span>Gunakan URL</span>';
      
      if (typeof lucide !== 'undefined') lucide.createIcons();
      
      // Re-attach remove button event
      document.getElementById('removeImageBtn')?.addEventListener('click', removeImage);
      
      Notification.success('URL gambar berhasil diterapkan', { duration: 2000 });
    });
  }
  
  // Store uploaded file in global scope for save function
  window.mdUploadedImage = uploadedFile;
  window.mdGetImageData = function() {
    const urlInput = document.getElementById('mdImageUrl');
    const previewImg = previewArea.querySelector('.preview-image');
    
    if (uploadedFile) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(uploadedFile);
      });
    } else if (urlInput && urlInput.value.trim()) {
      return Promise.resolve(urlInput.value.trim());
    } else if (previewImg && previewImg.src) {
      return Promise.resolve(previewImg.src);
    }
    return Promise.resolve('');
  };
}


// ========================================
// CAMERA HANDLERS
// ========================================
function setupCameraHandlers() {
  const cameraBtn = document.getElementById('cameraBtn');
  const cameraModal = document.getElementById('cameraModalOverlay');
  const cameraCloseBtn = document.getElementById('cameraCloseBtn');
  const cameraVideo = document.getElementById('cameraVideo');
  const cameraCanvas = document.getElementById('cameraCanvas');
  const cameraCaptureBtn = document.getElementById('cameraCaptureBtn');
  const cameraRetakeBtn = document.getElementById('cameraRetakeBtn');
  const cameraSaveBtn = document.getElementById('cameraSaveBtn');
  const cameraCancelBtn = document.getElementById('cameraCancelBtn');
  
  let stream = null;
  let capturedImage = null;
  
  // Open camera
  if (cameraBtn) {
    cameraBtn.addEventListener('click', async () => {
      try {
        // Request camera access
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: 'environment', // Use back camera on mobile
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          }, 
          audio: false 
        });
        
        cameraVideo.srcObject = stream;
        cameraModal.style.display = 'flex';
        
        // Reset state
        capturedImage = null;
        cameraVideo.style.display = 'block';
        cameraCanvas.style.display = 'none';
        cameraCaptureBtn.style.display = 'flex';
        cameraRetakeBtn.style.display = 'none';
        cameraSaveBtn.style.display = 'none';
        
      } catch (err) {
        console.error('Camera error:', err);
        Notification.error('Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan.', { 
          duration: 5000 
        });
      }
    });
  }
  
  // Close camera
  function closeCamera() {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      stream = null;
    }
    cameraModal.style.display = 'none';
    capturedImage = null;
  }
  
  if (cameraCloseBtn) cameraCloseBtn.addEventListener('click', closeCamera);
  if (cameraCancelBtn) cameraCancelBtn.addEventListener('click', closeCamera);
  
  // Capture image
  if (cameraCaptureBtn) {
    cameraCaptureBtn.addEventListener('click', () => {
      if (!stream) return;
      
      // Set canvas size to match video
      cameraCanvas.width = cameraVideo.videoWidth;
      cameraCanvas.height = cameraVideo.videoHeight;
      
      // Draw video frame to canvas
      const ctx = cameraCanvas.getContext('2d');
      ctx.drawImage(cameraVideo, 0, 0);
      
      // Convert to base64
      capturedImage = cameraCanvas.toDataURL('image/jpeg', 0.85);
      
      // Show captured image
      cameraVideo.style.display = 'none';
      cameraCanvas.style.display = 'block';
      cameraCaptureBtn.style.display = 'none';
      cameraRetakeBtn.style.display = 'flex';
      cameraSaveBtn.style.display = 'flex';
    });
  }
  
  // Retake
  if (cameraRetakeBtn) {
    cameraRetakeBtn.addEventListener('click', () => {
      capturedImage = null;
      cameraVideo.style.display = 'block';
      cameraCanvas.style.display = 'none';
      cameraCaptureBtn.style.display = 'flex';
      cameraRetakeBtn.style.display = 'none';
      cameraSaveBtn.style.display = 'none';
    });
  }
  
  // Save captured image
  if (cameraSaveBtn) {
    cameraSaveBtn.addEventListener('click', () => {
      if (!capturedImage) return;
      
      // Update preview
      const previewArea = document.getElementById('imagePreviewArea');
      previewArea.innerHTML = `
        <img src="${capturedImage}" alt="Preview" class="preview-image" />
        <button type="button" class="remove-image-btn" id="removeImageBtn">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      `;
      
      if (typeof lucide !== 'undefined') lucide.createIcons();
      
      // Re-attach remove button event
      document.getElementById('removeImageBtn')?.addEventListener('click', () => {
        const fileInput = document.getElementById('mdImageUpload');
        const urlInput = document.getElementById('mdImageUrl');
        const newPreviewArea = document.getElementById('imagePreviewArea');
        
        newPreviewArea.innerHTML = `
          <div class="upload-placeholder">
            <i data-lucide="image-plus" class="w-12 h-12"></i>
            <p>Belum ada gambar</p>
          </div>
        `;
        
        if (fileInput) fileInput.value = '';
        if (urlInput) urlInput.value = '';
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
      
      // Store captured image
      window.mdUploadedImage = capturedImage;
      
      // Close camera
      closeCamera();
      
      Notification.success('Foto berhasil diambil!', { duration: 2000 });
    });
  }
  
  // Close on overlay click
  if (cameraModal) {
    cameraModal.addEventListener('click', (e) => {
      if (e.target === cameraModal) closeCamera();
    });
  }
  
  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cameraModal.style.display === 'flex') {
      closeCamera();
    }
  });
}

function closeMasterDataModal() {
  const overlay = document.getElementById('mdModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
  masterDataState.editingId = null;
}

async function saveMasterData() {
  const kode = document.getElementById('mdKode').value.trim();
  const tanggal = document.getElementById('mdTanggal').value;
  const nama = document.getElementById('mdNama').value.trim();
  const kategori = document.getElementById('mdKategori').value;
  const hargaBeli = parseInt(document.getElementById('mdHargaBeli').value) || 0;
  const hargaJual = parseInt(document.getElementById('mdHargaJual').value) || 0;
  const stok = parseInt(document.getElementById('mdStok').value) || 0;
  // Get image data (async untuk handle file upload)
  let image = '';
  if (window.mdGetImageData) {
    image = await window.mdGetImageData();
  }

  // Validasi
  if (!kode || !nama || !kategori) {
    Notification.warning('Kode, Nama, dan Kategori wajib diisi !', {
   duration: 3000
   });
    return;
  }
    if (hargaBeli <= 0 || hargaJual <= 0) {
    Notification.warning('Harga beli dan harga jual harus lebih dari 0!', { duration: 3000 });
    return;
  }
  if (hargaJual < hargaBeli) {
    if (!await CustomConfirm.show('Harga jual lebih kecil dari harga beli. Lanjutkan?', {
      type: 'warning',
      confirmText: 'Lanjutkan',
      cancelText: 'Batal'
    })) return;
  }
  // Cek duplikasi kode (kecuali saat edit barang yang sama)
  const duplikat = mockProducts.find(p => p.kode.toLowerCase() === kode.toLowerCase() && p.id !== masterDataState.editingId);
  if (duplikat) {
    Notification.warning(`Kode barang "${kode}" sudah digunakan oleh produk lain!`, { duration: 3000 });
    return;
  }

  if (masterDataState.editingId) {
    // UPDATE
    const idx = mockProducts.findIndex(p => p.id === masterDataState.editingId);
    if (idx !== -1) {
      mockProducts[idx] = {
        ...mockProducts[idx],
        kode, nama, kategori, tanggal,
        hargaBeli, harga: hargaJual,
        stok, image
      };
      // ✅ SYNC KE CLOUD
      await ProductAPI.update(mockProducts[idx]);
      showCartFeedback(`✅ Barang "${nama}" berhasil diupdate`);
    }
  } else {
    // CREATE
    const newId = mockProducts.length > 0 ? Math.max(...mockProducts.map(p => p.id)) + 1 : 1;
    const newProduct = { id: newId, kode, nama, kategori, tanggal, hargaBeli, harga: hargaJual, stok, image };
    mockProducts.push(newProduct);
    // ✅ SYNC KE CLOUD
    await ProductAPI.save(newProduct);
    showCartFeedback(`✅ Barang "${nama}" berhasil ditambahkan`);
  }

  closeMasterDataModal();
  refreshMasterData();
}

async function deleteMasterData(id) {
    const product = mockProducts.find(p => p.id === id);
    if (!product) return;

    if (!await CustomConfirm.show(`Hapus barang "${product.nama}" ?\nData yang dihapus tidak dapat dikembalikan.`, {
        type: 'danger', confirmText: 'Hapus', cancelText: 'Batal', confirmClass: 'btn-danger'
    })) return;

    // ✅ HAPUS DI CLOUD DULU
    await ProductAPI.delete(id);

    // Jika berhasil, baru hapus di lokal
    mockProducts = mockProducts.filter(p => p.id !== id);
    Notification.success(`Barang "${product.nama}" telah dihapus`, { duration: 2500 });
    refreshMasterData();
}

// ========================================
// MASTER DATA BARANG (Bisa diedit)
// ========================================
let mockProducts = [
{ id: 1, nama: 'Frost Bite Chocolate Vanilla', kode: 'FB-CNC', tanggal: '2025-01-05', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-chocolate-vanilla.png', kategori: 'Ice Cream', stok: 50, supplier: 'PT FROST INDONESIA', kontak: '081234567890' },
{ id: 2, nama: 'Frost Bite Cookies & Cream', kode: 'FB-CC', tanggal: '2025-01-06', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-cookies-&-cream.png', kategori: 'Ice Cream', stok: 35, supplier: 'PT FROST INDONESIA', kontak: '081234567890' },
{ id: 3, nama: 'Frost Bite Boba Milk Tea', kode: 'FB-CS', tanggal: '2025-01-07', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-boba-milk-tea.png', kategori: 'Ice Cream', stok: 28, supplier: 'PT FROST INDONESIA', kontak: '081234567890' },
{ id: 4, nama: 'Frost Bite Coconut Shake', kode: 'FB-CV', tanggal: '2025-01-08', harga: 5000, hargaBeli: 3200, image: 'asset/frost-bite-coconut-shake.png', kategori: 'Ice Cream', stok: 42, supplier: 'PT FROST INDONESIA', kontak: '081234567890' },
{ id: 5, nama: 'Frost Bite Crunchy Double Choco', kode: 'FB-LAVA', tanggal: '2025-01-09', harga: 5000, hargaBeli: 4036, image: 'asset/frost-bite-crunchy-double-choco.png', kategori: 'Ice Cream', stok: 15, supplier: 'PT FROST INDONESIA', kontak: '081234567890' },
{ id: 6, nama: 'Aqua Gelas', kode: 'AG', tanggal: '2025-01-10', harga: 500, hargaBeli: 300, image: '', kategori: 'Minuman', stok: 120, supplier: 'PT TIRTA', kontak: '08123456789' },
{ id: 7, nama: 'Aqua Botol 600ml', kode: 'AB', tanggal: '2025-01-11', harga: 3000, hargaBeli: 2500, image: '', kategori: 'Minuman', stok: 80, supplier: 'PT TIRTA', kontak: '08123456789' },
{ id: 8, nama: 'Nasi Uduk', kode: 'NU', tanggal: '2025-01-12', harga: 7000, hargaBeli: 6000, image: '', kategori: 'Makanan', stok: 5, supplier: 'Dapur Bu Siti', kontak: '082198765432' },
];

const kategoriList = ['Ice Cream', 'Minuman', 'Makanan', 'Snack', 'Lainnya'];

let posState = {
  isOpen: false, 
  transactionDate: new Date().toISOString().split('T')[0],
  selectedProduct: null, 
  cart: [], 
  tempQuantity: 1,
  dateUpdateInterval: null,
};

// ========================================
// POS RENDER FUNCTIONS
// ========================================
function renderPOSPage() {
  return `
    <div class="pos-page-header">
      <button class="pos-btn-icon" id="posBackBtn" title="Kembali"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <h3>🛒 Tambah Transaksi</h3>
      <button class="pos-btn-icon" id="posClearCartBtn" title="Kosongkan Keranjang"><i data-lucide="trash-2" class="w-5 h-5"></i></button>
    </div>

    <div class="pos-page-body">
      <div class="pos-date-section">
        <label for="posDate">📅 Tanggal Transaksi</label>
        <input type="date" id="posDate" value="${posState.transactionDate}" />
      </div>
      <div class="pos-search">
        <i data-lucide="search" class="w-4 h-4"></i>
        <input type="text" id="posSearch" placeholder="Cari produk..." />
      </div>
      <div class="product-catalog" id="productCatalog">
        ${renderProductCatalog()}
      </div>
    </div>

    <div class="pos-fullpage-cart ${posState.cart.length > 0 ? 'active' : ''}" id="cartPanel">
      <div class="cart-items-preview" id="cartPreview">${renderCartPreview()}</div>
      <div class="cart-summary">
        <div>
          <div class="cart-total-label">Total Belanja</div>
          <div class="cart-total-amount" id="cartTotal">${formatRp(calculateCartTotal())}</div>
        </div>
        <button class="cart-save-btn" id="saveTransactionBtn" ${posState.cart.length === 0 ? 'disabled' : ''}>
          <i data-lucide="check-circle" class="w-5 h-5"></i> Simpan
        </button>
      </div>
    </div>

    <div class="qty-modal ${posState.selectedProduct ? 'active' : ''}" id="qtyModal">
      <div class="qty-selector">
        <div class="qty-header">
          <div class="qty-product-name" id="qtyProductName">${posState.selectedProduct?.nama || ''}</div>
          <div class="qty-product-price" id="qtyProductPrice">${posState.selectedProduct ? formatRp(posState.selectedProduct.harga) : ''}</div>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" id="qtyDecrease">−</button>
          <div class="qty-value" id="qtyValue">${posState.tempQuantity}</div>
          <button class="qty-btn" id="qtyIncrease">+</button>
        </div>
        <div class="qty-subtotal">
          <div class="qty-subtotal-label">Subtotal</div>
          <div class="qty-subtotal-amount" id="qtySubtotal">${formatRp((posState.selectedProduct?.harga || 0) * posState.tempQuantity)}</div>
        </div>
        <div class="qty-actions">
          <button class="qty-cancel" id="qtyCancel">Batal</button>
          <button class="qty-confirm" id="qtyConfirm">Tambah ke Keranjang</button>
        </div>
      </div>
    </div>
  `;
}

// ========================================
// POS RENDER FUNCTION (Diperbarui)
// ========================================
function renderProductCatalog(searchTerm = '') {
  const filtered = mockProducts.filter(p =>
    p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.kode.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (filtered.length === 0) {
    return '<div class="col-span-full text-center py-8 text-slate-400">Produk tidak ditemukan</div>';
  }

  return filtered.map(product => {
    const inCart = posState.cart.find(item => item.id === product.id);
    
    // Cek apakah image adalah file gambar atau emoji
    const isImage = product.image.endsWith('.webp') || product.image.endsWith('.jpg') || product.image.includes('/');
    
    return `
      <div class="product-card ${inCart ? 'selected' : ''}" data-product-id="${product.id}">
        <div class="product-image">
          ${isImage 
            ? `<img src="${product.image}" alt="${product.nama}" loading="lazy">` 
            : `<span style="font-size: 3rem">${product.image}</span>`
          }
        </div>
        <div class="product-name" title="${product.nama}">${product.nama}</div>
        <div class="product-code">${product.kode}</div>
        <div class="product-price">${formatRp(product.harga)}</div>
        ${inCart ? `<div class="cart-badge">${inCart.jumlah}x</div>` : ''}
      </div>
    `;
  }).join('');
}

function renderCartPreview() {
  if (posState.cart.length === 0) {
    return `<div class="cart-empty"><i data-lucide="shopping-cart" class="w-8 h-8 mx-auto"></i><p>Keranjang masih kosong</p><p style="font-size:0.75rem">Pilih produk dari katalog</p></div>`;
  }
  return posState.cart.map(item => {
    const product = mockProducts.find(p => p.id === item.id);
    const imageSrc = product?.image || '';
    
    return `
      <div class="cart-item-preview">
        <div class="cart-item-name">
          ${imageSrc 
            ? `<div class="cart-item-image-wrapper">
                 <img src="${imageSrc}" alt="${item.nama}" class="cart-item-img" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'cart-item-placeholder\\'>📦</div>'">
               </div>`
            : `<div class="cart-item-placeholder">📦</div>`
          }
          <div class="cart-item-info">
            <span class="cart-item-product-name">${item.nama}</span>
            <span class="cart-item-qty">${item.jumlah}x</span>
          </div>
        </div>
        <div class="cart-item-total">${formatRp(item.total)}</div>
      </div>
    `;
  }).join('');
}

function calculateCartTotal() {
  return posState.cart.reduce((sum, item) => sum + item.total, 0);
}

// ========================================
// POS EVENT HANDLERS
// ========================================
function openPOS() {
  posState.isOpen = true;
  // ✅ Selalu ambil tanggal terkini saat POS dibuka
  posState.transactionDate = new Date().toISOString().split('T')[0];
  
  let posContainer = document.getElementById('posPageContainer');
  if (!posContainer) {
    posContainer = document.createElement('div');
    posContainer.id = 'posPageContainer';
    document.body.appendChild(posContainer);
  }
  
  posContainer.innerHTML = renderPOSPage();
  posContainer.classList.add('active');
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
  setupPOSEventListeners();
  document.body.style.overflow = 'hidden';
  
  // 🔄 Real-time date update: cek setiap 60 detik jika hari berganti
  if (posState.dateUpdateInterval) clearInterval(posState.dateUpdateInterval);
  posState.dateUpdateInterval = setInterval(() => {
    const today = new Date().toISOString().split('T')[0];
    if (posState.transactionDate !== today) {
      posState.transactionDate = today;
      const dateInput = document.getElementById('posDate');
      if (dateInput) {
        dateInput.value = today;
        // Optional: tampilkan notifikasi kecil
        showCartFeedback('📅 Tanggal diperbarui ke ' + 
          new Date(today).toLocaleDateString('id-ID', { 
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
          }));
      }
    }
  }, 60000); // Cek setiap 60 detik
}

function closePOS() {
  posState.isOpen = false;
  posState.cart = [];
  posState.selectedProduct = null;
  
  // 🧹 Bersihkan interval timer agar tidak memory leak
  if (posState.dateUpdateInterval) {
    clearInterval(posState.dateUpdateInterval);
    posState.dateUpdateInterval = null;
  }
  
  const posContainer = document.getElementById('posPageContainer');
  if (posContainer) {
    posContainer.classList.remove('active');
    setTimeout(() => posContainer.innerHTML = '', 300);
  }
  document.body.style.overflow = '';
}

function setupPOSEventListeners() {
  document.getElementById('posBackBtn')?.addEventListener('click', closePOS);
    document.getElementById('posClearCartBtn')?.addEventListener('click', async () => {
    if (await CustomConfirm.show('Kosongkan keranjang belanja?', {
      type: 'warning',
      confirmText: 'Kosongkan',
      cancelText: 'Batal',
      confirmClass: 'btn-danger'
    })) {
      posState.cart = [];
      updateCartPanel();
    }
  });

  document.getElementById('posDate')?.addEventListener('change', (e) => {
    posState.transactionDate = e.target.value;
    // Jika user manual ubah tanggal, hentikan auto-update sementara
    if (posState.dateUpdateInterval) {
      clearInterval(posState.dateUpdateInterval);
      posState.dateUpdateInterval = null;
    }
  });
  document.getElementById('posSearch')?.addEventListener('input', (e) => {
    const catalog = document.getElementById('productCatalog');
    if (catalog) { catalog.innerHTML = renderProductCatalog(e.target.value); setupProductCardListeners(); }
  });
  setupProductCardListeners();
  updateCartPanel();
  document.getElementById('saveTransactionBtn')?.addEventListener('click', saveTransaction);
  setupQtyModalListeners();
}

function setupProductCardListeners() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const productId = parseInt(card.dataset.productId);
      const product = mockProducts.find(p => p.id === productId);
      if (product) openQtyModal(product);
    });
  });
}

function openQtyModal(product) {
  posState.selectedProduct = product;
  posState.tempQuantity = 1;
  const modal = document.getElementById('qtyModal');
  if (modal) {
    document.getElementById('qtyProductName').textContent = product.nama;
    document.getElementById('qtyProductPrice').textContent = formatRp(product.harga);
    document.getElementById('qtyValue').textContent = posState.tempQuantity;
    document.getElementById('qtySubtotal').textContent = formatRp(product.harga);
    modal.classList.add('active');
  }
}

function closeQtyModal() {
  posState.selectedProduct = null;
  const modal = document.getElementById('qtyModal');
  if (modal) modal.classList.remove('active');
}

function setupQtyModalListeners() {
  document.getElementById('qtyDecrease')?.addEventListener('click', () => {
    if (posState.tempQuantity > 1) { posState.tempQuantity--; updateQtyModalDisplay(); }
  });
  document.getElementById('qtyIncrease')?.addEventListener('click', () => { posState.tempQuantity++; updateQtyModalDisplay(); });
  document.getElementById('qtyCancel')?.addEventListener('click', closeQtyModal);
  document.getElementById('qtyConfirm')?.addEventListener('click', () => {
    if (posState.selectedProduct) { addToCart(posState.selectedProduct, posState.tempQuantity); closeQtyModal(); }
  });
  document.getElementById('qtyModal')?.addEventListener('click', (e) => { if (e.target.id === 'qtyModal') closeQtyModal(); });
}

function updateQtyModalDisplay() {
  document.getElementById('qtyValue').textContent = posState.tempQuantity;
  if (posState.selectedProduct) {
    document.getElementById('qtySubtotal').textContent = formatRp(posState.selectedProduct.harga * posState.tempQuantity);
  }
}

function addToCart(product, quantity) {
  const existing = posState.cart.find(item => item.id === product.id);
  if (existing) {
    existing.jumlah += quantity;
    existing.total = existing.jumlah * product.harga;
  } else {
    posState.cart.push({
      id: product.id, nama: product.nama, kode: product.kode, jumlah: quantity,
      harga: product.harga, hargaBeli: product.hargaBeli, total: quantity * product.harga,
      totalBeli: quantity * product.hargaBeli, untung: quantity * (product.harga - product.hargaBeli)
    });
  }
  updateCartPanel();
  showCartFeedback(`✅ ${product.nama} ditambahkan`);
}

function updateCartPanel() {
  const cartPanel = document.getElementById('cartPanel');
  const cartPreview = document.getElementById('cartPreview');
  const cartTotal = document.getElementById('cartTotal');
  const saveBtn = document.getElementById('saveTransactionBtn');
  
  if (cartPreview) cartPreview.innerHTML = renderCartPreview();
  if (cartTotal) cartTotal.textContent = formatRp(calculateCartTotal());
  
  if (cartPanel) {
    if (posState.cart.length > 0) cartPanel.classList.add('active');
    else cartPanel.classList.remove('active');
  }
  if (saveBtn) saveBtn.disabled = posState.cart.length === 0;
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function showCartFeedback(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #0d9488; color: white; padding: 12px 24px; border-radius: 12px; font-weight: 500; font-size: 0.9rem; z-index: 1100; box-shadow: 0 4px 20px rgba(0,0,0,0.2); animation: slideDown 0.3s ease, fadeOut 0.3s ease 2.7s forwards;`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

const styleAnim = document.createElement('style');
styleAnim.textContent = `@keyframes slideDown { from { transform: translateX(-50%) translateY(-20px); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } } @keyframes fadeOut { to { opacity: 0; transform: translateX(-50%) translateY(-10px); } }`;
document.head.appendChild(styleAnim);

async function saveTransaction() {
    if (posState.cart.length === 0) return;
    
    const tanggal = document.getElementById('posDate')?.value || new Date().toISOString().split('T')[0];
    const tanggalFormatted = new Date(tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();
    
    // Simpan total dan jumlah item sebelum keranjang di-reset oleh closePOS()
    const totalItems = posState.cart.length;
    const totalAmount = calculateCartTotal();
    
    const cloudSyncPromises = []; // Array untuk menampung semua promise API

    // 1. Loop untuk menyiapkan data dan update memori lokal (INSTAN)
    for (const item of posState.cart) {
        // --- Data Penjualan ---
        const newId = mockPenjualan.length > 0 ? Math.max(...mockPenjualan.map(p => p.id)) + 1 : 1;
        const saleData = { 
            id: newId, tanggal: tanggalFormatted, nama: item.nama, kode: item.kode, 
            jumlah: item.jumlah, harga: item.harga, total: item.total, 
            hargaBeli: item.hargaBeli, totalBeli: item.totalBeli, untung: item.untung 
        };
        mockPenjualan.push(saleData);
        cloudSyncPromises.push(SalesAPI.save(saleData)); // ✅ Tampung promise, JANGAN di-await

        // --- Data Kas Harian ---
        const kasId = mockKasHarian.length > 0 ? Math.max(...mockKasHarian.map(k => k.id)) + 1 : 1;
        const lastSaldo = mockKasHarian.length > 0 ? mockKasHarian[mockKasHarian.length - 1].saldo : 0;
        const kasData = { 
            id: kasId, tanggal: tanggalFormatted, bukti: '', uraian: `PENJUALAN ${item.nama}`, 
            inJml: item.jumlah, inHrg: item.harga, inTot: item.total, 
            outJml: '', outHrg: '', outTot: '', biaya: '', saldo: lastSaldo + item.total 
        };
        mockKasHarian.push(kasData);
        cloudSyncPromises.push(CashflowAPI.save(kasData)); // ✅ Tampung promise, JANGAN di-await
    }

    // 2. Update UI secara INSTAN (Tanpa menunggu proses sync cloud)
    Notification.success(`${totalItems} item berhasil disimpan! Total: ${formatRp(totalAmount)}`, { duration: 4000 });
    
    // Refresh tabel jika sedang di halaman penjualan/kas
    if (activeTab === 'penjualan' || activeTab === 'kas') {
        switchTab(activeTab);
    }
    
    // Tutup halaman POS
    closePOS();

    // 3. Sinkronisasi ke Cloud di BACKGROUND (Concurrent / Bersamaan)
    // Proses ini berjalan di latar belakang dan tidak akan memblokir UI
    Promise.all(cloudSyncPromises)
        .then(() => {
            console.log('✅ Data transaksi berhasil sync ke cloud');
        })
        .catch((err) => {
            console.error('❌ Gagal sync ke cloud:', err);
            Notification.warning('Data tersimpan di lokal, tapi gagal sync ke cloud. Silakan klik "Sync ke Cloud" nanti.', { duration: 5000 });
        });
}

// ========================================
// HELPER & TAB FUNCTIONS
// ========================================
const formatRp = (angka) => {
  if (angka === '' || angka === null || angka === undefined) return '';
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
};

 function parseIndoDate(dateStr) {
  if (!dateStr) return '';
  const months = { 'JANUARI': '01', 'FEBRUARI': '02', 'MARET': '03', 'APRIL': '04', 'MEI': '05', 'JUNI': '06', 'JULI': '07', 'AGUSTUS': '08', 'SEPTEMBER': '09', 'OKTOBER': '10', 'NOVEMBER': '11', 'DESEMBER': '12' };
  const parts = dateStr.split(' ');
  if (parts.length === 3) {
    const d = parts[0].padStart(2, '0');
    const m = months[parts[1].toUpperCase()] || '01';
    const y = parts[2];
    return `${y}-${m}-${d}`;
  }
  return '';
}

function parseIndoDateToTimestamp(dateStr) {
  const months = { 'JANUARI': 0, 'FEBRUARI': 1, 'MARET': 2, 'APRIL': 3, 'MEI': 4, 'JUNI': 5, 'JULI': 6, 'AGUSTUS': 7, 'SEPTEMBER': 8, 'OKTOBER': 9, 'NOVEMBER': 10, 'DESEMBER': 11 };
  const parts = dateStr.split(' ');
  if (parts.length === 3) {
    const d = parseInt(parts[0]);
    const m = months[parts[1].toUpperCase()];
    const y = parseInt(parts[2]);
    if (!isNaN(d) && m !== undefined && !isNaN(y)) return new Date(y, m, d).getTime();
  }
  return 0;
}

let activeTab = 'penjualan';
function getTabs() {
  const baseTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'penjualan', label: 'Penjualan', icon: 'shopping-cart' },
    { id: 'kas', label: 'Kas Harian', icon: 'wallet' },
    { id: 'stok', label: 'Kartu Stok', icon: 'package' },
    { id: 'rekap', label: 'Rekap', icon: 'bar-chart-3' },
  ];
  
  // ✅ Tambahkan tab Master Data HANYA untuk Admin
  if (checkAdminAccess()) {
    baseTabs.push({ id: 'master', label: 'Master Data', icon: 'database' });
  }
  
  return baseTabs;
}

// ========================================
// DASHBOARD
// ========================================
function renderTabDashboard() {
  const now = new Date();
  const tanggalHariIni = now.toLocaleDateString('id-ID', { 
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
  });
  const jamSekarang = now.toLocaleTimeString('id-ID', { 
    hour: '2-digit', minute: '2-digit' 
  });
  
  const userName = authState.isLoggedIn ? authState.user.nama : 'User';
  const userRole = authState.isLoggedIn ? authState.user.role : '';
  const greeting = getGreeting();
  
  // Hitung max untuk chart scaling
  const maxPenjualan = Math.max(...dashboardData.penjualanMingguan.map(d => d.jumlah));
  
  // Hitung total penjualan minggu ini
  const totalMingguan = dashboardData.penjualanMingguan.reduce((sum, d) => sum + d.jumlah, 0);
  
  return `
    <div class="dashboard-container animate-tab">
      
      <!-- Welcome Banner -->
      <div class="dashboard-welcome">
        <div class="welcome-content">
          <div class="welcome-text">
            <p class="welcome-greeting">${greeting}</p>
            <h1 class="welcome-name">${userName} <span class="welcome-role">${userRole}</span></h1>
            <p class="welcome-date">
              <i data-lucide="calendar" class="w-4 h-4 inline-block mr-1"></i>
              ${tanggalHariIni} &nbsp;•&nbsp; 
              <i data-lucide="clock" class="w-4 h-4 inline-block mr-1"></i>
              <span id="dashboardLiveClock">${jamSekarang} WIB</span>
            </p>
          </div>
          <div class="welcome-illustration">
            <div class="welcome-icon-box">
              <i data-lucide="store" class="w-12 h-12"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- KPI Cards -->
      <div class="dashboard-kpi-grid">
        <div class="kpi-card kpi-penjualan">
          <div class="kpi-icon">
            <i data-lucide="trending-up"></i>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">Penjualan Hari Ini</span>
            <span class="kpi-value">${formatRp(dashboardData.penjualanHariIni)}</span>
            <span class="kpi-change positive">
              <i data-lucide="arrow-up-right" class="w-3 h-3"></i> 12% dari kemarin
            </span>
          </div>
        </div>

        <div class="kpi-card kpi-transaksi">
          <div class="kpi-icon">
            <i data-lucide="shopping-bag"></i>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">Total Transaksi</span>
            <span class="kpi-value">${dashboardData.transaksiHariIni}</span>
            <span class="kpi-change positive">
              <i data-lucide="arrow-up-right" class="w-3 h-3"></i> 3 lebih dari kemarin
            </span>
          </div>
        </div>

        <div class="kpi-card kpi-stok">
          <div class="kpi-icon">
            <i data-lucide="alert-triangle"></i>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">Stok Rendah</span>
            <span class="kpi-value">${dashboardData.stokRendah} <small>item</small></span>
            <span class="kpi-change negative">
              <i data-lucide="alert-circle" class="w-3 h-3"></i> Perlu restok segera
            </span>
          </div>
        </div>

        <div class="kpi-card kpi-keuntungan">
          <div class="kpi-icon">
            <i data-lucide="wallet"></i>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">Keuntungan Bulan Ini</span>
            <span class="kpi-value">${formatRp(dashboardData.keuntunganBulanIni)}</span>
            <span class="kpi-change positive">
              <i data-lucide="arrow-up-right" class="w-3 h-3"></i> 8% dari bulan lalu
            </span>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="dashboard-main-grid">
        
        <!-- Left Column: Chart + Quick Actions -->
        <div class="dashboard-left-col">
          
          <!-- Sales Chart -->
          <div class="dashboard-card chart-card">
            <div class="card-header">
              <div>
                <h3><i data-lucide="bar-chart-3" class="w-5 h-5"></i> Grafik Penjualan</h3>
                <p class="card-subtitle">7 hari terakhir • Total: ${formatRp(totalMingguan)}</p>
              </div>
              <select class="chart-period-select">
                <option>Minggu Ini</option>
                <option>Bulan Ini</option>
                <option>3 Bulan Terakhir</option>
              </select>
            </div>
            <div class="chart-container">
              ${dashboardData.penjualanMingguan.map((d, i) => {
                const heightPercent = (d.jumlah / maxPenjualan) * 100;
                const isToday = i === dashboardData.penjualanMingguan.length - 1;
                return `
                  <div class="chart-bar-wrapper">
                    <div class="chart-bar-tooltip">${formatRp(d.jumlah)}</div>
                    <div class="chart-bar ${isToday ? 'chart-bar-today' : ''}" 
                         style="height: ${heightPercent}%;"
                         data-value="${d.jumlah}">
                    </div>
                    <span class="chart-label ${isToday ? 'chart-label-today' : ''}">${d.hari}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="dashboard-card">
            <div class="card-header">
              <h3><i data-lucide="zap" class="w-5 h-5"></i> Aksi Cepat</h3>
            </div>
            <div class="quick-actions-grid">
              <button class="quick-action-btn" onclick="openPOS()">
                <div class="qa-icon qa-icon-primary">
                  <i data-lucide="plus-circle"></i>
                </div>
                <span>Transaksi Baru</span>
              </button>
              <button class="quick-action-btn" onclick="switchTab('penjualan')">
                <div class="qa-icon qa-icon-success">
                  <i data-lucide="file-text"></i>
                </div>
                <span>Lihat Laporan</span>
              </button>
              <button class="quick-action-btn" onclick="switchTab('stok')">
                <div class="qa-icon qa-icon-warning">
                  <i data-lucide="package"></i>
                </div>
                <span>Cek Stok</span>
              </button>
              ${checkAdminAccess() ? `
              <button class="quick-action-btn" onclick="switchTab('master')">
                <div class="qa-icon qa-icon-info">
                  <i data-lucide="database"></i>
                </div>
                <span>Master Data</span>
              </button>
              ` : `
              <button class="quick-action-btn" onclick="switchTab('kas')">
                <div class="qa-icon qa-icon-info">
                  <i data-lucide="wallet"></i>
                </div>
                <span>Kas Harian</span>
              </button>
              `}

            </div>
          </div>
        </div>

        <!-- Right Column: Alerts + Recent Transactions -->
        <div class="dashboard-right-col">
          
          <!-- Low Stock Alert -->
          <div class="dashboard-card alert-card">
            <div class="card-header">
              <h3><i data-lucide="alert-triangle" class="w-5 h-5"></i> Peringatan Stok</h3>
              <button class="card-action-btn" onclick="switchTab('stok')">
                Lihat Semua <i data-lucide="arrow-right" class="w-3 h-3"></i>
              </button>
            </div>
            <div class="stock-alert-list">
              ${dashboardData.barangStokRendah.map(item => {
                const stockPercent = (item.stok / item.minStok) * 100;
                const stockClass = stockPercent <= 30 ? 'critical' : stockPercent <= 60 ? 'warning' : 'low';
                return `
                  <div class="stock-alert-item">
                    <div class="stock-alert-info">
                      <div class="stock-alert-name">${item.nama}</div>
                      <div class="stock-alert-code">${item.kode}</div>
                    </div>
                    <div class="stock-alert-bar-wrapper">
                      <div class="stock-alert-bar ${stockClass}" style="width: ${Math.min(stockPercent, 100)}%"></div>
                    </div>
                    <div class="stock-alert-value ${stockClass}">
                      ${item.stok}<small>/${item.minStok}</small>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Recent Transactions -->
          <div class="dashboard-card">
            <div class="card-header">
              <h3><i data-lucide="clock" class="w-5 h-5"></i> Transaksi Terakhir</h3>
              <button class="card-action-btn" onclick="switchTab('penjualan')">
                Lihat Semua <i data-lucide="arrow-right" class="w-3 h-3"></i>
              </button>
            </div>
            <div class="recent-transactions">
              ${dashboardData.transaksiTerakhir.map(t => `
                <div class="transaction-item">
                  <div class="transaction-time">
                    <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                    ${t.waktu}
                  </div>
                  <div class="transaction-details">
                    <div class="transaction-name">${t.barang}</div>
                    <div class="transaction-qty">${t.jumlah}x item</div>
                  </div>
                  <div class="transaction-total">${formatRp(t.total)}</div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 11) return '🌅 Selamat Pagi';
  if (hour < 15) return '☀️ Selamat Siang';
  if (hour < 18) return '🌤️ Selamat Sore';
  return '🌙 Selamat Malam';
}

function renderTabPenjualan() {
  return `
  <div class="space-y-4 pb-20 animate-tab">
    <!-- Header Laporan -->
    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <div class="flex flex-row justify-between items-center gap-3">
        <div class="min-w-0 flex-1">
          <h2 class="text-lg font-bold text-slate-800 truncate">Laporan Penjualan</h2>
          <p class="text-xs text-slate-500">Bulan : Januari 2026</p>
          <p class="text-xs text-teal-600 font-semibold mt-1">RPTRA Kenanga</p>
        </div>
        <button
          class="bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0
          w-11 h-11 rounded-full p-0
          sm:w-auto sm:h-10 sm:rounded-lg sm:px-4 sm:gap-2"
          id="btnTambahTransaksi">
          <div class="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm flex-shrink-0
          sm:w-7 sm:h-7 sm:rounded-md">
            <img src="asset/trolley_plus.png" alt="Icon" class="w-7 h-7 object-contain sm:w-4 sm:h-4" />
          </div>
          <span class="hidden sm:inline text-xs font-semibold whitespace-nowrap">Tambah Transaksi</span>
        </button>
      </div>
    </div>
    
    <!-- Tabel Data -->
    <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-xs text-center whitespace-nowrap border-collapse">
          <thead class="text-[10px] text-white bg-teal-600 uppercase tracking-wide">
            <tr>
              <th class="px-2 py-1.5 border-r border-teal-500">No</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Tanggal</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Nama Barang</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Kode</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Jumlah</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Harga</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Total</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Harga Beli</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Total Beli</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Keuntungan</th>
              <!-- ✅ KOLOM AKSI DITAMBAHKAN DI SINI -->
              <th class="px-2 py-1.5 no-print">Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${mockPenjualan.map((item, index) => `
              <tr class="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td class="px-2 py-1.5 border-r border-slate-200">${index + 1}</td>
                <td class="px-2 py-1.5 border-r border-slate-200">${item.tanggal}</td>
                <td class="px-2 py-1.5 font-medium text-slate-800 border-r border-slate-200">${item.nama}</td>
                <td class="px-2 py-1.5 border-r border-slate-200">${item.kode}</td>
                <td class="px-2 py-1.5 border-r border-slate-200">${item.jumlah}</td>
                <td class="px-2 py-1.5 border-r border-slate-200">${formatRp(item.harga)}</td>
                <td class="px-2 py-1.5 font-semibold border-r border-slate-200">${formatRp(item.total)}</td>
                <td class="px-2 py-1.5 text-slate-500 border-r border-slate-200">${formatRp(item.hargaBeli)}</td>
                <td class="px-2 py-1.5 text-slate-500 border-r border-slate-200">${formatRp(item.totalBeli)}</td>
                <td class="px-2 py-1.5 text-teal-600 font-semibold border-r border-slate-200">${formatRp(item.untung)}</td>
                
                <!-- ✅ TOMBOL AKSI DITAMBAHKAN DI SINI -->
                <td class="px-2 py-1.5 no-print">
                  <div class="action-btns">
                    <button class="action-icon-btn edit" data-edit-sale="${item.id}" title="Edit"><i data-lucide="pencil"></i></button>
                    <button class="action-icon-btn delete" data-delete-sale="${item.id}" title="Hapus"><i data-lucide="trash-2"></i></button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot class="bg-teal-50 font-bold">
            <tr>
              <td colspan="6" class="px-2 py-1.5 text-right border-r border-slate-200">TOTAL</td>
              <td class="px-2 py-1.5 text-right border-r border-slate-200">${formatRp(633000)}</td>
              <td colspan="2" class="px-2 py-1.5 text-right border-r border-slate-200">${formatRp(578500)}</td>
              <td class="px-2 py-1.5 text-right text-teal-700">${formatRp(54500)}</td>
              <!-- ✅ CELL KOSONG DI TFOOT AGAR TABEL SEIMBANG -->
              <td class="px-2 py-1.5"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  `;
}

function renderTabKasHarian() {
  let runningBalance = 2200000; 
  const kasDataWithBalance = mockKasHarian.map(item => {
    if (item.inTot) runningBalance += item.inTot;
    if (item.outTot) runningBalance -= item.outTot;
    if (item.biaya) runningBalance -= item.biaya;
    return { ...item, saldo: runningBalance };
  });

  const totalPenerimaan = mockKasHarian.reduce((sum, item) => sum + (item.inTot || 0), 0);
  const totalPengeluaran = mockKasHarian.reduce((sum, item) => sum + (item.outTot || 0), 0);
  const totalBiaya = mockKasHarian.reduce((sum, item) => sum + (item.biaya || 0), 0);
  const saldoAkhir = runningBalance;

  return `
  <div class="space-y-4 pb-20 animate-tab">
    <!-- Header Laporan -->
    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <div class="flex flex-row justify-between items-center gap-3">
        <div class="min-w-0 flex-1">
          <h2 class="text-lg font-bold text-slate-800 truncate">Kas Harian</h2>
          <p class="text-xs text-slate-500">Bulan : Januari 2026</p>
          <p class="text-xs text-teal-600 font-semibold mt-1">RPTRA Kenanga</p>
        </div>
        <div class="flex gap-2 items-center">
          <div class="relative no-print" id="wrapperTambahKas">
            <button class="bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0 w-11 h-11 rounded-full p-0 sm:w-auto sm:h-10 sm:rounded-lg sm:px-4 sm:gap-2" id="btnTambahKas">
              <div class="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm flex-shrink-0 sm:w-7 sm:h-7 sm:rounded-md">
                <i data-lucide="plus-circle" class="w-7 h-7 text-teal-600 object-contain sm:w-4 sm:h-4"></i>
              </div>
              <span class="hidden sm:inline text-xs font-semibold whitespace-nowrap">Tambah Kas</span>
              <i data-lucide="chevron-down" class="w-4 h-4 hidden sm:inline"></i>
            </button>
            <div class="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 z-50 hidden animate-tab" id="dropdownMenuTambahKas" style="animation: fadeInZoom 0.2s ease-out forwards;">
              <div class="py-1">
                <button class="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 transition-colors group" id="btnPembelian">
                  <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors"><i data-lucide="shopping-cart" class="w-4 h-4"></i></div>
                  <div><div class="text-sm font-semibold text-slate-800">Pembelian Barang</div><div class="text-xs text-slate-500">Catat pembelian stok barang</div></div>
                </button>
                <button class="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 transition-colors group" id="btnBiayaTambahan">
                  <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition-colors"><i data-lucide="receipt" class="w-4 h-4"></i></div>
                  <div><div class="text-sm font-semibold text-slate-800">Biaya Tambahan</div><div class="text-xs text-slate-500">Catat biaya operasional dll</div></div>
                </button>
              </div>
            </div>
          </div>
          <button class="no-print bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0 w-11 h-11 rounded-full p-0 sm:w-auto sm:h-10 sm:rounded-lg sm:px-4 sm:gap-2" onclick="window.print()">
            <div class="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm flex-shrink-0 sm:w-7 sm:h-7 sm:rounded-md">
              <i data-lucide="printer" class="w-7 h-7 text-amber-500 object-contain sm:w-4 sm:h-4"></i>
            </div>
            <span class="hidden sm:inline text-xs font-semibold whitespace-nowrap">Print</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Tabel Data -->
    <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-xs text-center whitespace-nowrap border-collapse">
          <thead class="text-[10px] text-white uppercase tracking-wide">
            <tr>
              <th rowspan="2" class="px-2 py-1.5 border-r border-slate-600 bg-slate-800">No</th>
              <th rowspan="2" class="px-2 py-1.5 border-r border-slate-600 bg-slate-800">Tanggal</th>
              <th rowspan="2" class="px-2 py-1.5 border-r border-slate-600 bg-slate-800">No. Bukti</th>
              <th rowspan="2" class="px-2 py-1.5 border-r border-slate-600 bg-slate-800 text-left">Uraian</th>
              <th colspan="3" class="px-2 py-1.5 border-r border-teal-500 bg-teal-600">Penerimaan</th>
              <th colspan="3" class="px-2 py-1.5 border-r border-rose-500 bg-rose-600">Pengeluaran</th>
              <th rowspan="2" class="px-2 py-1.5 border-r border-slate-600 bg-slate-800">Biaya</th>
              <th rowspan="2" class="px-2 py-1.5 border-r border-slate-600 bg-slate-800">Saldo</th>
              <!-- ✅ KOLOM AKSI DITAMBAHKAN -->
              <th rowspan="2" class="px-2 py-1.5 bg-slate-800 no-print">Aksi</th>
            </tr>
            <tr>
              <th class="px-2 py-1.5 border-r border-teal-500 bg-teal-600">Jml</th>
              <th class="px-2 py-1.5 border-r border-teal-500 bg-teal-600">Hrg</th>
              <th class="px-2 py-1.5 border-r border-teal-500 bg-teal-600">Total</th>
              <th class="px-2 py-1.5 border-r border-rose-500 bg-rose-600">Jml</th>
              <th class="px-2 py-1.5 border-r border-rose-500 bg-rose-600">Hrg</th>
              <th class="px-2 py-1.5 border-r border-rose-500 bg-rose-600">Total</th>
            </tr>
          </thead>
          <tbody>
            ${kasDataWithBalance.map((item, index) => `
              <tr class="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td class="px-2 py-1.5 border-r border-slate-200">${index + 1}</td>
                <td class="px-2 py-1.5 border-r border-slate-200">${item.tanggal}</td>
                <td class="px-2 py-1.5 border-r border-slate-200">${item.bukti || '-'}</td>
                <td class="px-2 py-1.5 font-medium text-slate-800 border-r border-slate-200 text-left">${item.uraian}</td>
                <td class="px-2 py-1.5 border-r border-slate-200 text-teal-700 bg-teal-50/30">${item.inJml || '-'}</td>
                <td class="px-2 py-1.5 border-r border-slate-200 text-teal-700 bg-teal-50/30">${item.inHrg ? formatRp(item.inHrg) : '-'}</td>
                <td class="px-2 py-1.5 font-semibold border-r border-slate-200 text-teal-700 bg-teal-50/30">${item.inTot ? formatRp(item.inTot) : '-'}</td>
                <td class="px-2 py-1.5 border-r border-slate-200 text-rose-700 bg-rose-50/30">${item.outJml || '-'}</td>
                <td class="px-2 py-1.5 border-r border-slate-200 text-rose-700 bg-rose-50/30">${item.outHrg ? formatRp(item.outHrg) : '-'}</td>
                <td class="px-2 py-1.5 font-semibold border-r border-slate-200 text-rose-700 bg-rose-50/30">${item.outTot ? formatRp(item.outTot) : '-'}</td>
                <td class="px-2 py-1.5 text-amber-600 border-r border-slate-200">${item.biaya ? formatRp(item.biaya) : '-'}</td>
                <td class="px-2 py-1.5 font-bold text-slate-800 bg-slate-50 border-r border-slate-200">${formatRp(item.saldo)}</td>
                
                <!-- ✅ TOMBOL AKSI DITAMBAHKAN -->
                <td class="px-2 py-1.5 no-print">
                  <div class="action-btns">
                    <button class="action-icon-btn edit" data-edit-kas="${item.id}" title="Edit"><i data-lucide="pencil"></i></button>
                    <button class="action-icon-btn delete" data-delete-kas="${item.id}" title="Hapus"><i data-lucide="trash-2"></i></button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr class="bg-teal-50 font-bold border-t-2 border-teal-600">
              <td colspan="6" class="px-2 py-2 text-right border-r border-slate-200">SUB TOTAL</td>
              <td class="px-2 py-2 text-right text-teal-700 border-r border-teal-500">${formatRp(totalPenerimaan)}</td>
              <td colspan="2" class="px-2 py-2 text-right border-r border-slate-200">SUB TOTAL</td>
              <td class="px-2 py-2 text-right text-rose-700 border-r border-rose-500">${formatRp(totalPengeluaran)}</td>
              <td class="px-2 py-2 text-right text-amber-600 border-r border-slate-200">${formatRp(totalBiaya)}</td>
              <td class="px-2 py-2 text-right bg-slate-50 border-r border-slate-200">-</td>
              <!-- ✅ CELL KOSONG DI TFOOT -->
              <td class="px-2 py-2"></td>
            </tr>
            <tr class="bg-slate-100 font-bold border-t border-slate-300">
              <!-- ✅ COLSPAN DIUBAH DARI 11 MENJADI 12 -->
              <td colspan="12" class="px-2 py-2 text-right border-r border-slate-200">SALDO AKHIR</td>
              <td class="px-2 py-2 text-right font-bold text-teal-700 bg-teal-50 text-sm border-r border-slate-200">${formatRp(saldoAkhir)}</td>
              <!-- ✅ CELL KOSONG DI TFOOT -->
              <td class="px-2 py-2"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- Tanda Tangan -->
    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mt-4">
      <div class="flex justify-between items-start gap-8 mt-12">
        <div class="flex-1 text-center">
          <p class="text-xs text-slate-600 mb-16">Mengetahui,<br>Koordinator</p>
          <p class="text-xs font-semibold text-slate-800 border-b border-slate-300 pb-1 inline-block min-w-[150px]">( ..................... )</p>
        </div>
        <div class="flex-1 text-center">
          <p class="text-xs text-slate-600 mb-16">
            Jakarta, ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}<br>Pengelola GrossMart
          </p>
          <p class="text-xs font-semibold text-slate-800 border-b border-slate-300 pb-1 inline-block min-w-[150px]">( ..................... )</p>
        </div>
      </div>
    </div>
  </div>
  `;
}

// Function to export to Excel
function exportToExcel() {
  Notification.info('Fitur export Excel sedang dalam pengembangan', { duration: 3000 });
}

// ========================================
// KAS HARIAN - DROPDOWN & MODAL HANDLERS
// ========================================

function setupKasHarianListeners() {
    const btnTambahKas = document.getElementById('btnTambahKas');
    const dropdown = document.getElementById('dropdownMenuTambahKas');
    const btnPembelian = document.getElementById('btnPembelian');
    const btnBiaya = document.getElementById('btnBiayaTambahan');

    if (btnTambahKas && dropdown) {
        btnTambahKas.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        // Tutup dropdown jika klik di luar area
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#wrapperTambahKas')) {
                dropdown.classList.add('hidden');
            }
        });
    }

    if (btnPembelian) btnPembelian.addEventListener('click', openPembelianModal);
    if (btnBiaya) btnBiaya.addEventListener('click', openBiayaTambahanModal);
}

// ========================================
// MODAL PEMBELIAN BARANG (Tanggal Auto + Manual)
// ========================================
function openPembelianModal() {
    document.getElementById('dropdownMenuTambahKas')?.classList.add('hidden');
    
    // ✅ Format tanggal hari ini untuk input type="date" (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];
    
    const modalHtml = `
    <div class="md-modal-overlay active" id="pembelianModalOverlay">
        <div class="md-modal">
            <div class="md-modal-header">
                <h3><i data-lucide="shopping-cart"></i> Pembelian Barang</h3>
                <button class="md-modal-close" id="pembelianModalClose"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <div class="md-modal-body">
                <form id="pembelianForm">
                    <div class="md-form-grid">
                        <!-- Baris 1: Tanggal & Kode Barang -->
                        <div class="md-form-group">
                            <label>Tanggal Pembelian <span class="required">*</span></label>
                            <input type="date" id="pembelianTanggal" value="${today}" required />
                            <small style="color:#64748b; font-size:0.7rem; margin-top:2px;">Klik untuk memilih tanggal lain</small>
                        </div>
                        <div class="md-form-group">
                            <label>Kode Barang <span class="required">*</span></label>
                            <input type="text" id="pembelianKode" placeholder="Contoh: BRG-001, AG, NU" required />
                        </div>

                        <!-- Baris 2: Nama Barang (Full Width - MANUAL) -->
                        <div class="md-form-group full">
                            <label>Nama Barang <span class="required">*</span></label>
                            <input type="text" id="pembelianNamaBarang" placeholder="Ketik nama barang yang dibeli" required />
                        </div>

                        <!-- Baris 3: Kategori & Supplier (MANUAL) -->
                        <div class="md-form-group">
                            <label>Kategori <span class="required">*</span></label>
                            <select id="pembelianKategori" required>
                                <option value="">-- Pilih Kategori --</option>
                                ${kategoriList.map(k => `<option value="${k}">${k}</option>`).join('')}
                            </select>
                        </div>
                        <div class="md-form-group">
                            <label>Supplier</label>
                            <input type="text" id="pembelianSupplier" placeholder="Nama supplier (opsional)" />
                        </div>

                        <!-- Baris 4: Harga Beli & Harga Jual -->
                        <div class="md-form-group">
                            <label>Harga Beli (Rp) <span class="required">*</span></label>
                            <input type="number" id="pembelianHargaBeli" placeholder="0" min="0" required />
                        </div>
                        <div class="md-form-group">
                            <label>Harga Jual (Rp) <span class="required">*</span></label>
                            <input type="number" id="pembelianHargaJual" placeholder="0" min="0" required />
                        </div>

                        <!-- Baris 5: Jumlah Pembelian -->
                        <div class="md-form-group full">
                            <label>Jumlah Pembelian <span class="required">*</span></label>
                            <input type="number" id="pembelianJumlah" placeholder="0" min="1" value="1" required />
                        </div>

                        <!-- Baris 6: Total Otomatis (Full Width) -->
                        <div class="md-form-group full">
                            <label>Total Pembayaran</label>
                            <div style="padding: 12px 16px; background: linear-gradient(135deg, #f0fdfa, #ecfeff); border: 2px solid #14b8a6; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.85rem; color: #0f766e; font-weight: 600;">
                                    <i data-lucide="calculator" style="width:16px; height:16px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>
                                    Total
                                </span>
                                <span id="pembelianTotalDisplay" style="font-size: 1.2rem; font-weight: 800; color: #0d9488; font-family: 'Courier New', monospace;">Rp 0</span>
                            </div>
                        </div>

                        <!-- Baris 7: Upload / Ambil Foto (Full Width) -->
                        <div class="md-form-group full">
                            <label>Foto Produk</label>
                            <div class="image-upload-container">
                                <div class="image-preview-area" id="pembelianImagePreviewArea">
                                    <div class="upload-placeholder">
                                        <i data-lucide="image-plus" class="w-12 h-12"></i>
                                        <p>Belum ada foto</p>
                                    </div>
                                </div>
                                <div class="image-upload-options">
                                    <label class="upload-btn camera-btn" for="pembelianImageUpload">
                                        <i data-lucide="upload" class="w-4 h-4"></i>
                                        <span>Upload Foto</span>
                                        <input type="file" id="pembelianImageUpload" accept="image/*" style="display: none;" />
                                    </label>
                                    <button type="button" class="upload-btn camera-btn" id="pembelianCameraBtn">
                                        <i data-lucide="camera" class="w-4 h-4"></i>
                                        <span>Ambil Foto</span>
                                    </button>
                                    <button type="button" class="url-toggle-btn" id="pembelianUrlToggleBtn">
                                        <i data-lucide="link" class="w-4 h-4"></i>
                                        <span>Gunakan URL</span>
                                    </button>
                                </div>
                                <div class="image-url-input" id="pembelianImageUrlInput" style="display: none;">
                                    <input type="text" id="pembelianImageUrl" placeholder="https://example.com/gambar.jpg" />
                                    <button type="button" class="apply-url-btn" id="pembelianApplyUrlBtn">Terapkan</button>
                                </div>
                                <small class="upload-hint">Format: JPG, PNG, WebP (Maks. 2MB) • Atau gunakan kamera</small>
                            </div>
                        </div>

                        <!-- Baris 8: Keterangan Tambahan -->
                        <div class="md-form-group full">
                            <label>Keterangan Tambahan</label>
                            <textarea id="pembelianKeterangan" rows="2" placeholder="Catatan tambahan (opsional) - contoh: pembelian darurat, diskon khusus"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="md-modal-footer">
                <button class="md-btn md-btn-cancel" id="pembelianCancelBtn">Batal</button>
                <button class="md-btn md-btn-save" id="pembelianSaveBtn">
                    <i data-lucide="save" class="w-4 h-4"></i> Simpan Pembelian
                </button>
            </div>
        </div>
    </div>`;
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper.firstElementChild);
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // === Camera Modal ===
    const cameraModalHtml = `
    <div class="camera-modal-overlay" id="pembelianCameraModalOverlay" style="display: none;">
        <div class="camera-modal">
            <div class="camera-modal-header">
                <h3><i data-lucide="camera" class="w-5 h-5"></i> Ambil Foto Produk</h3>
                <button class="camera-close-btn" id="pembelianCameraCloseBtn"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <div class="camera-modal-body">
                <div class="camera-container">
                    <video id="pembelianCameraVideo" autoplay playsinline></video>
                    <canvas id="pembelianCameraCanvas" style="display: none;"></canvas>
                </div>
                <div class="camera-controls">
                    <button class="camera-action-btn cancel" id="pembelianCameraCancelBtn"><i data-lucide="x" class="w-5 h-5"></i> Batal</button>
                    <button class="camera-action-btn capture" id="pembelianCameraCaptureBtn"><i data-lucide="camera" class="w-6 h-6"></i> Ambil Foto</button>
                    <button class="camera-action-btn retake" id="pembelianCameraRetakeBtn" style="display: none;"><i data-lucide="rotate-ccw" class="w-5 h-5"></i> Ulangi</button>
                    <button class="camera-action-btn save" id="pembelianCameraSaveBtn" style="display: none;"><i data-lucide="check" class="w-5 h-5"></i> Gunakan</button>
                </div>
            </div>
        </div>
    </div>`;
    const cameraWrapper = document.createElement('div');
    cameraWrapper.innerHTML = cameraModalHtml;
    document.body.appendChild(cameraWrapper.firstElementChild);
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // === Setup Listeners ===
    const inputHargaBeli = document.getElementById('pembelianHargaBeli');
    const inputJumlah = document.getElementById('pembelianJumlah');
    const totalDisplay = document.getElementById('pembelianTotalDisplay');
    const previewArea = document.getElementById('pembelianImagePreviewArea');

    // Auto-calculate total
    const updatePembelianTotal = () => {
        const jumlah = parseInt(inputJumlah.value) || 0;
        const harga = parseInt(inputHargaBeli.value) || 0;
        totalDisplay.textContent = formatRp(jumlah * harga);
    };
    inputJumlah.addEventListener('input', updatePembelianTotal);
    inputHargaBeli.addEventListener('input', updatePembelianTotal);

    // Remove image helper
    window.removePembelianImage = function() {
        previewArea.innerHTML = `
            <div class="upload-placeholder">
                <i data-lucide="image-plus" class="w-12 h-12"></i>
                <p>Belum ada foto</p>
            </div>
        `;
        const fileInput = document.getElementById('pembelianImageUpload');
        const urlInput = document.getElementById('pembelianImageUrl');
        if (fileInput) fileInput.value = '';
        if (urlInput) urlInput.value = '';
        window.pembelianUploadedImage = null;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    // === Upload File Handler ===
    const fileInput = document.getElementById('pembelianImageUpload');
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (!file.type.startsWith('image/')) {
                Notification.warning('File harus berupa gambar!', { duration: 3000 });
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                Notification.warning('Ukuran gambar maksimal 2MB!', { duration: 3000 });
                return;
            }
            window.pembelianUploadedImage = file;
            const reader = new FileReader();
            reader.onload = (ev) => {
                previewArea.innerHTML = `
                    <img src="${ev.target.result}" alt="Preview" class="preview-image" />
                    <button type="button" class="remove-image-btn" id="pembelianRemoveImageBtn">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                `;
                if (typeof lucide !== 'undefined') lucide.createIcons();
                document.getElementById('pembelianRemoveImageBtn')?.addEventListener('click', removePembelianImage);
            };
            reader.readAsDataURL(file);
        });
    }

    // === URL Toggle ===
    const urlToggleBtn = document.getElementById('pembelianUrlToggleBtn');
    const urlInputContainer = document.getElementById('pembelianImageUrlInput');
    const urlInput = document.getElementById('pembelianImageUrl');
    const applyUrlBtn = document.getElementById('pembelianApplyUrlBtn');
    
    if (urlToggleBtn) {
        urlToggleBtn.addEventListener('click', () => {
            if (urlInputContainer.style.display === 'none') {
                urlInputContainer.style.display = 'flex';
                urlInput.focus();
            } else {
                urlInputContainer.style.display = 'none';
            }
        });
    }
    if (applyUrlBtn) {
        applyUrlBtn.addEventListener('click', () => {
            const url = urlInput.value.trim();
            if (!url) { Notification.warning('Masukkan URL gambar!', { duration: 3000 }); return; }
            if (!url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i)) {
                Notification.warning('URL harus berakhiran .jpg, .png, .gif, .webp, atau .svg', { duration: 3000 });
                return;
            }
            window.pembelianUploadedImage = url;
            previewArea.innerHTML = `
                <img src="${url}" alt="Preview" class="preview-image" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23f0f0f0%22 width=%22100%22 height=%22100%22/><text fill=%22%23999%22 x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22>Gambar Tidak Valid</text></svg>'" />
                <button type="button" class="remove-image-btn" id="pembelianRemoveImageBtn">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            `;
            urlInputContainer.style.display = 'none';
            if (typeof lucide !== 'undefined') lucide.createIcons();
            document.getElementById('pembelianRemoveImageBtn')?.addEventListener('click', removePembelianImage);
            Notification.success('URL gambar berhasil diterapkan', { duration: 2000 });
        });
    }

    // === Camera Handlers ===
    setupPembelianCameraHandlers();

    // === Modal Controls ===
    document.getElementById('pembelianModalClose').addEventListener('click', closePembelianModal);
    document.getElementById('pembelianCancelBtn').addEventListener('click', closePembelianModal);
    document.getElementById('pembelianModalOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'pembelianModalOverlay') closePembelianModal();
    });
    document.getElementById('pembelianSaveBtn').addEventListener('click', savePembelian);

    const escHandler = (e) => {
        if (e.key === 'Escape') { closePembelianModal(); document.removeEventListener('keydown', escHandler); }
    };
    document.addEventListener('keydown', escHandler);

    // Focus ke field kode barang
    setTimeout(() => document.getElementById('pembelianKode')?.focus(), 200);
}

// ========================================
// MODAL BIAYA TAMBAHAN (Tanggal Auto + Manual)
// ========================================
function openBiayaTambahanModal() {
    document.getElementById('dropdownMenuTambahKas')?.classList.add('hidden');
    
    // ✅ Format tanggal hari ini untuk input type="date" (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];
    
    const modalHtml = `
    <div class="md-modal-overlay active" id="biayaModalOverlay">
        <div class="md-modal">
            <div class="md-modal-header" style="background: linear-gradient(135deg, #d97706, #f59e0b);">
                <h3><i data-lucide="receipt"></i> Biaya Tambahan</h3>
                <button class="md-modal-close" id="biayaModalClose"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <div class="md-modal-body">
                <form id="biayaForm">
                    <div class="md-form-grid">
                        <!-- Baris 1: Tanggal & Kategori -->
                        <div class="md-form-group">
                            <label>Tanggal <span class="required">*</span></label>
                            <input type="date" id="biayaTanggal" value="${today}" required />
                            <small style="color:#64748b; font-size:0.7rem; margin-top:2px;">Klik untuk memilih tanggal lain</small>
                        </div>
                        <div class="md-form-group">
                            <label>Kategori Biaya <span class="required">*</span></label>
                            <select id="biayaKategori" required>
                                <option value="">-- Pilih Kategori --</option>
                                <option value="Operasional">Operasional</option>
                                <option value="Transport">Transport</option>
                                <option value="Listrik & Air">Listrik & Air</option>
                                <option value="Internet & Telepon">Internet & Telepon</option>
                                <option value="Gaji & Upah">Gaji & Upah</option>
                                <option value="Sewa">Sewa</option>
                                <option value="Perawatan">Perawatan</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>

                        <!-- Baris 2: Uraian (Full Width) -->
                        <div class="md-form-group full">
                            <label>Uraian / Keterangan <span class="required">*</span></label>
                            <input type="text" id="biayaUraian" placeholder="Contoh: Biaya kebersihan, Transport beli barang, dll" required />
                        </div>

                        <!-- Baris 3: Jumlah Biaya (Full Width) -->
                        <div class="md-form-group full">
                            <label>Jumlah Biaya (Rp) <span class="required">*</span></label>
                            <input type="number" id="biayaJumlah" placeholder="0" min="0" required />
                        </div>

                        <!-- Baris 4: Catatan Tambahan (Full Width) -->
                        <div class="md-form-group full">
                            <label>Catatan Tambahan</label>
                            <textarea id="biayaCatatan" rows="2" placeholder="Catatan tambahan (opsional)"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="md-modal-footer">
                <button class="md-btn md-btn-cancel" id="biayaCancelBtn">Batal</button>
                <button class="md-btn md-btn-save" id="biayaSaveBtn" style="background: linear-gradient(135deg, #d97706, #f59e0b);">
                    <i data-lucide="save" class="w-4 h-4"></i> Simpan Biaya
                </button>
            </div>
        </div>
    </div>`;
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper.firstElementChild);
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // === Modal Controls ===
    document.getElementById('biayaModalClose').addEventListener('click', closeBiayaModal);
    document.getElementById('biayaCancelBtn').addEventListener('click', closeBiayaModal);
    document.getElementById('biayaModalOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'biayaModalOverlay') closeBiayaModal();
    });
    document.getElementById('biayaSaveBtn').addEventListener('click', saveBiayaTambahan);

    const escHandler = (e) => {
        if (e.key === 'Escape') { closeBiayaModal(); document.removeEventListener('keydown', escHandler); }
    };
    document.addEventListener('keydown', escHandler);

    // Focus ke field uraian
    setTimeout(() => document.getElementById('biayaUraian')?.focus(), 200);
}

function closeBiayaModal() {
    const overlay = document.getElementById('biayaModalOverlay');
    if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); }
}

function saveBiayaTambahan() { // Tidak perlu async karena tidak ada await yang memblokir
    const tanggal = document.getElementById('biayaTanggal').value;
    const kategori = document.getElementById('biayaKategori').value;
    const uraian = document.getElementById('biayaUraian').value.trim();
    const jumlah = parseInt(document.getElementById('biayaJumlah').value);
    const catatan = document.getElementById('biayaCatatan').value.trim();

    // Validasi
    if (!tanggal) { Notification.warning('Tanggal wajib diisi!', { duration: 3000 }); return; }
    if (!kategori) { Notification.warning('Kategori biaya wajib dipilih!', { duration: 3000 }); return; }
    if (!uraian) { Notification.warning('Uraian biaya wajib diisi!', { duration: 3000 }); return; }
    if (!jumlah || jumlah <= 0) { Notification.warning('Jumlah biaya harus lebih dari 0!', { duration: 3000 }); return; }

    const tanggalFormatted = new Date(tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();

    const kasId = mockKasHarian.length > 0 ? Math.max(...mockKasHarian.map(k => k.id)) + 1 : 1;
    const uraianLengkap = `${kategori.toUpperCase()} - ${uraian}${catatan ? ' (' + catatan + ')' : ''}`;
    const kasData = {
        id: kasId, tanggal: tanggalFormatted, bukti: `BB-${String(kasId).padStart(3, '0')}`,
        uraian: uraianLengkap, inJml: '', inHrg: '', inTot: '',
        outJml: '', outHrg: '', outTot: '', biaya: jumlah, saldo: 0
    };
    
    // Update memori lokal
    mockKasHarian.push(kasData);

    // === UPDATE UI INSTAN ===
    Notification.success(`Biaya "${uraian}" sebesar ${formatRp(jumlah)} berhasil dicatat!`, { duration: 3000 });
    closeBiayaModal(); // Modal langsung tertutup instan
    if (activeTab === 'kas') switchTab('kas');

    // ✅ PERBAIKAN BUG: Sinkronisasi ke Cloud di Background 
    // (Sebelumnya tidak ada kode ini, sehingga data biaya tidak pernah masuk ke Spreadsheet)
    CashflowAPI.save(kasData)
        .then(() => {
            console.log('✅ Data biaya berhasil sync ke cloud');
        })
        .catch((err) => {
            console.error('❌ Gagal sync biaya ke cloud:', err);
            Notification.warning('Biaya tersimpan di lokal, tapi gagal sync ke cloud.', { duration: 4000 });
        });
}

// ========================================
// CAMERA HANDLERS (Pembelian)
// ========================================
function setupPembelianCameraHandlers() {
    const cameraBtn = document.getElementById('pembelianCameraBtn');
    const cameraModal = document.getElementById('pembelianCameraModalOverlay');
    const cameraCloseBtn = document.getElementById('pembelianCameraCloseBtn');
    const cameraVideo = document.getElementById('pembelianCameraVideo');
    const cameraCanvas = document.getElementById('pembelianCameraCanvas');
    const cameraCaptureBtn = document.getElementById('pembelianCameraCaptureBtn');
    const cameraRetakeBtn = document.getElementById('pembelianCameraRetakeBtn');
    const cameraSaveBtn = document.getElementById('pembelianCameraSaveBtn');
    const cameraCancelBtn = document.getElementById('pembelianCameraCancelBtn');
    let stream = null;
    let capturedImage = null;

    const closeCamera = () => {
        if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
        cameraModal.style.display = 'none';
        capturedImage = null;
    };

    if (cameraBtn) {
        cameraBtn.addEventListener('click', async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: false
                });
                cameraVideo.srcObject = stream;
                cameraModal.style.display = 'flex';
                capturedImage = null;
                cameraVideo.style.display = 'block';
                cameraCanvas.style.display = 'none';
                cameraCaptureBtn.style.display = 'flex';
                cameraRetakeBtn.style.display = 'none';
                cameraSaveBtn.style.display = 'none';
            } catch (err) {
                Notification.error('Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan.', { duration: 5000 });
            }
        });
    }
    if (cameraCloseBtn) cameraCloseBtn.addEventListener('click', closeCamera);
    if (cameraCancelBtn) cameraCancelBtn.addEventListener('click', closeCamera);
    if (cameraCaptureBtn) {
        cameraCaptureBtn.addEventListener('click', () => {
            if (!stream) return;
            cameraCanvas.width = cameraVideo.videoWidth;
            cameraCanvas.height = cameraVideo.videoHeight;
            const ctx = cameraCanvas.getContext('2d');
            ctx.drawImage(cameraVideo, 0, 0);
            capturedImage = cameraCanvas.toDataURL('image/jpeg', 0.85);
            cameraVideo.style.display = 'none';
            cameraCanvas.style.display = 'block';
            cameraCaptureBtn.style.display = 'none';
            cameraRetakeBtn.style.display = 'flex';
            cameraSaveBtn.style.display = 'flex';
        });
    }
    if (cameraRetakeBtn) {
        cameraRetakeBtn.addEventListener('click', () => {
            capturedImage = null;
            cameraVideo.style.display = 'block';
            cameraCanvas.style.display = 'none';
            cameraCaptureBtn.style.display = 'flex';
            cameraRetakeBtn.style.display = 'none';
            cameraSaveBtn.style.display = 'none';
        });
    }
    if (cameraSaveBtn) {
        cameraSaveBtn.addEventListener('click', () => {
            if (!capturedImage) return;
            window.pembelianUploadedImage = capturedImage;
            const previewArea = document.getElementById('pembelianImagePreviewArea');
            previewArea.innerHTML = `
                <img src="${capturedImage}" alt="Preview" class="preview-image" />
                <button type="button" class="remove-image-btn" id="pembelianRemoveImageBtn">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            `;
            if (typeof lucide !== 'undefined') lucide.createIcons();
            document.getElementById('pembelianRemoveImageBtn')?.addEventListener('click', removePembelianImage);
            closeCamera();
            Notification.success('Foto berhasil diambil!', { duration: 2000 });
        });
    }
    if (cameraModal) {
        cameraModal.addEventListener('click', (e) => { if (e.target === cameraModal) closeCamera(); });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cameraModal.style.display === 'flex') closeCamera();
    });
}

function closePembelianModal() {
    const overlay = document.getElementById('pembelianModalOverlay');
    const cameraModal = document.getElementById('pembelianCameraModalOverlay');
    if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); }
    if (cameraModal) setTimeout(() => cameraModal.remove(), 300);
    window.pembelianUploadedImage = null;
}

async function savePembelian() {
    const tanggal = document.getElementById('pembelianTanggal').value;
    const kode = document.getElementById('pembelianKode').value.trim().toUpperCase();
    const namaBarang = document.getElementById('pembelianNamaBarang').value.trim();
    const kategori = document.getElementById('pembelianKategori').value;
    const supplier = document.getElementById('pembelianSupplier').value.trim();
    const hargaBeli = parseInt(document.getElementById('pembelianHargaBeli').value);
    const hargaJual = parseInt(document.getElementById('pembelianHargaJual').value);
    const jumlah = parseInt(document.getElementById('pembelianJumlah').value);
    const keterangan = document.getElementById('pembelianKeterangan').value.trim();

    // === VALIDASI ===
    if (!tanggal) { Notification.warning('Tanggal pembelian wajib diisi!', { duration: 3000 }); return; }
    if (!kode) { Notification.warning('Kode barang wajib diisi!', { duration: 3000 }); return; }
    if (!namaBarang) { Notification.warning('Nama barang wajib diisi!', { duration: 3000 }); return; }
    if (!kategori) { Notification.warning('Kategori wajib dipilih!', { duration: 3000 }); return; }
    if (!jumlah || jumlah <= 0) { Notification.warning('Jumlah beli harus lebih dari 0!', { duration: 3000 }); return; }
    if (!hargaBeli || hargaBeli <= 0) { Notification.warning('Harga beli harus lebih dari 0!', { duration: 3000 }); return; }
    if (!hargaJual || hargaJual <= 0) { Notification.warning('Harga jual harus lebih dari 0!', { duration: 3000 }); return; }
    if (hargaJual < hargaBeli) {
        if (!await CustomConfirm.show('Harga jual lebih kecil dari harga beli. Lanjutkan?', {
            type: 'warning', confirmText: 'Lanjutkan', cancelText: 'Batal'
        })) return;
    }

    // === PROSES UPLOAD FOTO (Tetap pakai await karena ini proses lokal/baca file) ===
    let imageData = '';
    if (window.pembelianUploadedImage) {
        if (window.pembelianUploadedImage instanceof File) {
            imageData = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(window.pembelianUploadedImage);
            });
        } else if (typeof window.pembelianUploadedImage === 'string') {
            imageData = window.pembelianUploadedImage;
        }
    }

    const total = jumlah * hargaBeli;
    const tanggalFormatted = new Date(tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();

    // ✅ Array untuk menampung semua Promise API (Sync Background)
    const cloudSyncPromises = []; 

    // === CEK APAKAH BARANG SUDAH ADA DI MASTER DATA ===
    const existingProduct = mockProducts.find(p => p.kode.toLowerCase() === kode.toLowerCase());
    let isNewProduct = false;

    if (existingProduct) {
        existingProduct.stok = (existingProduct.stok || 0) + jumlah;
        existingProduct.hargaBeli = hargaBeli;
        existingProduct.harga = hargaJual;
        if (imageData) existingProduct.image = imageData;
        if (supplier) existingProduct.supplier = supplier;
        
        // ✅ Tampung promise update, JANGAN di-await
        cloudSyncPromises.push(ProductAPI.update(existingProduct)); 
    } else {
        isNewProduct = true;
        const newId = mockProducts.length > 0 ? Math.max(...mockProducts.map(p => p.id)) + 1 : 1;
        const newProduct = {
            id: newId, kode: kode, nama: namaBarang, kategori: kategori,
            tanggal: tanggal, hargaBeli: hargaBeli, harga: hargaJual,
            stok: jumlah, image: imageData, supplier: supplier || '-', kontak: ''
        };
        mockProducts.push(newProduct);
        
        // ✅ Tampung promise save, JANGAN di-await
        cloudSyncPromises.push(ProductAPI.save(newProduct));
    }

    // === TAMBAHKAN KE KAS HARIAN (PENGELUARAN) ===
    const kasId = mockKasHarian.length > 0 ? Math.max(...mockKasHarian.map(k => k.id)) + 1 : 1;
    const uraianPembelian = `PEMBELIAN ${namaBarang}${keterangan ? ' - ' + keterangan : ''}`;
    const kasData = {
        id: kasId, tanggal: tanggalFormatted, bukti: `PB-${String(kasId).padStart(3, '0')}`,
        uraian: uraianPembelian, inJml: '', inHrg: '', inTot: '',
        outJml: jumlah, outHrg: hargaBeli, outTot: total, biaya: '', saldo: 0
    };
    mockKasHarian.push(kasData);
    
    // ✅ Tampung promise save kas, JANGAN di-await
    cloudSyncPromises.push(CashflowAPI.save(kasData));

    // === NOTIFIKASI & UPDATE UI SECARA INSTAN ===
    const pesanSukses = isNewProduct
        ? `✅ Barang baru "${namaBarang}" ditambahkan ke Master Data & stok ${jumlah} unit tercatat!`
        : `✅ Pembelian ${namaBarang} (${jumlah} unit) berhasil! Stok diupdate otomatis.`;

    Notification.success(pesanSukses, { duration: 4000 });
    closePembelianModal(); // Modal langsung tertutup instan

    // Refresh tampilan instan
    if (activeTab === 'kas') switchTab('kas');
    if (activeTab === 'master') refreshMasterData();
    if (activeTab === 'stok') refreshStokView();

    // === SYNC KE CLOUD DI BACKGROUND (Tidak memblokir UI) ===
    Promise.all(cloudSyncPromises)
        .then(() => {
            console.log('✅ Data pembelian berhasil sync ke cloud');
        })
        .catch((err) => {
            console.error('❌ Gagal sync pembelian ke cloud:', err);
            Notification.warning('Data tersimpan di lokal, tapi gagal sync ke cloud. Silakan klik "Sync ke Cloud" nanti.', { duration: 5000 });
        });
}

// ========================================
// CRUD: PENJUALAN
// ========================================
function openEditSaleModal(id) {
  const item = mockPenjualan.find(p => p.id === id);
  if (!item) return;
  const tglValue = parseIndoDate(item.tanggal) || item.tanggal;

  const modalHtml = `
  <div class="md-modal-overlay active" id="editSaleModalOverlay">
    <div class="md-modal">
      <div class="md-modal-header"><h3><i data-lucide="pencil"></i> Edit Transaksi Penjualan</h3><button class="md-modal-close" id="editSaleModalClose"><i data-lucide="x" class="w-5 h-5"></i></button></div>
      <div class="md-modal-body">
        <form id="editSaleForm">
          <div class="md-form-grid">
            <div class="md-form-group"><label>Tanggal <span class="required">*</span></label><input type="date" id="editSaleTgl" value="${tglValue}" required /></div>
            <div class="md-form-group"><label>Kode Barang <span class="required">*</span></label><input type="text" id="editSaleKode" value="${item.kode}" required /></div>
            <div class="md-form-group full"><label>Nama Barang <span class="required">*</span></label><input type="text" id="editSaleNama" value="${item.nama}" required /></div>
            <div class="md-form-group"><label>Jumlah <span class="required">*</span></label><input type="number" id="editSaleJml" value="${item.jumlah}" min="1" required /></div>
            <div class="md-form-group"><label>Harga Jual <span class="required">*</span></label><input type="number" id="editSaleHarga" value="${item.harga}" min="0" required /></div>
            <div class="md-form-group"><label>Harga Beli <span class="required">*</span></label><input type="number" id="editSaleHargaBeli" value="${item.hargaBeli}" min="0" required /></div>
          </div>
        </form>
      </div>
      <div class="md-modal-footer">
        <button class="md-btn md-btn-cancel" id="editSaleCancelBtn">Batal</button>
        <button class="md-btn md-btn-save" id="editSaleSaveBtn"><i data-lucide="save" class="w-4 h-4"></i> Simpan Perubahan</button>
      </div>
    </div>
  </div>`;
  
  const wrapper = document.createElement('div');
  wrapper.innerHTML = modalHtml;
  document.body.appendChild(wrapper.firstElementChild);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  document.getElementById('editSaleModalClose').addEventListener('click', closeEditSaleModal);
  document.getElementById('editSaleCancelBtn').addEventListener('click', closeEditSaleModal);
  document.getElementById('editSaleModalOverlay').addEventListener('click', (e) => { if (e.target.id === 'editSaleModalOverlay') closeEditSaleModal(); });
  document.getElementById('editSaleSaveBtn').addEventListener('click', () => saveEditSale(id));
}

function closeEditSaleModal() {
  const overlay = document.getElementById('editSaleModalOverlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); }
}

async function saveEditSale(id) {
  const tgl = document.getElementById('editSaleTgl').value;
  const kode = document.getElementById('editSaleKode').value.trim();
  const nama = document.getElementById('editSaleNama').value.trim();
  const jml = parseInt(document.getElementById('editSaleJml').value);
  const harga = parseInt(document.getElementById('editSaleHarga').value);
  const hargaBeli = parseInt(document.getElementById('editSaleHargaBeli').value);

  if (!tgl || !kode || !nama || !jml || !harga || !hargaBeli) { Notification.warning('Semua field wajib diisi!', { duration: 3000 }); return; }

  const tanggalFormatted = new Date(tgl).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();
  const total = jml * harga;
  const totalBeli = jml * hargaBeli;
  const untung = total - totalBeli;

  const idx = mockPenjualan.findIndex(p => p.id === id);
  if (idx !== -1) {
    mockPenjualan[idx] = { ...mockPenjualan[idx], tanggal: tanggalFormatted, kode, nama, jumlah: jml, harga, total, hargaBeli, totalBeli, untung };
    await SalesAPI.update(mockPenjualan[idx]);
    Notification.success('Data penjualan berhasil diupdate', { duration: 2500 });
    closeEditSaleModal();
    if (activeTab === 'penjualan') switchTab('penjualan');
    if (activeTab === 'stok') refreshStokView();
  }
}

async function deleteSale(id) {
  const item = mockPenjualan.find(p => p.id === id);
  if (!item) return;
  if (!await CustomConfirm.show(`Hapus transaksi "${item.nama}"?`, { type: 'danger', confirmText: 'Hapus', cancelText: 'Batal', confirmClass: 'btn-danger' })) return;
  
  await SalesAPI.delete(id);
  mockPenjualan = mockPenjualan.filter(p => p.id !== id);
  Notification.success('Data penjualan berhasil dihapus', { duration: 2500 });
  if (activeTab === 'penjualan') switchTab('penjualan');
  if (activeTab === 'stok') refreshStokView();
}

// ========================================
// CRUD: KAS HARIAN
// ========================================
function openEditKasModal(id) {
  const item = mockKasHarian.find(k => k.id === id);
  if (!item) return;
  const tglValue = parseIndoDate(item.tanggal) || item.tanggal;

  const modalHtml = `
  <div class="md-modal-overlay active" id="editKasModalOverlay">
    <div class="md-modal">
      <div class="md-modal-header"><h3><i data-lucide="pencil"></i> Edit Data Kas</h3><button class="md-modal-close" id="editKasModalClose"><i data-lucide="x" class="w-5 h-5"></i></button></div>
      <div class="md-modal-body">
        <form id="editKasForm">
          <div class="md-form-grid">
            <div class="md-form-group"><label>Tanggal <span class="required">*</span></label><input type="date" id="editKasTgl" value="${tglValue}" required /></div>
            <div class="md-form-group full"><label>Uraian <span class="required">*</span></label><input type="text" id="editKasUraian" value="${item.uraian}" required /></div>
            <div class="md-form-group"><label>Penerimaan (Total)</label><input type="number" id="editKasInTot" value="${item.inTot || ''}" min="0" /></div>
            <div class="md-form-group"><label>Pengeluaran (Total)</label><input type="number" id="editKasOutTot" value="${item.outTot || ''}" min="0" /></div>
            <div class="md-form-group"><label>Biaya</label><input type="number" id="editKasBiaya" value="${item.biaya || ''}" min="0" /></div>
          </div>
        </form>
      </div>
      <div class="md-modal-footer">
        <button class="md-btn md-btn-cancel" id="editKasCancelBtn">Batal</button>
        <button class="md-btn md-btn-save" id="editKasSaveBtn"><i data-lucide="save" class="w-4 h-4"></i> Simpan Perubahan</button>
      </div>
    </div>
  </div>`;
  
  const wrapper = document.createElement('div');
  wrapper.innerHTML = modalHtml;
  document.body.appendChild(wrapper.firstElementChild);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  document.getElementById('editKasModalClose').addEventListener('click', closeEditKasModal);
  document.getElementById('editKasCancelBtn').addEventListener('click', closeEditKasModal);
  document.getElementById('editKasModalOverlay').addEventListener('click', (e) => { if (e.target.id === 'editKasModalOverlay') closeEditKasModal(); });
  document.getElementById('editKasSaveBtn').addEventListener('click', () => saveEditKas(id));
}

function closeEditKasModal() {
  const overlay = document.getElementById('editKasModalOverlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); }
}

async function saveEditKas(id) {
  const tgl = document.getElementById('editKasTgl').value;
  const uraian = document.getElementById('editKasUraian').value.trim();
  const inTot = parseInt(document.getElementById('editKasInTot').value) || '';
  const outTot = parseInt(document.getElementById('editKasOutTot').value) || '';
  const biaya = parseInt(document.getElementById('editKasBiaya').value) || '';

  if (!tgl || !uraian) { Notification.warning('Tanggal dan Uraian wajib diisi!', { duration: 3000 }); return; }

  const tanggalFormatted = new Date(tgl).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();

  const idx = mockKasHarian.findIndex(k => k.id === id);
  if (idx !== -1) {
    mockKasHarian[idx] = { ...mockKasHarian[idx], tanggal: tanggalFormatted, uraian, inTot, outTot, biaya };
    await CashflowAPI.update(mockKasHarian[idx]);
    Notification.success('Data kas berhasil diupdate', { duration: 2500 });
    closeEditKasModal();
    if (activeTab === 'kas') switchTab('kas');
    if (activeTab === 'stok') refreshStokView();
  }
}

async function deleteKas(id) {
  const item = mockKasHarian.find(k => k.id === id);
  if (!item) return;
  if (!await CustomConfirm.show(`Hapus data kas "${item.uraian}"?`, { type: 'danger', confirmText: 'Hapus', cancelText: 'Batal', confirmClass: 'btn-danger' })) return;
  
  await CashflowAPI.delete(id);
  mockKasHarian = mockKasHarian.filter(k => k.id !== id);
  Notification.success('Data kas berhasil dihapus', { duration: 2500 });
  if (activeTab === 'kas') switchTab('kas');
  if (activeTab === 'stok') refreshStokView();
}

// ========================================
// CRUD: REKAP
// ========================================
function openEditRekapModal(id, type) {
  const item = mockRekap.find(r => r.id === id);
  if (!item) return;
  const bln = type === 'in' ? item.blnIn : item.blnOut;
  const uraian = type === 'in' ? item.uraianIn : item.uraianOut;
  const jml = type === 'in' ? item.jmlIn : item.jmlOut;

  const modalHtml = `
  <div class="md-modal-overlay active" id="editRekapModalOverlay">
    <div class="md-modal">
      <div class="md-modal-header"><h3><i data-lucide="pencil"></i> Edit Data Rekap (${type === 'in' ? 'Penerimaan' : 'Pengeluaran'})</h3><button class="md-modal-close" id="editRekapModalClose"><i data-lucide="x" class="w-5 h-5"></i></button></div>
      <div class="md-modal-body">
        <form id="editRekapForm">
          <div class="md-form-grid">
            <div class="md-form-group"><label>Bulan <span class="required">*</span></label><input type="text" id="editRekapBln" value="${bln}" placeholder="JAN" required /></div>
            <div class="md-form-group"><label>Jumlah <span class="required">*</span></label><input type="number" id="editRekapJml" value="${jml}" min="0" required /></div>
            <div class="md-form-group full"><label>Uraian <span class="required">*</span></label><input type="text" id="editRekapUraian" value="${uraian}" required /></div>
          </div>
        </form>
      </div>
      <div class="md-modal-footer">
        <button class="md-btn md-btn-cancel" id="editRekapCancelBtn">Batal</button>
        <button class="md-btn md-btn-save" id="editRekapSaveBtn"><i data-lucide="save" class="w-4 h-4"></i> Simpan Perubahan</button>
      </div>
    </div>
  </div>`;
  
  const wrapper = document.createElement('div');
  wrapper.innerHTML = modalHtml;
  document.body.appendChild(wrapper.firstElementChild);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  document.getElementById('editRekapModalClose').addEventListener('click', closeEditRekapModal);
  document.getElementById('editRekapCancelBtn').addEventListener('click', closeEditRekapModal);
  document.getElementById('editRekapModalOverlay').addEventListener('click', (e) => { if (e.target.id === 'editRekapModalOverlay') closeEditRekapModal(); });
  document.getElementById('editRekapSaveBtn').addEventListener('click', () => saveEditRekap(id, type));
}

function closeEditRekapModal() {
  const overlay = document.getElementById('editRekapModalOverlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); }
}

async function saveEditRekap(id, type) {
  const bln = document.getElementById('editRekapBln').value.trim();
  const uraian = document.getElementById('editRekapUraian').value.trim();
  const jml = parseInt(document.getElementById('editRekapJml').value);

  if (!bln || !uraian || isNaN(jml)) { Notification.warning('Semua field wajib diisi!', { duration: 3000 }); return; }

  const idx = mockRekap.findIndex(r => r.id === id);
  if (idx !== -1) {
    if (type === 'in') { mockRekap[idx].blnIn = bln; mockRekap[idx].uraianIn = uraian; mockRekap[idx].jmlIn = jml; }
    else { mockRekap[idx].blnOut = bln; mockRekap[idx].uraianOut = uraian; mockRekap[idx].jmlOut = jml; }
    
    await RekapAPI.update(mockRekap[idx]);
    Notification.success('Data rekap berhasil diupdate', { duration: 2500 });
    closeEditRekapModal();
    if (activeTab === 'rekap') switchTab('rekap');
  }
}

async function deleteRekap(id, type) {
  const item = mockRekap.find(r => r.id === id);
  if (!item) return;
  const uraian = type === 'in' ? item.uraianIn : item.uraianOut;
  if (!await CustomConfirm.show(`Hapus data rekap "${uraian}"?`, { type: 'danger', confirmText: 'Hapus', cancelText: 'Batal', confirmClass: 'btn-danger' })) return;
  
  if (type === 'in') { item.blnIn = ''; item.uraianIn = ''; item.jmlIn = ''; }
  else { item.blnOut = ''; item.uraianOut = ''; item.jmlOut = ''; }
  
  if (!item.blnIn && !item.blnOut) {
    await RekapAPI.delete(id);
    mockRekap = mockRekap.filter(r => r.id !== id);
  } else {
    await RekapAPI.update(item);
  }
  
  Notification.success('Data rekap berhasil dihapus', { duration: 2500 });
  if (activeTab === 'rekap') switchTab('rekap');
}

function renderTabStok() {
  const selectedProduct = mockProducts.find(p => p.id === kartuStokState.selectedProductId);
  const riwayatStok = generateStokHistory(selectedProduct);

  return `
  <div class="space-y-4 pb-20 animate-tab">
    <div class="stok-card no-print-header">
      <div class="stok-card-header">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <div class="stok-card-icon"><i data-lucide="package" class="w-6 h-6"></i></div>
          <div class="stok-card-title min-w-0">
            <h2>Kartu Stok Barang</h2>
            <p>Pantau pergerakan stok barang secara detail</p>
            <p class="text-xs text-teal-600 font-semibold mt-1">RPTRA Kenanga</p>
          </div>
        </div>
        <button class="no-print bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0 w-11 h-11 rounded-full p-0 sm:w-auto sm:h-10 sm:rounded-lg sm:px-4 sm:gap-2" onclick="window.print()">
          <div class="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm flex-shrink-0 sm:w-7 sm:h-7 sm:rounded-md">
            <i data-lucide="printer" class="w-7 h-7 text-amber-500 object-contain sm:w-4 sm:h-4"></i>
          </div>
          <span class="hidden sm:inline text-xs font-semibold whitespace-nowrap">Print</span>
        </button>
      </div>
      <div class="stok-selector no-print">
        <label for="stokProductSelect" class="stok-selector-label"><i data-lucide="search" class="w-4 h-4"></i> Pilih Barang</label>
        <select id="stokProductSelect" class="stok-selector-dropdown">
          ${mockProducts.map(p => `<option value="${p.id}" ${p.id === kartuStokState.selectedProductId ? 'selected' : ''}>${p.nama}</option>`).join('')}
        </select>
      </div>
    </div>

    <div class="stok-print-header hidden">
      <div class="stok-print-header-content">
        <img src="asset/logo-rptra.png" alt="Logo" class="stok-print-logo" />
        <h2 class="stok-print-title">KARTU STOK BARANG</h2>
        <p class="stok-print-subtitle nama-barang">${selectedProduct?.nama || '-'}</p>
        <p class="stok-print-subtitle"><strong>${selectedProduct?.kode || '-'}</strong></p>
        <p class="stok-print-subtitle"><strong>${selectedProduct?.supplier || '-'}</strong></p>
      </div>
    </div>

    ${selectedProduct ? `
    <div class="stok-card no-print">
      <div class="stok-info-grid">
        <div class="stok-info-item"><div class="stok-info-label"><i data-lucide="package" class="w-3.5 h-3.5"></i> Nama Barang</div><div class="stok-info-value">${selectedProduct.nama}</div></div>
        <div class="stok-info-item"><div class="stok-info-label"><i data-lucide="hash" class="w-3.5 h-3.5"></i> Kode Barang</div><div class="stok-info-value code">${selectedProduct.kode}</div></div>
        <div class="stok-info-item"><div class="stok-info-label"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Supplier</div><div class="stok-info-value">${selectedProduct.supplier || '-'}</div></div>
        <div class="stok-info-item"><div class="stok-info-label"><i data-lucide="phone" class="w-3.5 h-3.5"></i> No. Kontak</div><div class="stok-info-value">${selectedProduct.kontak || '-'}</div></div>
      </div>
    </div>
    ` : ''}

    <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-xs text-center whitespace-nowrap border-collapse">
          <thead class="text-[10px] text-white bg-teal-600 uppercase tracking-wide">
            <tr>
              <th class="px-2 py-1.5 border-r border-teal-500">No</th>
              <th class="px-2 py-1.5 border-r border-teal-500 text-left">Tanggal</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Masuk</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Keluar</th>
              <th class="px-2 py-1.5 border-r border-teal-500 font-bold">Sisa</th>
              <th class="px-2 py-1.5 border-r border-teal-500">Paraf</th>
              <!-- ✅ KOLOM AKSI DITAMBAHKAN -->
              <th class="px-2 py-1.5 no-print">Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${riwayatStok.map((item, index) => `
              <tr class="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td class="px-2 py-1.5 border-r border-slate-200">${index + 1}</td>
                <td class="px-2 py-1.5 font-medium text-slate-800 border-r border-slate-200 text-left ${item.tanggal.includes('SISA') ? 'font-bold bg-slate-50' : ''}">${item.tanggal}</td>
                <td class="px-2 py-1.5 text-teal-600 font-medium border-r border-slate-200">${item.masuk || '-'}</td>
                <td class="px-2 py-1.5 text-rose-600 font-medium border-r border-slate-200">${item.keluar || '-'}</td>
                <td class="px-2 py-1.5 font-bold border-r border-slate-200 bg-slate-50 text-slate-800">${item.sisa}</td>
                <td class="px-2 py-1.5 text-slate-400 border-r border-slate-200">${item.paraf}</td>
                
                <!-- ✅ TOMBOL AKSI DITAMBAHKAN -->
                <td class="px-2 py-1.5 no-print">
                  ${item.sourceId ? `
                  <div class="action-btns">
                    <button class="action-icon-btn edit" data-edit-stok="${item.sourceId}" data-stok-type="${item.sourceType}" title="Edit"><i data-lucide="pencil"></i></button>
                    <button class="action-icon-btn delete" data-delete-stok="${item.sourceId}" data-stok-type="${item.sourceType}" title="Hapus"><i data-lucide="trash-2"></i></button>
                  </div>` : ''}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="stok-notes no-print">
      <div class="stok-notes-header"><i data-lucide="info" class="w-4 h-4"></i><h4>Catatan Pengisian</h4></div>
      <ol class="stok-notes-list">
        <li>Kartu stok dibuat per item barang.</li>
        <li>Kartu stok diisi setiap ada transaksi dan diparaf.</li>
        <li>Pengisian kartu stok berlanjut.</li>
        <li>Setiap pengisian lembar baru, dituliskan saldo akhir barang.</li>
      </ol>
    </div>
  </div>
  `;
}

// ✅ FUNGSI INI DIPERBARUI: Menambahkan sourceId dan sourceType
function generateStokHistory(product) {
  if (!product) return [];
  const history = [];
  let runningStock = 0;

  // 1. Stok awal dari Master Data
  if (product.tanggal && product.stok > 0) {
    const tanggalMasuk = new Date(product.tanggal).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    }).toUpperCase();
    history.push({
      id: 1, tanggal: tanggalMasuk, masuk: product.stok, keluar: '', sisa: product.stok, paraf: '✓',
      sourceId: product.id, sourceType: 'master' // ✅ TAMBAHKAN
    });
    runningStock = product.stok;
  }

  // 2. Transaksi penjualan
  const transaksiProduk = mockPenjualan
    .filter(p => p.kode === product.kode)
    .sort((a, b) => (parseIndoDateToTimestamp(a.tanggal) || new Date(a.tanggal).getTime()) - (parseIndoDateToTimestamp(b.tanggal) || new Date(b.tanggal).getTime()));

  transaksiProduk.forEach((transaksi) => {
    runningStock -= transaksi.jumlah;
    history.push({
      id: history.length + 1, tanggal: transaksi.tanggal, masuk: '', keluar: transaksi.jumlah, sisa: runningStock, paraf: '✓',
      sourceId: transaksi.id, sourceType: 'penjualan' // ✅ TAMBAHKAN
    });
  });

  // 3. Pembelian / Restock
  const pembelianProduk = mockKasHarian
    .filter(k => k.uraian.includes(product.nama) && k.uraian.includes('PEMBELIAN'))
    .sort((a, b) => (parseIndoDateToTimestamp(a.tanggal) || new Date(a.tanggal).getTime()) - (parseIndoDateToTimestamp(b.tanggal) || new Date(b.tanggal).getTime()));

  pembelianProduk.forEach((pembelian) => {
    if (pembelian.outJml) {
      runningStock += pembelian.outJml;
      history.push({
        id: history.length + 1, tanggal: pembelian.tanggal, masuk: pembelian.outJml, keluar: '', sisa: runningStock, paraf: '✓',
        sourceId: pembelian.id, sourceType: 'pembelian' // ✅ TAMBAHKAN
      });
    }
  });

  // 4. Sort history berdasarkan tanggal
  history.sort((a, b) => {
    const dateA = parseIndoDateToTimestamp(a.tanggal) || new Date(a.tanggal).getTime();
    const dateB = parseIndoDateToTimestamp(b.tanggal) || new Date(b.tanggal).getTime();
    return dateA - dateB;
  });

  // 5. Re-numbering dan recalculate running stock
  let finalStock = 0;
  return history.map((item, index) => {
    if (index === 0 && item.masuk) {
      finalStock = parseInt(item.masuk);
    } else if (item.masuk) {
      finalStock += parseInt(item.masuk);
    } else if (item.keluar) {
      finalStock -= parseInt(item.keluar);
    }
    return {
      ...item, // ✅ Ini akan menyertakan sourceId dan sourceType
      sisa: finalStock,
      id: index + 1
    };
  });
}

function renderTabRekap() {
  return `
  <div class="space-y-4 pb-20 animate-tab">
    <!-- Header Laporan -->
    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <div class="flex flex-row justify-between items-center gap-3">
        <div class="min-w-0 flex-1 text-left">
          <h2 class="text-lg font-bold text-slate-800 truncate">Rekap Laporan Keuangan</h2>
          <p class="text-xs text-slate-500">Tahun 2026</p>
          <p class="text-xs text-teal-600 font-semibold mt-1">RPTRA Kenanga</p>
        </div>
        <button class="no-print bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0 w-11 h-11 rounded-full p-0 sm:w-auto sm:h-10 sm:rounded-lg sm:px-4 sm:gap-2" onclick="window.print()">
          <div class="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm flex-shrink-0 sm:w-7 sm:h-7 sm:rounded-md">
            <i data-lucide="printer" class="w-7 h-7 text-amber-500 object-contain sm:w-4 sm:h-4"></i>
          </div>
          <span class="hidden sm:inline text-xs font-semibold whitespace-nowrap">Print</span>
        </button>
      </div>
    </div>

    <!-- Tabel Data -->
    <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-xs text-center whitespace-nowrap border-collapse">
          <thead class="text-[10px] text-white uppercase tracking-wide">
            <tr>
              <!-- ✅ COLSPAN DIUBAH DARI 4 MENJADI 5 -->
              <th colspan="5" class="px-2 py-1.5 border-r border-teal-500 bg-teal-600 font-bold">PENERIMAAN</th>
              <th colspan="5" class="px-2 py-1.5 bg-rose-600 font-bold">PENGELUARAN</th>
            </tr>
            <tr class="bg-slate-100 text-slate-700">
              <th class="px-2 py-1.5 border-r border-slate-300 w-10">No</th>
              <th class="px-2 py-1.5 border-r border-slate-300">Bulan</th>
              <th class="px-2 py-1.5 border-r border-slate-300">Uraian</th>
              <th class="px-2 py-1.5 border-r border-teal-500 text-right">Jumlah</th>
              <!-- ✅ KOLOM AKSI PENERIMAAN -->
              <th class="px-2 py-1.5 border-r border-teal-500 text-center no-print">Aksi</th>
              
              <th class="px-2 py-1.5 border-r border-slate-300 w-10">No</th>
              <th class="px-2 py-1.5 border-r border-slate-300">Bulan</th>
              <th class="px-2 py-1.5 border-r border-slate-300">Uraian</th>
              <th class="px-2 py-1.5 text-right">Jumlah</th>
              <!-- ✅ KOLOM AKSI PENGELUARAN -->
              <th class="px-2 py-1.5 text-center no-print">Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${mockRekap.map((item, index) => `
              <tr class="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td class="px-2 py-1.5 border-r border-slate-200 text-slate-500">${item.blnIn ? index + 1 : ''}</td>
                <td class="px-2 py-1.5 font-medium border-r border-slate-200">${item.blnIn}</td>
                <td class="px-2 py-1.5 border-r border-slate-200 text-left">${item.uraianIn}</td>
                <td class="px-2 py-1.5 text-right text-teal-600 font-medium border-r border-teal-500">${formatRp(item.jmlIn)}</td>
                
                <!-- ✅ TOMBOL AKSI PENERIMAAN -->
                <td class="px-2 py-1.5 text-center border-r border-teal-500 no-print">
                  ${item.blnIn ? `<div class="action-btns justify-center">
                    <button class="action-icon-btn edit" data-edit-rekap-in="${item.id}" title="Edit"><i data-lucide="pencil"></i></button>
                    <button class="action-icon-btn delete" data-delete-rekap-in="${item.id}" title="Hapus"><i data-lucide="trash-2"></i></button>
                  </div>` : ''}
                </td>

                <td class="px-2 py-1.5 border-r border-slate-200 text-slate-500">${item.blnOut ? index + 5 : ''}</td>
                <td class="px-2 py-1.5 font-medium border-r border-slate-200">${item.blnOut}</td>
                <td class="px-2 py-1.5 border-r border-slate-200 text-left">${item.uraianOut}</td>
                <td class="px-2 py-1.5 text-right text-rose-600 font-medium">${formatRp(item.jmlOut)}</td>
                
                <!-- ✅ TOMBOL AKSI PENGELUARAN -->
                <td class="px-2 py-1.5 text-center no-print">
                  ${item.blnOut ? `<div class="action-btns justify-center">
                    <button class="action-icon-btn edit" data-edit-rekap-out="${item.id}" title="Edit"><i data-lucide="pencil"></i></button>
                    <button class="action-icon-btn delete" data-delete-rekap-out="${item.id}" title="Hapus"><i data-lucide="trash-2"></i></button>
                  </div>` : ''}
                </td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot class="bg-teal-50 font-bold">
            <tr>
              <td colspan="3" class="px-2 py-1.5 text-right border-r border-slate-200">JUMLAH PENERIMAAN</td>
              <td class="px-2 py-1.5 text-right text-teal-700 border-r border-teal-500">${formatRp(633000)}</td>
              <!-- ✅ CELL KOSONG UNTUK KOLOM AKSI -->
              <td class="px-2 py-1.5 border-r border-teal-500"></td>
              
              <td colspan="3" class="px-2 py-1.5 text-right border-r border-slate-200">JUMLAH PENGELUARAN</td>
              <td class="px-2 py-1.5 text-right text-rose-700">${formatRp(620400)}</td>
              <!-- ✅ CELL KOSONG UNTUK KOLOM AKSI -->
              <td class="px-2 py-1.5"></td>
            </tr>
            <tr>
              <!-- ✅ COLSPAN DIUBAH DARI 7 MENJADI 8 -->
              <td colspan="8" class="px-2 py-1.5 text-right border-r border-slate-200 bg-slate-100">KEUNTUNGAN BERSIH</td>
              <td class="px-2 py-1.5 text-right font-bold text-teal-700 bg-slate-100">${formatRp(12600)}</td>
              <!-- ✅ CELL KOSONG DI AKHIR -->
              <td class="px-2 py-1.5 bg-slate-100"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  `;
}

function renderContent(tabId) {
  const contentMap = { 
    'dashboard': renderTabDashboard,
    'penjualan': renderTabPenjualan, 
    'kas': renderTabKasHarian, 
    'stok': renderTabStok, 
    'rekap': renderTabRekap,
    'master': renderTabMasterData, // ✅ TAB BARU
  };
  return contentMap[tabId]?.() || renderTabPenjualan();
}

function renderBottomNav() {
  const navContainer = document.getElementById('bottomNav');
  if (!navContainer) return;
  
  const currentTabs = getTabs();
  
  // Jika tab aktif tidak ada di list (misal user logout dari admin), reset ke penjualan
  if (!currentTabs.find(t => t.id === activeTab)) {
    activeTab = 'penjualan';
  }
  
  navContainer.innerHTML = currentTabs.map(tab => {
    const isActive = activeTab === tab.id;
    return `<button data-tab="${tab.id}" class="nav-btn flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-200 ${isActive ? 'text-teal-700 bg-teal-50 shadow-sm' : 'text-slate-400 hover:text-teal-600 hover:bg-slate-50'}"><i data-lucide="${tab.icon}" class="w-6 h-6 mb-1 transition-transform duration-200 ${isActive ? 'scale-110' : ''}"></i><span class="text-[10px] sm:text-xs ${isActive ? 'font-bold' : 'font-medium'}">${tab.label}</span></button>`;
  }).join('');
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => switchTab(e.currentTarget.dataset.tab));
  });
}

function switchTab(tabId) {
    activeTab = tabId;
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.innerHTML = renderContent(tabId);
        if (typeof lucide !== 'undefined') lucide.createIcons();
        const animatedContent = mainContent.querySelector('.animate-tab');
        if (animatedContent) {
            animatedContent.style.animation = 'none';
            setTimeout(() => animatedContent.style.animation = 'fadeInZoom 0.2s ease-out forwards', 10);
        }
        
        // ✅ Setup listeners khusus
        if (tabId === 'master') setupMasterDataListeners();
        if (tabId === 'stok') {
          setupStokListeners();
          setupStokAksiListeners(); 
        }
          if (tabId === 'kas') {
            setupKasHarianListeners();
            setupKasAksiListeners(); 
          }
          if (tabId === 'penjualan') setupPenjualanListeners();
          if (tabId === 'rekap') setupRekapListeners(); 
  }
    renderBottomNav();
}

function setupStokListeners() {
  const selectDropdown = document.getElementById('stokProductSelect');
  if (selectDropdown) {
    selectDropdown.addEventListener('change', (e) => {
      kartuStokState.selectedProductId = parseInt(e.target.value);
      refreshStokView();
    });
  }
}

function refreshStokView() {
  const mainContent = document.getElementById('mainContent');
  if (mainContent && activeTab === 'stok') {
    mainContent.innerHTML = renderTabStok();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setupStokListeners();
  }
}

function setupPenjualanListeners() {
  document.querySelectorAll('[data-edit-sale]').forEach(btn => {
    btn.addEventListener('click', () => openEditSaleModal(parseInt(btn.dataset.editSale)));
  });
  document.querySelectorAll('[data-delete-sale]').forEach(btn => {
    btn.addEventListener('click', () => deleteSale(parseInt(btn.dataset.deleteSale)));
  });
}

function setupRekapListeners() {
  document.querySelectorAll('[data-edit-rekap-in]').forEach(btn => {
    btn.addEventListener('click', () => openEditRekapModal(parseInt(btn.dataset.editRekapIn), 'in'));
  });
  document.querySelectorAll('[data-delete-rekap-in]').forEach(btn => {
    btn.addEventListener('click', () => deleteRekap(parseInt(btn.dataset.deleteRekapIn), 'in'));
  });
  document.querySelectorAll('[data-edit-rekap-out]').forEach(btn => {
    btn.addEventListener('click', () => openEditRekapModal(parseInt(btn.dataset.editRekapOut), 'out'));
  });
  document.querySelectorAll('[data-delete-rekap-out]').forEach(btn => {
    btn.addEventListener('click', () => deleteRekap(parseInt(btn.dataset.deleteRekapOut), 'out'));
  });
}

// ========================================
// EVENT LISTENERS TAMBAHAN UNTUK TOMBOL AKSI
// ========================================

// --- Kas Harian ---
function setupKasAksiListeners() {
  document.querySelectorAll('[data-edit-kas]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.editKas);
      Notification.info(`Fitur edit kas ID ${id} sedang dalam pengembangan.`, { duration: 2500 });
    });
  });

  document.querySelectorAll('[data-delete-kas]').forEach(btn => {
    btn.addEventListener('click', () => deleteKas(parseInt(btn.dataset.deleteKas)));
  });
}

async function deleteKas(id) {
  const item = mockKasHarian.find(k => k.id === id);
  if (!item) return;

  if (!await CustomConfirm.show(`Hapus data kas "${item.uraian}"?`, {
    type: 'danger', confirmText: 'Hapus', cancelText: 'Batal', confirmClass: 'btn-danger'
  })) return;

  mockKasHarian = mockKasHarian.filter(k => k.id !== id);
  if (typeof CashflowAPI !== 'undefined' && CashflowAPI.delete) {
    CashflowAPI.delete(id).catch(err => console.warn('Gagal hapus kas dari cloud:', err));
  }

  Notification.success(`Data kas "${item.uraian}" berhasil dihapus`, { duration: 2500 });
  if (activeTab === 'kas') switchTab('kas');
}

// --- Kartu Stok ---
function setupStokAksiListeners() {
  document.querySelectorAll('[data-edit-stok]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sourceId = parseInt(btn.dataset.editStok);
      const sourceType = btn.dataset.stokType;
      Notification.info(`Fitur edit stok dari ${sourceType} (ID: ${sourceId}) sedang dalam pengembangan.`, { duration: 2500 });
    });
  });

  document.querySelectorAll('[data-delete-stok]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sourceId = parseInt(btn.dataset.deleteStok);
      const sourceType = btn.dataset.stokType;
      deleteStok(sourceId, sourceType);
    });
  });
}

async function deleteStok(sourceId, sourceType) {
  if (!await CustomConfirm.show(`Hapus transaksi ini? Data stok akan diperbarui otomatis.`, {
    type: 'danger', confirmText: 'Hapus', cancelText: 'Batal', confirmClass: 'btn-danger'
  })) return;

  if (sourceType === 'penjualan') {
    mockPenjualan = mockPenjualan.filter(p => p.id !== sourceId);
    if (typeof SalesAPI !== 'undefined' && SalesAPI.delete) SalesAPI.delete(sourceId).catch(err => console.warn(err));
  } else if (sourceType === 'pembelian') {
    mockKasHarian = mockKasHarian.filter(k => k.id !== sourceId);
    if (typeof CashflowAPI !== 'undefined' && CashflowAPI.delete) CashflowAPI.delete(sourceId).catch(err => console.warn(err));
  } else if (sourceType === 'master') {
    Notification.warning('Stok awal dari Master Data tidak bisa dihapus dari sini. Silakan edit di Master Data.', { duration: 4000 });
    return;
  }

  Notification.success('Transaksi berhasil dihapus. Stok diperbarui.', { duration: 2500 });
  if (activeTab === 'stok') refreshStokView();
}

// --- Rekap ---
function setupRekapListeners() {
  document.querySelectorAll('[data-edit-rekap-in]').forEach(btn => {
    btn.addEventListener('click', () => Notification.info(`Fitur edit rekap penerimaan sedang dalam pengembangan.`, { duration: 2500 }));
  });
  document.querySelectorAll('[data-delete-rekap-in]').forEach(btn => {
    btn.addEventListener('click', () => Notification.info(`Fitur hapus rekap penerimaan sedang dalam pengembangan.`, { duration: 2500 }));
  });
  document.querySelectorAll('[data-edit-rekap-out]').forEach(btn => {
    btn.addEventListener('click', () => Notification.info(`Fitur edit rekap pengeluaran sedang dalam pengembangan.`, { duration: 2500 }));
  });
  document.querySelectorAll('[data-delete-rekap-out]').forEach(btn => {
    btn.addEventListener('click', () => Notification.info(`Fitur hapus rekap pengeluaran sedang dalam pengembangan.`, { duration: 2500 }));
  });
}

function renderDecoratorLine() {
  const container = document.getElementById('decoratorLine');
  if (!container) return;
  let html = '';
  for (let i = 0; i < 20; i++) {
    const colorClass = i % 2 === 0 ? 'bg-yellow-400' : 'bg-lime-500';
    html += `<div class="flex-1 ${colorClass}" style="border-bottom-left-radius: 50%; border-bottom-right-radius: 50%"></div>`;
  }
  container.innerHTML = html;
}

// ========================================
// BACKGROUND REAL-TIME SYNC (SMART POLLING)
// ========================================
let syncIntervalId = null;

function startBackgroundSync() {
    if (syncIntervalId) clearInterval(syncIntervalId);
    
    // Cek spreadsheet setiap 2 detik (bisa diubah, misal 10000 untuk 10 detik)
    syncIntervalId = setInterval(async () => {
        await silentSyncFromCloud();
    }, 2000); 
}

async function silentSyncFromCloud() {
    try {
        const [products, sales, cashflow, rekap] = await Promise.all([
            ProductAPI.getAll(),
            SalesAPI.getAll(),
            CashflowAPI.getAll(),
            RekapAPI.getAll()
        ]);
        
        let hasChanges = false;
        
        // ✅ PERBAIKAN: Gunakan String() agar perbandingan tidak error karena beda tipe data (Number vs String)
        const checkChange = (localArr, cloudArr) => {
            if (localArr.length !== cloudArr.length) return true;
            for (let i = 0; i < localArr.length; i++) {
                if (String(localArr[i].id) !== String(cloudArr[i].id)) return true;
            }
            return false;
        };

        if (checkChange(mockProducts, products)) { mockProducts = products; hasChanges = true; }
        if (checkChange(mockPenjualan, sales)) { mockPenjualan = sales; hasChanges = true; }
        if (checkChange(mockKasHarian, cashflow)) { mockKasHarian = cashflow; hasChanges = true; }
        if (checkChange(mockRekap, rekap)) { mockRekap = rekap; hasChanges = true; }
        
        if (hasChanges) {
            const isModalOpen = document.querySelector(
                '.md-modal-overlay.active, ' +
                '.login-overlay.active, ' +
                '.settings-modal-overlay.active, ' +
                '.profile-modal-overlay.active, ' +
                '#posPageContainer.active, ' +
                '.custom-confirm-overlay.show, ' +
                '.qty-modal.active, ' +
                '.camera-modal-overlay'
            );
            
            if (!isModalOpen && activeTab) {
                switchTab(activeTab);
            }
        }
        
    } catch (err) {
        console.warn('Background sync skipped:', err.message);
    }
}

// ========================================
// INIT APP
// ========================================
async function initApp() {
    // ✅ PENTING: Load session auth SEBELUM render UI lainnya
    loadAuthSession();
    loadSettingsFromStorage();
    renderDecoratorLine();

    // ✅ RENDER UI SECARA INSTAN (Tanpa menunggu data dari cloud)
    renderBottomNav(); 
    switchTab(authState.isLoggedIn ? 'dashboard' : 'penjualan');

    if (typeof lucide !== 'undefined') lucide.createIcons();

    const notifBtn = document.getElementById('notifBtn');
    if (notifBtn) notifBtn.addEventListener('click', () => Notification.info('Tidak ada notifikasi baru', { duration: 1500 }));

    document.addEventListener('click', (e) => {
        if (e.target.closest('#btnTambahTransaksi')) openPOS();
    });

    renderUserMenu();

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-menu-wrapper')) {
            closeUserDropdown();
        }
    });

    if (!authState.isLoggedIn) showLoginScreen();

    // ✅ LOAD DATA DARI CLOUD DI BACKGROUND (Tidak memblokir UI)
    // ❌ HAPUS 'await' AGAR HALAMAN LANGSUNG TAMPIL
    SyncManager.loadFromCloud()
        .then(() => {
            // Setelah data cloud masuk, refresh tab yang sedang aktif agar data terbaru muncul
            if (activeTab) {
                switchTab(activeTab);
            }
        })
        .catch(err => {
            console.warn('Gagal load dari cloud, menggunakan data lokal:', err);
        });

    // ✅ START BACKGROUND REAL-TIME SYNC (Cek Spreadsheet setiap 2 detik)
    startBackgroundSync();
}

document.addEventListener('DOMContentLoaded', initApp);
