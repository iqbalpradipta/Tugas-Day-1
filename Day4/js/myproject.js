let dataProj = [];

// function checkbox(event) {
//   var checkBox = document.getElementById('checkboxNode');
//   var checkBox1 = document.getElementById('checkboxReact');
//   var checkBox2 = document.getElementById('checkboxNext');
//   var checkBox3 = document.getElementById('checkboxType');

//   var icons = document.getElementById('nodejs');
//   var icons1 = document.getElementById('reactjs');
//   var icons2 = document.getElementById('nextjs');
//   var icons3 = document.getElementById('typescript');

//   if (checkBox.checked == true) {
//     icons.style.display = 'block';
//   } else {
//     icons.style.display = 'none';
//   }
//   if (checkBox1.checked == true) {
//     icons1.style.display = 'block';
//   } else {
//     icons1.style.display = 'none';
//   }
//   if (checkBox2.checked == true) {
//     icons2.style.display = 'block';
//   } else {
//     icons2.style.display = 'none';
//   }
//   if (checkBox3.checked == true) {
//     icons3.style.display = 'block';
//   } else {
//     icons3.style.display = 'none';
//   }
// }

function submitProj(event) {
  event.preventDefault();

  const inputNameProj = document.getElementById("inputNameProj").value;
  const inputstartdate = document.getElementById("inputstartdate").value;
  const inputenddate = document.getElementById("inputenddate").value;
  const inputdescription = document.getElementById("inputdescription").value;
  let inputImage = document.getElementById("inputImage").files;

  console.log('namaproject', inputNameProj);
  console.log('start', inputstartdate);
  console.log('end', inputenddate);
  console.log('description', inputdescription);

  inputImage = URL.createObjectURL(inputImage[0]);
  console.log('image', inputImage);

  const proj = {
    title: inputNameProj,
    StartDate: inputstartdate,
    EndDate: inputenddate,
    Description: inputdescription,
    image: inputImage,
  };

  dataProj.push(proj);
  console.log('dataProj', dataProj);
  renderMyProject();
}

function renderMyProject() {
  document.getElementById('contents').innerHTML = '';
  for (let i = 0; i < dataProj.length; i++) {
    document.getElementById('contents').innerHTML += `
        <ul style="display: flex; list-style: none; gap: 50px; align-items: center">
            <li class="outer-box">
                <img class="img" src="${dataProj[i].image}">
                <h4 class="title">${dataProj[i].title}</h4>
                <p class="times">durasi: 3 bulan</p>
                <p class="desc">${dataProj[i].Description}</p>
                <img src="assets/icon/node-js.png" class="icon" id="nodejs">
                <img src="assets/icon/atom.png" class="icon" id="reactjs">
                <img src="assets/icon/next.png" class="icon" id="nextjs">
                <img src="assets/icon/typescript.png" class="icon" id="typescript">
                <button class="btn-list">Edit</button>
                <button class="btn-list">Delete</button>
            </li>
        </ul>`;
  }
}
