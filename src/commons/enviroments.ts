import { HttpHeaders } from "@angular/common/http";

export const API_URL: string = 'https://safetrack.ws:8080/parse/';

export const httpOptions = {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': 'NDIFx8hdu3ZLZbB6tUq3au06HmqrhuKkEZ72EVwR',
        'X-Parse-REST-API-Key': 'deWxXGwOYr6ena7rovZkoLgrDtZhaw9w3cFsA4s1',
        'X-Parse-Revocable-Session': '1'
      })
    };

    