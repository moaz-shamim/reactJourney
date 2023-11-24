# Understanding the Concept of "props" (short for properties) 

-> In React, "props" (short for properties) are a way to pass data from one component to another.
----------------------------------------------------------------------------------------------------
 Props allow you to make your React components dynamic and reusable. Here's a simple explanation of props in React:

Passing Data: React components are like building blocks of your application. They can receive information from their parent component through props. This data can be anything - text, numbers, objects, functions, etc.

Immutable: Props are immutable, meaning that once you pass data to a component through props, that component cannot change the data directly. This helps maintain a predictable flow of data in your application.

Example: Let's say you have a Person component, and you want to display the name of a person using it. You can pass the person's name as a prop like this:

```jsx
function App() {
  return (
    <Person name="John" />
  );
}
```

In the Person component, you can access the name prop like this:
```jsx
function Person(props) {
  return <p>Name: {props.name}</p>;
}
```

Reusability: Props allow you to create reusable components. In the above example, you can use the Person component to display names of different people simply by changing the name prop when you use it.



# Points:

In traditional concept of web building we put html , css and js separately but In react we put them together in components .

for eg we see the card component that we made , and use it again and agai by passing different value according to our need .