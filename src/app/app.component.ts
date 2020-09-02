import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-audio-player-demo';
  name = 'Angular';
  playlist = [
    {
      title: 'Tha Kar ke',
      link: 'https://funksyou.com/fileDownload/Songs/128/13080.mp3'
    },
    {
      title: 'Golmal',
      link: 'https://funksyou.com/fileDownload/Songs/128/13091.mp3'
    },
    {
      title: 'hehehe',
      link: 'https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/zohv0090g6a?alt=media&token=f864ed42-249a-4656-b674-4fb13a9ce579'
    }
  ];

}
