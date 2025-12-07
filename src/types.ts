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
    title: string;
    setTitle: (value: string) => void;

    searchBy: "title" | "author";
    setSearchBy: (value: "title" | "author") => void;

    tag: Tag | "";
    setTag: (value: Tag | "") => void;

    rating: Rating;
    setRating: (value: Rating) => void;

    titleSort: TitleSort;
    setTitleSort: (value: TitleSort) => void;

    ratingSort: RatingSort; 
    setRatingSort: (value: RatingSort) => void;
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

export type TitleSort = 
    | "none"
    | "A to Z"
    | "Z to A";

export type RatingSort = 
    | "none"
    | "low to high"
    | "high to low";

export interface Filter {
    title: string;
    setTitle: (value: string) => void;

    searchBy: "title" | "author";
    setSearchBy: (value: "title" | "author") => void;

    tag: Tag | "";
    setTag: (value: Tag | "") => void;

    rating: Rating;
    setRating: (value: Rating) => void;

}

export interface BookSort {
    titleSort: TitleSort;
    setTitleSort: (value: TitleSort) => void;

    ratingSort: RatingSort; 
    setRatingSort: (value: RatingSort) => void;
}