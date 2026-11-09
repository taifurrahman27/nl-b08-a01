## Title

Type Narrowing in TypeScript

## Introduction

In TypeScript, a variable can be one of several types. For example, a value might be a `string` or a `number`. The problem is that some operations only work on one of those types. **Type narrowing** fixes this: you check what type a value is, and TypeScript then knows exactly which type you're working with. This makes your code safer and you don't need to force types with type assertions.

## Detailed Explanation

### 1. `typeof` for basic types

Use `typeof` to check basic types like `string` and `number`. Inside each branch, TypeScript knows the exact type.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  return value.toFixed(2);
}
```

Inside the `if` block, `value` is a `string`. After it, `value` must be a `number`.

### 2. `instanceof` for classes

Use `instanceof` to check whether a value was created from a certain class. This helps when a function can receive different class objects.

```ts
class Admin {
  manageUsers(): string {
    return "User management enabled";
  }
}

function getAccess(user: Admin | Date): string {
  if (user instanceof Admin) {
    return user.manageUsers();
  }

  return user.toDateString();
}
```

If `user` is an `Admin`, you can call `manageUsers()`. Otherwise, it's a `Date`.

### 3. `in` for object properties

Use `in` to check whether an object has a certain property. This helps you tell apart different object shapes in a union.

```ts
type EmailUser = { email: string };
type PhoneUser = { phone: string };

function contact(user: EmailUser | PhoneUser): string {
  if ("email" in user) {
    return user.email;
  }

  return user.phone;
}
```

If the object has an `email` property, it's an `EmailUser`. Otherwise, it's a `PhoneUser`.

## Conclusion

Type narrowing makes union types easy and safe to use. The `typeof`, `instanceof`, and `in` checks let you find out what type a value is, so you can use it correctly. Learning these checks helps you write TypeScript code that is clear and easy to maintain.
