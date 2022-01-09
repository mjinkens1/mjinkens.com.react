import { reducer as formReducer } from 'redux-form';

const form = formReducer.plugin({
    contactSubmit: (state, action) => {
        switch (action.type) {
            case 'SUBMIT_SUCCESS':
                return undefined;

            default:
                return state;
        }
    },
});

export default form;
