import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() image: Image;

  isLiked = false;
  isDisliked = false;
  isLoading = false;

  constructor(private imageService: ImageService, public authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.image.rating.likes.includes(this.authService.getUserId())) {
      this.isLiked = true;
      this.isDisliked = false;
    }
    if (this.image.rating.dislikes.includes(this.authService.getUserId())) {
      this.isLiked = false;
      this.isDisliked = true;
    }
  }

  likeImage() {
    if (this.isLoading) {
      return;
    }
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['/image', this.image._id]);
      return;
    }

    this.isLoading =  true;
    if (!this.isLiked) {
      this.imageService.likeImage(this.image).subscribe(res => {
        this.image.rating.dislikes.pop();
        this.image.rating.likes.push(this.authService.getUserId());
        this.isLiked = true;
        this.isDisliked = false;
      }).add(() => this.isLoading = false);
    } else {
      this.imageService.resetImageRating(this.image).subscribe(res => {
        this.image.rating.likes.pop();
        this.isLiked = false;
        this.isDisliked = false;
      }).add(() => this.isLoading = false);
    }
  }

  dislikeImage() {
    if (this.isLoading) {
      return;
    }
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['/image', this.image._id]);
      return;
    }

    this.isLoading =  true;
    if (!this.isDisliked) {
      this.imageService.dislikeImage(this.image).subscribe(res => {
        this.image.rating.likes.pop();
        this.image.rating.dislikes.push(this.authService.getUserId());
        this.isLiked = false;
        this.isDisliked = true;
      }).add(() => this.isLoading = false);
    } else {
      this.imageService.resetImageRating(this.image).subscribe(res => {
        this.image.rating.dislikes.pop();
        this.isLiked = false;
        this.isDisliked = false;
      }).add(() => this.isLoading = false);
    }
  }

  goToImageView() {
    this.router.navigate(['/image', this.image._id]);
  }
}
