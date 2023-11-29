function iconBar() {
  let iconOpen = document.getElementById('iconBar-container');

  if (iconOpen.style.display === 'block') {
    iconOpen.style.display = 'none';
  } else {
    iconOpen.style.display = 'block';
  }
  console.log(iconOpen);
}
