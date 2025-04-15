interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full bg-primary text-black py-2 border rounded hover:bg-orange-600 transition"
    >
      {children}
    </button>
  )
}

