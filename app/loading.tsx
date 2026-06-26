export default function Loading() {
  return (
    <div className="route-loader" role="status" aria-live="polite">
      <div className="route-loader__mark" />
      <p>Loading HSE portfolio</p>
    </div>
  );
}
