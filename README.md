# 🎨 Dijital Müze Rehber PWA

Bu proje, **Web Tabanlı Mobil Uygulama Geliştirme** dersi kapsamında hazırlanmış,  
**Progressive Web App (PWA)** özelliklerine sahip, kurumsal bir **dijital müze / sanat galerisi** web uygulamasıdır.

Uygulama, The Met Museum Collection API kullanılarak sanat eserlerini dijital ortamda sergilemeyi ve kullanıcıların bu eserlere çevrimdışı dahi erişebilmesini amaçlamaktadır.

---

## 🌐 Canlı Demo
🔗 https://mertroloji.github.io/artvision-pwa/

---

## 🎥 Demo Video
🔗 (https://drive.google.com/file/d/1FPH3cnfww13cBC96c4iICVHsm05mI5M-/view?usp=drive_link)]

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
  Ana sayfa, galeri tanıtımı ve arama alanı

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

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](screenshots/home.png)

### Eser Detay Sayfası
![Detay Sayfası](screenshots/detail.png)

### Offline Senaryo
![Offline Senaryo](screenshots/offline.png)

---

## 🔌 Kullanılan API
**The Met Museum Collection API**  
🔗 https://metmuseum.github.io/

### Kullanılan Endpointler
- Arama / Listeleme:  
  `https://collectionapi.metmuseum.org/public/collection/v1/search?q=art`
- Eser Detayı:  
  `https://collectionapi.metmuseum.org/public/collection/v1/objects/{id}`

API, **fetch() yöntemi** ile kullanılmıştır ve hem arama/listeleme hem de seçilen eserin detay bilgisini almak için iki farklı endpoint ile çalışmaktadır.

---

## 🎨 CSS Framework
- **Bootstrap 5**
- CDN üzerinden entegre edilmiştir
- Grid sistemi, kart yapıları, butonlar ve formlar aktif olarak kullanılmıştır

🔗 https://getbootstrap.com/

---

## 📲 PWA Özellikleri

### ✔️ Manifest (`manifest.json`)
- name
- short_name
- start_url
- display
- icons
- theme_color

### ✔️ Service Worker (`service-worker.js`)
- App Shell Cache (HTML, CSS, JS, icon)
- Offline fallback (`offline.html`)
- Örnek JSON fallback (`data/sample.json`)

### ✔️ Kurulabilirlik
Uygulama tarayıcı üzerinden **install edilebilir** ve standalone modda çalışır.

---

## 🔌 Offline Çalışma & Plan B

Public API erişilemediğinde:
- Canlı API isteği başarısız olur
- `/data/sample.json` dosyasından örnek veri gösterilir
- Kullanıcıya şu uyarı gösterilir:

> **“Canlı API erişilemiyor, örnek veri gösteriliyor.”**

Bu sayede uygulama:
- Çökmez
- Kullanıcı bilgilendirilir
- Offline senaryosu başarıyla yönetilir

⚠️ Uygulama sadece JSON dosyasıyla çalışmaz.  
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
Proje; **PWA**, **API kullanımı**, **offline çalışma**, **kurulabilirlik**, ve **çok sayfalı yapı** kriterlerini karşılayacak şekilde geliştirilmiştir.


