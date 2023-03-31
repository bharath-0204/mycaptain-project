function startSorting() {
    const name = document.getElementById("name").value;
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    const sortedHouse = houses[Math.floor(Math.random() * houses.length)];
  
    document.getElementById("sortingResult").innerHTML = `${name}, you are sorted into ${sortedHouse}!`;
    document.getElementById("sortingResult").style.display = "block";
  }
  