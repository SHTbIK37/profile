const { children: list } = document.getElementById('portfolio');

fetch(`https://api.spacexdata.com/v3/launches?limit=${list.length}`)
  .then((data) => {
    return data.json();
  })
  .then((launches) => {
    Array.from(list).forEach((column, index) => {
      column.innerHTML = `<a href="#">${launches[index].mission_name}</a>`;
    });
  });
