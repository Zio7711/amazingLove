import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('API_CALL_BEGAN');
export const apiCallFailed = createAction('API_CALL_FAILED');
export const apiCallSucceeded = createAction('API_CALL_SUCCEEDED');
