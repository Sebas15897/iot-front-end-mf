import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { MockService } from '../../../core/services/mock/mock.service';
import { MapboxServiceService } from '../../../core/services/mapbox-service/mapbox-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart', { static: true }) myChartRef!: ElementRef;
  @ViewChild('doughnut', { static: true }) doughnutRef!: ElementRef;
  @ViewChild('configBarRef', { static: true }) configBarRef!: ElementRef;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

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
          backgroundColor: '#FFC000', // Amarillo FFC000 con transparencia 0.2
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
          text: 'Consumo de Gas en Metros Cúbicos Durante los Últimos 12 Meses',
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
          label: 'Consumo en tiempo real',
          data: this.mockService.getGrapData().map((row) => row.count),
          fill: false,
          borderColor: '#FFC000',
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
      labels: ['Temperatura °C'],
      datasets: [
        {
          data: [50, 50], // Representa 50 grados centígrados y el restante hasta 100%
          fill: false,
          backgroundColor: ['#FFC000', '#D3D3D3'], // Azul para temperatura, gris para el restante
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
          text: 'Temperatura Actual',
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              if (tooltipItem.label === 'Temperatura °C') {
                return `Temperatura: ${tooltipItem.raw}°C`;
              } else {
                return `Restante: ${tooltipItem.raw}%`;
              }
            },
          },
        },
      },
    },
  };

  constructor(
    private mockService: MockService,
    private mapboxServiceService: MapboxServiceService
  ) {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.mapboxServiceService.buildMap();
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    new Chart(this.myChartRef.nativeElement, this.config);
    new Chart(this.doughnutRef.nativeElement, this.configDoughnut);
    new Chart(this.configBarRef.nativeElement, this.configBar);
  }
}
