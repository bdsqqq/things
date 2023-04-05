```js
async function Terror() {
  let a;
  let b;
  let c;

  try {
    a = await step1();
  } catch (error) {
    handle(error);
  }

  try {
    b = await step2(a);
  } catch (error) {
    handle(error);
  }

  try {
    c = await step3(b);
  } catch (error) {
    handle(error);
  }

  // ...
}
```
