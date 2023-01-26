export interface Books {
    
    id:number;
    title: string;
    bookcover: { img1: string; img2: string; };
    description: string;
    genre: string;
    author: string;
    authorP: string;
    critic: number;
    cost: number;
    tax: number;
    price: number;
    numberOfReview: number;
    sale: number;
    availibilty: boolean;
    proDetail?:{
        printlength:number;
        language: string;
        publisher:string;
        pubDate: Date;
        dimension: string;
        itemW:number;
    }
}

export interface Review{
    username: string;
    userP: string;
    review: string[];
}