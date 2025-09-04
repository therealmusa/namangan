// Tumanlar bo‘yicha ma’lumotlar
const districtInfo = {
    uychi: {
      title: "Uychi tumani",
      text: "Uychi tumani — Namangan viloyatining ma'muriy tumanlaridan biri. Qishloq xo‘jaligi rivojlangan, bog‘dorchilik va dehqonchilik yetakchi sohalardan."
    },
    chortoq: {
      title: "Chortoq tumani",
      text: "Chortoq tumani haqida ma'lumot keyinchalik qo‘shiladi."
    },
    namangan: {
      title: "Namangan tumani",
      text: "Namangan tumani haqida ma'lumot keyinchalik qo‘shiladi."
    }
    // boshqa tumanlarni ham shu yerga qo‘shib chiqasiz
  };
  
  // Panel elementi
  const infoPanel = document.getElementById("info-panel");
  
  // Barcha tumanni olaylik
  document.querySelectorAll(".st0").forEach(path => {
    path.addEventListener("click", () => {
      // Avval barcha tumanlardan active klassni olib tashlaymiz
      document.querySelectorAll(".st0").forEach(p => p.classList.remove("active"));
  
      // Bosilgan tumanga active klass qo‘shamiz
      path.classList.add("active");
  
      // Ma'lumot chiqaramiz
      const id = path.id;
      if (districtInfo[id]) {
        infoPanel.innerHTML = `
          <h2>${districtInfo[id].title}</h2>
          <p>${districtInfo[id].text}</p>
        `;
      } else {
        infoPanel.innerHTML = `<p>${id} tumani haqida ma'lumot topilmadi.</p>`;
      }
    });
    // Tumanni bosganda alohida sahifaga yo'naltirish
document.querySelectorAll(".st0").forEach(path => {
    path.addEventListener("click", () => {
      const id = path.id;
      // masalan uychi -> uychi.html ga o'tadi
      window.location.href = id + ".html";
    });
  });
  document.getElementById("back-btn").addEventListener("click", function(e){
    e.preventDefault(); // oddiy o‘tishni to‘xtatamiz
    document.body.classList.add("fade-out"); // animatsiya qo‘shamiz

    // Animatsiya tugagach, sahifaga yo‘naltiramiz
    setTimeout(() => {
        window.location.href = this.href;
    }, 500); // 500ms – CSS transition davomiyligi bilan mos bo‘lishi kerak
});

  });
  