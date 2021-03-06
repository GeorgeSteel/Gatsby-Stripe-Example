import React from 'react'

import Price from './Price'

export default function CartItem({ product }) {
  return (
    <div className="p-6 border-b flex">
      <div className="flex-1">
        <p className="font-bold uppercase">{product.name}</p>
        <Price {...product} className="text-blue-300 mt-1" />
      </div>
      <div>
        Quantity
        <p className="px-4">{product.quantity}</p>
      </div>
    </div>
  )
}
