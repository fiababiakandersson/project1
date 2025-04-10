window.addEventListener("load", function () {
  const listBox = document.getElementById("fileList");

  for (let index = 0; index < 90; index++) {
    const fileListItem = document.createElement("div");
    fileListItem.className = "fileListItem";

    const fileNumber = document.createElement("p");
    fileNumber.textContent = index + 1;

    const imgContainer = document.createElement("div");

    const fileListImg = document.createElement("img");
    fileListImg.src = "/assets/imgDark.png";
    imgContainer.appendChild(fileListImg);

    const fileName = document.createElement("p");
    fileName.textContent = "Bildens_namn_version_1";

    const arrowDownIcon = document.createElement("img");
    arrowDownIcon.src = "/assets/arrowDown.png";

    fileListItem.appendChild(fileNumber);
    fileListItem.appendChild(imgContainer);
    fileListItem.appendChild(fileName);

    listBox.appendChild(fileListItem);
  }
});
