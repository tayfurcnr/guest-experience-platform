  # Anlık Menü Product Requirements Document Version 1.0

## Vizyon
**Restoranların müşteri deneyimini ve dijital operasyonlarını tek platformdan yönetmesini sağlayan modern bir restoran işletim platformu oluşturmak.**

## Ürün Konumlandırması
**Anlık Menü**, restoranların dijital operasyonlarını yönetmelerini sağlayan bulut tabanlı restoran deneyim platformudur.

### Temel Özellikler

- Dijital menü deneyimi
- Menü ve içerik yönetimi
- Rezervasyon yönetimi
- QR analitiği
- Restoran bilgilendirme ve duyuru katmanı
- Kullanıcının konum izni vermesi halinde anlık konuma göre yakındaki işletmeleri keşfetmesi

**Anlık Menü bir online sipariş veya yemek teslimat platformu değildir.**

---

# Product Architecture

## Core Platform

### QR Menü

- QR ile menü görüntüleme
- Çoklu dil
- Ürün arama
- Filtreleme
- Ürün detayları
- Alerjen bilgileri
- Kalori bilgileri
- Kampanya pop-up, banner ve duyuru gösterimi Campaign Engine üzerinden yapılır

---

### Platform Keşfi / Yakındaki İşletmeler

- Kullanıcı konum izni verirse sistem anlık konumu kullanarak yakındaki işletmeleri listeler
- Konum izni verilmezse kullanıcı manuel şehir/konum seçimi ile keşif akışına devam eder
- Yakındaki işletmeler mesafe bazlı sıralanır ve filtrelenebilir
- Bu akış v1 kapsamındaki temel keşif deneyiminin bir parçasıdır

---

### Restoran Yönetimi

- Menü Yönetimi
- Kategori Yönetimi
- Ürün Yönetimi
- Fiyat Yönetimi
- Campaign Engine
- Duyurular

---

### Kullanıcı Rolleri ve Yetkilendirme

- Restoran özel girişler: admin ve garson
- Her restoran hesabı için ayrı admin ve garson oturumları
- Her panelde aktif oturum takibi ve oturum denetimi

Rol bazlı yetki matrisi:

- Admin
  - Menü yönetimi: ürün ekleme, düzenleme, kategori/fiyat yönetimi
  - Campaign Engine: kampanya oluşturma, düzenleme, silme
  - QR yönetimi: QR oluşturma, yenileme, indirme, şube bazlı QR atama
  - Rezervasyon yönetimi: rezervasyon onaylama, iptal etme, müşteri bilgilerini görüntüleme
  - Analitik: şube bazlı raporlar, en çok görüntülenen ürün/kategori, QR okutma verisi
  - Duyuru yönetimi: restoran duyuruları ve pop-up kampanya görselleri

- Branch Manager
  - Şube yönetimi: atanmış şubenin menü, rezervasyon ve operasyon akışlarını yönetme
  - Şube analitiği: yalnızca yetkili şubeye ait raporları görüntüleme
  - Personel görünümü: şubeye atanmış garsonları ve görevleri takip etme
  - Sınırlı erişim: restoran genel ayarları, diğer şubeler ve platform ayarlarına erişim yok

- Garson
  - Masa/görev takibi: masalarda aktif hizmet ve çağrı durumlarını takip etme
  - Servis isteği yönetimi: garson çağırma ve hesabı iste taleplerini görme
  - Rezervasyon takibi: güncel rezervasyon listesini görme, misafir giriş/çıkış durumunu izleme
  - Sınırlı erişim: ürün ekleme/düzenleme ve kampanya oluşturma yetkisi yok

- Güvenli API/POS erişimi
  - Enterprise planında Public API, Read API, Write API, Webhook ve POS Connector yetki tabanlı erişimle sunulur
  - Her entegrasyon için ayrı kimlik doğrulama, anahtar yönetimi ve erişim denetimi sağlanır

---

### QR Yönetimi

- QR oluşturma
- QR yenileme
- QR indirme
- Şube bazlı QR
- QR tasarımı
- QR logo ekleme
- QR yeniden oluşturma
- QR devre dışı bırakma
- QR yönlendirme değiştirme

---

### Rezervasyon

- Rezervasyon oluşturma
- Rezervasyon yönetimi
- Kapasite kontrolü
- Masa seçimi
- Otomatik onay
- Manuel onay
- İptal süresi yönetimi
- Rezervasyon kural seti

---

### Campaign Engine

- Popup kampanya gösterimi
- Banner kampanya gösterimi
- Kategori bazlı kampanya
- Ürün bazlı kampanya
- Saat bazlı kampanya
- Hedefleme kuralları
- Kampanya planlama ve yayınlama

---

### Analitik

- Günlük QR okutma
- En çok görüntülenen ürün
- En popüler kategori
- Menü görüntülenme süresi
- Şube bazlı istatistikler
- En çok aranan ürün
- Arama sonucu bulunamayan kelimeler
- Ortalama oturum süresi
- Bounce rate
- QR tekrar ziyaret oranı

---

## Table Experience (Opsiyonel NFC Modülü)
Bu modül tamamen opsiyoneldir.

İşletme satın almak zorunda değildir.

Panelden açılıp kapatılabilir.

---

## Commerce

- Smart Payment
- NFC Payment
- POS Entegrasyonu
- Payment Session
- Apple Pay / Google Pay
- Split Payment

---

## Intelligence

- AI Menü Asistanı
- CRM
- Loyalty
- Recommendation
- Gelişmiş Analitik

## Amaç
QR kod herkese açıktır.

Ancak bazı işlemler yalnızca masada oturan ve NFC ile doğrulanan kullanıcılar tarafından gerçekleştirilebilmelidir.

Bu doğrulama NFC etiketi ile sağlanacaktır ve müşteri için masa oturumu açar.

---

## Donanım
Her masada;

- NFC Etiketi
bulunacaktır.

Varsayılan olarak QR kodlar şube bazlı üretilir. Gelecekte masa bazlı QR desteği eklenebilir.

NFC etiketi pasif yapıdadır.

Pil gerektirmez.

Bakım gerektirmez.

---

## NFC Doğrulama
Telefon NFC etiketine dokundurulduğunda;

- Masa kimliği doğrulanır
- NFC Token doğrulanır
- Müşteri oturumu açılır
- İşlem yetkilendirilir

NFC doğrulama; Android: - Web NFC
- URL Tag

iOS: - URL Tag
- App Clip (opsiyonel)

## Verified Table Session

NFC doğrulaması başarılı olduğunda doğrulanmış masa oturumu oluşturulur.

Amaç;

- Fiziksel olarak masada bulunan kullanıcıyı yetkilendirmek
- Garson çağırma ve hesabı isteme gibi işlemler için güvenli bir katman oluşturmak
- Smart Payment için ortak oturum zemini sağlamak

### Session Oluşturma

- NFC doğrulaması başarılı olduğunda `Verified Table Session` oluşturulur
- Session, kullanıcı ve masa ile ilişkilendirilir
- Session belirli bir süre boyunca geçerlidir
- Süresi dolduğunda yeniden NFC doğrulaması gerekir

### Session Kuralları

- QR ile menü görüntülemek için session gerekmez
- Garson çağırma için doğrulanmış session gerekir
- Hesabı isteme için doğrulanmış session gerekir
- Smart Payment için doğrulanmış session gerekir
- Aynı kullanıcı aynı anda yalnızca bir aktif masa oturumuna sahip olabilir

### Session Yaşam Döngüsü

- QR Scan
- Menu Access
- NFC Verification
- Verified Table Session
- Garson Çağır
- Hesabı İste
- Payment
- Session Timeout

### Session Modeli

- `id`
- `restaurant_id`
- `branch_id`
- `table_id`
- `session_id`
- `user_id` nullable
- `verified_at`
- `expires_at`
- `status`

### Katılım Kuralı

- Masaya ilk NFC okutan kişi doğrulanmış masa oturumu oluşturur
- Diğer kullanıcılar aynı masaya `QR` veya `NFC` ile `Katıl` yapar
- `Katıl` işlemi oturum aktifken yapılabilir
- `Katıl` edilen kullanıcı doğrulanmış masa oturumuna dahil olur

---

## NFC ile Kullanılabilecek Özellikler

### Garson Çağır
Akış

QR

↓

Menü

↓

Garson Çağır

↓

"NFC'ye Dokundurun"

↓

NFC oturumu başlatılır

↓

Doğrulama

↓

Garsona Bildirim

Durum akışı:

- Bekliyor
- Garson aldı
- Tamamlandı
- Kapatıldı

---

### Hesabı İste
QR

↓

Menü

↓

Hesabı İste

↓

"NFC'ye Dokundurun"

↓

NFC oturumu başlatılır

↓

Doğrulama

↓

Garsona Bildirim

Kurallar:

- Tek aktif istek
- Aynı masa için tekrar basma engeli
- İstek kapatılmadan yeni istek açılamaz

---

## Güvenlik
NFC kullanılmıyorsa;

Garson çağırma ve hesabı isteme özellikleri devre dışı bırakılmalıdır.

NFC kullanılıyorsa;

- Fiziksel masa doğrulaması
- NFC oturumu başlatma zorunluluğu
- Rate Limit
- Tek aktif çağrı
- Süreli oturum
desteklenir.

Bu sayede QR kodun paylaşılması veya URL'nin kopyalanması sistemin kötüye kullanılmasına neden olmaz.

---

## Smart Payment
Bu modül planlanır ve parçalı ödeme akışını destekler.

Amaç;

Masa üzerindeki hesabın ürün bazlı, kişi bazlı veya tek kişi tarafından toplu şekilde ödenebilmesidir.

### Ödeme Modeli
Mevcut ödeme akışı temel olarak şu mantıkla ilerler:

```
SessionStatus = ACTIVE
↓ Garson siparişleri POS'tan girer.
↓ Müşteri "Hesabı İste"
↓ Garson gelir.
↓ POS'tan tahsilat yapılır.
↓ Session = CLOSED
```

Bu akışa yeni bir `Bill` nesnesi eklenir ve `Payment Session` ile `Bill` birbirinden ayrılır.

```
Table
↓ Bill
↓ Payment Session
↓ Payments
```

- `Bill` = POS'tan gelen gerçek hesap
- `Payment Session` = müşterilerin hesabı paylaşmak için oluşturduğu oturum

#### Bill

- `id`
- `table_id`
- `currency`
- `subtotal`
- `discount`
- `tax`
- `service_charge`
- `tip`
- `total`
- `status`

#### Bill Item

- `id`
- `bill_id`
- `product_name`
- `price`
- `quantity`
- `status`

#### Bill Item Status

- `UNPAID`
- `LOCKED`
- `PAID`

#### Payment Session

- `id`
- `bill_id`
- `host_id`
- `status`
- `created_at`
- `expires_at`

#### Payment

- `id`
- `payment_session_id`
- `bill_item_id`
- `user_id` (opsiyonel)
- `amount`
- `provider`
- `status`

#### Bill Status

- `OPEN`
- `PARTIALLY_PAID`
- `PAID`
- `CANCELLED`

#### Payment Status

- `PENDING`
- `SUCCESS`
- `FAILED`
- `CANCELLED`

Ödeme sonucu uygulamanın kendisi tarafından belirlenmemelidir. Ödeme doğrulaması aşağıdaki akışla ilerler:

```
Web
↓ İyzico / Stripe / PayTR
↓ 3D Secure
↓ Provider
↓ Webhook
↓ Payment SUCCESS
↓ Bill PAID
↓ Table Session CLOSED
```

Ödemeler her biri ayrı kayıt olur. Örnek:

```
Payment #11000 TLSUCCESS
```

şeklinde bir ödeme geldiğinde;

```
Bill 1000/1000 PAID ✅
```

### Parçalı Ödeme

Örnek hesap:

```
1200 TL
```

İlk kişi:

```
300 TL
```

sonrası:

```
Bill 300/1200 PARTIALLY_PAID
```

İkinci kişi:

```
400 TL
```

sonrası:

```
Bill 700/1200 PARTIALLY_PAID
```

Üçüncü kişi:

```
500 TL
```

sonrası:

```
Bill 1200/1200 PAID
```

### QR ekranında

Kullanıcı şöyle görür:

```
Masa 18
Toplam ₺1200
Ödenen ₺700
Kalan ₺500
```

### Garson paneli

Garson da aynı bilgiyi görür.

```
🟡 Masa 18 1200 TL 700 TL ödendi 500 TL kaldı
```

Tamamlanınca:

```
🟢 PAID
```

### Ödeme Akışı

Ödeme oturumu başlatıldığında kullanıcıya üç farklı ödeme modu sunulur:

1. **Ürün Bazlı (Item-based)**

```
☑ Pizza
☑ Kola
Toplam: ₺530
```

2. **Tutar Bazlı (Amount-based)**

```
Toplam Hesap ₺2.450
Ne kadar ödemek istiyorsunuz?
[ ₺500 ] [ Öde ]
```

Ödeme sonrası:

```
Kalan ₺1.950
```

3. **Eşit Böl (Equal Split)**

```
Toplam ₺2.400
4 kişi
↓
Kişi başı ₺600
```

Bu yapı hem esnek hem de kullanıcı alışkanlıklarına uygun olur.

```
Payment Session
↓ Nasıl ödemek istiyorsunuz?
○ Ürün Seç
○ Tutar Gir
○ Eşit Böl
```

### Ödeme Kuralları

- `assigned_to` kavramı yoktur; ürün, kime ait olduğundan çok hangi ürünlerin ödendiği takip edilir
- Ürünler varsayılan olarak `UNPAID` durur
- Ödeme başlatılınca seçilen ürünler `LOCKED` duruma geçebilir
- Ödeme başarılı olunca seçilen ürünler `PAID` olur
- Bir ürün iki kez kapatılamaz
- Kalan tutar her ödeme sonrası yeniden hesaplanır
- Ödeme sonucu sadece sağlayıcı webhook'u ile güncellenir
- Eğer bir ürün iki kişi arasında bölünecekse, bu özel senaryoda kullanıcı ürüne dokunup "Bu ürünü böl" seçebilir
- `Amount-based` ödeme yapıldığında sistem ürün bazında net bir kapanış bilgisi bilemez;
  - Basit yaklaşım: sadece toplam borç azalır ve ürünler tek tek `PAID` olarak işaretlenmez
  - Muhasebe yaklaşımı: sistem FIFO veya başka bir kurala göre ürünleri otomatik kapatabilir; bu daha karmaşıktır

### Ödeme Modları

Her `Payment` kaydı bir `mode` içerir:

- `ITEM`
- `AMOUNT`
- `EQUAL_SPLIT`

#### Payment

- `id`
- `payment_session_id`
- `bill_item_id` nullable (yalnızca `ITEM` modunda kullanılır)
- `user_id` (opsiyonel)
- `mode`
- `amount`
- `provider`
- `status`

- `mode = AMOUNT` veya `mode = EQUAL_SPLIT` ise `bill_item_id` `NULL` olur; sadece toplam tutar üzerinden ödeme kaydı oluşturulur

### Payment Session

Teknik olarak bir masa için `Payment Session` oluşur.

Model sırası:

- `Restaurant`
- `Branch`
- `Table`
- `Session`
- `PaymentSession`
- `BillItem`
- `Payment`

`Host`, yalnızca `Payment Session` için tanımlanır ve ilk ödeme oturumunu başlatan kullanıcıyı temsil eder. `Host` değiştirilebilir; çünkü host restorandan ayrılırsa ödeme oturumu devam etmelidir.

Host yalnızca UI lideridir. Ödeme doğrulaması ve oturum yönetimi Host'a bağlı değildir.

Katılım kuralı:

- `Host` ilk oturumu başlatır
- Diğer kullanıcılar aynı masaya `QR` veya `NFC` ile `Katıl` yapar
- Aynı masa için tek aktif `Payment Session` bulunur
- Katılımcılar ürün, kişi veya yüzde bazlı paylaşım yapabilir

Örnek yapı:

```json
{
  "table": 12,
  "session": "abc123",
  "payment_session": "pay_789",
  "items": [
    { "id": 1, "name": "Pizza", "price": 450, "status": "UNPAID" },
    { "id": 2, "name": "Cola", "price": 80, "status": "PAID" }
  ],
  "remaining_amount": 1850
}
```

### Uygulama Mantığı

- Kullanıcı kendi ürünlerini seçerek ödeme başlatabilir
- Kullanıcı hesabı eşit bölebilir
- Kullanıcı kişi bazlı tutar girebilir
- Bir kullanıcı kalan tüm bakiyeyi üstlenebilir
- Yeni ürün eklendiğinde açık ödeme oturumu güncellenir
- Ödeme alınmış ürünler yeniden açılmaz
- Ödeme durumu sadece ödeme sağlayıcısından gelen webhook ile güncellenir

### Arkadaş Daveti

- Kullanıcı aynı masa üzerindeki başka bir kişiyi ödeme oturumuna davet edebilir
- Davet, aynı `Payment Session` altında paylaşım mantığı oluşturur
- Davet edilen kullanıcı kendi ürününü veya payını seçebilir
- `Host` olmayan kullanıcılar bağımsız ödeme oturumu açamaz

## NFC Payment Module
Bu modül mimaride planlanacaktır ancak geliştirilmeyecektir.

Gelecekte değerlendirilmesi planlanmaktadır.

Amaç;

NFC doğrulaması sonrasında kullanıcıyı güvenli web ödeme ekranına yönlendirmektir.

Akış

QR

↓

Menü

↓

NFC

↓

Verified Table Session

↓

Web Ödeme Sayfası

↓

Apple Pay

Google Pay

Kart

↓

Ödeme Tamamlandı

↓

İşletmeye Bildirim

**Not:** Bu özellik mevcut temel ve NFC planlarına dahil değildir.

---

# Paketleme

## Starter

- QR Menü
- Menü Yönetimi
- QR Yönetimi
- Rezervasyon
- Campaign Engine
- Analitik

---

## Professional
Starter +

- NFC Doğrulama
- Garson Çağırma
- Hesabı İsteme

---

## Enterprise
Professional +

- Çoklu Şube
- API
- POS Entegrasyonları
- Smart Payment
- AI Menü Asistanı
- CRM
- Loyalty
- Gelişmiş Analitik

---

# Release Plan

Bu sürüm planı, ürünün önceliklerine göre versiyonlara bölünmüş bir yol haritasıdır.

## Version 1.0 — Core Platform

Amaç: Restoranların dijital menüye geçmesini sağlamak.

- QR Menü
- Restoran Paneli
- Menü Yönetimi
- Campaign Engine
- Rezervasyon
- Analitik
- Temel kullanıcı rolleri ve yetkilendirme
- QR yönetimi ve şube bazlı QR operasyonu

---

## Version 2.0 — Table Experience

Amaç: Masada doğrulanmış kullanıcı deneyimi oluşturmak.

- Verified Table Session
- NFC doğrulama
- Garson Çağırma
- Hesabı İste
- Table Presence
- Table Join
- Masa bazlı güvenli oturum kontrolü

---

## Version 3.0 — Commerce

Amaç: Ödeme ve POS süreçlerini dijitalleştirmek.

- POS Entegrasyonu
- Smart Payment
- Apple Pay / Google Pay
- Bahşiş
- Split Payment
- Payment Session
- Ödeme oturumu yönetimi ve webhook tabanlı ödeme doğrulama

---

## Version 4.0 — Intelligence

Amaç: Veri odaklı restoran yönetimi sunmak.

- AI Menü Asistanı
- CRM
- Loyalty
- Recommendation
- Gelişmiş Analitik
- AI destekli kampanya ve segmentasyon

---

# Teknik ve Mimari Gereksinimler

## Teknoloji Yığını

### Core Platform
- Frontend: `Next.js`
- Backend: `NestJS`
- Veritabanı: `PostgreSQL`
- Cache, rate limit ve oturum yönetimi: `Redis`
- Medya depolama: S3 uyumlu nesne depolama
- Kimlik doğrulama: JWT + refresh token
- Gözlemleme: merkezi loglama ve hata izleme

### Table Experience
- Core Platform stack korunur
- NFC doğrulama için ayrı modül eklenir
- Verified Table Session, müşteri oturumu ve çağrı/istek akışları event tabanlı çalışır

### Commerce
- Core Platform stack korunur
- POS, ödeme ve CRM entegrasyonları adapter katmanı ile ayrıştırılır
- Analitik için event toplama ve raporlama katmanı ayrılır

## Olay Sistemi

Sistem aşağıdaki olayları standardize eder:

- `QR_OPENED`
- `QR_SHARED`
- `PRODUCT_VIEWED`
- `CATEGORY_VIEWED`
- `SEARCH`
- `CAMPAIGN_CLICKED`
- `WAITER_CALLED`
- `BILL_REQUESTED`
- `RESERVATION_CREATED`
- `TABLE_JOINED`
- `TABLE_LEFT`
- `PAYMENT_FAILED`
- `PAYMENT_LOCKED`
- `NFC_AUTHORIZED`
- `VERIFIED_TABLE_SESSION_CREATED`
- `VERIFIED_TABLE_SESSION_EXPIRED`
- `PAYMENT_SESSION_CREATED`
- `PAYMENT_ITEM_PAID`
- `PAYMENT_COMPLETED`
- `TIP_ADDED`
- `PAYMENT_INVITE_SENT`

Bu olaylar hem analitik hem de AI tabanlı özellikler için temel veri kaynağıdır.

## Servisler

İlk sürümde sistem modüler monolit olarak tasarlanır ve şu mantıksal servisleri içerir:

- Kimlik ve yetki
- Menü ve içerik
- QR ve erişim
- Rezervasyon
- Bildirim
- Analitik ve event toplama
- Dosya ve medya

Mikroservis zorunlu değildir. Yüksek trafik alan parçalar ileride bağımsız servislere ayrılabilir.

## Çoklu Şube Modeli

Çoklu şube yapısı restoran sahibi merkezli tek tenant modeline dayanır.

- `restaurant` → `branch` → `table` → `qr` → `session` hiyerarşisi kullanılır
- `restaurant` üst organizasyon kaydıdır
- `branch` fiziksel şubedir
- Her şube kendi masa, QR, rezervasyon, kampanya ve analitik verisini taşır
- Erişim restoran ve şube seviyesinde sınırlandırılır
- Admin tüm restoranı, şube yöneticisi yalnızca yetkili şubeleri görür
- Garson yalnızca atandığı şube ve masalarda işlem yapar

### Veri İzolasyonu
- Tüm kritik tablolarda `restaurant_id` ve gerektiğinde `branch_id` bulunur
- API ve veri erişim katmanında şube filtresi zorunludur
- Analitik şube bazında segmentlenir, üst toplamlar ayrıca tutulur
- QR kodlar şube bazında benzersiz üretilir

### Yönetim Erişimi
- Restoran sahibi: tüm şubeler
- Şube yöneticisi: atanmış şubeler
- Garson: atanmış masa ve görevler
- Sistem yöneticisi: platform seviyesi yönetim

## Veri Modeli

Temel ödeme akışı aşağıdaki sırayla modellenir:

- `Restaurant`
- `Branch`
- `Table`
- `QR`
- `VerifiedTableSession`
- `Bill`
- `PaymentSession`
- `Payment`

Diğer yardımcı varlıklar:

- `Category`
- `Product`
- `Campaign`
- `Reservation`
- `Staff`
- `Role`
- `Permission`
- `Session`
- `AnalyticsEvent`
- `BillItem`

Yardımcı varlıklar:

- `AuditLog`
- `MediaAsset`
- `Webhook`
- `ApiKey`
- `Integration`
- `Tip`

## Olay Kaydı ve Denetim

- Ürün, kategori, şube, QR ve fiyat değişiklikleri audit log olarak tutulur
- Kim neyi, ne zaman değiştirdi bilgisi saklanır
- Silinen kayıtlar soft delete ile pasife alınır
- Ürün, kategori, şube ve QR kayıtları fiziksel olarak hemen silinmez

## Medya Yönetimi

- Görseller `WebP` ve `AVIF` formatında servis edilir
- Listeleme ve detay ekranları için thumbnail üretilir
- Büyük görseller responsive boyutlarda saklanır
- Medya servisinde boyut optimizasyonu zorunludur

## Analitik Segmentasyonu

Analitik verisi şu boyutlarla tutulur:

- restoran
- şube
- masa
- tarih / saat
- cihaz türü
- dil
- kampanya kaynağı

Bu yapı temel raporları, gelişmiş segmentasyon ve karşılaştırmalı raporları destekler.

## Offline ve Performans Hedefleri

### Offline / Çevrimdışı Destek
- İlk aşamada tam offline çalışma zorunlu değildir
- QR menü açılışında son görüntülenen içerik kısa süreli cache’den gösterilebilir
- Bağlantı kesilirse kullanıcıya net hata mesajı ve yeniden deneme akışı sunulur
- Yönetim panelinde çevrimdışı yazma işlemi yapılmaz

### Performans Hedefleri
- QR menü ilk içerik yükleme süresi: 2 saniye altı
- Kritik API yanıt süresi: 300 ms altı
- Menü görsellerinde lazy loading ve boyut optimizasyonu zorunludur
- QR sayfaları CDN üzerinden servis edilebilir
- Listeleme ve analitik ekranlarında sayfalama veya sanallaştırma kullanılır

### Ölçekleme Prensibi
- İlk kurulum tek bölgeli ve tek veritabanlıdır
- Trafik arttıkça servisler yatay ölçeklenir
- Analitik ve medya işlemleri gerektiğinde arka plan işçilerine ayrılır

## Güvenlik ve Operasyon

- Her restoran için ayrı tenant mantığı uygulanır
- Yetki kontrolü backend tarafında tekrar doğrulanır
- QR linkleri imzalı ve tahmin edilmesi zor formatta üretilir
- API/POS erişimi yalnızca Enterprise planında açılır
- Anahtarlar şifreli saklanır ve rotasyona uygundur

---

# Tasarım Prensibi
Anlık Menü iki temel teknoloji üzerine inşa edilir:

### QR
Bilgilendirme ve menü deneyimi.

- Menü
- Ürünler
- Kampanyalar
- Duyurular
- Restoran Bilgileri

### NFC (Opsiyonel)
Fiziksel masa doğrulaması gerektiren işlemler.

- Garson Çağırma
- Hesabı İsteme
- (Gelecekte) Web Tabanlı Ödeme
Bu mimari sayesinde platform hem düşük maliyetli temel QR çözümü sunar hem de NFC modülü ile premium özelliklere güvenli ve ölçeklenebilir şekilde genişleyebilir.
