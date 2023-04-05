```ts
import { this_could_be_a_gb_file } 
   from "./bigassfile.csv";

const splitString = 
   this_could_be_a_gb_file.split("\n");
// [] with possibly thousands of entries,
// blocks main thread

showFirstLineInUi(splitString[0]);
```
