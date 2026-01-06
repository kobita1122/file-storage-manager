function upload() {
  const file = document.getElementById("file").files[0];
  if (!file) return;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${file.name}</td>
    <td>${(file.size / 1024).toFixed(2)} KB</td>
    <td>Uploaded</td>
  `;
  document.getElementById("list").appendChild(row);
}
