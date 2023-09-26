export default function AuthPage({params}: { params: { method: string } }) {
  return (
    <main>
      <h1>Auth</h1>
      <p>current method:{params.method}</p>
    </main>
  )
}