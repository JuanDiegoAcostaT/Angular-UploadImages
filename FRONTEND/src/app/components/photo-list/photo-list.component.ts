
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../interfaces/Photo'

@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
          console.log(res)
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }

}
