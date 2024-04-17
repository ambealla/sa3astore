import React from 'react';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';




export default function ModalContact(props) {
  return (
    <div className='test'>
<Container>
  
 
    <Modal.Dialog
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className='p-5'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Demander votre Watch Maintenat 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal text-center d-block p-5">
        <form  action="" method="get" onSubmit="return ConfMensage();">
          <div class="input-group mb-3">
            <label class="input-group-prepend mx-2"  id="nome inputGroup-sizing-default">Nome</label>
            <input type="text" class="form-control" aria-describedby="inputGroup-sizing-default" required/>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-prepend mx-2"  id="inputGroup-sizing-default">E-mail</label>
            <input type="email" class="form-control" aria-describedby="inputGroup-sizing-default" required/>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-prepend mx-2"  id="inputGroup-sizing-default">Telefone</label>
            <input type="text" class="form-control" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-prepend mx-2"  id="inputGroup-sizing-default">Mensagem</label>
            <textarea type="text" class="form-control" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <input className="btn btn-success mx-2" type="submit" value="Envoyer" />
        </form>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <p>hhhahhahh</p>
      </Modal.Footer>
    </Modal.Dialog>
     </Container>  </div>
    

  );
}
