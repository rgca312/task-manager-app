# Task Manager App - Planning Documentation

## User Stories

1. **As a busy student**, I want to add tasks to my todo list so that I can keep track of all my assignments and deadlines in one place.

2. **As a user**, I want to mark tasks as completed so I can see my progress and feel accomplished when I finish tasks.

3. **As an organized person**, I want to filter my tasks by completion status (all, completed, incomplete) so I can focus on what needs to be done without distraction.

4. **As a user**, I want to delete tasks from my list so I can remove tasks that are no longer relevant or were added by mistake.

5. **As someone who wants to provide feedback**, I want to fill out a contact form so I can communicate with the app developers about issues or suggestions.

## State Tree

### App-Level State (Managed by TodosPage Component)
```javascript
{
  todos: [
    {
      id: 1234567890,
      text: "Complete project documentation",
      completed: false
    },
    {
      id: 1234567891,
      text: "Push code to GitHub",
      completed: true
    }
  ],
  filter: "all" // Options: "all", "completed", "incomplete"
}
```

### Contact Form State (Local Component State)
```javascript
{
  firstName: "",
  lastName: "",
  email: "",
  comments: ""
}
```

## Component Structure

### Container Components (Smart Components - Manage State)
1. **App** - Main component, handles routing
2. **TodosPage** - Manages todo list state, handles CRUD operations
3. **ContactPage** - Manages contact form state

### Presentational Components (Dumb Components - Display Only)
1. **NavBar** - Displays navigation links

## Component Hierarchy
```
App
├── NavBar
├── TodosPage
│   ├── Add Todo Form
│   ├── Filter Buttons
│   └── Todo List
│       └── Todo Items (mapped)
└── ContactPage
    └── Contact Form
```