function submitSend() {
  const inputName = document.getElementById('inputName').value;
  const inputEmail = document.getElementById('inputEmail').value;
  const inputPhone = document.getElementById('inputPhone').value;
  const inputSubject = document.getElementById('inputSubject').value;
  const inputMessage = document.getElementById('inputMessage').value;

  if (!inputName) {
    alert('Nama Tidak Boleh Kosong');
  } else if (!inputEmail) {
    alert('Email Tidak Boleh Kosong');
  } else if (!inputPhone) {
    alert('Nomor Telephone tidak boleh kosong');
  } else if (!inputSubject) {
    alert('Subject Tidak boleh kosong');
  } else if (!inputMessage) {
    alert('Messages tidak boleh kosong');
  } else {
    console.log(`Name: `, inputName);
    console.log(`Email: `, inputEmail);
    console.log(`Phone: `, inputPhone);
    console.log(`Subject: `, inputSubject);
    console.log(`Message: `, inputMessage);
  }

  let a = document.createElement('a');
  a.href = `mailto:${inputEmail}?subject=${inputSubject}&body=${inputMessage}`
  a.click();
}
