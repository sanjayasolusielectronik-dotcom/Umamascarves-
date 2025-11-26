export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  shares: number;
  timestamp: string;
  likedByCurrentUser?: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
}