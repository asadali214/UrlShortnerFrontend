import { Component, OnInit } from '@angular/core';
import { Url, LongUrl } from '../models';
import { HttpReqService } from '../http-req.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  urls: Url[];
  longUrl: LongUrl;
  short: String;
  long: string;
  linkbar: string;
  constructor(private httpService: HttpReqService, private data: DataService) {
    this.linkbar = "disabled";
  }

  ngOnInit() {
    this.getUrls();
  }

  getUrls(): void {
    this.httpService.getUrls().subscribe(urls => this.updateUrls(urls));
    //it will wait for the server to get the list of url
  }

  updateUrls(urls: Url[]){
    this.urls = urls;//table will refresh automatically when urls obj is changed..
    this.data.sendUrls(this.urls);//passing urls array to data service..
  }

  addLongUrl() {
    this.long = this.long.replace(/\s/g, "");//remove blank spaces from url
    if (this.isUrl(this.long)) {
      this.longUrl = new LongUrl(this.long.replace(/\s/g, ""), 30);//30 is the number of expiry days
      this.httpService.addnewUrl(this.longUrl).subscribe(url => this.updateTable(url));
    }
    else {
      this.long = "Please insert a correct url!";
    }
  }

  updateTable(url: Url) {
    console.log(">> " + url.shortUrl);
    this.short = url.shortUrl;
    this.linkbar="enabled";
    this.getUrls();
  }

  
  clearLong() {
    this.long = "";
    this.short = "";
    this.linkbar= "disabled";
  }

  isUrl(s: string): boolean {//check url if its format is correct
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);//test search if a pattern exists in that url..
  }

}
