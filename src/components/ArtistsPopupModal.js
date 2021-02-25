import React from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class MyModal extends React.Component {

  confirmClick = (event, data) => {
    this.props.handleClose();
  }
  
  render() {
    return (
      <Modal 
        open={this.props.modalOpen}
        size='small'
        closeOnEscape={true}
        closeonrootnodeclick={'true'}
      >
        <Header icon='browser' content='Confirm?' />
        <Modal.Content>
          <h3>Please confirm:</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            type='button'
            icon='remove'
            labelPosition='right'
            onClick={this.props.handleClose}
            content='Close'
          />
          <Button 
            positive
            type='button'
            icon='checkmark'
            labelPosition='right'
            onClick={this.confirmClick}
            content='Confirm'
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

MyModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  valueIntoModal: PropTypes.string.isRequired
}

export default MyModal