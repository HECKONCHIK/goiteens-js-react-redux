import { statusFilters } from './constants';

const tasksInitialState ={
    tasks: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
    filters: {
        status: statusFilters.all,
    },
  }

const tasksReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
        case 'tasks/addTask':
            return [...state, action.payload];
        case 'tasks/deleteTask':
            return state.filter((task) => {return task.id !== action.payload });
        case 'tasks/toggleCompleted':
            return state.map((task) => {
                if (task.id === action.payload) {
                    return {...task, completed: !task.completed}
                } return task
            })
        default:
            break;
    }
}