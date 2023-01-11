export function ErrorInput({ error }) {
  if (!error) return null;
  return <>{error && <div style={{ color: "red" }}> aldaa : {error}</div>}</>;
}
