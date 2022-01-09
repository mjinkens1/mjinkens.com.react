const contactSubmit = (
    state = {
        formData: {
            name: '',
            email: '',
            message: '',
        },
        formStatus: {
            header: 'Sending...',
            message: '',
        },
        didRecieve: false,
        didSubmit: false,
        showPopup: false,
    },
    action,
) => {
    switch (action.type) {
        case 'SUBMIT_FORM':
            return {
                ...state,
                formData: action.formData,
                didSubmit: true,
                showPopup: true,
            };

        case 'SUBMIT_SUCCESS':
            const firstName = state.formData.name.split(' ')[0];

            return {
                ...state,
                didRecieve: true,
                didSubmit: false,
                formStatus: {
                    header: 'Thanks!',
                    message: `${firstName}, thanks for getting in touch.  I'll get back to you as soon as possible!`,
                },
            };

        case 'SUBMIT_FAILURE':
            return {
                ...state,
                didRecieve: false,
                didSubmit: false,
                formStatus: {
                    header: 'Oh No!',
                    message: 'Something went wrong while sending your message, please try again.',
                },
            };

        case 'CLOSE_POPUP':
            return {
                ...state,
                showPopup: false,
                formStatus: {
                    header: 'Sending...',
                    message: '',
                },
            };

        default:
            return state;
    }
};

export default contactSubmit;
