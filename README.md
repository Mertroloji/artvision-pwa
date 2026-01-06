# 🎨 Dijital Müze Rehber PWA

Bu proje, **Web Tabanlı Mobil Uygulama Geliştirme** dersi kapsamında hazırlanmış,  
**Progressive Web App (PWA)** özelliklerine sahip, kurumsal bir **dijital müze / sanat galerisi** web uygulamasıdır.

Uygulama, The Met Museum Collection API kullanılarak sanat eserlerini dijital ortamda sergilemeyi ve kullanıcıların bu eserlere çevrimdışı dahi erişebilmesini amaçlamaktadır.

---

## 🌐 Canlı Demo
🔗 (Buraya GitHub Pages veya Netlify linkini ekle)

---

## 🎥 Demo Video
🔗 (Google Form’a yüklediğin video linki)

---

## 🏛️ Proje Senaryosu
Bu uygulama, bir müze veya sanat galerisi için geliştirilmiş **kurumsal bir dijital rehber platformudur**.

Ziyaretçiler:
- Galeri koleksiyonundaki eserleri inceleyebilir
- Eser detaylarına ulaşabilir
- Uygulamayı cihazlarına kurabilir
- İnternet bağlantısı olmadığında dahi uygulamayı kullanabilir

---

## 📄 Sayfa Yapısı (Multi-Page)

- **index.html**  
  Ana sayfa, galeri tanıtımı ve öne çıkan eserler

- **products.html**  
  Sanat eserlerinin listelendiği ana veri sayfası

- **detail.html**  
  Seçilen esere ait detay bilgilerin gösterildiği sayfa  
  (`detail.html?id=...`)

- **about.html**  
  Kurumsal bilgiler, kullanılan teknolojiler ve offline açıklaması

- **contact.html**  
  İletişim formu (input validation + kullanıcı mesajları)

---

## 🔌 Kullanılan API
**The Met Museum Collection API**  
🔗 https://metmuseum.github.io/

### Kullanılan Endpointler:
- Arama / Listeleme:
https://collectionapi.metmuseum.org/public/collection/v1/search?q=art

- Eser Detayı:
https://collectionapi.metmuseum.org/public/collection/v1/objects/{id}


-API, fetch() yöntemi ile kullanılmıştır.
-API, hem eser arama/listeme hem de seçilen eserin detay bilgisini getirmek amacıyla
iki farklı endpoint üzerinden kullanılmıştır.


---

## 🎨 CSS Framework
- **Bootstrap 5**
- CDN üzerinden entegre edilmiştir
- Grid sistemi, kart yapıları, butonlar ve formlar aktif olarak kullanılmıştır

🔗 https://getbootstrap.com/

---

## 📲 PWA Özellikleri

### ✔️ Manifest
- name
- short_name
- start_url
- display
- icons
- theme_color

### ✔️ Service Worker
- App Shell Cache (HTML, CSS, JS, icon)
- Offline fallback (offline.html)
-Offline durumda kullanıcı offline.html sayfasına yönlendirilir.


### ✔️ Kurulabilirlik
Uygulama, tarayıcı üzerinden **install edilebilir** ve standalone modda çalışır.

---

## 🔌 Offline Çalışma & Plan B

Kullanıcının internet bağlantısı olmadığında:
- Canlı API isteği başarısız olur
- Otomatik olarak `/data/sample.json` dosyasına geçilir
- Ekranda şu uyarı gösterilir:

> **“Canlı API erişilemiyor, örnek veri gösteriliyor.”**

Bu sayede uygulama:
- Çökmez
- Kullanıcıyı bilgilendirir
- Offline senaryoyu başarıyla yönetir

⚠️ Uygulama sadece JSON dosyası ile çalışmamaktadır.  
Online durumda gerçek API kullanılmaktadır.

---

## ⏳ Durum Yönetimi
Uygulama arayüzünde aşağıdaki durumlar ele alınmıştır:
- Yükleniyor (loading)
- Boş veri durumu
- API / network hata durumu

---

## 🛠️ Kullanılan Teknolojiler
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Bootstrap 5
- Fetch API
- Service Worker
- Web App Manifest

---

## 📌 Not
Bu proje bireysel olarak hazırlanmıştır ve dönem sonu (final) uygulaması olarak teslim edilmiştir.
📌 Bu proje, Web Tabanlı Mobil Uygulama Geliştirme dersi kapsamında
PWA, API kullanımı, offline çalışma ve kurulum kriterlerini karşılayacak şekilde geliştirilmiştir.

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](screenshots/home.png)

### Eser Detay Sayfası
![Detay Sayfası](screenshots/detail.png)

### Offline Senaryo
![Offline Senaryo](screenshots/offline.png)

