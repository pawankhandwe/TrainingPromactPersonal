import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPlaceholderService } from '../json-placeholder.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  
    // postId:number;
  post: any = { title: '', body: '' };

  @ViewChild('newPostTitle') newPostTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('newPostBody') newPostBody!: ElementRef<HTMLInputElement>;
 

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.jsonPlaceholderService.getPostWithId(params['id']))
    ).subscribe(data => {
      this.post = data.post;
    
    });
  }
  updatePost() {
    this.jsonPlaceholderService.updatePost(this.post.id, this.post).subscribe(updatedPost => {
        console.log(updatedPost);
        this.jsonPlaceholderService.getPosts().subscribe();
      alert('Post updated successfully!');
      this.router.navigate(['/blog']); 
    });
  }
}
