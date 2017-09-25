var dataset = {
  "title": "BVB Fanclub Forza Borussia 1996",

}

for (var key in dataset) {
  if (dataset.hasOwnProperty(key)) {
    console.log(key + " -> " + dataset[key]);
    document.getElementById(key).innerHTML = dataset[key];
  }
}



document.getElementById("home").getElementById("headerText").innerHTML = "BVB Fanclub Forza Borussia 1996"
