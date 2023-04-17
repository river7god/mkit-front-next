
export default function Layout(props) {
  return (
    <div className="flex p-40 bg-zinc-600 min-h-screen flex-col items-center justify-between font-sans">
      {props.children}
    </div>
  )
}