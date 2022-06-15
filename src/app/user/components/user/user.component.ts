import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../shared/service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  panelOpenState = false;

  userReviewData: any;
  faqListData:any;
  bannerData:any;

  constructor(private userService:ServiceService) { }

  ngOnInit(): void {
    this.userReview();
    this.faqList();
    this.bannerContent();
  }

  userReview(){
    this.userService.getUserReviews().subscribe((res:any)=>{
      this.userReviewData = res[0].user_review;
      // LOGIC
      console.log(res);
    });
  }

  faqList(){
    this.userService.getfaq().subscribe((res:any)=>{
      this.faqListData = res[0].faq;
      console.log(res);
    });
  }

  bannerContent(){
    this.userService.getBannerData().subscribe((res:any)=>{      
      this.bannerData = res[0].bannerHeading;
      console.log(res);
    
    });
  }

}
