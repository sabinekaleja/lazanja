function kristafersEpasts() {
    document.getElementById("kristafersEpasts").innerHTML = "20 gadi </br> Vīrietis </br> Mācās Banķenē </br> Kristafers.Zeiluks@ba.lv";
}
function evaEpasts() {
    document.getElementById("evaEpasts").innerHTML = "20 gadi </br> Sieviete </br> Mācās Banķenē </br> Eva.Ubele@ba.lv";
}
function sabineEpasts() {
    document.getElementById("sabineEpasts").innerHTML = "20 gadi </br> Sieviete </br> Mācās Banķenē </br> Sabine.Kaleja@ba.lv";
}
function signeEpasts() {
    document.getElementById("signeEpasts").innerHTML = "20 gadi </br> Sieviete </br> Mācās Banķenē </br> Signe.Lidaka@ba.lv";
}


var xlabels = [];
var ylabels = [];

var xlabels2 = [];
var ylabels2 = [];

var xlabels3 = [];
var ylabels3 = [];


async function getData() {
    const response = await fetch('facts1.csv');
         const data = await response.text();
         const rows = data.split('\n').slice(1);
rows.forEach(row=>{
    const columns = row.split(',');
    const year = columns[0];
    xlabels.push(year);
    const weight = columns[1];
    ylabels.push(weight);
    console.log(year, weight);
  })
     }

     async function getData2() {
        const response = await fetch('facts2.csv');
             const data = await response.text();
             const rows = data.split('\n').slice(1);
    rows.forEach(row=>{
        const columns = row.split(',');
        const part = columns[0];
        xlabels2.push(part);
        const percentage = columns[1];
        ylabels2.push(percentage);
        console.log(part, percentage);
      })
         }

         async function getData3() {
            const response = await fetch('facts3.csv');
                 const data = await response.text();
                 const rows = data.split('\n').slice(1);
        rows.forEach(row=>{
            const columns = row.split(',');
            const month = columns[0];
            xlabels3.push(month);
            const weight = columns[1];
            ylabels3.push(weight);
            console.log(month, weight);
          })
             }

	

async function chartIt(){

  await getData();

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: xlabels,
          datasets: [{
              label: 'Apēstas lazanjas (t)',
              data: ylabels,
              backgroundColor:
                  'rgba(255, 99, 132, 0.2)',
              borderColor:
                  'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }]
      },
  });
}

chartIt();

async function ingriedients(){

    await getData2();
  
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: xlabels2,
            datasets: [{
                label: 'Sastāvdaļas lazanjas pagatavošanai (g)',
                data: ylabels2,
                backgroundColor:
                'rgba(153, 102, 255, 0.2)',
                borderColor:
                'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
    });
  }
  
  ingriedients();

  async function consumption(){

    await getData3();
  
    var ctx3 = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx3, {
        type: 'polarArea',
        data: {
            labels: xlabels3,
            datasets: [{
                label: 'Vidēji mēnesī apēstās lazanjas (t)',
                data: ylabels3,
                backgroundColor:
                'rgba(54, 162, 235, 0.2)',
                borderColor:
                'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
    });
  }
  
  consumption();