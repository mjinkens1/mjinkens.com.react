import { connect } from 'react-redux';
import { Contact as ContactComponent } from '../components/contact/Contact';
import { closePopup, contactSubmit } from '../modules/contact/actions';

const mapStateToProps = (state) => ({
    didRecieve: state.contactSubmit.didRecieve,
    didSubmit: state.contactSubmit.didSubmit,
    formData: state.contactSubmit.formData,
    formStatus: state.contactSubmit.formStatus,
    showPopup: state.contactSubmit.showPopup,
});

const mapDispatchToProps = {
    closePopup,
    contactSubmit,
};

export const Contact = connect(mapStateToProps, mapDispatchToProps)(ContactComponent);
