let dataProj = [];

function submitProj(event) {
  event.preventDefault();

  let inputNameProj = document.getElementById('inputNameProj').value;
  let inputstartdate = document.getElementById('inputstartdate').value;
  let inputenddate = document.getElementById('inputenddate').value;
  let inputdescription = document.getElementById('inputdescription').value;
  let checkboxNode = document.getElementById('checkboxNode');
  let checkboxReact = document.getElementById('checkboxReact');
  let checkboxNext = document.getElementById('checkboxNext');
  let checkboxType = document.getElementById('checkboxType');
  let inputImage = document.getElementById('inputImage').files;

  console.log('namaproject', inputNameProj);
  console.log('start', inputstartdate);
  console.log('end', inputenddate);
  console.log('description', inputdescription);
  console.log('NodeJS', checkboxNode.checked);
  console.log('ReactJS', checkboxReact.checked);
  console.log('NextJS', checkboxNext.checked);
  console.log('Typescript', checkboxType.checked);

  inputImage = URL.createObjectURL(inputImage[0]);
  console.log('image', inputImage);

  const proj = {
    title: inputNameProj,
    StartDate: inputstartdate,
    EndDate: inputenddate,
    Description: inputdescription,
    NodeJS: checkboxNode.checked,
    ReactJS: checkboxReact.checked,
    NextJS: checkboxNext.checked,
    Typescript: checkboxType.checked,
    image: inputImage,
  };

  if (proj.NodeJS !== true) {
    checkboxNode.style.display = 'none';
  } else if (proj.ReactJS !== true) {
    checkboxReact.style.display = 'none';
  } else if (proj.NextJS !== true) {
    checkboxNext.style.display = 'none';
  } else if (proj.Typescript !== true) {
    checkboxType.style.display = 'none';
  }

  dataProj.push(proj);
  console.log('dataProj', dataProj);
  renderMyProject();
}

function renderMyProject() {
  document.getElementById('contents').innerHTML = '';
  for (let i = 0; i < dataProj.length; i++) {
    document.getElementById('contents').innerHTML += `
    <a href="myproject-detail.html" style="text-decoration: none">
        <div class="outer-box">
          <img class="img" src="${dataProj[i].image}" />
          <h4 class="title">${dataProj[i].title}</h4>
          <p class="times">durasi: 3 bulan</p>
          <p class="desc">${dataProj[i].Description}</p>
          <img src="assets/icon/node-js.png" class="icon" id="nodeIcon${i}" style="display: ${dataProj[i].NodeJS ? 'block' : 'none'};" />
          <img src="assets/icon/atom.png" class="icon" id="reactIcon${i}" style="display: ${dataProj[i].ReactJS ? 'block' : 'none'};" />
          <img src="assets/icon/next.png" class="icon" id="nextIcon${i}" style="display: ${dataProj[i].NextJS ? 'block' : 'none'};" />
          <img src="assets/icon/typescript.png" class="icon" id="typescriptIcon${i}" style="display: ${dataProj[i].Typescript ? 'block' : 'none'};" />
          <button class="btn-list">Edit</button>
          <button class="btn-list">Delete</button>
        </div>
    </a>
    `;
  }
}
