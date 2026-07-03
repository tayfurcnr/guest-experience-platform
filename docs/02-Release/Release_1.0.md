# Release 1.0 - Core Platform

Amaç: Restoranların dijital menüye hızlı ve yönetilebilir şekilde geçmesini sağlamak.

Kapsam: İlk canlı sürümde restoranların QR tabanlı dijital menü yayınlamasını, şube ve menü operasyonlarını yönetmesini, rezervasyon almasını, temel kullanım verilerini izlemesini ve kullanıcıların anlık konuma göre yakındaki işletmeleri keşfetmesini sağlayan çekirdek platform devreye alınacaktır.

## Hedeflenen Çıktı

Release 1.0 sonunda bir restoran:

- Şube kaydını oluşturabilmeli
- Şube bazlı QR kod üretebilmeli
- Menüsünü kategori ve ürün bazında yönetebilmeli
- Kampanya ve duyuruları menü deneyimine yansıtabilmeli
- Rezervasyon akışını temel kurallarla işletebilmeli
- QR kullanımı ve menü etkileşimine dair temel analitik verileri görebilmeli
- Konum izni verildiğinde anlık konuma göre yakındaki işletmeleri keşfedebilmeli

## Ana Özellikler

- QR Menü
  - Hızlı açılış
  - Çoklu dil desteği
  - Ürün arama
  - Kategori ve ürün detay görünümü
  - Alerjen bilgisi gösterimi

- Platform Keşfi
  - Konum izni ile yakındaki işletmeleri listeleme
  - Manuel şehir veya konum seçimi ile keşif akışını sürdürme
  - Mesafeye göre sıralama ve filtreleme
  - Yakındaki işletmeler için ayrı liste görünümü

- Menü Yönetimi
  - Ürün oluşturma, güncelleme ve pasife alma
  - Kategori yönetimi
  - Fiyat yönetimi
  - Alerjen ve açıklama alanları
  - Görsel ve içerik yönetimi

- Campaign Engine
  - Popup kampanyalar
  - Banner gösterimleri
  - Zamanlama ve hedefleme kuralları
  - Ürün veya kategori bazlı görünürlük

- Rezervasyon Yönetimi
  - Rezervasyon oluşturma
  - Masa seçimi
  - Otomatik veya manuel onay
  - İptal kuralı tanımlama
  - Şube bazlı rezervasyon takibi

- QR Yönetimi
  - Şube bazlı QR üretimi
  - QR yenileme
  - QR indirme
  - Temel QR tasarım ayarları
  - QR yönlendirme yönetimi

- Temel Analitik
  - QR okutma sayısı
  - En çok görüntülenen ürünler
  - En popüler kategoriler
  - Oturum süresi
  - Şube bazlı özet görünüm

- Kullanıcı Rolleri ve Yetkilendirme
  - Admin
  - Branch Manager
  - Garson
  - Rol bazlı ekran ve işlem yetkileri

## Kapsam Dışı

Bu sürümde aşağıdaki alanlar canlıya alınmayacaktır:

- NFC doğrulama ve Verified Table Session
- Garson çağırma ve hesabı isteme akışları
- POS entegrasyonları
- Online ödeme ve split payment
- AI tabanlı öneri, CRM ve loyalty modülleri
- Gelişmiş analitik ve veri ihracı

## Operasyonel Hazırlık

Canlıya çıkış öncesinde aşağıdaki hazırlıkların tamamlanması beklenir:

- En az bir örnek restoran ve birden fazla şube ile seed veri kurulumu
- Varsayılan rol ve yetki matrisinin tanımlanması
- QR üretim ve yönlendirme akışlarının test ortamında doğrulanması
- Menü görselleri ve medya yükleme akışlarının çalışır durumda olması
- Rezervasyon ve kampanya modülleri için temel audit log takibinin açılması

## Kabul Kriterleri

- QR menü sayfası ilk içerik yüklemesini 2 saniyenin altında tamamlamalı
- Kullanıcı, QR üzerinden menüye erişip ürün araması yapabilmeli
- Kullanıcı konum izni verdiğinde yakın işletmeleri görebilmeli
- Konum izni verilmezse manuel şehir veya konum seçimi ile keşif akışı devam edebilmeli
- Admin panelinden ürün, kategori, fiyat ve alerjen bilgileri güncellenebilmeli
- Şube bazlı QR oluşturma, indirme ve yenileme akışları sorunsuz çalışmalı
- Kampanya popup ve banner'ları tanımlanan hedefleme kurallarına göre görünmeli
- Rezervasyon oluşturma, onaylama ve iptal senaryoları testleri geçmeli
- Analitik ekranında QR okutma ve popüler ürün/kategori verileri doğru gösterilmeli
- Rol bazlı erişimlerde Admin, Branch Manager ve Garson yalnızca yetkili işlemleri görebilmeli

## Çıkış Kriterleri

Release 1.0 canlıya alınmadan önce:

- Kritik ve yüksek öncelikli açık hata kalmamalı
- Temel kullanıcı akışları uçtan uca test edilmiş olmalı
- Üretim ortamı yapılandırmaları, domain ve medya erişimleri doğrulanmış olmalı
- İzleme, loglama ve hata yakalama mekanizmaları aktif olmalı
- Geri dönüş planı ve veri yedekleme prosedürü hazırlanmış olmalı

## Başarı Ölçütleri

Release sonrası ilk ölçüm döneminde aşağıdaki metrikler takip edilir:

- QR açılış başarı oranı
- Menü görüntüleme sayısı
- Arama kullanım oranı
- Rezervasyon tamamlama oranı
- Şube bazlı aktif kullanım
- Yönetim panelinde içerik güncelleme sıklığı
