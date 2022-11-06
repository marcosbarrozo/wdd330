async function getJSON(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const fetchJson = await response.json();
        return fetchJson;
      }
    } catch (error) {
      console.log(error);
    }
  }

  function renderPeopleList(people, cardsElement) {
    // I decided to use a table to display my list of ships. The shipList Element is that table and it has 2 children: thead and tbody...we need to put our ships into tbody...so I reference the second child.
    const list = cardsElement;
    list.innerHTML = "";
    //loop through the ships
    people.forEach(function (person) {
      //console.log(ship);
      //create elements for list...tr
      let listItem = document.createElement("div");
      listItem.innerHTML = `
        <div class="card">
            <p>${person.name}</p>
             <p>Height: ${person.height}</p>
             <p>Mass: ${person.mass}</p>
             <p>Gender: ${person.gender}</p>
         </div>
          `;
  
      listItem.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(person);
      });
  
      //add the list item to the list
      list.appendChild(listItem);
    });
  }

  async function showPeople(url = "https://swapi.dev/api/people/") {
    const results = await getJSON(url);
  
    //get the list element
    const peopleListElement = document.querySelector(".cards");
    renderPeopleList(results.results, peopleListElement);

    // enable the next and prev buttons.
    if (results.next) {        
        const next = document.getElementById("next");        
        next.ontouchend = () => {
            showPeople(results.next);
        };
      }
      if (results.previous) {
        const prev = document.querySelector("#prev");
        prev.ontouchend = () => {
            showPeople(results.previous);
        };}
  }

  showPeople()