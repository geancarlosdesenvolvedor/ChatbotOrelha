import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


declare const Pusher: any;
@Injectable()
export class PusherServiceProvider {
  public _pusher : any;
  constructor(public http: HttpClient) {
    this._pusher = new Pusher("29f13986cadf60b5845e", {
      cluster: "us2",
      encrypted: true
    });
  }

  getPusher(){
    return this._pusher;
  }
}