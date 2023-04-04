# lazy™

Why compute something now, when you can compute it later?

lazy™ avoids unecessary compute using lazy iterators. Inspired by Rust's iterators and motivated by me trying to get the headers of a .csv file with a million entries.

## Usage

```
npm install @bdsqqq/lazytm
```

```ts
import { makeLazySplitIterator } from "@bdsqqq/lazytm";
import { this_could_be_a_gb_file } from "./bigassfile.csv";

const iterator = makeLazySplitIterator(this_could_be_a_gb_file, "\n");
const { value, done } = iterator.next().value;
```

## Why does this exist?

```ts
const absolutelly_huge_string_from_a_user_uploaded_file;
const headers =
  absolutelly_huge_string_from_a_user_uploaded_file.split("\n")[0];
```

blocked the main thread for a while and I only needed the first element to display some stuff in the screen.

## Why is the lib a single function?

Taking inspiration from the lazy iterator itself, I'll only make these functions as I need them. But the general idea can be applied to almost all String and Array methods in JavaScript so feel free to contribute.
