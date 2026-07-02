# Release 2.0 - Table Experience

Amaç: Masada bulunan kullanıcıyı güvenli şekilde doğrulayarak QR menü deneyimini masa içi etkileşimlere genişletmek.

Kapsam: NFC doğrulama, doğrulanmış masa oturumu, garson çağırma, hesabı isteme ve masa katılımı akışları bu sürümde canlıya alınacaktır. Bu sürüm, QR menüden etkileşimli masa deneyimine geçişi sağlar.

## Hedeflenen Çıktı

Release 2.0 sonunda bir müşteri:

- QR ile menüye eriştikten sonra NFC ile masada olduğunu doğrulayabilmeli
- Doğrulanmış masa oturumu başlatabilmeli
- Güvenli şekilde garson çağırabilmeli
- Hesabı isteme talebi oluşturabilmeli
- Aynı masadaki oturuma katılabilmeli

## Ana Özellikler

- Verified Table Session
  - NFC doğrulama sonrası oturum oluşturma
  - `verified_at` ve `expires_at` yönetimi
  - Süre sonu ve yeniden doğrulama akışları
  - Tek aktif masa oturumu kuralları

- NFC Doğrulama
  - NFC token doğrulama
  - Masa kimliği eşleme
  - Android için Web NFC / URL Tag desteği
  - iOS için URL Tag desteği

- Garson Çağırma
  - Doğrulanmış oturum üzerinden istek oluşturma
  - Bekliyor, alındı, tamamlandı, kapatıldı durum akışı
  - Tek aktif çağrı kuralı
  - Rate limit ve tekrar istek koruması

- Hesabı İste
  - Doğrulanmış oturum zorunluluğu
  - Tek aktif istek kuralı
  - Kapatma ve yeniden açma kontrolü
  - Şube veya masa bazlı operasyon görünürlüğü

- Masa Katılımı
  - QR veya NFC ile aktif oturuma katılma
  - Host veya ilk doğrulayan kullanıcı mantığı
  - Aynı masa üzerindeki kullanıcıların ortak oturum katılımı

## Kapsam Dışı

Bu sürümde aşağıdaki alanlar canlıya alınmayacaktır:

- POS entegrasyonları
- Online ödeme ve split payment
- Apple Pay, Google Pay ve kart tahsilat akışları
- CRM, loyalty ve recommendation modülleri
- Gelişmiş AI destekli segmentasyon

## Operasyonel Hazırlık

Canlıya çıkış öncesinde aşağıdaki hazırlıkların tamamlanması beklenir:

- NFC etiket ve masa eşleşmelerinin örnek şubelerde kurulması
- Android ve iOS doğrulama senaryolarının test cihazlarıyla doğrulanması
- Garson panelinde çağrı ve hesap isteme görünümünün hazır olması
- Session timeout ve rate limit kurallarının konfigüre edilmesi
- Destek ve operasyon ekibi için hata senaryolarının dokümante edilmesi

## Kabul Kriterleri

- NFC doğrulama akışları Android ve iOS desteklenen senaryolarda başarılı çalışmalı
- Doğrulama sonrası Verified Table Session doğru şekilde oluşturulmalı
- Session süresi dolduğunda yeniden doğrulama zorunlu hale gelmeli
- Garson çağırma ve hesabı isteme talepleri doğru masa ve şube ile ilişkilendirilmeli
- Aynı masa için tekrar eden istekler tanımlı kurallara göre engellenmeli
- QR ile menü görüntüleme akışı NFC kullanılmasa bile çalışmaya devam etmeli

## Çıkış Kriterleri

Release 2.0 canlıya alınmadan önce:

- NFC doğrulama hata senaryoları test edilmiş olmalı
- Garson çağırma ve hesabı isteme akışları uçtan uca doğrulanmış olmalı
- Oturum yönetimi, timeout ve rate limit davranışları üretim benzeri ortamda test edilmiş olmalı
- Şube ve masa bazlı operasyon görünürlüğü doğru çalışmalı
- Kritik kullanıcı akışlarında bloke edici hata kalmamalı

## Başarı Ölçütleri

Release sonrası ilk ölçüm döneminde aşağıdaki metrikler takip edilir:

- Başarılı NFC doğrulama oranı
- Doğrulama sonrası oturum başlatma oranı
- Garson çağırma istek tamamlama süresi
- Hesabı isteme istek tamamlama oranı
- Session timeout nedeniyle başarısız işlem oranı
- Masa katılımı kullanım oranı
