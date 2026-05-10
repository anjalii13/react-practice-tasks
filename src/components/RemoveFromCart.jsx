import React from 'react'

const RemoveFromCart = () => {
    const[cart,setCart] = React.useState(['Laptop','Phone','Headphones'])
    const removeItem = (item) => {
        setCart(cart.filter(i => i !== item))
    }
  return (
    <div>
      <button onClick={() => removeItem('Laptop')} className="btn btn-danger">
        Remove Laptop
      </button>
      <button onClick={() => removeItem('Phone')} className="btn btn-danger">
        Remove Phone
      </button>
      <button onClick={() => removeItem('Headphones')} className="btn btn-danger">
        Remove Headphones
      </button>
        <h3>Cart Items:
            {cart.join(', ')}
        </h3>
    </div>
  )
}

export default RemoveFromCart
