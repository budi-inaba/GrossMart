// ========================================
// API CONFIGURATION
// ========================================
const API_CONFIG = {
  BASE_URL: 'https://script.google.com/macros/s/AKfycbyfpWy8Lz608GG69mQ7_vuctXvRl5GTWJqSs-l4KK9W7qf7i_S1v7pAkf29TFvM9rw/exec',
  API_KEY: 'GrossMart_RPTRA Kenanga_2026',
  TIMEOUT: 15000,
};

// ========================================
// API HELPER FUNCTIONS
// ========================================
async function apiCall(action, data = null, method = 'POST') {
  const url = `${API_CONFIG.BASE_URL}?action=${action}&apiKey=${API_CONFIG.API_KEY}`;
  
  const options = {
    method: method,
    headers: { 'Content-Type': 'text/plain' },
  };
  
  if (data && method === 'POST') {
    options.body = JSON.stringify({ ...data, apiKey: API_CONFIG.API_KEY, action });
  }
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);
    options.signal = controller.signal;
    
    const response = await fetch(url, options);
    clearTimeout(timeoutId);
    
    // Google Apps Script sering return opaque response, handle dengan hati-hati
    const text = await response.text();
    return JSON.parse(text);
  } catch (err) {
    console.error('API Error:', err);
    throw err;
  }
}

// ========================================
// PRODUCT API
// ========================================
const ProductAPI = {
  async getAll() {
    const res = await apiCall('getProducts', null, 'GET');
    return res.success ? res.data : [];
  },
  
  async save(product) {
    return await apiCall('saveProduct', { data: product });
  },
  
  async update(product) {
    return await apiCall('updateProduct', { data: product });
  },
  
  async delete(id) {
    return await apiCall('deleteProduct', { id });
  }
};

// ========================================
// SALES API
// ========================================
const SalesAPI = {
  async getAll() {
    const res = await apiCall('getSales', null, 'GET');
    return res.success ? res.data : [];
  },
  
  async save(sale) {
    return await apiCall('saveSale', { data: sale });
  }
};

// ========================================
// CASHFLOW API
// ========================================
const CashflowAPI = {
  async getAll() {
    const res = await apiCall('getCashflow', null, 'GET');
    return res.success ? res.data : [];
  },
  
  async save(cashflow) {
    return await apiCall('saveCashflow', { data: cashflow });
  }
};

// ========================================
// REKAP API
// ========================================
const RekapAPI = {
  async getAll() {
    const res = await apiCall('getRekap', null, 'GET');
    return res.success ? res.data : [];
  },
  
  async save(rekapData) {
    return await apiCall('saveRekap', { data: rekapData });
  }
};

// ========================================
// SYNC MANAGER
// ========================================
const SyncManager = {
  lastSync: null,
  
  async syncToCloud() {
    try {
      Notification.info('🔄 Menyinkronkan data ke cloud...', { duration: 2000 });
      
      const result = await apiCall('syncAll', {
        products: mockProducts,
        sales: mockPenjualan,
        cashflow: mockKasHarian,
        rekap: mockRekap 
      });
      
      if (result.success) {
        this.lastSync = new Date().toISOString();
        localStorage.setItem('lastSync', this.lastSync);
        Notification.success('✅ Data berhasil disinkronkan!', { duration: 3000 });
        return true;
      }
    } catch (err) {
      Notification.error('❌ Gagal sinkronisasi: ' + err.message, { duration: 4000 });
      return false;
    }
  },
  
    async loadFromCloud() {
    try {
      
      const [products, sales, cashflow, rekap] = await Promise.all([
        ProductAPI.getAll(),
        SalesAPI.getAll(),
        CashflowAPI.getAll(),
        RekapAPI.getAll() 
      ]);
      
      let hasUpdates = false;
      if (products.length) { mockProducts = products; hasUpdates = true; }
      if (sales.length) { mockPenjualan = sales; hasUpdates = true; }
      if (cashflow.length) { mockKasHarian = cashflow; hasUpdates = true; }
      if (rekap && rekap.length) { mockRekap = rekap; hasUpdates = true; }
      
      this.lastSync = new Date().toISOString();
      localStorage.setItem('lastSync', this.lastSync);
      
      return true;
    } catch (err) {
      console.error('❌ Gagal memuat data:', err);
      // Notification.error('❌ Gagal memuat data: ' + err.message, { duration: 4000 });
      return false;
    }
  }
};