import { useReducer } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import { initialState, messengerReducer } from "./messengerReducer";

const Messenger = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const contact = contacts.find((c) => c.id === state.selectedId);
  const message = state.message;
  console.log(state);
  

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat dispatch={dispatch} contact={contact} message={message} />
    </div>
  );
};

export default Messenger;

const contacts = [
  { id: 0, name: "Tylor", email: "taylor@gmail.com" },
  { id: 1, name: "Alice", email: "alice@gmail.com" },
  { id: 2, name: "Bob", email: "bob@gmail.com" },
];
