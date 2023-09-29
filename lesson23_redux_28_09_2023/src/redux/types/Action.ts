type Action = 
| {type: 'counter/minus' }
| {type: 'counter/plus', payload: number};

export default Action;

type Ingredient = 'cheese' | 'bread' | 'salami';

export type ActionSandwich = 
| { type: 'sandwich/addIngredient', payload:  Ingredient}
| { type: 'sandwich/clear' }

// | {type: 'addBread', payload: string}
// | {type: 'addCheese', payload: string}
// | {type: 'addHam', payload: string};

type Book = {
    title: string;
    year: number;
    author: string
}

export type ActionBook = 
| { type: 'book/add', payload: Book }
| { type: 'book/delete', payload: string }
| { type: 'book/editTitle', payload: { isbn: string, title: string } }