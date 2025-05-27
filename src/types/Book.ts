export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
}

export const books = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel set in the 1920s that explores themes of wealth, society, and the American Dream.'
    },
    {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A novel about the serious issues of rape and racial inequality, narrated by a young girl named Scout Finch.'
    },
    {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel that delves into the dangers of totalitarianism and extreme political ideology.'
    },
    {
        id: '4',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.'
    }
] as Book[];