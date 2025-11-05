### 🌳 **In a Binary Tree →**

It **doesn’t matter** whether the **left value is smaller** or the **right value is greater**.

A **Binary Tree** is simply a tree where:

> Each node can have at most two children — a left and a right.
> 

That’s it.

It **does not follow any ordering rule** like a Binary Search Tree does.

---

### 📘 Example — Valid Binary Tree (but not BST)

```
       10
      /  \
     5   2

```

✅ This is a valid **Binary Tree**,

❌ but **not a BST**, because 2 < 10 but is on the right side.

---

### 🌿 **Binary Search Tree (BST)**

A **special type** of binary tree where:

- Left < Root < Right
    
    This **ordering rule** helps in efficient **searching and sorting**.
    

## 🌳 **Types of Binary Trees**

A **Binary Tree** is a tree where **each node can have at most 2 children** — a **left** and a **right**.

But depending on how nodes are arranged, there are **different types** of binary trees.

---

### 🟢 **1. Full Binary Tree**

**Definition:**

Every node has **either 0 or 2 children** — never exactly 1 child.

**Example:**

```
        1
       / \
      2   3
     / \ / \
    4  5 6  7

```

✅ Every node has 0 or 2 children → **Full Binary Tree**

**Not full example:**

```
      1
     /
    2

```

❌ Node 1 has only one child → Not full

---

### 🟣 **2. Complete Binary Tree**

**Definition:**

All levels are **completely filled**, except possibly the **last**,

and the **last level** is filled **from left to right** (no gaps).

**Example:**

```
        1
       / \
      2   3
     / \  /
    4  5 6

```

✅ All levels full except last, last filled from left to right → **Complete**

**Use case:**

This is the structure used in **Heaps** (like Min-Heap or Max-Heap).

---

### 🔵 **3. Perfect Binary Tree**

**Definition:**

A **Full + Complete** binary tree where:

- All **internal nodes** have **two children**, and
- All **leaf nodes** are on the **same level**.

**Example:**

```
        1
       / \
      2   3
     / \ / \
    4  5 6  7

```

✅ All levels filled

✅ All leaves on same level

✅ Each node has 2 children

→ **Perfect Binary Tree**

**Property:**

- Number of nodes = `2^h - 1` (where h = height)

---

### 🟠 **4. Balanced Binary Tree**

**Definition:**

For every node, the **height difference** between the **left** and **right** subtrees is **at most 1**.

**Example:**

```
       10
      /  \
     5    15
    /
   2

```

✅ Height difference ≤ 1 everywhere → **Balanced Tree**

**Note:**

Not necessarily complete, just height-balanced.

**Special forms:**

- **AVL Tree** and **Red-Black Tree** are balanced BSTs.