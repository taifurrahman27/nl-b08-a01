## Introduction

Generics let write one piece of code that works with many types, while TypeScript still checks the types for you. Instead of using `any`, a generic function takes a type as a parameter and uses that same type for its inputs and outputs. This is useful for lists, helper functions, and asynchronous code.

## How Generics Work

### 1. The basic `<T>` type parameter

A generic type is usually written as `<T>`. TypeScript can often figure out the type on its own from the value you pass in.

```ts
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = getFirst(["Mina", "Rafi"]);
const firstScore = getFirst([85, 92, 78]);
```

The first call returns `string | undefined`. The second returns `number | undefined`. One function works for both, and no type information is lost.

### 2. Limiting generics with constraints

You can restrict what a generic accepts. For example, `K extends keyof T` means the key must exist on the object.

```ts
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}
```

This stops you from asking for a property that doesn't exist.

## Generics with Promises

A `Promise<T>` stands for an asynchronous task that will finish later and give you a value of type `T`.

```ts
async function fetchUserName(): Promise<string> {
  return "Sadia";
}
```

The return type tells anyone using this function that `await` will give them a `string`.

You can also write a reusable function that keeps the type of its data:

```ts
async function getData<T>(data: T): Promise<T> {
  return data;
}
```

Calling `getData<number>(10)` gives you a `Promise<number>`. Calling `getData<string>("Hello")` gives you a `Promise<string>`.

## Conclusion

Generics let you reuse code without losing type safety. When you combine them with `Promise<T>`, you can describe the result of asynchronous code accurately. This makes your apps easier to maintain and helps you avoid type errors.
