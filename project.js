import Data from "./data.js";

function start() {
  document.getElementById("mainproject").innerHTML = Data.map(
    (data, index) =>
      `  
                <div key=${index} class="indi">
                    <img class="img" src=${data.img} alt='project_img' width="400" height="240" />
                    <span class="details">${data.name}</span>
                    <div class="overlay">
                        <h4>${data.desc}</h4>
                        <a class="link" href=${data.link} target='_blank'><button class="btnn">Visit site</button></a>
                    </div>
                </div>
            
        `
  ).join("");
}
start();
