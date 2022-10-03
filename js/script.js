// doughnut chart

const labels = [
  'France',
  'Italy',
  'Japan',
  'Canada'
];

const data = {
  
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [
'#80E2FF',
'#F49FA8',
'#FFDF94',
'#B5B3FB'
],
    borderColor: 'transparent',
    data: [4260, 3970, 4260, 3970],
    
  }],
  labels: labels,
};

const config = {
  type: 'doughnut',
  data: data,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// line chart

const labels1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July']
const data1 = {
  labels: labels1,
  datasets: [{
    label: 'Products sold',
    data: [0, 12, 14, 6, 15, 20, 10, 25, 30, 40],
    fill: true,
    backgroundColor:'#b0eaff59',
    borderColor: 'transparent',
    borderWidth: 1,
    tension: 0.3
  },
  {
   
      label: 'Total views',
      data: [10, 2, 12, 6, 9, 10, 15, 11, 20, 30],
      fill: true,
      backgroundColor:'#B0EAFF',
      borderColor: 'transparent',
      borderWidth: 1,
      tension: 0.3
  }],

  
};

const config1 = {
    type: 'line',
    data: data1,
    options: {
      scales: {
        
        y: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 100
            }
           
        }]
      }
    },
  };


  const mylineChart = new Chart(
    document.getElementById('mylineChart'),
    config1
  );
  
