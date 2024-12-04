const data = {
  labels: ['Geladeira', 'Ar Condicionado', 'Lâmpada', 'Micro-ondas', 'TV'],
  datasets: [{
    label: 'Consumo de Energia (kWh)',
    data: [120, 250, 30, 90, 60],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)', 
      'rgba(54, 162, 235, 0.2)', 
      'rgba(255, 206, 86, 0.2)', 
      'rgba(75, 192, 192, 0.2)', 
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',   
      'rgba(54, 162, 235, 1)',   
      'rgba(255, 206, 86, 1)',   
      'rgba(75, 192, 192, 1)',   
      'rgba(153, 102, 255, 1)' 
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, config);