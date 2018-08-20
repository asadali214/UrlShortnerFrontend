import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Url, FullStats, DateStats, BrowserStats, PlatformStats } from '../models';
import { ActivatedRoute } from '@angular/router';
import { HttpReqService } from '../http-req.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.css']
})
export class InfoDashboardComponent implements OnInit {

  urls: Url[];
  index: number;
  currentUrl: Url;
  fullStats: FullStats;

  chartLine = [];
  chartPie = [];
  chartBar = [];

  constructor(private httpService: HttpReqService,
    private route: ActivatedRoute,
    private data: DataService) { }

  ngOnInit() {
    this.index = +this.route.snapshot.paramMap.get('id');
    this.data.currentMessage.subscribe(urls => this.populateDashboard(urls));
    //gets the data from landing component
  }

  populateDashboard(urls: Url[]) {
    if (urls == null) {
      this.httpService.getUrls().subscribe(urls => this.populateDashboard(urls));
      //if user directly opens the dashboard then hit the api to get the data..
    }
    else {
      this.urls = urls;
      this.currentUrl = urls[this.index];
      this.getFullClickStats(this.currentUrl.id);
    }
  }

  getFullClickStats(id: number) {
    this.httpService.getClickStats(id)
      .subscribe(fullStats => this.updateFullStats(fullStats));
  }

  updateFullStats(fullStats: FullStats) {
    this.fullStats = fullStats;
    console.log(this.fullStats);
    this.createDateLineGraph(this.fullStats.urlInfo.DateStats);
    this.createBrowsersPieGraph(this.fullStats.urlInfo.BrowserStats);
    this.createPlatformBarGraph(this.fullStats.urlInfo.PlatformStats);
  }

  createDateLineGraph(dateStats: DateStats) {
    this.chartLine = new Chart('chartLine', {
      type: 'line',
      data: {
        labels: dateStats.labels,
        datasets: [
          {
            label: '# of Clicks',
            data: dateStats.data,
            backgroundColor: [
              'red',    // color for data at index 0
              'blue',   // color for data at index 1
              'green',  // color for data at index 2
              'black'   // color for data at index 3
            ],
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false,
          fontColor: 'black',
          fontSize: 18
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              padding: 1
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createBrowsersPieGraph(browserStats: BrowserStats) {
    this.chartPie = new Chart('chartPie', {
      type: 'pie',
      data: {
        labels: browserStats.labels,
        datasets: [
          {
            label: '# of Clicks',
            data: browserStats.data,
            backgroundColor: [
              'blue',   // color for data at index 0
              'red',    // color for data at index 1
              'green',  // color for data at index 2
              'black'   // color for data at index 3
            ],
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: 'black',
            fontSize: 18
          }
        }
      }
    });
  }

  createPlatformBarGraph(platformStats: PlatformStats) {
    this.chartBar = new Chart('chartBar', {
      type: 'bar',
      data: {
        labels: platformStats.labels,
        datasets: [
          {
            label: '# of Clicks',
            data: platformStats.data,
            backgroundColor: [
              'red',    // color for data at index 0
              'blue',   // color for data at index 1
              'green',  // color for data at index 2
              'black'   // color for data at index 3
            ],
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: 'black',
            fontSize: 18
          },
          scales: {
            xAxes: [{
              display: true,
              fontSize: 18
            }],
            yAxes: [{
              display: true,
              fontSize: 18
            }]
          }
        }
      }
    });
  }

}
