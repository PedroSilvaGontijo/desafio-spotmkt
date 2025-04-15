export function Card({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm border border-orange-300">
        {children}
      </div>
    )
  }
  