
// get json announcements
fetch("data/announcements.json")
.then(res => res.json())
.then(ads => {
    const container = document.getElementById("announcements-list");

    ads.forEach(ad => {
    const shortDate = new Date(ad.date).toLocaleDateString("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    // build html
    const el = document.createElement("div");

    // testing structure
    el.innerHTML = `
            <div class="basic-window scale-on-hover-x115 flex flex-col justify-between h-full items-center" data-id="${ad.slug}">

                <p class="text-gray-700 leading-relaxed font-semibold text-left w-full mb-5">${shortDate}</p>

                <div class="rounded-2xl overflow-hidden mb-5 h-48">
                    <img src=".${ad.image}" class="h-full w-auto object-cover">
                </div>

                <h2 class="text-2xl font-extrabold mb-4 text-white">${ad.title}</h2>

                <p class="text-gray-700 leading-relaxed font-semibold">
                    ${truncateText(ad.body, 170)}
                </p>
            </div>
    `;

    el.querySelector('.basic-window').addEventListener('click', () => {
        window.location.href = `./announcement.html?id=${ad.slug}`;
    });

    container.appendChild(el);
    });
})
.catch(err => console.error("Error when loading announcements:", err));


function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  // Rozdzielamy na słowa
  const words = text.split(' ');
  let truncated = '';
  for (let word of words) {
    if ((truncated + word).length > maxLength) break;
    truncated += (truncated ? ' ' : '') + word;
  }
  return truncated + '…'; // dodajemy wielokropek
}