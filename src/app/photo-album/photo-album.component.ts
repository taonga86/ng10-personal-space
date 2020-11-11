import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css'],
})
export class PhotoAlbumComponent implements OnInit {
  photo = { title: '' };

  constructor() {}

  ngOnInit(): void {}

  onFileChange(e) {
    console.log(e.target.files[0]);
  }

  postPhoto() {}
}
