```js
import { trytm } from "@bdsqqq/try"

async function awesome() {
   const [aData, aError] = await trytm(step1());
   if(aError) // ...

   const [bData, bError] = await trytm(step2(aData));
   if(bError) // ...

   const [cData, cError] = await trytm(step3(bData));
   if(cError) // ...

   // ...
}
```
