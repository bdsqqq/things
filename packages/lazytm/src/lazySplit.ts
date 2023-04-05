export function makeLazySplitIterator(str: string, match: string) {
  const strLen = str.length;
  let iterationCount = 0;

  let pointer = 0;
  let checkpoint = 0;
  let found = false;

  const lazySplitIterator = {
    next() {
      let result;
      if (pointer < strLen) {
        checkpoint = pointer;
        while (!found && pointer < strLen) {
          if (str[pointer] === match[0]) {
            found = true;
            for (let i = 1; i < match.length; i++) {
              if (str[pointer + i] !== match[i]) {
                found = false;
                break;
              }
            }
          }
          if (found) {
            result = { value: str.slice(checkpoint, pointer), done: false };
            pointer += match.length;
            iterationCount++;
            found = false;
            return result;
          }
          pointer++;
        }
      }
      return { value: iterationCount, done: true };
    },
  };
  return lazySplitIterator;
}
