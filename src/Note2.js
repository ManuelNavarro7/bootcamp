export const Note2 = ({ userId, id, title, body }) => {
  return (
    <ul key={id} style={{ fontWeight: 300, textAlign: "center" }}>
      <li>
        <p>
          <strong>{body}</strong>
        </p>
      </li>
    </ul>
  );
};
