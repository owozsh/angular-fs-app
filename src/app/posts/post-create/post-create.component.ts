import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  @Output()
  postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) return;
    const post: Post = this.createPost(form.value.title, form.value.content);
    this.postCreated.emit(post);
  }

  createPost(title: string, content: string): Post {
    return {
      title: title,
      content: content,
    };
  }
}
