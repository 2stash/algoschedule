(this.webpackJsonpreactdragdrop=this.webpackJsonpreactdragdrop||[]).push([[0],{45:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var o=r(1),i=r(0),a=r.n(i),c=r(20),n=r.n(c),l=r(22),d=r(17),s=r(4),p=Object(i.createContext)(),b=function(){var e=Object(i.useContext)(p).scheduleset;return Object(o.jsxs)("nav",{className:"navbar bg-primary",children:[Object(o.jsxs)("h1",{children:[Object(o.jsx)("i",{className:"fas fa-clipboard-list"})," AlgoSchedule"]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"",children:!e&&Object(o.jsx)(d.b,{className:"link",to:"/",children:"Home"})}),Object(o.jsx)("li",{children:e&&Object(o.jsx)(d.b,{className:"link",to:"/schedule",children:"Schedule"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{className:"link",to:"/about",children:"About"})})]})]})},u=function(e){var t=e.day,r=e.problem,a=r.id,c=r.title,n=r.difficulty,l=r.category,d=r.completed,s=Object(i.useContext)(p),b=s.setCompleted,u=s.schedule,f=(s.complete,function(e){e--;var t={id:a,title:c,difficulty:n,category:l,completed:!0},r=u;r.splice(e,1,t),b(r)});return!0===d?Object(o.jsxs)("div",{className:"card-calendar completed",children:[Object(o.jsxs)("h3",{children:["Day ",t]}),Object(o.jsx)("h3",{children:c}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("p",{children:l}),Object(o.jsx)("div",{className:"card-calendar-button",children:Object(o.jsx)("button",{className:"btn btn-block btn-success",onClick:function(){return f(t)},children:"Done"})})]}):Object(o.jsxs)("div",{className:"card-calendar in-process",children:[Object(o.jsxs)("h3",{children:["Day ",t]}),Object(o.jsx)("h3",{children:c}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("p",{children:l}),Object(o.jsx)("div",{className:"card-calendar-button",children:Object(o.jsx)("button",{className:"btn btn-block btn-primary",onClick:function(){return f(t)},children:"Done"})})]})},f=function(){var e=Object(i.useContext)(p),t=e.schedule,r=e.resetSchedule;if(!t)return Object(o.jsx)("h3",{children:"Setup your Algo problems first"});return Object(o.jsxs)(i.Fragment,{children:[t?Object(o.jsx)("div",{className:"calendar-container",children:t.map((function(e,t){return function(e,t){return Object(o.jsx)("div",{className:"calendar-card",children:Object(o.jsx)(u,{problem:t,day:e+1})},"".concat(e,"cal"))}(t,e)}))}):Object(o.jsx)("h3",{children:"Setup your Algo problems first"}),Object(o.jsx)("div",{className:"btn-reset",children:Object(o.jsx)("button",{onClick:function(){!0===window.confirm("Are you sure you want to delete the schedule? This cannot be undone!")&&r()},className:"btn btn-danger",children:"Reset"})})]})},m=function(){var e=Object(i.useContext)(p),t=e.schedule,r=e.complete,a=t.findIndex((function(e){return!1===e.completed})),c=a+1,n=t[a].title;return Object(o.jsxs)("div",{className:"dashboard-container",children:[Object(o.jsxs)("div",{className:"dashboard-card",children:["Day ",c]}),Object(o.jsx)("div",{className:"dashboard-card",children:null!==t&&void 0!==t?n:null}),Object(o.jsxs)("div",{className:"dashboard-card",children:[r&&Object(o.jsxs)("span",{className:"important-number",children:[r," "]}),Object(o.jsx)("span",{children:" out of "}),null!==t?Object(o.jsx)("span",{className:"important-number",children:t.length}):null,Object(o.jsx)("span",{children:" Completed"})]})]})},g=function(e){var t=Object(i.useContext)(p),r=t.schedule,a=t.complete;return null===r||void 0===r||0===r.length?Object(o.jsx)(s.a,{to:"/algoschedule"}):r.length===a?Object(o.jsx)("p",{children:"You WIN!"}):Object(o.jsxs)("div",{className:"schedule-container",children:[Object(o.jsx)(m,{}),Object(o.jsx)(f,{})]})},y={display:"flex",justifyContent:"center",margin:"10px"},h=function(){return Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsx)("p",{children:"Hi my name is Dan. I am really interested in any tool for schedules or project management so I wanted to create a simple schedule tool for studying algorithms, specifically for AlgoExpert.io."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Check out the github repo below, and feel free to reach out with any comments or suggestions."}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{style:y,children:[Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"https://github.com/2stash/algoschedule",target:"_blank",rel:"noreferrer",className:"btn link btn-success",children:"Github Repo"})}),Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/daniel-westlund-a52a2b73/",target:"_blank",rel:"noreferrer",className:"btn link btn-dark",children:"Linkedin"})})]})]})},j=r(16),O=r(3),x=r(11),S=r(12),v=r(14),k=r(13),C=r(5),H={tasks:{"prob-1":{id:"prob-1",title:"Branch Sums",difficulty:"Easy",category:"Binary Trees",completed:!1,filter:!1},"prob-2":{id:"prob-2",title:"Invert Binary Tree",difficulty:"Medium",category:"Binary Trees",completed:!1,filter:!1},"prob-3":{id:"prob-3",title:"Two Number Sum",difficulty:"Easy",category:"Arrays",completed:!1,filter:!1},"prob-4":{id:"prob-4",title:"Validate Subsequence",difficulty:"Easy",category:"Arrays",completed:!1,filter:!1},"prob-5":{id:"prob-5",title:"Find Closest Value In BST",difficulty:"Easy",category:"Binary Search Trees",completed:!1,filter:!1},"prob-6":{id:"prob-6",title:"Same BSTs",difficulty:"Hard",category:"Binary Search Trees",completed:!1,filter:!1},"prob-7":{id:"prob-7",title:"Depth-first Search",difficulty:"Easy",category:"Graphs",completed:!1,filter:!1},"prob-8":{id:"prob-8",title:"Node Depths",difficulty:"Easy",category:"Binary Trees",completed:!1,filter:!1},"prob-9":{id:"prob-9",title:"Binary Search",difficulty:"Easy",category:"Searching",completed:!1,filter:!1},"prob-10":{id:"prob-10",title:"Nth Fibonacci",difficulty:"Easy",category:"Recursion",completed:!1,filter:!1},"prob-11":{id:"prob-11",title:"Product Sum",difficulty:"Easy",category:"Recursion",completed:!1,filter:!1},"prob-12":{id:"prob-12",title:"Find Three Largest Numbers",difficulty:"Easy",category:"Searching",completed:!1,filter:!1},"prob-13":{id:"prob-13",title:"Bubble Sort",difficulty:"Easy",category:"Sorting",completed:!1,filter:!1},"prob-14":{id:"prob-14",title:"Insertion Sort",difficulty:"Easy",category:"Sorting",completed:!1,filter:!1},"prob-15":{id:"prob-15",title:"Selection Sort",difficulty:"Easy",category:"Sorting",completed:!1,filter:!1},"prob-16":{id:"prob-16",title:"Palindrome Check",difficulty:"Easy",category:"Strings",completed:!1,filter:!1},"prob-17":{id:"prob-17",title:"Caesar Cipher Encryptor",difficulty:"Easy",category:"Strings",completed:!1,filter:!1},"prob-18":{id:"prob-18",title:"Three Number Sun",difficulty:"Medium",category:"Arrays",completed:!1,filter:!1},"prob-19":{id:"prob-19",title:"Smallest Difference",difficulty:"Medium",category:"Arrays",completed:!1,filter:!1},"prob-20":{id:"prob-20",title:"Move Element To End",difficulty:"Medium",category:"Arrays",completed:!1,filter:!1},"prob-21":{id:"prob-21",title:"Monotonic Array",difficulty:"Medium",category:"Arrays",completed:!1,filter:!1},"prob-22":{id:"prob-22",title:"Spiral Traverse",difficulty:"Medium",category:"Arrays",completed:!1,filter:!1},"prob-23":{id:"prob-23",title:"Longest Peak",difficulty:"Medium",category:"Arrays",completed:!1,filter:!1},"prob-24":{id:"prob-24",title:"Four Number Sum",difficulty:"Hard",category:"Arrays",completed:!1,filter:!1},"prob-25":{id:"prob-25",title:"Subarray Sort",difficulty:"Hard",category:"Arrays",completed:!1,filter:!1},"prob-26":{id:"prob-26",title:"Largest Range",difficulty:"Hard",category:"Arrays",completed:!1,filter:!1},"prob-27":{id:"prob-27",title:"Min Rewards",difficulty:"Hard",category:"Arrays",completed:!1,filter:!1},"prob-28":{id:"prob-28",title:"Zigzag Traverse",difficulty:"Hard",category:"Arrays",completed:!1,filter:!1},"prob-29":{id:"prob-29",title:"Apartment Hunting",difficulty:"Very Hard",category:"Arrays",completed:!1,filter:!1},"prob-30":{id:"prob-30",title:"Calendar Matching",difficulty:"Very Hard",category:"Arrays",completed:!1,filter:!1},"prob-32":{id:"prob-32",title:"BST Construction",difficulty:"Medium",category:"Binary Search Trees",completed:!1,filter:!1},"prob-33":{id:"prob-33",title:"Validate BST",difficulty:"Medium",category:"Binary Search Trees",completed:!1,filter:!1},"prob-34":{id:"prob-34",title:"BST Traversal",difficulty:"Medium",category:"Binary Search Trees",completed:!1,filter:!1},"prob-35":{id:"prob-35",title:"Min Height BST",difficulty:"Medium",category:"Binary Search Trees",completed:!1,filter:!1},"prob-36":{id:"prob-36",title:"Right Smaller Than",difficulty:"Very Hard",category:"Binary Search Trees",completed:!1,filter:!1},"prob-37":{id:"prob-37",title:"Max Path Sum in Binary Trees",difficulty:"Hard",category:"Binary Trees",completed:!1,filter:!1},"prob-38":{id:"prob-38",title:"Iterative In-order Traversal",difficulty:"Very Hard",category:"Binary Trees",completed:!1,filter:!1},"prob-39":{id:"prob-39",title:"Flatten Binary Tree",difficulty:"Very Hard",category:"Binary Trees",completed:!1,filter:!1},"prob-40":{id:"prob-40",title:"Right Sibling Tree",difficulty:"Very Hard",category:"Binary Trees",completed:!1,filter:!1},"prob-41":{id:"prob-41",title:"All Kind of Node Depths",difficulty:"Very Hard",category:"Binary Trees",completed:!1,filter:!1},"prob-42":{id:"prob-42",title:"Max Subset Sum No Adjacent",difficulty:"Medium",category:"Dynamic Programming",completed:!1,filter:!1},"prob-43":{id:"prob-43",title:"Number of Ways To Make Change",difficulty:"Medium",category:"Dynamic Programming",completed:!1,filter:!1},"prob-44":{id:"prob-44",title:"Min Number Of Coins For Change",difficulty:"Medium",category:"Dynamic Programming",completed:!1,filter:!1},"prob-45":{id:"prob-45",title:"Levenshtein Distance",difficulty:"Medium",category:"Dynamic Programming",completed:!1,filter:!1},"prob-46":{id:"prob-46",title:"Max Sum Increasing Subsequence",difficulty:"Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-47":{id:"prob-47",title:"Longest Common Subsequence",difficulty:"Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-48":{id:"prob-48",title:"Min Number Of Jumps",difficulty:"Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-49":{id:"prob-49",title:"Water Area",difficulty:"Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-50":{id:"prob-50",title:"Knapsack Problem",difficulty:"Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-51":{id:"prob-51",title:"Disk Stacking",difficulty:"Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-52":{id:"prob-52",title:"Numbers In Pi",difficulty:"Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-53":{id:"prob-53",title:"Max Profit With K Transactions",difficulty:"Very Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-54":{id:"prob-54",title:"Palindrome Partitioning Min Cuts",difficulty:"Very Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-55":{id:"prob-55",title:"Longest Increasing Subsequence",difficulty:"Very Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-56":{id:"prob-56",title:"Longest String Chain",difficulty:"Very Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-57":{id:"prob-57",title:"Square of Zeroes",difficulty:"Very Hard",category:"Dynamic Programming",completed:!1,filter:!1},"prob-58":{id:"prob-58",title:"Kadane's Algorithm",difficulty:"Medium",category:"Famous Algroithms",completed:!1,filter:!1},"prob-60":{id:"prob-60",title:"Topological Sort",difficulty:"Hard",category:"Famous Algroithms",completed:!1,filter:!1},"prob-61":{id:"prob-61",title:"Knuth-Morris-Pratt Algorithm",difficulty:"Very Hard",category:"Famous Algroithms",completed:!1,filter:!1},"prob-62":{id:"prob-62",title:"Single Cycle Check",difficulty:"Medium",category:"Graphs",completed:!1,filter:!1},"prob-63":{id:"prob-63",title:"Breadth-first Search",difficulty:"Medium",category:"Graphs",completed:!1,filter:!1},"prob-64":{id:"prob-64",title:"River Sizes",difficulty:"Medium",category:"Graphs",completed:!1,filter:!1},"prob-65":{id:"prob-65",title:"Youngest Common Ancestor",difficulty:"Medium",category:"Graphs",completed:!1,filter:!1},"prob-66":{id:"prob-66",title:"Boggle Board",difficulty:"Hard",category:"Graphs",completed:!1,filter:!1},"prob-67":{id:"prob-67",title:"Rectangle Mania",difficulty:"Very Hard",category:"Graphs",completed:!1,filter:!1},"prob-68":{id:"prob-68",title:"Airport Connections",difficulty:"Very Hard",category:"Graphs",completed:!1,filter:!1},"prob-69":{id:"prob-69",title:"Min Heap Construction",difficulty:"Medium",category:"Heaps",completed:!1,filter:!1},"prob-70":{id:"prob-70",title:"Continuous Median",difficulty:"Hard",category:"Heaps",completed:!1,filter:!1},"prob-71":{id:"prob-71",title:"Merge Sorted Arrays",difficulty:"Very Hard",category:"Heaps",completed:!1,filter:!1},"prob-72":{id:"prob-72",title:"Linked List Construction",difficulty:"Medium",category:"Linked Lists",completed:!1,filter:!1},"prob-73":{id:"prob-73",title:"Remove Kth Node From End",difficulty:"Medium",category:"Linked Lists",completed:!1,filter:!1},"prob-74":{id:"prob-74",title:"Find Loop",difficulty:"Hard",category:"Linked Lists",completed:!1,filter:!1},"prob-75":{id:"prob-75",title:"Reverse Linked List",difficulty:"Hard",category:"Linked Lists",completed:!1,filter:!1},"prob-76":{id:"prob-76",title:"Merge Linked Lists",difficulty:"Hard",category:"Linked Lists",completed:!1,filter:!1},"prob-77":{id:"prob-77",title:"Shift Linked List",difficulty:"Hard",category:"Linked Lists",completed:!1,filter:!1},"prob-78":{id:"prob-78",title:"LRU Cache",difficulty:"Very Hard",category:"Linked Lists",completed:!1,filter:!1},"prob-79":{id:"prob-79",title:"Rearrange Linked LIst",difficulty:"Very Hard",category:"Linked Lists",completed:!1,filter:!1},"prob-80":{id:"prob-80",title:"Permutations",difficulty:"Medium",category:"Recursion",completed:!1,filter:!1},"prob-81":{id:"prob-81",title:"Powerset",difficulty:"Medium",category:"Recursion",completed:!1,filter:!1},"prob-82":{id:"prob-82",title:"Lowest Common Manager",difficulty:"Hard",category:"Recursion",completed:!1,filter:!1},"prob-83":{id:"prob-83",title:"Interweaving Strings",difficulty:"Hard",category:"Recursion",completed:!1,filter:!1},"prob-84":{id:"prob-84",title:"Number Of Binary Tree Topologies",difficulty:"Very Hard",category:"Recursion",completed:!1,filter:!1},"prob-85":{id:"prob-85",title:"Search In Sorted Matrix",difficulty:"Medium",category:"Searching",completed:!1,filter:!1},"prob-86":{id:"prob-86",title:"Shifted Binary Search",difficulty:"Hard",category:"Searching",completed:!1,filter:!1},"prob-87":{id:"prob-87",title:"Search For Range",difficulty:"Hard",category:"Searching",completed:!1,filter:!1},"prob-88":{id:"prob-88",title:"Quickselect",difficulty:"Hard",category:"Searching",completed:!1,filter:!1},"prob-89":{id:"prob-89",title:"Quick Sort",difficulty:"Hard",category:"Sorting",completed:!1,filter:!1},"prob-90":{id:"prob-90",title:"Heap Sort",difficulty:"Hard",category:"Sorting",completed:!1,filter:!1},"prob-91":{id:"prob-91",title:"Merge Sort",difficulty:"Very Hard",category:"Sorting",completed:!1,filter:!1},"prob-92":{id:"prob-92",title:"Min Max Stack Construction",difficulty:"Medium",category:"Sorting",completed:!1,filter:!1},"prob-93":{id:"prob-93",title:"Balanced Brackets",difficulty:"Medium",category:"Sorting",completed:!1,filter:!1},"prob-94":{id:"prob-94",title:"Shorten Path",difficulty:"Very Hard",category:"Sorting",completed:!1,filter:!1},"prob-95":{id:"prob-95",title:"Longest Palindromic Substring",difficulty:"Medium",category:"Strings",completed:!1,filter:!1},"prob-96":{id:"prob-96",title:"Group Anagrams",difficulty:"Medium",category:"Strings",completed:!1,filter:!1},"prob-97":{id:"prob-97",title:"Longest Substring Without Duplication",difficulty:"Hard",category:"Strings",completed:!1,filter:!1},"prob-98":{id:"prob-98",title:"Underscorify Substring",difficulty:"Hard",category:"Strings",completed:!1,filter:!1},"prob-99":{id:"prob-99",title:"Pattern Matcher",difficulty:"Hard",category:"Strings",completed:!1,filter:!1},"prob-100":{id:"prob-100",title:"Smallest Substring Container",difficulty:"Very Hard",category:"Strings",completed:!1,filter:!1},"prob-101":{id:"prob-101",title:"Suffix Trie Constructrion",difficulty:"Medium",category:"Tries",completed:!1,filter:!1},"prob-102":{id:"prob-102",title:"Multi String Search",difficulty:"Hard",category:"Tries",completed:!1,filter:!1}},columns:{"column-1":{id:"column-1",title:"Easy",taskIds:["prob-1","prob-3","prob-4","prob-5","prob-7","prob-8","prob-9","prob-10","prob-11","prob-12","prob-13","prob-14","prob-15","prob-16","prob-17"]},"column-2":{id:"column-2",title:"Medium",taskIds:["prob-2","prob-18","prob-19","prob-20","prob-21","prob-22","prob-23","prob-32","prob-33","prob-34","prob-35","prob-42","prob-43","prob-44","prob-45","prob-58","prob-62","prob-63","prob-64","prob-65","prob-69","prob-72","prob-73","prob-80","prob-81","prob-85","prob-92","prob-93","prob-95","prob-96","prob-101"]},"column-3":{id:"column-3",title:"Hard",taskIds:["prob-6","prob-24","prob-25","prob-26","prob-27","prob-28","prob-37","prob-46","prob-47","prob-48","prob-49","prob-50","prob-51","prob-52","prob-60","prob-66","prob-70","prob-74","prob-75","prob-76","prob-77","prob-82","prob-83","prob-86","prob-87","prob-88","prob-89","prob-90","prob-97","prob-98","prob-99","prob-102"]},"column-4":{id:"column-4",title:"Very Hard",taskIds:["prob-29","prob-30","prob-36","prob-38","prob-39","prob-40","prob-41","prob-53","prob-54","prob-55","prob-56","prob-57","prob-61","prob-67","prob-68","prob-71","prob-78","prob-79","prob-84","prob-91","prob-94","prob-100"]}},columnOrder:["column-1","column-2","column-3","column-4"],columnsCategoryList:{"column-cat-1":{id:"column-cat-1",title:"Binary Trees",taskIds:["prob-1","prob-8","prob-2","prob-37","prob-38","prob-39","prob-40","prob-41"]},"column-cat-2":{id:"column-cat-2",title:"Arrays",taskIds:["prob-3","prob-4","prob-18","prob-19","prob-20","prob-21","prob-22","prob-23","prob-24","prob-25","prob-26","prob-27","prob-28","prob-29","prob-30"]},"column-cat-3":{id:"column-cat-3",title:"Binary Search Trees",taskIds:["prob-5","prob-32","prob-33","prob-34","prob-35","prob-6","prob-36"]},"column-cat-4":{id:"column-cat-4",title:"Searching",taskIds:["prob-9","prob-12","prob-85","prob-86","prob-87","prob-88"]},"column-cat-5":{id:"column-cat-5",title:"Recursion",taskIds:["prob-10","prob-11","prob-80","prob-81","prob-82","prob-83","prob-84"]},"column-cat-6":{id:"column-cat-6",title:"Sorting",taskIds:["prob-13","prob-14","prob-15","prob-89","prob-90","prob-91"]},"column-cat-7":{id:"column-cat-7",title:"Graphs",taskIds:["prob-7","prob-62","prob-63","prob-64","prob-65","prob-66","prob-67","prob-68"]},"column-cat-8":{id:"column-cat-8",title:"Strings",taskIds:["prob-16","prob-17","prob-95","prob-96","prob-97","prob-98","prob-99","prob-100"]},"column-cat-9":{id:"column-cat-9",title:"Dynamic Programming",taskIds:["prob-42","prob-43","prob-44","prob-45","prob-46","prob-47","prob-48","prob-49","prob-50","prob-51","prob-52","prob-53","prob-54","prob-55","prob-56","prob-57"]},"column-cat-10":{id:"column-cat-10",title:"Famous Algorithms",taskIds:["prob-58","prob-60","prob-61"]},"column-cat-11":{id:"column-cat-11",title:"Heaps",taskIds:["prob-69","prob-70","prob-71"]},"column-cat-12":{id:"column-cat-12",title:"Linked Lists",taskIds:["prob-72","prob-73","prob-74","prob-75","prob-76","prob-77","prob-78","prob-79"]},"column-cat-13":{id:"column-cat-13",title:"Stacks",taskIds:["prob-92","prob-93","prob-94"]},"column-cat-14":{id:"column-cat-14",title:"Tries",taskIds:["prob-101","prob-102"]}},columnCategoryOrder:["column-cat-1","column-cat-2","column-cat-3","column-cat-4","column-cat-5","column-cat-6","column-cat-7","column-cat-8","column-cat-9","column-cat-10","column-cat-11","column-cat-12","column-cat-13","column-cat-14"],sorting:!1},I=r(6),M=r(7);function D(){var e=Object(C.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  margin-bottom: 8px;\n  background-color: ",';\n\n  width:280px;\n  height: 50px;\n  display: flex;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  display:grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas: \n  "name name name name name name trash color";\n']);return D=function(){return e},e}var L=I.a.div(D(),(function(e){return e.isDragDisabled?"lightgrey":e.isDragging?"lightgreen":"white"})),T=function(e){Object(v.a)(r,e);var t=Object(k.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(S.a)(r,[{key:"render",value:function(){var e,t,r=this;return"Easy"===this.props.task.difficulty?e="#34ed43":"Medium"===this.props.task.difficulty?e="#51adef":"Hard"===this.props.task.difficulty?e="#ef5151":"Very Hard"===this.props.task.difficulty&&(e="#383535"),t=!0===this.props.task.filter?"line-through":"",Object(o.jsx)(M.b,{draggableId:this.props.task.id,index:this.props.index,children:function(i,a){return Object(o.jsxs)(L,Object(O.a)(Object(O.a)(Object(O.a)({},i.draggableProps),i.dragHandleProps),{},{ref:i.innerRef,isDragging:a.isDragging,children:[Object(o.jsx)("h4",{className:"name",style:{textDecoration:t},children:r.props.task.title}),Object(o.jsx)("span",{className:"trash",onClick:function(){return r.props.handleDeleteProblem(r.props.task.id)},children:Object(o.jsx)("i",{className:"fas fa-trash"})}),Object(o.jsx)("span",{className:"grabber-div",style:{backgroundColor:e}})]}))}})}}]),r}(a.a.Component);function N(){var e=Object(C.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 100px;\n"]);return N=function(){return e},e}function P(){var e=Object(C.a)(["\n  padding: 8px;\n  background-color:midnightblue;\n  width:100%;\n  color:white;\n"]);return P=function(){return e},e}function A(){var e=Object(C.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  background-color: white;\n  border-radius: 2px;\n  width: 340px;\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n"]);return A=function(){return e},e}var w=I.a.div(A()),E=I.a.h3(P()),B=I.a.div(N(),(function(e){return e.isDraggingOver?"skyblue":"inherit"})),R=function(e){Object(v.a)(r,e);var t=Object(k.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(S.a)(r,[{key:"render",value:function(){var e=this;return Object(o.jsx)(M.b,{draggableId:this.props.column.id,index:this.props.index,children:function(t){return Object(o.jsxs)(w,Object(O.a)(Object(O.a)({},t.draggableProps),{},{ref:t.innerRef,children:[Object(o.jsx)(E,Object(O.a)(Object(O.a)({},t.dragHandleProps),{},{children:e.props.column.title})),Object(o.jsx)(M.c,{droppableId:e.props.column.id,type:"task",children:function(t,r){return Object(o.jsxs)(B,Object(O.a)(Object(O.a)({ref:t.innerRef},t.droppableProps),{},{isDraggingOver:r.isDraggingOver,children:[e.props.tasks.map((function(t,r){return Object(o.jsx)(T,{task:t,index:r,handleDeleteProblem:e.props.handleDeleteProblem},t.id)})),t.placeholder]}))}})]}))}})}}]),r}(a.a.Component);function V(){var e=Object(C.a)(["\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return V=function(){return e},e}function F(){var e=Object(C.a)(["\n  display: inline-block;\n  color: white;\n  background: ",";\n  padding: 0.4rem 1.3rem;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  margin: 1rem 0.5rem;\n  transition: opacity 0.2s ease-in;\n  outline: none;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return F=function(){return e},e}var G=I.a.button(F(),(function(e){return e.inputColor||"lightgrey"})),J=I.a.div(V()),_=function(e){return Object(o.jsxs)(J,{children:[Object(o.jsx)(G,{inputColor:"#0B2E3B",onClick:e.handleSetCategoryFalse,children:"Sort By Difficutly"}),Object(o.jsx)(G,{inputColor:"#dc3545",onClick:e.handleSetCategoryTrue,children:"Sort By Category"}),Object(o.jsx)(G,{inputColor:"#28a745",onClick:e.handleSetSchedule,children:"Set Your Schedule"})]})};function K(){var e=Object(C.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: #fff;\n  width:280px;\n  ","\n"]);return K=function(){return e},e}var q=I.a.div(K(),""),U=function(e){Object(v.a)(r,e);var t=Object(k.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(S.a)(r,[{key:"render",value:function(){console.log(this.props.title);var e=this.props.title,t=this.props.data[e].title;return console.log(t),Object(o.jsx)(M.b,{draggableId:this.props.title,index:this.props.index,children:function(e){return Object(o.jsx)(q,Object(O.a)(Object(O.a)(Object(O.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:t}))}})}}]),r}(a.a.Component);function W(){var e=Object(C.a)(["\n  padding: 8px;\n"]);return W=function(){return e},e}function z(){var e=Object(C.a)(["\n  padding: 8px;\n"]);return z=function(){return e},e}function Y(){var e=Object(C.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n"]);return Y=function(){return e},e}var Q=I.a.div(Y()),Z=I.a.h3(z()),X=I.a.div(W()),$=function(e){Object(v.a)(r,e);var t=Object(k.a)(r);function r(){return Object(x.a)(this,r),t.apply(this,arguments)}return Object(S.a)(r,[{key:"render",value:function(){var e=this;return console.log(this.props.data),Object(o.jsxs)(Q,{children:[Object(o.jsx)(Z,{children:"Sort by Category"}),Object(o.jsx)(M.c,{droppableId:"category-sort",children:function(t){return Object(o.jsxs)(X,Object(O.a)(Object(O.a)({ref:t.innerRef},t.droppableProps),{},{children:[e.props.columnList.map((function(t,r){return Object(o.jsx)(U,{title:t,index:r,data:e.props.data},t)})),t.placeholder]}))}})]})}}]),r}(a.a.Component);function ee(){var e=Object(C.a)(["\n  align-self:start;\n  justify-content: center;\n  position: -webkit-sticky; /* Safari */\n  position:sticky;\n  top:0;\n  left:0;\n  height: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin: 10px;\n  background: rgb(63, 94, 251);\n  background: radial-gradient(\n    circle,\n    rgba(63, 94, 251, 1) 0%,\n    rgba(253, 220, 29, 1) 1%,\n    rgba(131, 58, 180, 1) 43%,\n    rgba(47, 173, 200, 1) 97%,\n    rgba(253, 220, 29, 1) 99%\n  );\n"]);return ee=function(){return e},e}var te=I.a.div(ee()),re=function(e){Object(v.a)(r,e);var t=Object(k.a)(r);function r(){var e;Object(x.a)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onDragEnd=function(t){var r=t.destination,o=t.source,i=t.draggableId;if(r&&(r.droppableId!==o.droppableId||r.index!==o.index)){o.droppableId;var a=Array.from(e.props.columnList);a.splice(o.index,1),a.splice(r.index,0,i),e.props.setCategoryColumnOrder(a)}},e}return Object(S.a)(r,[{key:"render",value:function(){return Object(o.jsx)(te,{children:Object(o.jsx)(M.a,{onDragEnd:this.onDragEnd,children:Object(o.jsx)($,{columnList:this.props.columnList,data:this.props.data})})})}}]),r}(a.a.Component);function oe(){var e=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; \n"]);return oe=function(){return e},e}function ie(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1800px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  padding: 10px;\n  margin: 10px;\n  background: rgb(63, 94, 251);\n  background: radial-gradient(\n    circle,\n    rgba(63, 94, 251, 1) 0%,\n    rgba(253, 220, 29, 1) 1%,\n    rgba(131, 58, 180, 1) 43%,\n    rgba(47, 173, 200, 1) 97%,\n    rgba(253, 220, 29, 1) 99%\n  );\n"]);return ie=function(){return e},e}function ae(){var e=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1800px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  padding: 10px;\n  margin: 10px;\n  background: rgb(63, 94, 251);\n  background: radial-gradient(\n    circle,\n    rgba(63, 94, 251, 1) 0%,\n    rgba(253, 220, 29, 1) 1%,\n    rgba(131, 58, 180, 1) 43%,\n    rgba(47, 173, 200, 1) 97%,\n    rgba(253, 220, 29, 1) 99%\n  );\n"]);return ae=function(){return e},e}var ce=I.a.div(ae()),ne=I.a.div(ie()),le=I.a.div(oe()),de=function(e){Object(v.a)(r,e);var t=Object(k.a)(r);function r(){var e;Object(x.a)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state=H,e.handleSetCategoryFalse=function(){if(!1!==e.state.sorting){var t=Object(O.a)(Object(O.a)({},e.state),{},{sorting:!1});e.setState(t)}},e.handleSetCategoryTrue=function(){if(!0!==e.state.sorting){var t=Object(O.a)(Object(O.a)({},e.state),{},{sorting:!0});e.setState(t)}},e.handleSetSchedule=function(){var t=[];!1===e.state.sorting?e.state.columnOrder.map((function(r){e.state.columns[r].taskIds.map((function(r){!0!==e.state.tasks[r].filter&&t.push(e.state.tasks[r])}))})):e.state.columnCategoryOrder.map((function(r){e.state.columnsCategoryList[r].taskIds.map((function(r){t.push(e.state.tasks[r])}))})),e.props.handleSetSchedule(t)},e.handleDeleteProblem=function(t){var r=Object(O.a)(Object(O.a)({},e.state),{},{tasks:Object(O.a)(Object(O.a)({},e.state.tasks),{},Object(j.a)({},t,Object(O.a)(Object(O.a)({},e.state.tasks[t]),{},{filter:!e.state.tasks[t].filter})))});e.setState(r)},e.setCategoryColumnOrder=function(t){var r=Object(O.a)(Object(O.a)({},e.state),{},{columnCategoryOrder:t});e.setState(r)},e.onDragEnd=function(t){var r,o="columnOrder",i="columns";!0===e.state.sorting&&(o="columnCategoryOrder",i="columnsCategoryList");var a=t.destination,c=t.source,n=t.draggableId,l=t.type;if(a&&(a.droppableId!==c.droppableId||a.index!==c.index))if("column"!==l){var d=e.state[i][c.droppableId],s=e.state[i][a.droppableId];if(d!==s){var p=Array.from(d.taskIds);p.splice(c.index,1);var b=Object(O.a)(Object(O.a)({},d),{},{taskIds:p}),u=Array.from(s.taskIds);u.splice(a.index,0,n);var f=Object(O.a)(Object(O.a)({},s),{},{taskIds:u}),m=Object(O.a)(Object(O.a)({},e.state),{},{columns:Object(O.a)(Object(O.a)({},e.state.columns),{},(r={},Object(j.a)(r,b.id,b),Object(j.a)(r,f.id,f),r))});e.setState(m)}else{var g=Array.from(d.taskIds);g.splice(c.index,1),g.splice(a.index,0,n);var y=Object(O.a)(Object(O.a)({},d),{},{taskIds:g}),h=Object(O.a)(Object(O.a)({},e.state),{},Object(j.a)({},i,Object(O.a)(Object(O.a)({},e.state[i]),{},Object(j.a)({},y.id,y))));e.setState(h)}}else{var x=Array.from(e.state[o]);x.splice(c.index,1),x.splice(a.index,0,n);var S=Object(O.a)(Object(O.a)({},e.state),{},Object(j.a)({},o,x));e.setState(S)}},e}return Object(S.a)(r,[{key:"render",value:function(){var e=this;return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{handleSetCategoryFalse:this.handleSetCategoryFalse,handleSetCategoryTrue:this.handleSetCategoryTrue,handleSetSchedule:this.handleSetSchedule}),!1===this.state.sorting?Object(o.jsx)(M.a,{onDragEnd:this.onDragEnd,children:Object(o.jsx)(M.c,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(t){return Object(o.jsxs)(ce,Object(O.a)(Object(O.a)({},t.droppableProps),{},{ref:t.innerRef,children:[e.state.columnOrder.map((function(t,r){var i=e.state.columns[t],a=i.taskIds.map((function(t){return e.state.tasks[t]}));return Object(o.jsx)(R,{column:i,tasks:a,index:r,handleDeleteProblem:e.handleDeleteProblem},i.id)})),t.placeholder]}))}})}):Object(o.jsxs)(le,{children:[Object(o.jsx)(re,{columnList:this.state.columnCategoryOrder,data:this.state.columnsCategoryList,setCategoryColumnOrder:this.setCategoryColumnOrder}),Object(o.jsx)(M.a,{onDragEnd:this.onDragEnd,children:Object(o.jsx)(M.c,{droppableId:"sort-columns",direction:"vertical",type:"column",children:function(t){return Object(o.jsxs)(ne,Object(O.a)(Object(O.a)({},t.droppableProps),{},{ref:t.innerRef,children:[e.state.columnCategoryOrder.map((function(t,r){var i=e.state.columnsCategoryList[t],a=i.taskIds.map((function(t){return e.state.tasks[t]}));return Object(o.jsx)(R,{column:i,tasks:a,index:r},i.id)})),t.placeholder]}))}})})]})]})}}]),r}(a.a.Component);var se=function(e){var t=Object(i.useContext)(p),r=t.setInitialState,a=t.scheduleset,c=Object(i.useState)(JSON.parse(localStorage.getItem("algoSchedule"))||[]),n=Object(l.a)(c,2),u=n[0],f=(n[1],Object(i.useState)(JSON.parse(localStorage.getItem("algoCompleted"))||0)),m=Object(l.a)(f,2),y=m[0];m[1],Object(i.useEffect)((function(){r(u,y)}),[]);var j=function(e){t.saveSchedule(e),localStorage.setItem("algoSchedule",JSON.stringify(e))};return Object(o.jsx)(d.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.b,{exact:!0,path:"/algoschedule",component:function(){return Object(o.jsx)(de,{handleSetSchedule:j})},children:0!==u.length||!0===a?Object(o.jsx)(s.a,{to:"/algoschedule/schedule"}):null}),Object(o.jsx)(s.b,{exact:!0,path:"/algoschedule/schedule",component:g}),Object(o.jsx)(s.b,{exact:!0,path:"/algoschedule/about",component:h})]})})]})})},pe=(r(45),"SAVE_SCHEDULE"),be="SET_COMPLETED",ue="INCREASE_COUNT",fe="GET_LOCALSTORAGE",me="RESET_SCHEDULE",ge=function(e,t){switch(t.type){case fe:return Object(O.a)(Object(O.a)({},e),{},{schedule:t.payload.value,complete:t.payload.num||0,scheduleset:!0});case pe:return Object(O.a)(Object(O.a)({},e),{},{schedule:t.payload,scheduleset:!0});case be:return Object(O.a)(Object(O.a)({},e),{},{schedule:t.payload});case ue:var r=e.complete+1;return localStorage.setItem("algoCompleted",JSON.stringify(r)),Object(O.a)(Object(O.a)({},e),{},{schedule:t.payload,complete:e.complete+1});case me:return Object(O.a)(Object(O.a)({},e),{},{schedule:[],complete:0,scheduleset:!1});default:return e}},ye=function(e){var t=Object(i.useReducer)(ge,{schedule:null,loading:!1,complete:0,scheduleset:!1}),r=Object(l.a)(t,2),a=r[0],c=r[1],n=function(){c({type:ue})},d=function(e){localStorage.setItem("algoSchedule",JSON.stringify(e))};return Object(o.jsx)(p.Provider,{value:{schedule:a.schedule,loading:a.loading,complete:a.complete,scheduleset:a.scheduleset,saveSchedule:function(e){c({type:pe,payload:e})},setCompleted:function(e){n(),c({type:be,payload:e}),d(e)},saveToLocalStorage:d,increaseCount:n,setInitialState:function(e,t){0!==e.length&&c({type:fe,payload:{value:e,num:t}})},resetSchedule:function(){localStorage.removeItem("algoSchedule"),localStorage.removeItem("algoCompleted"),c({type:me})}},children:e.children})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(ye,{children:Object(o.jsx)(se,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.b11f5d33.chunk.js.map