// Validação do formulário de criação de notepad
// Carregamento do notepad no modal
// Editar notepad no modal
// Deletar notepad no modal

import "@fontsource/roboto";
import './App.css';
import { useState, useEffect } from 'react';
import { AppBar } from './components/AppBar/AppBar';
import { CreateNotepadForm } from './components/CreateNotepadForm/CreateNotepadForm';
import { NotepadList } from './components/NotepadList/NotepadList';
import { Modal } from './components/Modal/Modal';
import { Card } from './components/Card/Card';

const notepadsUrl = 'https://notepads.eduardovelho.com/notepads';

const initialNotepads = [];
const initialModalOpen = false;

export default function App() {
  const [createNotepadModalOpen, setCreateNotepadModalOpen] = useState(false);
  const [notepads, setNotepads] = useState(initialNotepads);

  async function loadNotepads() {
    const response = await fetch(notepadsUrl);
    const nextNotepads = await response.json();
    setNotepads(nextNotepads.notepads);
  }

  function onClickCreateNotepad() {
    setCreateNotepadModalOpen(true);
  }

  function onCreateNotepadSuccess() {
    loadNotepads();
    setCreateNotepadModalOpen(false);
  }

  function onCloseCreateNotepadModal() {
     setCreateNotepadModalOpen(false);
  }

  useEffect(() => {
    loadNotepads();
  }, []);
  
  return (
    <div>
      <AppBar onClickCreateNotepad={onClickCreateNotepad} />
      <Modal
        open={createNotepadModalOpen}
        onRequestClose={onCloseCreateNotepadModal}
      >
        <CreateNotepadForm
          onCreateNotepadSuccess={onCreateNotepadSuccess}
        />
      </Modal>
      <NotepadContainer notepads={notepads} />
    </div>
  );
}

function NotepadContainer({ notepads }) {
  const [modalOpen, setModalOpen] = useState(initialModalOpen);

  function onModalClose() {
    setModalOpen(false);
  }

  return (
    <div>
      <Modal open={modalOpen} onRequestClose={onModalClose}>
        <Card>Teste</Card>
      </Modal>
      <NotepadList
        notepads={notepads}
        onClickItem={notepad => {
          setModalOpen(true);
        }}
      />
    </div>
  );
}