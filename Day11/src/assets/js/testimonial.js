const data = new Promise((resolve, reject) => {
  const xhtml = new XMLHttpRequest();
  xhtml.open("GET", "https://api.npoint.io/cee9e49ffdd408251fdf", true);
  xhtml.onload = () => {
    if (xhtml.status === 200) {
      resolve(JSON.parse(xhtml.response));
    } else {
      document.writeln("Get Data Error !");
    }
  };

  xhtml.onerror = () => {
    reject("Network error !, Please check your connection !");
  };
  xhtml.send();
});

async function AllReview() {
  let ReviewHTML = ``;
  const dataTesti = await data;
  dataTesti.forEach((item) => {
    ReviewHTML += `
        <article class="main">
            <img src="${item.image}" class="img" />
            <p class="description">"${item.description}"</p>
            <p class="author">- ${item.author}</p>
            <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
        </article> 
      `;
  });
  document.getElementById("testimonial").innerHTML = ReviewHTML;
}

AllReview();

async function FilterReview(rating) {
  let ReviewHTML = ``;
  const dataTesti = await data;
  const filterReview = dataTesti.filter((item) => {
    return item.rating === rating;
  });

  if (filterReview.length === 0) {
    ReviewHTML = `<h6>Data Not Record!</h6>`;
  } else {
    filterReview.forEach((item) => {
      ReviewHTML += `
            <article class="main">
                <img src="${item.image}" class="img" />
                <p class="description">"${item.description}"</p>
                <p class="author">- ${item.author}</p>
                <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
            </article>
            `;
    });
  }
  document.getElementById("testimonial").innerHTML = ReviewHTML;
}
