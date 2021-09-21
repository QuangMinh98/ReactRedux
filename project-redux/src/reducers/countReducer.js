const initialState = {
    counter: 0,
    todoList: [],
    selectedItem: {
        task: "Watching Anime"
    }
}

export default function Counter(state = initialState, action){
    switch(action.type){
        case 'Increment':
            return {counter: state.counter + 1}
        case 'Descrement':
            return {counter: state.counter - 1}
        case 'CreateTask':
            let tasks = [
                action.todo,
                ...state.todoList
            ]
            return {
                ...state,
                todoList: tasks
            }
        case 'DeleteTask':
            let deletedList = state.todoList.filter(task => task.id != action.task_id)
            return {
                ...state,
                todoList: deletedList
            }
        case 'SelectItem':
            return {
                ...state,
                selectedItem: action.selectedItem
            }
        default:
            return state
    }
    
}