function createCard(title, cName, views, monthOld, duration, thumbnail) {
  let viewStr;

  if (views < 1000) {
    viewStr = views;
  } else if (views < 1000000) {
    viewStr = (views / 1000).toFixed(1) + "K";
  } else {
    viewStr = (views / 1000000).toFixed(1) + "M";
  }

  let html = `
      <div class="container">
        <div class="banner">
          <img src="${thumbnail}" alt="poster" />
          <p class="duration">${duration}</p>
        </div>
        <div class="text">
          <div class="title">${title}</div>
          <div class="info">
            <p class="cName">${cName}</p>
            <p class="views">${viewStr} Views</p>
            <p class="time">${monthOld} ago</p>
          </div>
        </div>
      </div>
    `;

  document.querySelector(".main").innerHTML += html;
}

createCard(
  "Installing VS Code & Website Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  1200000,
  "2 days",
  "10:20",
  "thumbnail.png",
);

createCard(
  "Learn HTML in One Video | Complete Beginner to Advanced Guide",
  "CodeWithHarry",
  850000,
  "1 week",
  "18:45",
  "thumbnail.png"
);


createCard(
  "CSS Crash Course 2026 | Flexbox & Grid Explained",
  "CodeWithHarry",
  2400000,
  "3 weeks",
  "22:10",
  "thumbnail.png"
);

createCard(
  "JavaScript Full Course | From Basics to Projects",
  "CodeWithHarry",
  3100000,
  "1 month",
  "35:50",
  "thumbnail.png"
);