import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './api/sagas/sagas';
import todosReducer from './api/features/todosSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;