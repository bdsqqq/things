```ts
import { makeLazySplitIterator } 
   from "@bdsqqq/lazytm";
import { this_could_be_a_gb_file } 
   from "./bigassfile.csv";

const iterator = 
   makeLazySplitIterator(this_could_be_a_gb_file, "\n");

const { value, done } = iterator.next();
// value is the first line of the file, done will be false
// This will only compute until it finds the first match.

showFirstLineInUi(value);
```
