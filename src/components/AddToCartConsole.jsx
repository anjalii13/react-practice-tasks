import React from 'react'

const AddToCartConsole = () => {
    const products=[
        {id:1,name:'Product 1',price:10},
        {id:2,name:'Product 2',price:20},
        {id:3,name:'Product 3',price:30},
    ]
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button className="btn btn-primary" onClick={() => console.log(`Added ${product.name} $${product.price} to cart`)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default AddToCartConsole
