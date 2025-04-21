window.addEventListener("load", function () {
  const listBox = document.getElementById("fileList");
  for (let index = 0; index < 60; index++) {
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

// export popup

let isExportPopupOpen = false;

const popup = document.getElementById("exportPopup");

document
  .getElementById("exportBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    isExportPopupOpen = !isExportPopupOpen;

    popup.classList.toggle("visible", isExportPopupOpen);
  });

document
  .getElementById("exportCancelButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    isExportPopupOpen = false;

    popup.classList.remove("visible");
  });

// print popup logic below
const printButton = document.getElementById("printButton");
const printerContainer = document.querySelector(".printerContainer");
const printCancelButton = document.getElementById("printCancelButton");

function closePrintPopup() {
  printerContainer.style.display = "none";
  document.body.style.overflow = "";
}

printButton.addEventListener("click", () => {
  printerContainer.style.display = "flex";
  document.body.style.overflow = "hidden";
});

printCancelButton.addEventListener("click", closePrintPopup);

printerContainer.addEventListener("click", (e) => {
  if (e.target === printerContainer) {
    closePrintPopup();
  }
});
