let q = []; // first in first out

q.push(2);
q.push(4);
q.push(6);

q.shift();  // this way we have to do re-index everything
q.shift();

console.log(q);

// another way to doing the same

q.unshift(1); // here as well we need to do re-indexing
q.unshift(2);
q.unshift(3);

q.pop();
q.pop();

console.log(q);
