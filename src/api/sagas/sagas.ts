import { takeLatest, call, put, delay} from 'redux-saga/effects';
import { fetchTodos, deleteTodo,Todo, updateTodo } from '../todos';
import { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure, deleteTodoItem, updateTodoItem, deleteToDoFailure, updateTodoFailure} from '../features/todosSlice';

export function* handleFetchTodos() {
  try {
    console.log("start handle saga")
    yield delay(1000);
    const todos: Todo[] = yield call(fetchTodos);
    yield put(fetchTodosSuccess(todos));
  } catch (error: any) {
    yield put(fetchTodosFailure(error.message));
  }
}

export function* handleDeleteTodo(action:any) {
  try {
    const {payload} = action
    console.log("start handle delete saga");
    yield call(deleteTodo, payload);
  } catch (error: any) {
    yield put(deleteToDoFailure(error.message))
  }
}

export function* handleUpdateTodo(action:any) {
  try {
    const {payload} = action
    console.log("start handle update saga");
    yield call(updateTodo, payload);
  } catch (error: any) {
    yield put(updateTodoFailure(error.message))
  }
}

export default function* rootSaga() {
  console.log("start saga")
  yield takeLatest(fetchTodosStart.type, handleFetchTodos);
  yield takeLatest(deleteTodoItem.type, handleDeleteTodo);
  yield takeLatest(updateTodoItem.type, handleUpdateTodo);
}


