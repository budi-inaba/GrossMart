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
// POS STATE & DATA (DIPERBARUI)
// ========================================
const mockProducts = [
  { id: 1, nama: 'Frost Bite Chocolate Vanilla', kode: 'FB-CNC', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-chocolate-vanilla.png', kategori: 'Ice Cream' },
  { id: 2, nama: 'Frost Bite Cookies & Cream', kode: 'FB-CC', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-cookies-&-cream.png', kategori: 'Ice Cream' },
  { id: 3, nama: 'Frost Bite Boba Milk Tea', kode: 'FB-CS', harga: 5000, hargaBeli: 4000, image: 'asset/frost-bite-boba-milk-tea.png', kategori: 'Ice Cream' },
  { id: 4, nama: 'Frost Bite Coconut Shake', kode: 'FB-CV', harga: 5000, hargaBeli: 3200, image: 'asset/frost-bite-coconut-shake.png', kategori: 'Ice Cream' },
  { id: 5, nama: 'Frost Bite Crunchy Double Choco', kode: 'FB-LAVA', harga: 5000, hargaBeli: 4036, image: 'asset/frost-bite-crunchy-double-choco.png', kategori: 'Ice Cream' },
  { id: 6, nama: 'Frost Bite Crunchy Double Choco', kode: 'FB-LAVA', harga: 5000, hargaBeli: 4036, image: 'asset/frost-bite-crunchy-double-choco.png', kategori: 'Ice Cream' },
];

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
const tabs = [
  { id: 'penjualan', label: 'Penjualan', icon: 'shopping-cart' },
  { id: 'kas', label: 'Kas Harian', icon: 'wallet' },
  { id: 'stok', label: 'Kartu Stok', icon: 'package' },
  { id: 'rekap', label: 'Rekap', icon: 'bar-chart-3' },
];

function renderTabPenjualan() {
  return `
    <div class="space-y-4 pb-20 animate-tab">
      <!-- Header Laporan -->
<div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
  <!-- ✅ UBAH: flex-row + justify-between + items-center -->
  <div class="flex flex-row justify-between items-center gap-3">
    
    <!-- Judul Laporan -->
    <div class="min-w-0 flex-1"> <!-- min-w-0 mencegah teks melebar & mendorong tombol -->
      <h2 class="text-lg font-bold text-slate-800 truncate">Laporan Penjualan</h2>
      <p class="text-xs text-slate-500">Bulan: Januari 2026</p>
    </div>
    
    <!-- Tombol Tambah Transaksi -->
    <button 
      class="bg-teal-600 hover:bg-teal-700 text-white rounded-xl flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0
               w-12 h-12 sm:w-auto sm:h-auto sm:px-5 sm:py-3 sm:gap-3" 
      id="btnTambahTransaksi"
    >
      <!-- Icon Container -->
      <div class="w-8 h-8 sm:w-10 sm:h-10 bg-white/95 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
        <!-- ✅ FIX: Ukuran icon disesuaikan agar muat di kotak putih -->
        <img src="asset/trolley_plus.png" alt="Icon" class="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
      </div>
      
      <!-- Teks (Hanya muncul di desktop) -->
      <span class="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        Tambah Transaksi
      </span>
    </button>
  </div>
</div>
      
      <!-- Tabel Data -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left whitespace-nowrap">
            <thead class="text-xs text-white bg-teal-600 uppercase">
              <tr>
                <th class="px-4 py-3 text-center border-r border-teal-500">No</th>
                <th class="px-4 py-3 border-r border-teal-500">Tanggal</th>
                <th class="px-4 py-3 border-r border-teal-500">Nama Barang</th>
                <th class="px-4 py-3 border-r border-teal-500">Kode</th>
                <th class="px-4 py-3 text-center border-r border-teal-500">Jumlah</th>
                <th class="px-4 py-3 text-right border-r border-teal-500">Harga</th>
                <th class="px-4 py-3 text-right border-r border-teal-500">Total</th>
                <th class="px-4 py-3 text-right border-r border-teal-500">Hrg Beli</th>
                <th class="px-4 py-3 text-right border-r border-teal-500">Tot Beli</th>
                <th class="px-4 py-3 text-right">Keuntungan</th>
              </tr>
            </thead>
            <tbody>
              ${mockPenjualan.map((item, index) => `
                <tr class="border-b hover:bg-slate-50 transition-colors">
                  <td class="px-4 py-3 text-center border-r border-slate-100">${index + 1}</td>
                  <td class="px-4 py-3 border-r border-slate-100">${item.tanggal}</td>
                  <td class="px-4 py-3 font-medium text-slate-800 border-r border-slate-100">${item.nama}</td>
                  <td class="px-4 py-3 border-r border-slate-100">${item.kode}</td>
                  <td class="px-4 py-3 text-center border-r border-slate-100">${item.jumlah}</td>
                  <td class="px-4 py-3 text-right border-r border-slate-100">${formatRp(item.harga)}</td>
                  <td class="px-4 py-3 text-right border-r border-slate-100 font-semibold">${formatRp(item.total)}</td>
                  <td class="px-4 py-3 text-right border-r border-slate-100 text-slate-500">${formatRp(item.hargaBeli)}</td>
                  <td class="px-4 py-3 text-right border-r border-slate-100 text-slate-500">${formatRp(item.totalBeli)}</td>
                  <td class="px-4 py-3 text-right text-teal-600 font-semibold">${formatRp(item.untung)}</td>
                </tr>
              `).join('')}
            </tbody>
            <tfoot class="bg-teal-50 font-bold">
              <tr>
                <td colspan="6" class="px-4 py-3 text-right border-r border-slate-200">TOTAL</td>
                <td class="px-4 py-3 text-right border-r border-slate-200">${formatRp(633000)}</td>
                <td colspan="2" class="px-4 py-3 text-right border-r border-slate-200">${formatRp(578500)}</td>
                <td class="px-4 py-3 text-right text-teal-700">${formatRp(54500)}</td>
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
  const contentMap = { 'penjualan': renderTabPenjualan, 'kas': renderTabKasHarian, 'stok': renderTabStok, 'rekap': renderTabRekap };
  return contentMap[tabId]?.() || renderTabPenjualan();
}

function renderBottomNav() {
  const navContainer = document.getElementById('bottomNav');
  if (!navContainer) return;
  navContainer.innerHTML = tabs.map(tab => {
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

function initApp() {
  renderDecoratorLine();
  renderBottomNav();
  switchTab('penjualan');
  if (typeof lucide !== 'undefined') lucide.createIcons();
  const notifBtn = document.getElementById('notifBtn');
  if (notifBtn) notifBtn.addEventListener('click', () => alert('🔔 Tidak ada notifikasi baru'));
  
  document.addEventListener('click', (e) => {
    if (e.target.closest('#btnTambahTransaksi')) openPOS();
  });
}

document.addEventListener('DOMContentLoaded', initApp);
