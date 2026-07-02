# Release 3.0 - Commerce

Amaç: Hesap ve ödeme süreçlerini dijitalleştirerek masa bazlı ödeme deneyimini platforma taşımak.

Kapsam: POS entegrasyonları, payment session, parçalı ödeme akışları, webhook tabanlı ödeme doğrulama ve temel ödeme sağlayıcı bağlantıları bu sürümde canlıya alınacaktır.

## Hedeflenen Çıktı

Release 3.0 sonunda bir masa:

- POS'tan gelen açık hesabı dijital olarak görüntüleyebilmeli
- Bir veya birden fazla kullanıcı tarafından parçalı şekilde ödenebilmeli
- Ürün bazlı, tutar bazlı veya eşit böl ödeme akışlarını destekleyebilmeli
- Ödeme tamamlandığında hesap durumu güvenli şekilde güncellenebilmeli

## Ana Özellikler

- POS Entegrasyonu
  - Adapter tabanlı connector yapısı
  - Hesap ve ürün satırı eşleme
  - Açık hesap senkronizasyonu
  - Temel durum güncelleme akışları

- Smart Payment
  - Web tabanlı ödeme deneyimi
  - Ödeme sonucu sağlayıcı webhook'u ile doğrulama
  - Kalan tutar ve ödenen tutar görünürlüğü
  - Güvenli ödeme başlatma akışları

- Payment Session
  - Tek masa için aktif ödeme oturumu
  - Host mantığı
  - Katılımcı kullanıcı akışları
  - Süre sonu ve durum yönetimi

- Ödeme Modları
  - `ITEM`
  - `AMOUNT`
  - `EQUAL_SPLIT`
  - Kalan bakiye yeniden hesaplama

- Bill ve Payment Modeli
  - `Bill`, `BillItem`, `PaymentSession`, `Payment`
  - `UNPAID`, `LOCKED`, `PAID` ürün durumları
  - `OPEN`, `PARTIALLY_PAID`, `PAID`, `CANCELLED` hesap durumları

- Sağlayıcı Entegrasyonları
  - Kart ödeme akışı
  - Apple Pay / Google Pay hazırlığı
  - 3D Secure ve webhook işleme
  - Başarısız ödeme ve tekrar deneme akışları

## Kapsam Dışı

Bu sürümde aşağıdaki alanlar canlıya alınmayacaktır:

- Tam kapsamlı CRM ve loyalty entegrasyonları
- AI destekli fiyatlama veya kampanya optimizasyonu
- Gelişmiş finansal raporlama ve muhasebe entegrasyonları
- Çoklu bölge finansal yerelleştirme

## Operasyonel Hazırlık

Canlıya çıkış öncesinde aşağıdaki hazırlıkların tamamlanması beklenir:

- En az bir POS sağlayıcısı ile test entegrasyonu kurulmalı
- Ödeme sağlayıcısı sandbox webhook akışları doğrulanmalı
- Kısmi ödeme, tekrar ödeme ve başarısız ödeme senaryoları test edilmeli
- Garson paneli ve müşteri ekranında bakiye görünürlüğü doğrulanmalı
- Finansal olaylar için loglama ve denetim kayıtları hazır olmalı

## Kabul Kriterleri

- POS'tan gelen açık hesap doğru masa ile eşlenebilmeli
- Payment session başlatma ve kapatma kuralları sorunsuz çalışmalı
- `ITEM`, `AMOUNT` ve `EQUAL_SPLIT` ödeme modları beklenen şekilde sonuç üretmeli
- Ödeme durumu yalnızca webhook doğrulaması sonrasında kesinleşmeli
- Aynı ürün iki kez ödenememeli veya iki kez kapatılamamalı
- Parçalı ödeme sonrası kalan tutar müşteri ve operasyon ekranlarında doğru görünmeli

## Çıkış Kriterleri

Release 3.0 canlıya alınmadan önce:

- POS ve ödeme sağlayıcı sandbox testleri tamamlanmış olmalı
- Kritik ödeme akışları uçtan uca test edilmiş olmalı
- Webhook gecikmesi, tekrar gönderim ve hata durumları doğrulanmış olmalı
- Finansal veri tutarlılığı kontrolleri geçmiş olmalı
- Bloke edici ödeme, bakiye veya hesap kapatma hatası kalmamalı

## Başarı Ölçütleri

Release sonrası ilk ölçüm döneminde aşağıdaki metrikler takip edilir:

- Başarılı ödeme oranı
- Parçalı ödeme kullanım oranı
- Ortalama ödeme tamamlama süresi
- Webhook ile sonuçlanan ödeme oranı
- Başarısız veya yarım kalan ödeme oranı
- POS hesap senkronizasyon doğruluğu
