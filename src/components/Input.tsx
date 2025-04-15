'use client'

import * as Label from '@radix-ui/react-label'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id: string
}

export function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="mb-4">
      {label && (
        <Label.Root
          htmlFor={id}
          className="block mb-1 font-medium text-neutral-800"
        >
          {label}
        </Label.Root>
      )}
      <input
        id={id}
        {...props}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary texy-black"
      />
    </div>
  )
}
