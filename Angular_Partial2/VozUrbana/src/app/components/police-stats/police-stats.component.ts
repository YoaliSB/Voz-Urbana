import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-police-stats',
  templateUrl: './police-stats.component.html',
  styleUrls: ['./police-stats.component.scss']
})
export class PoliceStatsComponent implements OnInit {

  PieChart = [];

  constructor() { }

  ngOnInit() {

  	this.PieChart = new Chart('pieChart',{
        type: 'pie',
      data: {
        datasets: [{
          data: [
            20,
            4,
            8,
            12
          ],
          backgroundColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)'
          ],
          label: 'Pie'
        }],
        labels: [
          'Asalto',
          'Balacera',
          'Violación',
          'Robo'
        ]
      },
      options: {
        title:{
          text: 'Palabras más frecuentes',
          display:true
        },
        responsive: true
      }
      });
  }

}
