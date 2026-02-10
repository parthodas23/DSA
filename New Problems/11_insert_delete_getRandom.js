var RandomizedSet = function () {
  this.nums = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return true;

  this.map.set(val, this.nums.length);
  this.nums.push(val);

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  const index = this.map.get(val);
  const last = this.nums[this.nums.length - 1];

  // swap with last
  this.nums[index] = last;
  this.map.set(last, index);

  this.nums.pop();
  this.map.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};


