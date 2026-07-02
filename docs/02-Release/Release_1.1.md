# Release 1.1 - Platform Hardening

Amaç: Core Platform'u ölçeklenebilirlik, güvenlik, performans ve operasyonel görünürlük açısından bir üst seviyeye taşımak.

Kapsam: Release 1.0 ile canlıya alınan QR menü, yönetim paneli, rezervasyon ve analitik modüllerinin teknik sağlamlığını artıran iyileştirmeler bu sürümde tamamlanacaktır. Bu sürüm yeni büyük ürün modülleri eklemekten çok, mevcut çekirdeği bir sonraki fazlara hazır hale getirmeyi hedefler.

## Hedeflenen Çıktı

Release 1.1 sonunda platform:

- Daha hızlı ve tutarlı QR açılış deneyimi sunabilmeli
- Yetki, oturum ve tenant izolasyonunda daha sıkı güvenlik kurallarına sahip olmalı
- Loglama, hata izleme ve audit kayıtlarıyla operasyonel olarak izlenebilir hale gelmeli
- Medya, cache ve API katmanında daha iyi performans verebilmeli
- Table Experience ve Commerce sürümlerini taşıyabilecek teknik zemini hazırlamış olmalı

## Ana Özellikler

- Performans ve Cache İyileştirmeleri
  - QR sayfalarında cache stratejileri
  - CDN uyumluluğu
  - Kritik API performans optimizasyonları
  - Listeleme ekranlarında sayfalama veya sanallaştırma

- Medya ve İçerik Optimizasyonu
  - WebP ve AVIF servisleme
  - Thumbnail üretimi
  - Lazy loading
  - Responsive görsel boyutlandırma

- Güvenlik ve Yetkilendirme Güçlendirmeleri
  - Backend tarafında zorunlu yetki doğrulaması
  - JWT ve refresh token akışlarının sertleştirilmesi
  - Şifreli anahtar saklama
  - Tenant ve şube bazlı veri erişim kısıtları

- Audit ve Operasyonel Görünürlük
  - Audit log genişletmesi
  - Merkezi loglama
  - Hata izleme
  - Yönetimsel aksiyon kayıtları

- Veri ve Mimari Hazırlık
  - Event toplama standardizasyonu
  - Analitik veri modelinin genişlemeye hazırlanması
  - Background worker ihtiyaçlarının ayrıştırılması
  - Modüler monolit servis sınırlarının netleştirilmesi

## Kapsam Dışı

Bu sürümde aşağıdaki alanlar canlıya alınmayacaktır:

- NFC doğrulama ve Verified Table Session
- Garson çağırma ve hesabı isteme akışları
- POS entegrasyonları ve ödeme sağlayıcıları
- Split payment ve payment session
- AI Menü Asistanı, CRM, loyalty ve recommendation modülleri

## Operasyonel Hazırlık

Canlıya çıkış öncesinde aşağıdaki hazırlıkların tamamlanması beklenir:

- Uygulama loglarının merkezi bir akışa bağlanması
- Kritik hata alarmları ve izleme panolarının hazırlanması
- Tenant ve şube bazlı erişim testlerinin tamamlanması
- Cache invalidation ve medya optimizasyon senaryolarının doğrulanması
- Audit log kapsamının yönetim modüllerinde aktif hale getirilmesi

## Kabul Kriterleri

- QR menü sayfalarında hedeflenen performans değerleri korunmalı veya iyileştirilmeli
- Kritik API yanıt süreleri hedeflenen sınırlar içinde kalmalı
- Yetkisiz kullanıcı, başka restoran veya şube verisine erişememeli
- Audit log kayıtları ürün, kategori, fiyat, QR ve rezervasyon değişikliklerini yakalayabilmeli
- Hata izleme sistemi kritik uygulama hatalarını görünür hale getirmeli
- Medya yükleme ve servisleme akışlarında optimize formatlar kullanılmalı

## Çıkış Kriterleri

Release 1.1 canlıya alınmadan önce:

- Kritik güvenlik açığı kalmamalı
- Gözlemleme, alarm ve log toplama akışları üretimde doğrulanmış olmalı
- Performans regresyon testleri tamamlanmış olmalı
- Tenant izolasyonu ve rol yetkilendirme regresyon testleri geçmiş olmalı
- Geri dönüş planı ve yapılandırma değişiklik kayıtları hazırlanmış olmalı

## Başarı Ölçütleri

Release sonrası ilk ölçüm döneminde aşağıdaki metrikler takip edilir:

- QR sayfası ortalama açılış süresi
- Kritik API p95 yanıt süresi
- Hata oranı ve yakalanan üretim hataları
- Başarısız medya yükleme oranı
- Yetki hatası ve erişim ihlali denemeleri
- Cache hit oranı
