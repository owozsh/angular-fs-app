import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  posts = [
    { title: 'First Post', content: "This is the first post's content" },
    { title: 'Second Post', content: "This is the second post's content" },
    { title: 'Third Post', content: "This is the third post's content" },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.posts, event.previousIndex, event.currentIndex);
  }
}
