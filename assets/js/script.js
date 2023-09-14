const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.append(cursor);
document.documentElement.addEventListener("mousemove", (e) => {
  cursor.style.setProperty("top", e.clientY + 4 + "px");
  cursor.style.setProperty("left", e.clientX + 8 + "px");
  cursor.style.display = "block";
  console.log(e.clientX, e.clientY);
  console.log(e.target.tagName);
  switch (e.target.tagName) {
    case "BUTTON":
      cursor.classList.add("link");
      break;
    case "B":
      cursor.classList.add("link");
      break;
    case "LI":
      cursor.classList.add("link");
      break;
    default:
      cursor.className = "cursor";
      break;
  }
});
