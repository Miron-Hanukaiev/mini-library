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
    searchText: string;
    searchBy: "title" | "author";
    setSearchText: (value: string) => void;
    setSearchBy: (value: "title" | "author") => void;
}