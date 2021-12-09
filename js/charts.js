// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");

//////////////AREA CHART///////////
const labels4 = [
  'Aug 1',
  '',
  'Aug 3',
  '',
  'Aug 5',
  '',
  'Aug 7',
  '',
  'Aug 9',
  '',
  'Aug 11',
  '',
  'Aug 13',
  
];
const data4 = {
  labels: labels4,
  datasets: [{
    label:"",
    backgroundColor: 'rgb(55, 49, 94,0.2)',
    borderColor: 'rgb(255, 99, 132)',
    data: [9000, 30000, 25000, 20000,20000, 27000, 32000,35000,30000,30000,20000,37000,40000],
    tension: 0.5,
    fill:true,
  }]
};
const config4 = {
  type: 'line',
  data: data4,
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
    ,
    scales :{
       x: {
        grid: {
          display: false
        }
      },
    }


  }

};
const myChart4 = new Chart(
  ordersChart,
  config4
);



//////////////AREA CHART///////////

////////////PIE CHART/////////////


const labels3= [
  'Riyadh',
  'Jeddah',
  'Sharqia',
  'Mecca',
];

const data3 = {
  labels: labels3,
  datasets: [{
   
    data: [100, 60, 50,70],
    backgroundColor: [
      'rgba(218, 65, 103, 1)',
      '#37315e',
      'rgba(220, 92, 124, 1)',
      'rgb(64, 29, 186)',
    ],
    hoverOffset: 4
  }]
};
const config3 = {
  type: 'pie',
  data: data3,
  options: {
    responsive: false,
  }
};

const myChart3 = new Chart(
  citiesChart,
    config3
  );


////////////PIE CHART//////////////



//////////////BAR CHART///////////
const labels2 = [
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  
];


const data2 = {
  labels: labels2,
  datasets: [{
    label: 'Male',
    data: [4000, 4500, 13000, 5000, 6500, 9000, 12000],
    backgroundColor: [
      '#37315e',
    ],

    borderWidth: 1
  },{
    label: 'Female',
    data: [5500, 5500, 15000, 6500, 9800, 13000, 14000],
    backgroundColor: [
      'rgba(220, 92, 124, 1)',
    ],

    borderWidth: 1

  }]
};

const config2 = {
  type: 'bar',
  data: data2,
  options: {
    scales: {
      y: {
        beginAtZero: true
      },
      x: {
        grid: {
          display: false
        }
      },
    }
  },
};

const myChart2 = new Chart(
  visitorChart,
    config2
  );
  //////////////BAR CHART///////////

//////////////LINE CHART///////////
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    
  ];
  const data = {
    labels: labels,
    datasets: [{
      label:"",
      backgroundColor: 'rgb(0, 0, 0,0.1)',
      borderColor: 'rgb(255, 99, 132)',
      data: [1, 1.5, 2.5, 4, 5, 3.2],
      tension: 0.5,
      fill:true,
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales :{
        x: {
         grid: {
           display: false
         }
       },
     }
    }
    

  };
const myChart = new Chart(
  ratChart,
    config
  );

  //////////////LINE CHART///////////

  