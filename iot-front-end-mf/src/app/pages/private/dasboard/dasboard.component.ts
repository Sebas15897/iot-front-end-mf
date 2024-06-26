import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, Chart, registerables } from 'chart.js';
import { MapboxServiceService } from '../../../core/services/mapbox-service/mapbox-service.service';
import { MockService } from '../../../core/services/mock/mock.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})

export class DasboardComponent implements OnInit {
  @ViewChild('myChart', { static: true }) myChartRef!: ElementRef;
  @ViewChild('doughnut', { static: true }) doughnutRef!: ElementRef;
  @ViewChild('configBarRef', { static: true }) configBarRef!: ElementRef;

  configBar: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: [
        'June 2023',
        'July 2023',
        'August 2023',
        'September 2023',
        'October 2023',
        'November 2023',
        'December 2023',
        'January 2024',
        'February 2024',
        'March 2024',
        'April 2024',
        'May 2024',
      ],
      datasets: [
        {
          label: 'Consumo de Gas (m³)',
          data: [132, 173, 124, 221, 150, 180, 229, 132, 244, 263, 199, 169],
          backgroundColor: '#113455', // Amarillo 113455 con transparencia 0.2
          borderColor: '#DADBDC', // RGB para el borde
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Historico promedio de consumo mensual',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  config: ChartConfiguration = {
    type: 'line',
    data: {
      labels: this.mockService.getGrapData().map((row) => row.hour),
      datasets: [
        {
          label: 'Consumo en tiempo real de las ultimas 12 horas',
          data: this.mockService.getGrapData().map((row) => row.count),
          fill: false,
          borderColor: '#113455',
        },
      ],
    },
    options: {
      plugins: {
        /*         title: {
          display: true,
          text: 'Consumo en tiempo real',
        }, */
        /*         subtitle: {
          display: true,
          text: 'Chart Subtitle',
          color: 'blue',
          font: {
            size: 12,
            family: 'tahoma',
            weight: 'normal',
            style: 'italic',
          },
          padding: {
            bottom: 10,
          },
        }, */
      },
    },
  };

  configDoughnut: ChartConfiguration = {
    type: 'doughnut',
    data: {
      labels: ['Comsumo (m³)'],
      datasets: [
        {
          data: [40, 60], // Representa 50 grados centígrados y el restante hasta 100%
          fill: false,
          backgroundColor: ['#113455', '#D3D3D3'], // Azul para temperatura, gris para el restante
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Ultimo consumo reportado (m³)',
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              if (tooltipItem.label === 'Comsumo (m³)') {
                return `${tooltipItem.raw} m³`;
              } else {
                return ``;
              }
            },
          },
        },
      },
    },
  };

  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  constructor(
    private mockService: MockService,
    private mapboxServiceService: MapboxServiceService
  ) {
    Chart.register(...registerables);
  }




  ngOnInit(): void {
    this.createChart();
    setTimeout(() => {
      this.mapboxServiceService.buildMap();
    }, 500);
  }

  createChart(): void {
    new Chart(this.myChartRef.nativeElement, this.config);
    new Chart(this.doughnutRef.nativeElement, this.configDoughnut);
    new Chart(this.configBarRef.nativeElement, this.configBar);
  }
}
