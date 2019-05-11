import React, { PureComponent } from 'react'
import './styles.css'

export class ContactPopup extends PureComponent {
    state = {
        showPopup: false,
    }

    _closePopup = () => this.setState({ showPopup: false })

    render() {
        const { formStatus } = this.props
        const { showPopup } = this.state
        // var firstName = props.formData.name.split(' ')[0]
        // var header = props.didRecieve ? 'Thanks!' : 'Oh No!'
        // var message = props.didRecieve ?
        //   `${firstName}, thanks for getting in touch.  I'll get back to you as soon as possible!` :
        //   'Something went wrong while sending your message, please try again.'

        return (
            <div
                className={
                    showPopup ? 'contact-popup-overlay' : 'contact-popup-overlay hidden no-opacity'
                }
            >
                <div className={showPopup ? 'contact-popup' : 'contact-popup hidden no-opacity'}>
                    <i className="fas fa-times popup-close" onClick={this._closePopup} />
                    <h1>
                        {formStatus.header}
                    </h1>
                    <p>
                        {formStatus.message}
                    </p>
                    <embed src="/images/earth-comm.svg" alt="earth" />
                </div>
            </div>
        )
    }
}
