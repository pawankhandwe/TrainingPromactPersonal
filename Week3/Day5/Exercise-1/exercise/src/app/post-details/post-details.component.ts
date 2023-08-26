// post-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPlaceholderService } from '../json-placeholder.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;
  comments: any[]=[];

  constructor(
    private route: ActivatedRoute,
    private jsonPlaceholderService: JsonPlaceholderService
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.jsonPlaceholderService.getPostWithComments(params['id']))
    ).subscribe(data => {
      this.post = data.post;
      this.comments = data.comments;
    });
  }
}
