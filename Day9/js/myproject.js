const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log(years);

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

  let startDate = new Date(inputstartdate);
  let endDate = new Date(inputenddate);
  let timeDifference = endDate - startDate;
  let dayDifference = timeDifference / (1000 * 60 * 60 * 24);
  let monthDifference = endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear());
  let yearsDifference = endDate.getFullYear() - startDate.getFullYear();
  console.log(dayDifference);
  console.log(monthDifference);
  console.log(yearsDifference);

  let msg = '';
  if ((dayDifference >= 1 && dayDifference <= 31)) {
    msg = dayDifference + ' Day';
  } else if (monthDifference >= 1 && monthDifference <= 12) {
    msg = monthDifference + ' Month';
  } else {
    msg = yearsDifference + ' Years';
  }

  console.log('namaproject', inputNameProj);
  console.log('start', inputstartdate);
  console.log('end', inputenddate);
  console.log('time', msg);
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
    Times: msg,
    Description: inputdescription,
    NodeJS: checkboxNode.checked,
    ReactJS: checkboxReact.checked,
    NextJS: checkboxNext.checked,
    Typescript: checkboxType.checked,
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
    <div class="outer-box">
        <a href="myproject-detail.html" style="text-decoration: none">
          <img class="img" src="${dataProj[i].image}" />
          <h4 class="title">${dataProj[i].title}</h4>
          <p class="times">durasi: ${dataProj[i].Times}</p>
          <p class="desc">${dataProj[i].Description}</p>
          <div class="icon-container">
            <img src="assets/icon/node-js.png" class="icon" style="display: ${dataProj[i].NodeJS ? 'block' : 'none'};" />
            <img src="assets/icon/atom.png" class="icon" style="display: ${dataProj[i].ReactJS ? 'block' : 'none'};" />
            <img src="assets/icon/next.png" class="icon" style="display: ${dataProj[i].NextJS ? 'block' : 'none'};" />
            <img src="assets/icon/typescript.png" class="icon" style="display: ${dataProj[i].Typescript ? 'block' : 'none'};" />
          </div>
          <button class="btn-list">Edit</button>
          <button class="btn-list">Delete</button>
        </a>
    </div>
    `;
  }
}
