/**
 * GROSSMART - Vanilla JavaScript Implementation
 * Mengkonversi React Component ke Plain JS
 */

// ========================================
// MOCK DATA
// ========================================
const mockPenjualan = [
  { id: 1, tanggal: '2 JANUARI 2025', nama: 'KENTANG MUSTOFA', kode: 'KM 1', jumlah: 4, harga: 100000, total: 400000, hargaBeli: 95000, totalBeli: 380000, untung: 20000 },
  { id: 2, tanggal: '3 JANUARI 2025', nama: 'AQUA', kode: 'AB', jumlah: 5, harga: 3000, total: 15000, hargaBeli: 2500, totalBeli: 12500, untung: 2500 },
  { id: 3, tanggal: '3 JANUARI 2025', nama: 'AQUA GELAS', kode: 'AG', jumlah: 10, harga: 500, total: 5000, hargaBeli: 300, totalBeli: 3000, untung: 2000 },
  { id: 4, tanggal: '3 JANUARI 2025', nama: 'AQUA BOTOL BESAR', kode: 'ABB', jumlah: 4, harga: 5000, total: 20000, hargaBeli: 4500, totalBeli: 18000, untung: 2000 },
  { id: 5, tanggal: '4 JANUARI 2025', nama: 'NASI UDUK', kode: 'NU', jumlah: 6, harga: 7000, total: 42000, hargaBeli: 6000, totalBeli: 36000, untung: 6000 },
  { id: 6, tanggal: '4 JANUARI 2025', nama: 'NASI KUNING', kode: 'NK', jumlah: 6, harga: 7000, total: 42000, hargaBeli: 6000, totalBeli: 36000, untung: 6000 },
  { id: 7, tanggal: '31 JANUARI 2025', nama: 'AQUA GELAS', kode: 'AG', jumlah: 10, harga: 500, total: 5000, hargaBeli: 300, totalBeli: 3000, untung: 2000 },
  { id: 8, tanggal: '31 JANUARI 2025', nama: 'AQUA BOTOL BESAR', kode: 'ABB', jumlah: 4, harga: 5000, total: 20000, hargaBeli: 4500, totalBeli: 18000, untung: 2000 },
];

const mockKasHarian = [
  { id: 1, tanggal: '2 JANUARI 2025', bukti: '', uraian: 'SALDO BULAN DESEMBER', inJml: '', inHrg: '', inTot: '', outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2200000 },
  { id: 2, tanggal: '3 JANUARI 2025', bukti: '', uraian: 'PENJUALAN KENTANG MUSTOFA', inJml: 4, inHrg: 100000, inTot: 400000, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2600000 },
  { id: 3, tanggal: '3 JANUARI 2025', bukti: '', uraian: 'PENJUALAN AQUA', inJml: 5, inHrg: 3000, inTot: 15000, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2615000 },
  { id: 4, tanggal: '3 JANUARI 2025', bukti: '', uraian: 'PENJUALAN AQUA GELAS', inJml: 10, inHrg: 500, inTot: 5000, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2620000 },
  { id: 5, tanggal: '4 JANUARI 2025', bukti: '', uraian: 'PENJUALAN AQUA BOTOL BESAR', inJml: 4, inHrg: 5000, inTot: 20000, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: 2640000 },
  { id: 6, tanggal: '4 JANUARI 2025', bukti: '', uraian: 'PEMBELIAN AQUA GELAS 48', inJml: '', inHrg: '', inTot: '', outJml: 48, outHrg: 300, outTot: 14400, biaya: '', saldo: 2709600 },
  { id: 7, tanggal: '4 JANUARI 2025', bukti: '', uraian: 'BIAYA OPERASIONAL (PEMBERIAN MINUMAN)', inJml: '', inHrg: '', inTot: '', outJml: '', outHrg: '', outTot: '', biaya: 50000, saldo: 2627600 },
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

const mockRekap = [
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
              <a href="#" class="login-forgot" onclick="alert('Hubungi administrator untuk reset password.'); return false;">Lupa password?</a>
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
function handleLogout() {
  if (!confirm('Yakin ingin keluar dari akun?')) return;

  authState.isLoggedIn = false;
  authState.user = null;
  authState.rememberMe = false;
  clearAuthSession();

  closeUserDropdown();
  renderUserMenu();
  renderBottomNav(); // ✅ Refresh bottom nav
  switchTab('penjualan'); // ✅ Reset ke tab penjualan
  showCartFeedback('👋 Anda telah keluar');

  // ✅ Panggil kembali halaman login wajib setelah logout
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
          
          <button class="user-dropdown-item" onclick="alert('Fitur pengaturan segera hadir!')">
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
                  <th style="text-align: right;">Harga Beli</th>
                  <th style="text-align: right;">Harga Jual</th>
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
                    <td style="text-align: right; color: #64748b;">${formatRp(p.hargaBeli)}</td>
                    <td style="text-align: right; font-weight: 700; color: #0d9488;">${formatRp(p.harga)}</td>
                    <td style="text-align: center;">
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
    alert('⛔ Akses Ditolak! Hanya admin yang dapat mengelola data barang.');
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
              <div class="md-form-group">
                <label>URL Gambar</label>
                <input type="text" id="mdImage" value="${product?.image || ''}" placeholder="asset/nama-file.png" />
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
  document.getElementById('mdSaveBtn').addEventListener('click', saveMasterData);

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
}

function closeMasterDataModal() {
  const overlay = document.getElementById('mdModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
  masterDataState.editingId = null;
}

function saveMasterData() {
  const kode = document.getElementById('mdKode').value.trim();
  const nama = document.getElementById('mdNama').value.trim();
  const kategori = document.getElementById('mdKategori').value;
  const hargaBeli = parseInt(document.getElementById('mdHargaBeli').value) || 0;
  const hargaJual = parseInt(document.getElementById('mdHargaJual').value) || 0;
  const stok = parseInt(document.getElementById('mdStok').value) || 0;
  const image = document.getElementById('mdImage').value.trim();

  // Validasi
  if (!kode || !nama || !kategori) {
    alert('⚠️ Kode, Nama, dan Kategori wajib diisi!');
    return;
  }
  if (hargaBeli <= 0 || hargaJual <= 0) {
    alert('⚠️ Harga beli dan harga jual harus lebih dari 0!');
    return;
  }
  if (hargaJual < hargaBeli) {
    if (!confirm('⚠️ Harga jual lebih kecil dari harga beli. Lanjutkan?')) return;
  }

  // Cek duplikasi kode (kecuali saat edit barang yang sama)
  const duplikat = mockProducts.find(p => p.kode.toLowerCase() === kode.toLowerCase() && p.id !== masterDataState.editingId);
  if (duplikat) {
    alert(`⚠️ Kode barang "${kode}" sudah digunakan oleh produk lain!`);
    return;
  }

  if (masterDataState.editingId) {
    // UPDATE
    const idx = mockProducts.findIndex(p => p.id === masterDataState.editingId);
    if (idx !== -1) {
      mockProducts[idx] = {
        ...mockProducts[idx],
        kode, nama, kategori,
        hargaBeli, harga: hargaJual,
        stok, image
      };
      showCartFeedback(`✅ Barang "${nama}" berhasil diupdate`);
    }
  } else {
    // CREATE
    const newId = mockProducts.length > 0 ? Math.max(...mockProducts.map(p => p.id)) + 1 : 1;
    mockProducts.push({
      id: newId, kode, nama, kategori,
      hargaBeli, harga: hargaJual,
      stok, image
    });
    showCartFeedback(`✅ Barang "${nama}" berhasil ditambahkan`);
  }

  closeMasterDataModal();
  refreshMasterData();
}

function deleteMasterData(id) {
  const product = mockProducts.find(p => p.id === id);
  if (!product) return;

  if (!confirm(`🗑️ Hapus barang "${product.nama}"?\n\nData yang dihapus tidak dapat dikembalikan.`)) return;
  
  // Konfirmasi kedua untuk keamanan
  if (!confirm(`⚠️ Yakin ingin menghapus?\nKode: ${product.kode}\nNama: ${product.nama}`)) return;

  mockProducts = mockProducts.filter(p => p.id !== id);
  showCartFeedback(`🗑️ Barang "${product.nama}" telah dihapus`);
  refreshMasterData();
}

// ========================================
// MASTER DATA BARANG (Bisa diedit)
// ========================================
let mockProducts = [
  { id: 1, nama: 'Frost Bite Chocolate Vanilla', kode: 'FB-CNC', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-chocolate-vanilla.png', kategori: 'Ice Cream', stok: 50 },
  { id: 2, nama: 'Frost Bite Cookies & Cream', kode: 'FB-CC', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-cookies-&-cream.png', kategori: 'Ice Cream', stok: 35 },
  { id: 3, nama: 'Frost Bite Boba Milk Tea', kode: 'FB-CS', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-boba-milk-tea.png', kategori: 'Ice Cream', stok: 28 },
  { id: 4, nama: 'Frost Bite Coconut Shake', kode: 'FB-CV', harga: 5000, hargaBeli: 3200, image: 'asset/frost-bite-coconut-shake.png', kategori: 'Ice Cream', stok: 42 },
  { id: 5, nama: 'Frost Bite Crunchy Double Choco', kode: 'FB-LAVA', harga: 5000, hargaBeli: 4036, image: 'asset/frost-bite-crunchy-double-choco.png', kategori: 'Ice Cream', stok: 15 },
  { id: 6, nama: 'Aqua Gelas', kode: 'AG', harga: 500, hargaBeli: 300, image: '', kategori: 'Minuman', stok: 120 },
  { id: 7, nama: 'Aqua Botol 600ml', kode: 'AB', harga: 3000, hargaBeli: 2500, image: '', kategori: 'Minuman', stok: 80 },
  { id: 8, nama: 'Nasi Uduk', kode: 'NU', harga: 7000, hargaBeli: 6000, image: '', kategori: 'Makanan', stok: 5 },
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
  document.getElementById('posClearCartBtn')?.addEventListener('click', () => {
    if (confirm('Kosongkan keranjang?')) {
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

function saveTransaction() {
  if (posState.cart.length === 0) return;
  const tanggal = document.getElementById('posDate')?.value || new Date().toISOString().split('T')[0];
  const tanggalFormatted = new Date(tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();
  
  posState.cart.forEach(item => {
    const newId = mockPenjualan.length > 0 ? Math.max(...mockPenjualan.map(p => p.id)) + 1 : 1;
    mockPenjualan.push({ id: newId, tanggal: tanggalFormatted, nama: item.nama, kode: item.kode, jumlah: item.jumlah, harga: item.harga, total: item.total, hargaBeli: item.hargaBeli, totalBeli: item.totalBeli, untung: item.untung });
    
    const kasId = mockKasHarian.length > 0 ? Math.max(...mockKasHarian.map(k => k.id)) + 1 : 1;
    const lastSaldo = mockKasHarian.length > 0 ? mockKasHarian[mockKasHarian.length - 1].saldo : 0;
    mockKasHarian.push({ id: kasId, tanggal: tanggalFormatted, bukti: '', uraian: `PENJUALAN ${item.nama}`, inJml: item.jumlah, inHrg: item.harga, inTot: item.total, outJml: '', outHrg: '', outTot: '', biaya: '', saldo: lastSaldo + item.total });
  });
  
  alert(`✅ ${posState.cart.length} item berhasil disimpan!\nTotal: ${formatRp(calculateCartTotal())}`);
  if (activeTab === 'penjualan' || activeTab === 'kas') switchTab(activeTab);
  closePOS();
}

// ========================================
// HELPER & TAB FUNCTIONS
// ========================================
const formatRp = (angka) => {
  if (angka === '' || angka === null || angka === undefined) return '';
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
};

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
              ${jamSekarang} WIB
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
            <p class="text-xs text-slate-500">Bulan: Januari 2026</p>
          </div>
          <button 
            class="bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0
                   w-14 h-14 rounded-full p-0
                   sm:w-auto sm:h-auto sm:rounded-xl sm:px-5 sm:py-3 sm:gap-3" 
            id="btnTambahTransaksi"
          >
            <div class="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-sm flex-shrink-0
                        sm:w-10 sm:h-10 sm:rounded-lg">
              <img src="asset/trolley_plus.png" alt="Icon" class="w-10 h-10 object-contain sm:w-6 sm:h-6" />
            </div>
            <span class="hidden sm:inline text-sm font-semibold whitespace-nowrap">Tambah Transaksi</span>
          </button>
        </div>
      </div>

      <!-- Tabel Data (UKURAN DIPERKECIL) -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div class="overflow-x-auto">
          <!-- ✅ Table: text-xs, Border tipis -->
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
                <th class="px-2 py-1.5">Keuntungan</th>
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
                  <td class="px-2 py-1.5 text-teal-600 font-semibold">${formatRp(item.untung)}</td>
                </tr>
              `).join('')}
            </tbody>
            <tfoot class="bg-teal-50 font-bold">
              <tr>
                <td colspan="6" class="px-2 py-1.5 text-right border-r border-slate-200">TOTAL</td>
                <td class="px-2 py-1.5 text-right border-r border-slate-200">${formatRp(633000)}</td>
                <td colspan="2" class="px-2 py-1.5 text-right border-r border-slate-200">${formatRp(578500)}</td>
                <td class="px-2 py-1.5 text-right text-teal-700">${formatRp(54500)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderTabKasHarian() {
  return `<div class="space-y-4 pb-20 animate-tab"><div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100"><div><h2 class="text-lg font-bold text-slate-800">Kas Harian</h2><p class="text-sm text-slate-500">Bulan : Januari 2026</p></div><button class="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-lg flex items-center justify-center transition-colors" onclick="window.print()"><i data-lucide="file-text" class="w-5 h-5"></i><span class="hidden sm:inline ml-2 text-sm font-medium">Cetak Laporan</span></button></div><div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-sm text-left whitespace-nowrap border-collapse"><thead class="text-xs text-white bg-slate-800 text-center"><tr><th rowspan="2" class="px-3 py-2 border border-slate-600">No</th><th rowspan="2" class="px-3 py-2 border border-slate-600">Tanggal</th><th rowspan="2" class="px-3 py-2 border border-slate-600">No. Bukti</th><th rowspan="2" class="px-4 py-2 border border-slate-600 text-left">Uraian</th><th colspan="3" class="px-3 py-2 border border-slate-600 bg-teal-700">Penerimaan</th><th colspan="3" class="px-3 py-2 border border-slate-600 bg-rose-700">Pengeluaran</th><th rowspan="2" class="px-3 py-2 border border-slate-600">Biaya</th><th rowspan="2" class="px-4 py-2 border border-slate-600">Saldo</th></tr><tr><th class="px-3 py-1 border border-slate-600 bg-teal-600">Jml</th><th class="px-3 py-1 border border-slate-600 bg-teal-600">Hrg</th><th class="px-3 py-1 border border-slate-600 bg-teal-600">Total</th><th class="px-3 py-1 border border-slate-600 bg-rose-600">Jml</th><th class="px-3 py-1 border border-slate-600 bg-rose-600">Hrg</th><th class="px-3 py-1 border border-slate-600 bg-rose-600">Total</th></tr></thead><tbody>${mockKasHarian.map((item, index) => `<tr class="border-b hover:bg-slate-50"><td class="px-3 py-2 text-center border-r border-slate-200">${index + 1}</td><td class="px-3 py-2 border-r border-slate-200">${item.tanggal}</td><td class="px-3 py-2 border-r border-slate-200">${item.bukti}</td><td class="px-4 py-2 border-r border-slate-200 font-medium">${item.uraian}</td><td class="px-3 py-2 text-center border-r border-slate-200 text-teal-700 bg-teal-50/30">${item.inJml}</td><td class="px-3 py-2 text-right border-r border-slate-200 text-teal-700 bg-teal-50/30">${formatRp(item.inHrg)}</td><td class="px-3 py-2 text-right border-r border-slate-200 text-teal-700 bg-teal-50/30 font-medium">${formatRp(item.inTot)}</td><td class="px-3 py-2 text-center border-r border-slate-200 text-rose-700 bg-rose-50/30">${item.outJml}</td><td class="px-3 py-2 text-right border-r border-slate-200 text-rose-700 bg-rose-50/30">${formatRp(item.outHrg)}</td><td class="px-3 py-2 text-right border-r border-slate-200 text-rose-700 bg-rose-50/30 font-medium">${formatRp(item.outTot)}</td><td class="px-3 py-2 text-right border-r border-slate-200 text-amber-600">${formatRp(item.biaya)}</td><td class="px-4 py-2 text-right font-bold text-slate-800 bg-slate-50">${formatRp(item.saldo)}</td></tr>`).join('')}</tbody></table></div></div></div>`;
}

function renderTabStok() {
  return `<div class="space-y-4 pb-20 animate-tab"><div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 justify-between"><div><h2 class="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><i data-lucide="package" class="text-teal-600 w-5 h-5"></i> Kartu Stok</h2><div class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm"><div class="text-slate-500">Nama Barang</div><div class="font-bold text-slate-800">: ${mockKartuStok.nama}</div><div class="text-slate-500">Kode Barang</div><div class="font-medium text-slate-800">: ${mockKartuStok.kode}</div><div class="text-slate-500">Supplier</div><div class="font-medium text-slate-800">: ${mockKartuStok.supplier}</div><div class="text-slate-500">No. Kontak</div><div class="font-medium text-slate-800">: ${mockKartuStok.kontak}</div></div></div><div class="flex flex-col gap-2 justify-end"><div class="relative"><i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"></i><input type="text" placeholder="Cari barang lain..." class="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm w-full outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" /></div></div></div><div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-sm text-center whitespace-nowrap"><thead class="text-xs text-slate-700 bg-slate-100 uppercase"><tr><th class="px-4 py-3 text-left border-b border-slate-200">Tanggal</th><th class="px-4 py-3 border-b border-slate-200 text-teal-700">Masuk</th><th class="px-4 py-3 border-b border-slate-200 text-rose-700">Keluar</th><th class="px-4 py-3 border-b border-slate-200 font-bold bg-slate-200">Sisa</th><th class="px-4 py-3 border-b border-slate-200">Paraf</th></tr></thead><tbody>${mockKartuStok.riwayat.map((item) => `<tr class="border-b border-slate-100 hover:bg-slate-50"><td class="px-4 py-3 text-left ${item.tanggal.includes('SISA') ? 'font-bold bg-slate-50' : ''}">${item.tanggal}</td><td class="px-4 py-3 text-teal-600 font-medium">${item.masuk}</td><td class="px-4 py-3 text-rose-600 font-medium">${item.keluar}</td><td class="px-4 py-3 font-bold bg-slate-50 text-slate-800 text-lg">${item.sisa}</td><td class="px-4 py-3 text-slate-400">${item.paraf}</td></tr>`).join('')}</tbody></table></div></div><div class="bg-amber-50 rounded-xl p-4 border border-amber-200"><h4 class="font-bold text-amber-800 text-sm mb-1">Catatan Pengisian:</h4><ol class="list-decimal pl-5 text-xs text-amber-700 space-y-1"><li>Kartu stok dibuat per item barang.</li><li>Kartu stok diisi setiap ada transaksi dan diparaf.</li><li>Pengisian kartu stok berlanjut.</li><li>Setiap pengisian lembar baru, dituliskan saldo akhir barang.</li></ol></div></div>`;
}

function renderTabRekap() {
  return `<div class="space-y-4 pb-20 animate-tab"><div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center"><h2 class="text-xl font-bold text-slate-800">Rekap Laporan Keuangan</h2><p class="text-slate-500 font-medium">Tahun 2026</p></div><div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-sm text-left whitespace-nowrap border-collapse"><thead><tr><th colspan="4" class="px-4 py-3 border border-slate-300 bg-teal-600 text-white text-center font-bold text-base">PENERIMAAN</th><th colspan="4" class="px-4 py-3 border border-slate-300 bg-rose-600 text-white text-center font-bold text-base">PENGELUARAN</th></tr><tr class="bg-slate-100 text-slate-700 text-xs uppercase"><th class="px-3 py-2 text-center border border-slate-300 w-10">No</th><th class="px-4 py-2 border border-slate-300">Bulan</th><th class="px-4 py-2 border border-slate-300">Uraian</th><th class="px-4 py-2 border border-slate-300 text-right">Jumlah</th><th class="px-3 py-2 text-center border border-slate-300 w-10">No</th><th class="px-4 py-2 border border-slate-300">Bulan</th><th class="px-4 py-2 border border-slate-300">Uraian</th><th class="px-4 py-2 border border-slate-300 text-right">Jumlah</th></tr></thead><tbody>${mockRekap.map((item, index) => `<tr class="hover:bg-slate-50"><td class="px-3 py-2 text-center border border-slate-200 text-slate-500">${item.blnIn ? index + 1 : ''}</td><td class="px-4 py-2 border border-slate-200 font-medium">${item.blnIn}</td><td class="px-4 py-2 border border-slate-200">${item.uraianIn}</td><td class="px-4 py-2 border border-slate-200 text-right text-teal-600 font-medium">${formatRp(item.jmlIn)}</td><td class="px-3 py-2 text-center border border-slate-200 text-slate-500">${item.blnOut ? index + 5 : ''}</td><td class="px-4 py-2 border border-slate-200 font-medium">${item.blnOut}</td><td class="px-4 py-2 border border-slate-200">${item.uraianOut}</td><td class="px-4 py-2 border border-slate-200 text-right text-rose-600 font-medium">${formatRp(item.jmlOut)}</td></tr>`).join('')}</tbody><tfoot class="bg-slate-800 text-white font-bold"><tr><td colspan="3" class="px-4 py-3 text-right border border-slate-700">JUMLAH PENERIMAAN</td><td class="px-4 py-3 text-right border border-slate-700 text-teal-400">${formatRp(633000)}</td><td colspan="3" class="px-4 py-3 text-right border border-slate-700">JUMLAH PENGELUARAN</td><td class="px-4 py-3 text-right border border-slate-700 text-rose-400">${formatRp(620400)}</td></tr></tfoot></table></div></div><div class="flex justify-end mt-4 text-sm font-medium"><div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 min-w-[250px]"><div class="flex justify-between mb-2"><span class="text-slate-600">Total Penerimaan:</span><span class="text-teal-600 font-bold">${formatRp(633000)}</span></div><div class="flex justify-between mb-2 pb-2 border-b border-slate-200"><span class="text-slate-600">Total Pengeluaran:</span><span class="text-rose-600 font-bold">${formatRp(620400)}</span></div><div class="flex justify-between mt-2 text-lg"><span class="text-slate-800 font-bold">Keuntungan Bersih:</span><span class="text-teal-600 font-black">${formatRp(12600)}</span></div></div></div></div>`;
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
    
    // ✅ Setup listeners khusus Master Data
    if (tabId === 'master') {
      setupMasterDataListeners();
    }
  }
  renderBottomNav();
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
// INIT APP
// ========================================
function initApp() {
  // ✅ PENTING: Load session auth SEBELUM render UI lainnya
  loadAuthSession();

  renderDecoratorLine();
  renderBottomNav(); // Sekarang checkAdminAccess() akan bernilai true jika user adalah Admin
  // Jika sudah login, tampilkan dashboard. Jika belum, tampilkan penjualan (di balik login screen)
  switchTab(authState.isLoggedIn ? 'dashboard' : 'penjualan');
  if (typeof lucide !== 'undefined') lucide.createIcons();

  const notifBtn = document.getElementById('notifBtn');
  if (notifBtn) notifBtn.addEventListener('click', () => alert('🔔 Tidak ada notifikasi baru'));

  document.addEventListener('click', (e) => {
    if (e.target.closest('#btnTambahTransaksi')) openPOS();
  });

  // Render menu user setelah sesi dimuat
  renderUserMenu();

  // Tutup dropdown user ketika klik di luar
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-menu-wrapper')) {
      closeUserDropdown();
    }
  });

  // ✅ Tampilkan halaman login otomatis jika user belum login
  if (!authState.isLoggedIn) {
    showLoginScreen();
  }
}

document.addEventListener('DOMContentLoaded', initApp);
