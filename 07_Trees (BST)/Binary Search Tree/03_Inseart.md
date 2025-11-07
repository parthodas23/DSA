### 🌳 Why 7 doesn’t go **directly under 10**

When we inserted `7`, the **insert function** doesn’t just look at the root once — it *keeps comparing down the path* until it finds a proper `null` spot.

Here’s what happens when inserting `7` step by step:

---

### 🧩 Step-by-step reasoning:

1. Start at root → `current = 10`
    - Compare `7` with `10`
    - `7 < 10` ✅ → go **left**
    
    Now you move to the **left child of 10**, which is `9`.
    
2. Now `current = 9`
    - Compare `7` with `9`
    - `7 < 9` ✅ → go **left** again
    
    Left child of `9` is `null` → place `7` here.
    

---

### 🧠 Why not under 10 directly?

Because there’s **already a node (9)** in the left position of 10.

The **rule of a BST** is:

> “Smaller values go left — but not directly under root, rather under the appropriate node in the left subtree.”
> 

So `7` belongs *in the left subtree of 10*,

and within that subtree, `9` is the “root”.

Then we compare again:

> “Where does 7 belong relative to 9?” → it’s smaller → left of 9.
> 

That’s why the final tree looks like this:

```
      10
     /  \
    9    11
   /
  7

```

---

### 🌿 Think of it like a chain of decisions:

```
10 → go left (since 7 < 10)
     9 → go left (since 7 < 9)
         null → place here ✅

```

Each comparison takes you **one level deeper** into the tree until an empty spot (`null`) is found.

---

### 🧠 Analogy:

Imagine sorting books on a shelf by number:

- 10 is already there.
- 9 goes before 10.
- Now, when adding 7, you don’t push 9 away — you **put 7 before 9** (since it’s even smaller).

Same logic in BST.