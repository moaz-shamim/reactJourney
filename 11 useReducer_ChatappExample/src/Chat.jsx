export default function Chat({ dispatch, contact, message }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
          return dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`Sendind ${message} to ${contact.email}`);
          dispatch({
            type: "sent_message",
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
