import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Url } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.css']
})
export class InfoDashboardComponent implements OnInit {

  urls: Url[];
  index: number;
  currentUrl: Url;
  constructor(private route: ActivatedRoute, private data: DataService) {

  }

  ngOnInit() {
    this.index = +this.route.snapshot.paramMap.get('id');
    this.data.currentMessage.subscribe(urls => this.populateDashboard(urls));
  }

  populateDashboard(urls: Url[]) {
    this.urls = urls;
    this.currentUrl=urls[this.index];
  }

}
