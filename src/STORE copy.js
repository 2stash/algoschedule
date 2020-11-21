const STORE = {
  columns: {
    "column-1": {
      id: "column-1",
      title: "Easy",
      taskIds: ["prob-a", "prob-c", "prob-d", "prob-e","prob-g","prob-h","prob-i","prob-j","prob-k","prob-l","prob-m","prob-o"],
    },
    "column-2": {
      id: "column-2",
      title:"Medium",
      taskIds: ["prob-b"],
    },
    "column-3": {
      id:"column-3",
      title: "Hard",
      taskIds: ["prob-f"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
  categoryList: {
    "column-1":{
      id: "column-1",
      title: "Binary Trees",
      cardIds: ["prob-1", "prob-2", "prob-8"],
    },
    "column-2":{
      id: "column-2",
      title:"Arrays",
      cardIds: ["prob-3", "prob-4"],
    },
    "column-3":{
      id:"column-3",
      title: "Binary Search Trees",
      cardIds: ["prob-5", "prob-6"],
    },
    "column-4":{
      id:"column-4",
      title: "Searching",
      cardIds: ["prob-9", "prob-12"]
    },
    "column-5":{
      id:"column-5",
      title: "Recursion",
      cardIds: ["prob-10", "prob-11"]
    },
    "column-6":{
      id:"column-6",
      title: "Sorting",
      cardIds: ["prob-13", "prob-14","prob-15"]
    },
    "column-7":{
      id:"column-7",
      title: "Graphs",
      cardIds: ["prob-7"]
    }
  },
  tasks: {
    "prob-1": {
      id: "prob-1",
      title: "Branch Sums",
      difficulty: "Easy",
      category: "Binary Trees",
      completed: false,
    },
    "prob-2": {
      id: 'prob-2',
      title: "Invert Binary Tree",
      difficulty: "Medium",
      category: "Binary Trees",
      completed: false,
    },
    "prob-3": {
      id: 'prob-3',
      title: "Two Number Sum",
      difficulty: "Easy",
      category: "Arrays",
      completed: false,
    },
    "prob-4": {
      id: 'prob-4',
      title: "Validate Subsequence",
      difficulty: "Easy",
      category: "Arrays",
      completed: false,
    },
    "prob-5": {
      id: 'prob-5',
      title: "Find Closest Value In BST",
      difficulty: "Easy",
      category: "Binary Search Trees",
      completed: false,
    },
    "prob-6": {
      id: 'prob-6',
      title: "Same BSTs",
      difficulty: "Hard",
      category: "Binary Search Trees",
      completed: false,
    },
    "prob-7": {
      id: 'prob-7',
      title: "Depth-first Search",
      difficulty: "Easy",
      category: "Graphs",
      completed: false,
    },
    "prob-8": {
      id: 'prob-8',
      title: "Node Depths",
      difficulty: "Easy",
      category: "Binary Trees",
      completed: false,
    },
    "prob-9": {
      id: 'prob-9',
      title: "Binary Search",
      difficulty: "Easy",
      category: "Searching",
      completed: false,
    },
    "prob-10": {
      id: 'prob-10',
      title: "Nth Fibonacci",
      difficulty: "Easy",
      category: "Recursion",
      completed: false,
    },
    "prob-11": {
      id: 'prob-11',
      title: "Product Sum",
      difficulty: "Easy",
      category: "Recursion",
      completed: false,
    },
    "prob-12": {
      id: 'prob-12',
      title: "Find Three Largest Numbers",
      difficulty: "Easy",
      category: "Searching",
      completed: false,
    },
    "prob-13": {
      id: 'prob-13',
      title: "Bubble Sort",
      difficulty: "Easy",
      category: "Sorting",
      completed: false,
    },
    "prob-14": {
      id: 'prob-14',
      title: "Insertion Sort",
      difficulty: "Easy",
      category: "Sorting",
      completed: false,
    },
    "prob-15": {
      id: 'prob-15',
      title: "Selection Sort",
      difficulty: "Easy",
      category: "Sorting",
      completed: false,
    },
  },
};

export default STORE;
