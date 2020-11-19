const STORE = {
  levelLists: [
    {
      id: "1",
      category: "Easy",
      cardIds: ["a", "c", "d", "e","g","h","i","j","k","l","m","o"],
    },
    {
      id: "2",
      category:"Medium",
      cardIds: ["b"],
    },
    {
      id:"3",
      category: "Hard",
      cardIds: ["f"],
    }
  ],
  categoryList: [
    {
      id: "1",
      category: "Binary Trees",
      cardIds: ["a", "b", "h"],
    },
    {
      id: "2",
      category:"Arrays",
      cardIds: ["c", "d"],
    },
    {
      id:"3",
      category: "Binary Search Trees",
      cardIds: ["e", "f"],
    },
    {
      id:"4",
      category: "Searching",
      cardIds: ["i", "l"]
    },
    {
      id:"5",
      category: "Recursion",
      cardIds: ["j", "k"]
    },
    {
      id:"6",
      category: "Sorting",
      cardIds: ["m", "n","o"]
    },
  ],
  allProblems: {
    a: {
      id: 'a',
      title: "Branch Sums",
      difficulty: "Easy",
      category: "Binary Trees",
      completed: false,
    },
    b: {
      id: 'b',
      title: "Invert Binary Tree",
      difficulty: "Medium",
      category: "Binary Trees",
      completed: false,
    },
    c: {
      id: 'c',
      title: "Two Number Sum",
      difficulty: "Easy",
      category: "Arrays",
      completed: false,
    },
    d: {
      id: 'd',
      title: "Validate Subsequence",
      difficulty: "Easy",
      category: "Arrays",
      completed: false,
    },
    e: {
      id: 'e',
      title: "Find Closest Value In BST",
      difficulty: "Easy",
      category: "Binary Search Trees",
      completed: false,
    },
    f: {
      id: 'f',
      title: "Same BSTs",
      difficulty: "Hard",
      category: "Binary Search Trees",
      completed: false,
    },
    g: {
      id: 'g',
      title: "Depth-first Search",
      difficulty: "Easy",
      category: "Graphs",
      completed: false,
    },
    h: {
      id: 'h',
      title: "Node Depths",
      difficulty: "Easy",
      category: "Binary Trees",
      completed: false,
    },
    i: {
      id: 'i',
      title: "Binary Search",
      difficulty: "Easy",
      category: "Searching",
      completed: false,
    },
    j: {
      id: 'j',
      title: "Nth Fibonacci",
      difficulty: "Easy",
      category: "Recursion",
      completed: false,
    },
    k: {
      id: 'k',
      title: "Product Sum",
      difficulty: "Easy",
      category: "Recursion",
      completed: false,
    },
    l: {
      id: 'l',
      title: "Find Three Largest Numbers",
      difficulty: "Easy",
      category: "Searching",
      completed: false,
    },
    m: {
      id: 'm',
      title: "Bubble Sort",
      difficulty: "Easy",
      category: "Sorting",
      completed: false,
    },
    n: {
      id: 'n',
      title: "Insertion Sort",
      difficulty: "Easy",
      category: "Sorting",
      completed: false,
    },
    o: {
      id: 'o',
      title: "Selection Sort",
      difficulty: "Easy",
      category: "Sorting",
      completed: false,
    },
  },
};

export default STORE;
