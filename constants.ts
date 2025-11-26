import { Post, Story, Contact, User } from './types';

export const CURRENT_USER: User = {
  id: 'me',
  name: 'Alex Developer',
  avatar: 'https://picsum.photos/id/64/200/200',
};

export const MOCK_STORIES: Story[] = [
  { id: '1', user: { id: 'u1', name: 'Sarah', avatar: 'https://picsum.photos/id/1/200/200' }, image: 'https://picsum.photos/id/101/300/500' },
  { id: '2', user: { id: 'u2', name: 'Mike', avatar: 'https://picsum.photos/id/2/200/200' }, image: 'https://picsum.photos/id/102/300/500' },
  { id: '3', user: { id: 'u3', name: 'Emily', avatar: 'https://picsum.photos/id/3/200/200' }, image: 'https://picsum.photos/id/103/300/500' },
  { id: '4', user: { id: 'u4', name: 'John', avatar: 'https://picsum.photos/id/4/200/200' }, image: 'https://picsum.photos/id/104/300/500' },
  { id: '5', user: { id: 'u5', name: 'Linda', avatar: 'https://picsum.photos/id/5/200/200' }, image: 'https://picsum.photos/id/106/300/500' },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    author: { id: 'u1', name: 'Sarah Jenkins', avatar: 'https://picsum.photos/id/1/200/200' },
    content: 'Just finished hiking the tallest peak in the region! 🏔️ The view was absolutely breathtaking. #Hiking #Nature #WeekendVibes',
    image: 'https://picsum.photos/id/1018/800/500',
    likes: 124,
    comments: [],
    shares: 12,
    timestamp: '2 hours ago',
  },
  {
    id: 'p2',
    author: { id: 'u2', name: 'Mike Ross', avatar: 'https://picsum.photos/id/2/200/200' },
    content: 'Does anyone have recommendations for a good sushi place downtown? 🍣 Craving some sashimi!',
    likes: 45,
    comments: [],
    shares: 2,
    timestamp: '4 hours ago',
  },
  {
    id: 'p3',
    author: { id: 'u3', name: 'Emily Blunt', avatar: 'https://picsum.photos/id/3/200/200' },
    content: 'Working on a new React project. The component lifecycle is so much easier with hooks! 💻⚛️',
    likes: 89,
    comments: [],
    shares: 5,
    timestamp: '6 hours ago',
  }
];

export const MOCK_CONTACTS: Contact[] = [
  { id: 'c1', name: 'Jane Doe', avatar: 'https://picsum.photos/id/65/200/200', online: true },
  { id: 'c2', name: 'Robert Smith', avatar: 'https://picsum.photos/id/66/200/200', online: true },
  { id: 'c3', name: 'Alice Wonder', avatar: 'https://picsum.photos/id/67/200/200', online: false },
  { id: 'c4', name: 'Tom Hardy', avatar: 'https://picsum.photos/id/68/200/200', online: true },
  { id: 'c5', name: 'Chris Evans', avatar: 'https://picsum.photos/id/69/200/200', online: false },
];