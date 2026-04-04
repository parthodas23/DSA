// Encode and Decode Strings

class Codec {
  // Encode array of strings into a single string
  encode(strs) {
    let long_str = "";
    for (let s of strs) {
      long_str += s.length + "#" + s;
    }

    return long_str;
  }

  // Decode single string back to array
  decode(s) {
    let strs = [];

    let i = 0;
    while (i < s.length) {
      let j = i + 1;

      while (s[j] !== "#") {
        j++;
      }

      let len = parseInt(s.slice(i, j));
      let word = s.slice(j + 1, j + 1 + len);

      strs.push(word);
      i = j + 1 + len;
    }

    return strs;
  }
}

const codec = new Codec();

const original = ["hello", "world", "JS is awesome!", "#hash"];

const encoded = codec.encode(original);
const decoded = codec.decode(encoded);

console.log(decoded);