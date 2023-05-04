import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  private ROBOHASH_API_URL = 'https://robohash.org';

  constructor(private http: HttpClient) { }

  getRandomAvatar() {
    const randomString = Math.random().toString(36).substring(2);
    const url = `${this.ROBOHASH_API_URL}/${randomString}?set=set1`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
