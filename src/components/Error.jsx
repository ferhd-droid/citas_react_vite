const Error = ({children}) => {
  return (
    <div className="mb-3 bg-red-700 text-white text-center p-3 uppercase font-bold rounded-md text-sm">
      {children}
    </div>
  )
}

export default Error