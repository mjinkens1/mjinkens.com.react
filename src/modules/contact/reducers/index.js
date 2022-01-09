import { combineReducers } from 'redux';
import form from './formReducer';
import contactSubmit from './contactSubmit';

export default combineReducers({
    contactSubmit,
    form: form,
});
