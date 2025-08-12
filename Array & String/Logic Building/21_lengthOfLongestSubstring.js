// Initial: left = 0, right = 0, seen = {}, maxLen = 0

// Step-by-step:
// 1. right = 0 → 'p' not in seen → add 'p' → window = "p" → maxLen = 1
// 2. right = 1 → 'w' not in seen → add 'w' → window = "pw" → maxLen = 2
// 3. right = 2 → 'w' is in seen → shrink from left:
//     - remove 'p' → seen = {'w'}
//     - remove 'w' → seen = {}
//     - left = 2
//    → now add 'w' → seen = {'w'}
// 4. right = 3 → 'k' not in seen → add 'k' → window = "wk" → maxLen = 2
// 5. right = 4 → 'e' not in seen → add 'e' → window = "wke" → maxLen = 3
// 6. right = 5 → 'w' is in seen → shrink:
//     - remove 'w' → seen = {'k', 'e'}
//     - left = 3
//    → add 'w' → window = "kew" → maxLen = 3

// Final Answer: 3