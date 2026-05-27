const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">

      <div className="relative flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-zinc-700 border-t-white">

        <div className="absolute h-2 w-2 rounded-full bg-white top-2" />
        <div className="absolute h-2 w-2 rounded-full bg-white bottom-2" />
        <div className="absolute h-2 w-2 rounded-full bg-white left-2" />
        <div className="absolute h-2 w-2 rounded-full bg-white right-2" />

      </div>

    </div>
  )
}

export default Loader