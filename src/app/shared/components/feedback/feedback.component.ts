import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'e-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnChanges {

  @Input() product: any = {};
  progresses: any = [
    { stars: '1', percents: 0, label: '1 sao' },
    { stars: '2', percents: 0, label: '2 sao' },
    { stars: '3', percents: 0, label: '3 sao' },
    { stars: '4', percents: 0, label: '4 sao' },
    { stars: '5', percents: 0, label: '5 sao' },
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("this product", this.product);
    this.initData();
  }

  ngOnInit(): void {
  }

  initData() {
    this.transformData();
    this.countProgresses();
    this.getAveragedStars();
  }

  transformData() {
    this.product.comments?.forEach((comment: any) => {
      comment.created = new Date(comment.created);
    })
    // console.log("this.product", this.product);
    
  }

  countProgresses() {
    this.progresses.forEach((comment: any) => {
      let data = [];
      data = this.product.comments?.filter((feedback: any) => feedback.starts === comment.stars) || [];
      comment.percents = Math.round(((data.length || 0)/(this.product.comments?.length || 1))*100);
    })
    // console.log("this progresses", this.progresses);
  }

  getAveragedStars() {
    let data = this.product.comments?.reduce((sum: any, feedback: any) => {
      return Math.round((sum + Number(feedback.starts) || 0) / (this.product.comments?.length || 1));
    }, 0);
    this.product.avargeStars = data;
  }

}
