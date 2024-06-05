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
        'Bearer BQCVqfusb4fCRNUZTx8MhjKvhcfF_Z-_QwOyzwCeBOe2fR5BJB2kxRsM2re_sAKgd6pOXrW0mx8qav3tuedhZw-ZzgQ48gbUPfpbk64SzpU0koQJJGMYOnEg-m2ojWHGsqDfSzidTA7keA8s3-DSIa5Ocb2Sg0t7PgdFkfOXk9bqMQSlpiaI1gAJLx_NcCZ6792Yiyt1_yF1tLYblMZ1hPolT78Ewt6lQyG__9eMye-wJaaCJQ7sPuB1eMGqpwIqyFgKnkk9xXaw519X1U90JvsjLcajZmtqsaadCeG7L3tl4hgExcYS8xhIQXja_pvWu60PYsvl1dXCwA_GHjg-UlY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}