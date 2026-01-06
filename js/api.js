const API_BASE = "https://collectionapi.metmuseum.org/public/collection/v1";

function createCard(item) {
  return `
    <div class="col-md-4">
      <div class="card h-100">
        ${item.primaryImageSmall ? `<img src="${item.primaryImageSmall}" class="card-img-top">` : ""}
        <div class="card-body">
          <h5 class="card-title">${item.title || "Başlıksız"}</h5>
          <p class="card-text">${item.artistDisplayName || "Bilinmeyen Sanatçı"}</p>
          <a href="detail.html?id=${item.objectID}" class="btn btn-outline-primary btn-sm">
            Detay
          </a>
        </div>
      </div>
    </div>
  `;
}

/* PRODUCTS */
async function loadProducts() {
  const container = document.getElementById("products");
  const loading = document.getElementById("loading");
  const error = document.getElementById("error");

  container.className = "row g-4";

  try {
    const res = await fetch(`${API_BASE}/search?q=painting`);
    const data = await res.json();

    if (!data.objectIDs || data.objectIDs.length === 0) {
      throw new Error("Veri yok");
    }

    const ids = data.objectIDs.slice(0, 9);

    for (let id of ids) {
      const objRes = await fetch(`${API_BASE}/objects/${id}`);
      const obj = await objRes.json();
      if (!obj.primaryImageSmall) continue;

      container.innerHTML += createCard(obj);
    }

    loading.classList.add("d-none");
  } catch (err) {
    loading.classList.add("d-none");
    error.classList.remove("d-none");
    console.error(err);
  }
}
async function loadHeroImage() {
  const heroImage = document.getElementById("heroImage");
  if (!heroImage) return;

  try {
    const res = await fetch(`${API_BASE}/search?q=museum`);
    const data = await res.json();

    if (!data.objectIDs || data.objectIDs.length === 0) {
      throw new Error("Hero veri yok");
    }

    const id = data.objectIDs[0];
    const objRes = await fetch(`${API_BASE}/objects/${id}`);
    const obj = await objRes.json();

    if (obj.primaryImageSmall) {
      heroImage.src = obj.primaryImageSmall;
    }
  } catch (err) {
    console.warn("Hero görseli yüklenemedi", err);
  }
}
