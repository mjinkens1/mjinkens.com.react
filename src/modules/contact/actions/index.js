export const SUBMIT_FORM = 'SUBMIT_FORM'
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS'
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE'
export const CLOSE_POPUP = 'CLOSE_POPUP'

export const submitForm = formData => {
  return {
    type: SUBMIT_FORM,
    formData
  }
}

export const submitSuccess = json => {
  return {
    type: SUBMIT_SUCCESS,
    json
  }
}

export const submitFailure = error => {
  return {
    type: SUBMIT_FAILURE,
    error
  }
}

export const closePopup = () => {
  return {
    type: CLOSE_POPUP
  }
}

export const contactSubmit = formData => {
  return dispatch => {
    dispatch(submitForm(formData))
    return fetch('http://mjinkens.com/send-message', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
            .then(response => {
              if (response.status !== 200) throw response.status

              response.json()
            })
            .then(json => dispatch(submitSuccess(json)))
            .catch(error => dispatch(submitFailure(error)))
  }
}
