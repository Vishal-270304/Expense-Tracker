export interface Expense {
    id?: string;
    name: string;
    place: string;
    amount: number;
    date: string;
    times?: number | string;
    // category: string;
}