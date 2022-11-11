class Stats {
  constructor() {
    fetch("a.csv").then(response => response.text()).then(text => {
      const lines = text.split("\n");
      const data = [];
      for (const line of lines) {
        data.push(line.trim().split(","));
      }
      this.processData(data);
    });
  }

  processData(data) {
    this.perRegione(data.slice(0));
    this.perSettore(data.slice(0));
    this.perDomande(data);
  }

  perRegione(data) {
    data.splice(0, 1);

    const regioni = {};
    for (const line of data) {
      if (line.length < 2) continue;
      if (!(line[2] in regioni)) {
        regioni[line[2]] = [];
      }
      regioni[line[2]].push(line);
    }

    const labels = Object.keys(regioni).sort((a, b) => regioni[b].length - regioni[a].length);
    const dataChart = Object.keys(regioni).sort((a, b) => regioni[b].length - regioni[a].length).map(regione => regioni[regione].length);

    let ctx = document.getElementById('chart_1_regioni');
    let chart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels,
          datasets: [{
              label: 'Questionari per regione',
              data: dataChart,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });

    ctx = document.getElementById('chart_2_regioni');
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels,
          datasets: [{
              label: 'Questionari per regione',
              data: dataChart,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
  }

  perSettore(data) {
    data.splice(0, 1);

    const settori = {};
    for (const line of data) {
      if (line.length < 3) continue;
      if (!(line[3] in settori)) {
        settori[line[3]] = [];
      }
      settori[line[3]].push(line);
    }

    const labels = Object.keys(settori).sort((a, b) => settori[b].length - settori[a].length);
    const dataChart = Object.keys(settori).sort((a, b) => settori[b].length - settori[a].length).map(settore => settori[settore].length);

    let ctx = document.getElementById('chart_1_settori');
    let chart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels,
          datasets: [{
              label: 'Questionari per settore',
              data: dataChart,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });

    ctx = document.getElementById('chart_2_settori');
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels,
          datasets: [{
              label: 'Questionari per settore',
              data: dataChart,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
  }

  perDomande(data) {
    const domande = [10,11,12,13,14]
    const labels = domande.map(domanda => data[0][domanda].substr(0, 50));

    const datasets = {
      labels,
      datasets: []
    };

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function valueToString(i) {
      switch(i) {
         case 1: return "Poco chiaro";
         case 2: return "Mediamente chiaro";
         case 3: return "Chiaro";
         case 4: return "Molto chiaro";
         case 5: return "perfettamente chiaro";
      }
    }

    for (let i = 1; i <= 5; ++i) {
      datasets.datasets.push({
        label: valueToString(i),
        data: domande.map(domanda => data.map(data => data[domanda]).filter(value => parseInt(value, 10) === i).length),
        backgroundColor: 'rgba(' + getRandomInt(255) + ', ' + getRandomInt(255) + ', ' + getRandomInt(255) + ', 0.2)',
      });
    }

    let ctx = document.getElementById('chart_domande');
    let chart = new Chart(ctx, {
      type: 'bar',
      data: datasets,
      options: {
        scales: {
          x: { stacked: true, },
          y: { stacked: true }
        }
      }
    });
  }
}

new Stats();
