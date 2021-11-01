import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  enteredTitle: string;
  enteredContent: string;

  @Output()
  postCreated = new EventEmitter();

  onAddPost() {
    const post = this.createPost(this.enteredTitle, this.enteredContent)
    this.clearInputs();
    this.postCreated.emit(post);
  }

  createPost(title: string, content: string) {
    return {
      title: title,
      content: content
    }
  }
  
  clearInputs() {
    this.enteredTitle = '';
    this.enteredContent = '';
  }
}
