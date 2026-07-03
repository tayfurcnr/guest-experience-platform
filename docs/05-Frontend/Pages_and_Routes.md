# Pages and Routes

Bu belge, platformun sayfa yapısını, route şablonlarını ve rol bazlı erişim katmanını tanımlar.

## Temel İlke

- Platform tek bir global ana sayfaya sahiptir.
- Her restoran için ayrı bir `restaurantSlug` oluşturulur.
- Her şube için ayrı bir `branchSlug` oluşturulur.
- Sayfalar mağaza ve şube oluşturulduğunda otomatik olarak route şablonlarından türetilir.
- Public sayfalar ile admin panelleri birbirinden ayrıdır.

## Route Yapısı

### 1) Platform Ana Sayfası

- `/`
- Amaç: Kafe, restoran ve markaları listelemek
- Özellikler:
  - Marka arama
  - Kategori filtreleme
  - Öne çıkan markalar
  - Şube sayısı ve temel marka bilgisi

### 2) Marka Sayfası

- `/:restaurantSlug`
- Örnek: `/A`
- Amaç: Tek bir markanın vitrin sayfası
- Özellikler:
  - Marka bilgisi
  - Şube listesi
  - Menüye giriş
  - Temaya göre özelleştirilmiş görünüm

### 3) Şube Sayfası

- `/:restaurantSlug/:branchSlug`
- Örnek: `/A/Blabla` veya uygulama standardına göre `/A-Blabla`
- Amaç: Şubeye ait QR menü deneyimi
- Özellikler:
  - Kategori listesi
  - Ürün listesi
  - Ürün detayları
  - Alerjen bilgileri
  - Kalori bilgileri
  - Kampanya ve banner alanları

### 4) Şube Admin Paneli

- `/:restaurantSlug/:branchSlug/Admin`
- Örnek: `/A/Blabla/Admin`
- Amaç: Şubeye ait menü ve operasyon yönetimi
- Özellikler:
  - Kategori ekleme ve düzenleme
  - Ürün ekleme ve düzenleme
  - Görsel yükleme
  - Fiyat, alerjen ve kalori yönetimi
  - Kampanya ve duyuru yönetimi
  - Şube bazlı analitik

### 5) Platform Admin Paneli

- `/Admin`
- Amaç: Platform sahibinin yeni mağaza açması ve üst seviye yönetim yapması
- Özellikler:
  - Mağaza ekleme
  - Marka listeleme
  - Şube oluşturma
  - Domain/slug yönetimi
  - İlk kurulum akışı

### 6) Opsiyonel Yönetim Sayfaları

- `/:restaurantSlug/Admin`
- `/:restaurantSlug/Admin/staff`
- `/:restaurantSlug/Admin/roles`
- `/:restaurantSlug/Admin/theme`
- `/:restaurantSlug/Admin/analytics`
- Amaç: Restoranın en üst yöneticisi için kapsamlı kontrol alanı
- Özellikler:
  - Yetkili hesap oluşturma
  - Rol atama
  - Tema özelleştirme
  - Şube ve personel yönetimi

## Dinamik Sayfa Oluşturma Kuralı

- Platform admin yeni mağaza oluşturduğunda sistem otomatik olarak:
  - `restaurantSlug`
  - varsayılan marka sayfası
  - varsayılan admin alanı
  - ilk şube veya şube taslağı
  - gerekli route kayıtları
  oluşturur.
- Şube eklendiğinde ilgili `branchSlug` ile yeni QR menü ve admin route'u türetilir.
- Route'lar manuel dosya kopyalama ile değil, ortak sayfa şablonlarından üretilir.

## Rol Bazlı Erişim

### Platform Admin

- `/Admin`
- Tüm markaları görür
- Mağaza ekler ve yönetir
- Üst seviye yapılandırma yapar

### Restaurant Owner / Top Admin

- `/:restaurantSlug/Admin`
- Kendi restoranındaki tüm şubeleri görür
- Yetkili hesap oluşturur
- Tema ve marka görünümünü yönetir
- Rol ve yetki dağıtımı yapar

### Branch Manager

- `/:restaurantSlug/:branchSlug/Admin`
- Yalnızca yetkili şubeyi görür
- Menü, kampanya, rezervasyon ve operasyon verilerini yönetir

### Garson

- Public QR menüye erişebilir
- Yetkili olduğu görevlerle sınırlıdır
- Admin panelinde tam yönetim yetkisi yoktur

### Ziyaretçi / Müşteri

- `/`
- `/:restaurantSlug`
- `/:restaurantSlug/:branchSlug`
- Sadece public deneyimi kullanır
- Admin panellerine erişemez

## Sayfa Bileşenleri

- Arama çubuğu
- Marka kartı
- Şube kartı
- Kategori listesi
- Ürün kartı
- Ürün detay modalı veya sayfası
- Tema ayarları paneli
- Kategori/ürün formu
- Dosya/görsel yükleyici
- Rol ve yetki editörü

## Not

Bu yapı tek tenant restoran modelini bozmadan çalışır. Her restoran kendi alt alanında izole edilir, şube verileri de restoran altında segmentlenir.
