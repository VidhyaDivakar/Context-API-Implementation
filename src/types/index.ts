export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}
// Used for filtering todo lists with these strict options of type string
export type FilterType = 'all' | 'active' | 'completed';
export type ThemeType = 'light' | 'dark';