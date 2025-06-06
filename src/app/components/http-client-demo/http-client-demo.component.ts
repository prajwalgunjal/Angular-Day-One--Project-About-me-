import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Post {
  id?: number;
  title: string;
  body: string;
  userId?: number;
}

@Component({
  selector: 'app-http-client-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.scss']
})
export class HttpClientDemoComponent implements OnInit {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  posts: Post[] = [];
  loading = false;
  
  // For POST
  newPost: Post = { title: '', body: '' };
  createdPost: Post | null = null;
  
  // For PUT
  updateData: Post = { id: 1, title: '', body: '' };
  updatedPost: Post | null = null;
  
  // For PATCH
  patchData = { id: 1, title: '' };
  patchedPost: Post | null = null;
  
  // For DELETE
  deleteId: number = 1;
  deleteSuccess = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Optionally load some posts on init
  }

  // GET - Fetch all posts
  getPosts(): void {
    this.loading = true;
    this.http.get<Post[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
        console.log('GET - Posts fetched:', data.length);
      },
      error: (error) => {
        console.error('GET Error:', error);
        this.loading = false;
      }
    });
  }

  // POST - Create new post
  addPost(): void {
    if (!this.newPost.title || !this.newPost.body) {
      alert('Please fill both title and body');
      return;
    }

    this.loading = true;
    const postData = {
      ...this.newPost,
      userId: 1
    };

    this.http.post<Post>(this.apiUrl, postData).subscribe({
      next: (data) => {
        this.createdPost = data;
        this.newPost = { title: '', body: '' }; // Reset form
        this.loading = false;
        console.log('POST - Post created:', data);
      },
      error: (error) => {
        console.error('POST Error:', error);
        this.loading = false;
      }
    });
  }

  // PUT - Update entire post
  updatePost(): void {
    if (!this.updateData.id || !this.updateData.title || !this.updateData.body) {
      alert('Please fill all fields for update');
      return;
    }

    this.loading = true;
    const url = `${this.apiUrl}/${this.updateData.id}`;
    const putData = {
      id: this.updateData.id,
      title: this.updateData.title,
      body: this.updateData.body,
      userId: 1
    };

    this.http.put<Post>(url, putData).subscribe({
      next: (data) => {
        this.updatedPost = data;
        this.loading = false;
        console.log('PUT - Post updated:', data);
      },
      error: (error) => {
        console.error('PUT Error:', error);
        this.loading = false;
      }
    });
  }

  // PATCH - Partial update
  patchPost(): void {
    if (!this.patchData.id || !this.patchData.title) {
      alert('Please provide ID and title for patch');
      return;
    }

    this.loading = true;
    const url = `${this.apiUrl}/${this.patchData.id}`;
    const patchPayload = {
      title: this.patchData.title
    };

    this.http.patch<Post>(url, patchPayload).subscribe({
      next: (data) => {
        this.patchedPost = data;
        this.loading = false;
        console.log('PATCH - Post patched:', data);
      },
      error: (error) => {
        console.error('PATCH Error:', error);
        this.loading = false;
      }
    });
  }

  // DELETE - Remove post
  deletePost(): void {
    if (!this.deleteId) {
      alert('Please provide post ID to delete');
      return;
    }

    this.loading = true;
    const url = `${this.apiUrl}/${this.deleteId}`;

    this.http.delete(url).subscribe({
      next: () => {
        this.deleteSuccess = true;
        this.loading = false;
        console.log('DELETE - Post deleted:', this.deleteId);
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          this.deleteSuccess = false;
        }, 3000);
      },
      error: (error) => {
        console.error('DELETE Error:', error);
        this.loading = false;
      }
    });
  }
}