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

Each problem gets:

- a TypeScript version in `typescript/<topic>/`, with the problem statement, my approach, the solution and its time and space complexity, plus a matching `<name>.test.ts`
- a Go version in `go/<topic>/`, same contents, plus a matching `<name>_test.go`

## Progress

- [ ] Big O Notation
- [ ] Analyzing Performance of Arrays & Objects
- [ ] Problem-Solving Approach & Patterns (frequency counter, multiple pointers, sliding window, divide & conquer)
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
typescript/          # TypeScript solutions, one folder per topic
  problem-solving-patterns/
  recursion/
  searching/
  sorting/
  singly-linked-list/
  ...
go/                  # the same topics as Go packages
  problemsolvingpatterns/
  recursion/
  searching/
  sorting/
  singlylinkedlist/
  ...
```

## Running the tests

TypeScript (Node 22.18 or newer, no install step: Node runs the .ts files directly):

```
cd typescript
node --test
```

Go (from the go/ module, once the first solution is added):

```
cd go
go test ./...
```
