export interface Image {
  id: string;
  width: number;
  height: number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description?: string;
  description?: string;
  likes: number;
  user: {
    name: string;
  };
}
