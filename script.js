const CovidData = [
  { title: 'Post one', body: 'this is post one' },
  { title: 'Post two', body: 'this is post two' }
];

function getCovidData() {
  setTimeout(function() {
    let output = '';
    CovidData.forEach((CovidData, index) => {
      output += `<li>${CovidData.title}</li>`;
    });
    document.getElementById('text1').innerHTML = text1;
  }, 1000);
}

getCovidData();