# Tailwind Class Merge

Tailwind Class Merge is a utility function that combines [`clsx`](https://www.npmjs.com/package/clsx) and [`tailwind-merge`](https://www.npmjs.com/package/tailwind-merge) to ensure that a string of Tailwind CSS class names are free of duplications and conflicts.

## Installation

You can install Tailwind Class Merge using npm:

```bash
npm install tailwind-class-merge
```

## Usage

The `classMerge` function accepts any number of arguments, which can be strings, objects, or arrays. It combines the class names using `clsx` and then merges the result with `tailwind-merge` to optimize the Tailwind CSS class utilities.

Import the `classMerge` function from the package:

```typescript
import { classMerge } from "tailwind-class-merge";
```

Use the `classMerge` function to merge and optimize Tailwind CSS class names:

```typescript
const className = classMerge("text-lg", "font-bold", "text-red-500");
// Output: "font-bold text-lg text-red-500"
```

## Examples

Merging class names with conflicting Tailwind utilities:

```typescript
const className = classMerge(
  "text-lg",
  "text-xl",
  "text-red-500",
  "text-blue-500"
);
// Output: "text-xl text-blue-500"
```

Merging class names with conditional objects:

```typescript
const className = classMerge("text-lg", {
  "font-bold": true,
  "text-red-500": false,
});
// Output: "text-lg font-bold"
```

It pairs very well with the [cva](https://github.com/joe-bell/cva) package, and sets you up for the "bulletproof" components described in their [Handling Style Conflicts](https://cva.style/docs/getting-started/installation#handling-style-conflicts) docs.

```typescript
import { cva, type VariantProps } from "class-variance-authority";
import { classMerge } from "tailwind-class-merge";

const baseClassNames =
  "rounded-md font-semibold text-gray-700 bg-gray-300";

const button = cva(["button", baseClassNames], {
  variants: {
    status: {
      success: "text-green-700 bg-green-300",
      warning: "text-yellow-700 bg-yellow-300",
      danger: "text-red-700 bg-red-300",
      info: "text-blue-700 bg-blue-300",
    },
    size: {
      small: "text-xs px-2 py-1",
      medium: "text-sm leading-5 py-2 px-4",
    },
  },
  defaultVariants: {
    status: "info",
    size: "medium",
  },
});

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button = ({ className, status, size, ...restProps}: ButtonProps) => {
  return (
    <button
      className={classMerge(button({ className, status, size }))} {...restProps}
    />
  );
}

// In use:
<Button size="small" className="shadow">
    A Small Shadowy Button
</Button>

// Output:
<button class="button rounded-md font-semibold text-blue-700 bg-blue-300 text-xs px-2 py-1 shadow">
    A Small Shadowy Button
</button>
```

## Testing

Tailwind Class Merge includes unit tests to ensure the correctness of the `classMerge` function. To run the tests, use the following command:

```bash
npm test
```

The tests are written using the Jest testing framework and cover various scenarios to validate the behavior of the `classMerge` function.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/keithburgie/tailwind-class-merge).

## License

This package is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
