What Context does

> Context lets you  **store data in one place and access it anywhere in the component tree** .

![🔹](https://a.slack-edge.com/production-standard-emoji-assets/15.0/google-medium/1f539.png)** Simple analogy**

* Props → passing a parcel through every person
* Context → putting it in a **shared room** everyone can access

How it works (3 parts)

1️⃣ Create Context - const ThemeContext = createContext();

2️⃣ Provide value
-**<ThemeContext**.**Provider**value**=**"dark"**>**
<App**/>**
</ThemeContext**.**Provider>

3️⃣ Consume value - const theme = useContext(ThemeContext);


#### Explaining this code chunk"

switch (action.type) {
    case'ADD':
    console.log("ADDING TODO:", action.payload);
    return [
    ...state,
    { id: Date.now().toString(), text: action.payload, completed: false }
    ];

| col1                      | col2                                                                                                                  | col3                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| switch                    | A control structure (like multiple if-else)                                                                           | “one variable can have multiple possible values”                     |
| action.type               | Command to ask “What kind of action is this?”                                                                      |                                                                        |
| case'ADD':                | If action type is `'ADD'`                                                                                           |                                                                        |
| return [                  | returning a**new array (new state)<br />React state must NEVER be modified directly → always return new copy** |                                                                        |
| ...**state**        | spread operator- “copy all existing todos into a new array”                                                        | [**1**, **2**] **→ copied into **new**array** |
| id: Date.now().toString() | `Date.now()` → gives current timestamp<br />`.toString()` → converts number to string                           | "171234567890"                                                         |
| text: action.payload      | `action.payload` = user input text                                                                                  | "Learn React"                                                          |
| completed: false          | new todo is NOT completed initially                                                                                   | [ ...oldToDos,<br />newTodo<br />]]                                    |
|                           |                                                                                                                       | { type: "ADD", payload: "Study React" }                                |

A reducer is a function that takes the current state and an action, and returns a new state based on the action type.

Reducers always return a new state, and `...state` is used to keep existing data while adding or updating new data.

##### Basic Syntax for a reducer function:

```
const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_NAME':
      return newState;    default:
      return state;
  }
};
```


---
