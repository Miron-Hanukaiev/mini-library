export type Tag =
 | 'tech'
 | 'non-fiction'
 | 'fiction'
 | 'fantasy'
 | 'history'
 | 'self-help'
 | 'science';
 
export interface Book {
 id: string;
 title: string;
 author: string;
 year: number;
 rating: number; // 0–5
 tags: Tag[];
 description: string;
}

// The props shape passed into BookList component
export interface BookListProps {
    books: Book[];
}

// The props shape passed into Search component
export interface SearchProps {
    text: string;
    setText: (value: string) => void;

    searchBy: "title" | "author";
    setSearchBy: (value: "title" | "author") => void;

    tag: Tag | "";
    setTag: (value: Tag | "") => void;

    rating: Rating;
    setRating: (value: Rating) => void;
}

export type Rating =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 4.5
  | 5;
