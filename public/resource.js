let mathBooks = [
    {
      name: "Mathematics JEE Advanced PYQ",
      path: "http://localhost:8000/jee-a-pyq-m.pdf",
    },
    {
      name: "Mathematics Formula Handbook",
      path: "http://localhost:8000/handbook-m.pdf",
    },
  ];
  let phyBooks = [
    {
      name: "DC Pandey - Volume 1",
      path: "http://localhost:8000/dcpandeyvol1.pdf",
    },
    {
      name: "DC Pandey - Volume 2",
      path: "http://localhost:8000/dcpandeyvol2.pdf",
    },
    {
      name: "DC Pandey - Volume 3",
      path: "http://localhost:8000/dcpandeyvol3.pdf",
    },
    {
      name: "DC Pandey - Volume 4",
      path: "http://localhost:8000/dcpandeyvol4.pdf",
    },
    {
      name: "DC Pandey - Volume 5",
      path: "http://localhost:8000/dcpandeyvol5.pdf",
    },
    {
      name: "Physics Formula Handbook",
      path: "http://localhost:8000/handbook-p.pdf",
    },
    {
      name: "Physics JEE Advanced PYQ",
      path: "http://localhost:8000/jee-a-pyq-p.pdf",
    },
  ];
  let chemBooks = [
    {
      name: "Chemistry JEE Advanced PYQ",
      path: "http://localhost:8000/jee-a-pyq-c.pdf",
    },
    {
      name: "Chemistry Handbook",
      path: "http://localhost:8000/handbook-c.pdf",
    },
    {
      name: "Himanshu Pandey - Organic Chemistry",
      path: "http://localhost:8000/hpandeyoc.pdf",
    },
    {
      name: "N Awasthi - Physical Chemistry",
      path: "http://localhost:8000/n-awasthi.pdf",
    },
    {
      name: "Vishal Joshi - Inorganic Chemistry",
      path: "http://localhost:8000/vj-ioc.pdf",
    },
    {
      name: "VK Jaiswal - Inorganic Chemistry - 1 to 5",
      path: "http://localhost:8000/vkj1to5.pdf",
    },
    {
      name: "VK Jaiswal - Inorganic Chemistry - 6 to 11",
      path: "http://localhost:8000/vkj6to11.pdf",
    },
  ];
  
  let mathNotes = [
    {
      name: "Application of Derivatives",
      path: "http://localhost:8000/AOD.pdf",
    },
    {
      name: "Indefinite Integration",
      path: "http://localhost:8000/indefinite-integration.pdf",
    },
    {
      name: "Inverse Trigonometric Functions",
      path: "http://localhost:8000/itf.pdf",
    },
    {
      name: "Methods of Differentiation",
      path: "http://localhost:8000/mod.pdf",
    },
    {
      name: "Matrices and Determinants",
      path: "http://localhost:8000/mnd.pdf",
    },
  ];
  // let phyNotes=[
  //     {
  //         name:
  //         path:
  //     }
  // ]
  let chemNotes = [
    {
      name: "Coordination Compounds",
      path: "http://localhost:8000/coordinationcompounds-1.pdf",
    },
    {
      name: "Name Reactions",
      path: "http://localhost:8000/nmrxn.pdf",
    },
    {
      name: "P Block Elements - Group 13 to 14",
      path: "http://localhost:8000/p-block-13to14.pdf",
    },
    {
      name: "S Block Elements",
      path: "http://localhost:8000/s-block.pdf",
    },
  ];
  
  let m1 = document.querySelector("#m1");
  let p1 = document.querySelector("#p1");
  let c1 = document.querySelector("#c1");
  let m2 = document.querySelector("#m2");
  let p2 = document.querySelector("#p2");
  let c2 = document.querySelector("#c2");
  
  // to access books
  
  // maths
  for (let i = 0; i < mathBooks.length; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
      <p>${mathBooks[i].name}</p>
      <iframe src="${mathBooks[i].path}" title="${mathBooks[i].name}"></iframe>
      <button class="fsc-btn">FULL SCREEN</button>
      <button class="close-btn">&times;</button>
    `;
    const fullscreenBtn = div.querySelector(".fsc-btn");
    const closeBtn = div.querySelector(".close-btn");
    fullscreenBtn.addEventListener("click", () => {
      div.classList.add("fullscr");
      fullscreenBtn.style.display = "none";
      closeBtn.style.display = "block";
    });
    closeBtn.addEventListener("click", () => {
      div.classList.remove("fullscr");
      fullscreenBtn.style.display = "block";
      closeBtn.style.display = "none";
    });
    // Initially hide the close button
    closeBtn.style.display = "none";
    m1.appendChild(div);
  }
  
  // physics
  for (let i = 0; i < phyBooks.length; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
      <p>${phyBooks[i].name}</p>
      <iframe src="${phyBooks[i].path}" title="${phyBooks[i].name}"></iframe>
      <button class="fsc-btn">FULL SCREEN</button>
      <button class="close-btn">&times;</button>
    `;
    const fullscreenBtn = div.querySelector(".fsc-btn");
    const closeBtn = div.querySelector(".close-btn");
    fullscreenBtn.addEventListener("click", () => {
      div.classList.add("fullscr");
      fullscreenBtn.style.display = "none";
      closeBtn.style.display = "block";
    });
    closeBtn.addEventListener("click", () => {
      div.classList.remove("fullscr");
      fullscreenBtn.style.display = "block";
      closeBtn.style.display = "none";
    });
    // Initially hide the close button
    closeBtn.style.display = "none";
    p1.appendChild(div);
  }
  
  // chemistry
  for (let i = 0; i < chemBooks.length; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
      <p>${chemBooks[i].name}</p>
      <iframe src="${chemBooks[i].path}" title="${chemBooks[i].name}"></iframe>
      <button class="fsc-btn">FULL SCREEN</button>
      <button class="close-btn">&times;</button>
    `;
    const fullscreenBtn = div.querySelector(".fsc-btn");
    const closeBtn = div.querySelector(".close-btn");
    fullscreenBtn.addEventListener("click", () => {
      div.classList.add("fullscr");
      fullscreenBtn.style.display = "none";
      closeBtn.style.display = "block";
    });
    closeBtn.addEventListener("click", () => {
      div.classList.remove("fullscr");
      fullscreenBtn.style.display = "block";
      closeBtn.style.display = "none";
    });
    // Initially hide the close button
    closeBtn.style.display = "none";
    c1.appendChild(div);
  }
  
  // to access notes
  // maths
  for (let i = 0; i < mathNotes.length; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
      <p>${mathNotes[i].name}</p>
      <iframe src="${mathNotes[i].path}" title="${mathNotes[i].name}"></iframe>
      <button class="fsc-btn">FULL SCREEN</button>
      <button class="close-btn">&times;</button>
    `;
    const fullscreenBtn = div.querySelector(".fsc-btn");
    const closeBtn = div.querySelector(".close-btn");
    fullscreenBtn.addEventListener("click", () => {
      div.classList.add("fullscr");
      fullscreenBtn.style.display = "none";
      closeBtn.style.display = "block";
    });
    closeBtn.addEventListener("click", () => {
      div.classList.remove("fullscr");
      fullscreenBtn.style.display = "block";
      closeBtn.style.display = "none";
    });
    // Initially hide the close button
    closeBtn.style.display = "none";
    m2.appendChild(div);
  }
  
  // chemistry
  for (let i = 0; i < chemNotes.length; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
      <p>${chemNotes[i].name}</p>
      <iframe src="${chemNotes[i].path}" title="${chemNotes[i].name}"></iframe>
      <button class="fsc-btn">FULL SCREEN</button>
      <button class="close-btn">&times;</button>
    `;
    const fullscreenBtn = div.querySelector(".fsc-btn");
    const closeBtn = div.querySelector(".close-btn");
    fullscreenBtn.addEventListener("click", () => {
      div.classList.add("fullscr");
      fullscreenBtn.style.display = "none";
      closeBtn.style.display = "block";
    });
    closeBtn.addEventListener("click", () => {
      div.classList.remove("fullscr");
      fullscreenBtn.style.display = "block";
      closeBtn.style.display = "none";
    });
    // Initially hide the close button
    closeBtn.style.display = "none";
    c2.appendChild(div);
  }
  
  // query selector
  document.querySelector("#books").addEventListener("click", () => {
    document.querySelector(".books").classList.toggle("display");
  });
  // drop down
  document.querySelector("#books").addEventListener("click", () => {
    const span = document.querySelector("#books").querySelector("span");
    if (span.innerHTML != "⇧") span.innerHTML = "&#8679;";
    else span.innerHTML = "&#8681;";
  });
  document.querySelector("#notes").addEventListener("click", () => {
    document.querySelector(".notes").classList.toggle("display");
  });
  // drop down
  document.querySelector("#notes").addEventListener("click", () => {
    const spans = document.querySelector("#notes").querySelector("span");
    if (spans.innerHTML != "⇧") spans.innerHTML = "&#8679;";
    else spans.innerHTML = "&#8681;";
  });
  document.querySelector("#m1").addEventListener("click", () => {
    document.querySelector("#m1+div").classList.toggle("display");
  });
  document.querySelector("#p1").addEventListener("click", () => {
    document.querySelector("#p1+div").classList.toggle("display");
  });
  document.querySelector("#c1").addEventListener("click", () => {
    document.querySelector("#c1+div").classList.toggle("display");
  });
  