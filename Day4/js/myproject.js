let dataProj = [];

function submitProj(event) {
  event.preventDefault();

  let inputNameProj = document.getElementById('inputNameProj').value;
  let inputstartdate = document.getElementById('inputstartdate').value;
  let inputenddate = document.getElementById('inputenddate').value;
  let inputdescription = document.getElementById('inputdescription').value;
  let inputImage = document.getElementById('inputImage').files;

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
        <ul style="display: flex; list-style-upper: none; gap: 50px; align-items: center; text-decoration: none;" >
          <a href="myproject-detail.html">
            <li class="outer-box">
                <img class="img" src="${dataProj[i].image}">
                <h4 class="title">${dataProj[i].title}</h4>
                <p class="times">durasi: 3 bulan</p>
                <p class="desc">${dataProj[i].Description}</p>
                <img src="assets/icon/playstore.png" class="icon" id="playstore">
                <img src="assets/icon/android.png" class="icon" id="android">
                <img src="assets/icon/java.png" class="icon" id="java">
                <button class="btn-list">Edit</button>
                <button class="btn-list">Delete</button>
            </li>
          </a>
        </ul>`;
  }
}
