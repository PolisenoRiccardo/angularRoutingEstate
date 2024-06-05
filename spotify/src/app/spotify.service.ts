import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAGeksxtaO6tsn820Kx19ez0XbfUnwQQcW4rRsmIvs34M2eueS5E6JARdblxmj_gyu57v-rh63JI60Ggx8tPzDxvdEjp9RAlBqOkyyBXEPO7bGhz9EkO_RxIOEjr1K6P_7sCmEN8K0n-fLzpsIB-Pny1GedK2EaO76FNcbg1Zj950h3D9eNmXrvXn2donW3DDp6rb4_NH0ArUyyV0c9dyMsQ_pab8qn8uQRVSzm7kuEwa5AD0bnHJ839Zr1wZJlqSYypDFgMAqrOgOaLh0XWc8TXhq1OZkXKed-L0KhZPcVLH_KlW1Kp3JgKyed4IRXetP7nvccBEpJLAwxZD07sU8'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}