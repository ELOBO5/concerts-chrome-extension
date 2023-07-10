async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "[INSERT API KEY]",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com"
    }
  };

  const res = await fetch(
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=London&minDate=2023-08-01&maxDate=2023-08-30&page=1",
    options
  );
  const record = await res.json();

  document.getElementById("concerts").innerHTML = record.data
    .map((item) => `<li>${item.name}</li>`)
    .join("");
}

fetchData();
