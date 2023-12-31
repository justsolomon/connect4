import { configureStore } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

let middleware: Middleware[] = [];

// remove logger in production mode
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
