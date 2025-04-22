const kosList = [
  {
    name: "KOS AMIN",
    fasilitas: "kamar mandi dalam, free AC",
    harga: 780000,
    diskon: "20%",
    img: "https://via.placeholder.com/150"
  },
  {
    name: "KOS Marni",
    fasilitas: "kamar mandi luar, dapur bersama",
    harga: 600000,
    diskon: "25%",
    img: "https://via.placeholder.com/150"
  },
  {
    name: "KOS SULTAN",
    fasilitas: "kamar mandi dalam, free laundry",
    harga: 1100000,
    diskon: "25%",
    img: "https://via.placeholder.com/150"
  },
  {
    name: "KOS SUSUN",
    fasilitas: "kamar mandi dalam, jumat berkah",
    harga: 860000,
    diskon: "20%",
    img: "https://via.placeholder.com/150"
  }
];

function renderKosList(list) {
  const container = document.getElementById('kosList');
  container.innerHTML = '';
  list.forEach(kos => {
    container.innerHTML += `
      <div class="kos-card">
        <img src="${kos.img}" alt="${kos.name}">
        <h4>${kos.name}</h4>
        <p>${kos.fasilitas}</p>
        <strong>Rp ${kos.harga.toLocaleString()}</strong> <span>(${kos.diskon})</span>
      </div>
    `;
  });
}

function searchKos() {
  const keyword = document.getElementById('searchBar').value.toLowerCase();
  const filtered = kosList.filter(kos => kos.name.toLowerCase().includes(keyword));
  renderKosList(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  renderKosList(kosList);
});
