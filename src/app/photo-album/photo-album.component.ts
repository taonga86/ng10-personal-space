import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  photo={
    title:'',file:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(event){
    console.log(event.target.files[0]);
  }
  postPhoto(form){

  }
  
}
