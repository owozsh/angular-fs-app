import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  enteredTitle: string;
  enteredContent: string;

  @Output()
  postCreated = new EventEmitter<Post>();

  onAddPost() {
    const post: Post = this.createPost(this.enteredTitle, this.enteredContent);
    this.clearInputs();
    this.postCreated.emit(post);
  }

  createPost(title: string, content: string): Post {
    return {
      title: title,
      content: content,
    };
  }

  clearInputs() {
    this.enteredTitle = '';
    this.enteredContent = '';
  }
}
