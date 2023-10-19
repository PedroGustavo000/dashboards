import React from "react";
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as 
    ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    PointElement, 
    LineElement, 
    Title 
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    ArcElement, 
    LineElement,
    Title,
    Tooltip,
    Legend
);


function UsuariosMeses() {
    
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Vendas Mensais',
            data: [50, 70, 60, 80, 75],
            fill: false, // Preenchimento abaixo da linha
            borderColor: '#375b2e',
            backgroundColor: '#4a793e', 
            borderWidth: 2,
          },
        ],
    };
      
    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
    };
    
    return(
        <div style={{ 
            width: '100%', 
            maxHeight: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column' }}
        >
            <strong>Aulas nos Ultimos Meses</strong>
            <Line data={data} options={options} />
        </div>
    )
}

function AulasBuscadas() {
    
    const data = {
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
        datasets: [
          {
            data: [30, 20, 50], // Valores representando a proporção de cada categoria
            backgroundColor: ['#121e0f', '#253c1f', '#375b2e'], // Cores das fatias
          },
        ],
    };

    const options = {
        plugins: {
          legend: {
            display: true,
            position: 'bottom', // Posição da legenda (pode ser 'top', 'bottom', 'left', 'right', etc.)
          },
        },
    }; 
    
    return(
        <div style={{ 
            width: '100%', 
            maxHeight: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column' }}
        >
            <strong>Matérias Buscadas</strong>
            <Pie data={data} options={options} />
        </div>
    )
}

function AulasEnsinadas() {
    
    const data = {
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'],
        datasets: [
          {
            label: 'Vendas Mensais',
            data: [50, 70, 60, 80, 75],
            backgroundColor: '#375b2e',
            borderColor: '#121e0f',
            borderWidth: 1,
          },
        ],
    };
    
    const options = {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
          },
        },
    };

    return(
        <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column' }}
        >
            <strong>Matérias Buscadas</strong>
            <Bar data={data} options={options} />
        </div>
    )
}

export {AulasBuscadas, AulasEnsinadas, UsuariosMeses};