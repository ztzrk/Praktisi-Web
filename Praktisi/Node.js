const pestInfo = [
    { "name":"wasp", "text":"Flying pest", "img":"https://www.pngitem.com/pimgs/m/211-2112215_transparent-hornet-png-wasp-transparent-png-download.png", "info":"Yellow stripes"},
    { "name":"rat", "text":"Running pest", "img":"https://www.pngitem.com/pimgs/m/14-149302_rat-transparent-background-hd-png-download.png", "info": "Hairy animal"},
    ]
    
    const pestContainer = document.getElementById("pestContainer");
    
    pestContainer.innerHTML = pestInfo
      .map(({name,text,img, info},i) => `<div class="cards" data-idx="${i}">
        <h4 class="name">${name}</h4>
        <p><img src="${img}"/><p class="text">${text}</p>
      </div>`).join("");
    
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText =  document.getElementById("modalText");
    pestContainer.addEventListener("click",function(e) {
      const idx = e.target.closest("div").dataset.idx;
      modal.classList.remove("hide");
      modalTitle.innerHTML = pestInfo[idx].name;
      modalText.innerHTML = pestInfo[idx].info;
    })
    modal.querySelector(".close").addEventListener("click",function() { modal.classList.add("hide") });