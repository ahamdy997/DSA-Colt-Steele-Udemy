# DSA Practice: Colt Steele Masterclass

I'm working through **JavaScript Algorithms and Data Structures Masterclass** by Colt Steele (Udemy), and this repo is where I'm keeping my solutions and notes as I go. I just started, so the folders are empty for now and will fill up topic by topic.

I'm a software engineer with over 3 years of professional experience, mostly frontend (React, Next.js, TypeScript and Vue.js), now expanding into backend and full-stack work. This repo is part of my interview preparation and backend fundamentals.

I solve each problem in **TypeScript** and **Go**: TypeScript because it's my daily stack, Go because I'm picking it up for backend work.

## How I'm working through the course

- I solve each exercise myself before watching the course walkthrough.
- After each problem, I compare with the course solution and note what I changed and why in a follow-up commit.
- I get review feedback along the way (including from my AI assistant) and apply it in later commits, so the history shows how each solution evolved.
- One commit per problem, with time and space complexity written in the file header.

## What a solution looks like

Each problem gets its own folder, named after the pattern and the problem:

- a TypeScript version in `src/typescript/<Pattern><Problem>/`: a README.md with the problem statement, an index.ts with my approach, the solution and its time and space complexity, and an index.test.ts with the tests
- a Go version in `go/`, following the same folder-per-problem layout

## Progress

- [x] Big O Notation
- [x] Analyzing Performance of Arrays & Objects
- [x] Problem-Solving Approach & Patterns (frequency counter, multiple pointers, sliding window, divide & conquer)
- [ ] Recursion (core problems + bonus challenging set)
- [ ] Searching Algorithms (linear, binary, naive string search)
- [ ] Sorting (bubble, selection, insertion, merge, quick, radix)
- [ ] Singly & Doubly Linked Lists
- [ ] Stacks & Queues
- [ ] Binary Search Trees & Tree Traversal
- [ ] Binary Heaps & Priority Queues
- [ ] Hash Tables
- [ ] Graphs & Graph Traversal
- [ ] Dijkstra's Algorithm
- [ ] Dynamic Programming

## Structure

```
src/
  typescript/
    FrequencyCounterValidAnagram/
      README.md        # problem statement
      index.ts         # solution
      index.test.ts    # tests
    MultiplePointersCountUniqueValues/
      ...
go/                    # Go versions, same folder-per-problem layout (not started yet)
```

## Running the tests

TypeScript (Jest with ts-jest):

```
npm install
npm test
```

Go (from the go/ module, once the first solution is added):

```
cd go
go test ./...
```
