import { Component, OnInit } from '@angular/core';
import { Url, LongUrl } from '../models';
import { HttpReqService } from '../http-req.service';


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
  constructor(private httpService: HttpReqService) {
    this.linkbar = "disabled";
  }

  ngOnInit() {
    this.getUrls();

  }

  getUrls(): void {
    this.httpService.getUrls()
      .subscribe(urls => this.urls = urls);
    //it will wait for the server to get the list of url
  }

  addLongUrl() {
    this.long = this.long.replace(/\s/g, "");
    if (this.isUrl(this.long)) {
      this.longUrl = new LongUrl(this.long.replace(/\s/g, ""), 30);//30 is the number of expiry days
      this.httpService.addnewUrl(this.longUrl).subscribe(url => this.updateTable(url));
    }
    else {
      this.long = "Please insert a correct url!";
    }
  }

  clearLong() {
    this.long = "";
  }

  updateTable(url: Url) {
    console.log(">> " + url.shortUrl);
    this.short = url.shortUrl;
    this.linkbar="enabled";
    this.getUrls();
  }

  isUrl(s: string): boolean {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  }

}
