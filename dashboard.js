// Dados fictícios de consumo de energia (em kWh)
const data = {
  labels: ['Geladeira', 'Ar Condicionado', 'Lâmpada', 'Micro-ondas', 'TV'],
  datasets: [{
    label: 'Consumo de Energia (kWh)',
    data: [120, 250, 30, 90, 60],  // valores de consumo
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)', // Geladeira - cor rosa
      'rgba(54, 162, 235, 0.2)', // Ar Condicionado - cor azul
      'rgba(255, 206, 86, 0.2)', // Lâmpada - cor amarela
      'rgba(75, 192, 192, 0.2)', // Micro-ondas - cor verde
      'rgba(153, 102, 255, 0.2)' // TV - cor roxa
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',   // Geladeira - cor rosa
      'rgba(54, 162, 235, 1)',   // Ar Condicionado - cor azul
      'rgba(255, 206, 86, 1)',   // Lâmpada - cor amarela
      'rgba(75, 192, 192, 1)',   // Micro-ondas - cor verde
      'rgba(153, 102, 255, 1)'   // TV - cor roxa
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

// Criando o gráfico
const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, config);