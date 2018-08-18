export class Click {
    id: number;
    dateClicked: number;
    browserClicked: string;
    platformClicked: string;
    urlId: number;
}

export class Url {
    id: number;
    longUrl: string;
    shortUrl: string;
    dateCreated: number;
    expiryDays: number;
    clicks: Click[];
}

export class LongUrl {
    longUrl: string;
    expiryDays: number;
    constructor(long: string ,expiry: number){
        this.longUrl=long;
        this.expiryDays=expiry;
    }
}

export class DateStats {
    labels: string[];
    data: number[];
}

export class PlatformStats {
    labels: string[];
    data: number[];
}

export class BrowserStats {
    labels: string[];
    data: number[];
}

export class UrlInfo {
    DateStats: DateStats;
    PlatformStats: PlatformStats;
    BrowserStats: BrowserStats;
}