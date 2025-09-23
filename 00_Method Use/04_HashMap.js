let map = new Map();
map.set("apple", "a fruit");
map.set("car", "vehicle");

console.log(map.get("apple"));
console.log(map.has("car"));

map.delete("apple");
console.log(map.get("apple"));
