import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

    getUserReviews(){
      const userReview = '../../assets/mock/user-review.json';
      return this.http.get(userReview).pipe(take(1));
    }

    getfaq(){
      const faqList = '../../assets/mock/user-review.json';
      return this.http.get(faqList).pipe(take(1));
    }

    getBannerData(){
      const bannerdata = "../../assets/mock/user-review.json";
      return this.http.get(bannerdata).pipe(take(1));
    }

}
