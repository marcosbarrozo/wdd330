
const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week4 Team Activity",
    url: "week4/index.html"
  },
  {
    label: "Week5 Todo",
    url: "week5/index.html"
  },
  {
    label: "Week6 Final Todo",
    url: "week6/index.html"
  },
  {
    label: "Week8 Star Wars People API",
    url: "week8/index.html"
  }
  
]
function loadIndex (){
  const ol = document.querySelector("#linksList");
  links.forEach( link =>{
    const li = document.createElement("li");
    const href = document.createElement("a");
    href.setAttribute("href", link.url);
    href.innerText = link.label;
    
    li.appendChild(href);
    ol.appendChild(li);
  })
}
