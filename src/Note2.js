export const Note2 = ({ userId, id, title, body }) => {
  return (
    <ul key={userId} style={{ fontWeight: 300, textAlign: "center" }}>
      <li key={userId}>
        <p>
          <strong>{body}</strong>
        </p>
      </li>
    </ul>
  );
};
