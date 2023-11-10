let dataProj = [];

function submitProj(event) {
  event.preventDefault();

  let inputNameProj = document.getElementById("inputNameProj").value;
  let inputstartdate = document.getElementById("inputstartdate").value;
  let inputenddate = document.getElementById("inputenddate").value;
  let inputdescription = document.getElementById("inputdescription").value;
  let inputImage = document.getElementById("inputImage").files;

  console.log("namaproject", inputNameProj);
  console.log("start", inputstartdate);
  console.log("end", inputenddate);
  console.log("description", inputdescription);

  inputImage = URL.createObjectURL(inputImage[0]);
  console.log("image", inputImage);

  const proj = {
    title: inputNameProj,
    StartDate: inputstartdate,
    EndDate: inputenddate,
    Description: inputdescription,
    image: inputImage,
  };

  dataProj.push(proj);
  console.log("dataProj", dataProj);
  renderMyProject();
}

function renderMyProject() {
  document.getElementById("contents").innerHTML = "";
  for (let i = 0; i < dataProj.length; i++) {
    document.getElementById("contents").innerHTML += `
    <a href="myproject-detail.html" style="text-decoration: none">
        <div class="outer-box">
          <img class="img" src="${dataProj[i].image}" />
          <h4 class="title">${dataProj[i].title}</h4>
          <p class="times">durasi: 3 bulan</p>
          <p class="desc">${dataProj[i].Description}</p>
          <img src="assets/icon/node-js.png" class="icon" id="nodejs" />
          <img src="assets/icon/atom.png" class="icon" id="reactjs" />
          <img src="assets/icon/next.png" class="icon" id="nextjs" />
          <img src="assets/icon/typescript.png" class="icon" id="typescript" />
          <button class="btn-list">Edit</button>
          <button class="btn-list">Delete</button>
        </div>
    </a>
    `;
  }
}
