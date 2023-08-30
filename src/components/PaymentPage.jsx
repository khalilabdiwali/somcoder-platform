import { useState } from 'react';

const PaymentPage = () => {

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paid, setPaid] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    // Implement payment processing logic here
    setPaid(true)
  }

  if (paid) {
    return (
      <div >
        <h1 className='text-center text-5xl text-white m-20 '>Payment Successful</h1>
      </div>
    )
  }
  const handleCancel = () => {
    // Reset all form fields and close the payment page
    setCardNumber('');
    setCardName('');
    setAmount('');
    setDiscount('');
    setPaymentMethod('');
  };
  
  const handlePaymentMethodChange = (event) => {
    const paymentMethod = event.target.value;
    setPaymentMethod(paymentMethod);
  
    // Set the card number based on the selected payment method
    if (paymentMethod === 'evc') {
      setCardNumber('61');
    } else if (paymentMethod === 'edahab') {
      setCardNumber('62');
    } else if (paymentMethod === 'sahal') {
      setCardNumber('63');
    } else {
      setCardNumber('');
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={handleSubmit}>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
            Checkout
          </h2>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder='Number You send Money'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={cardNumber}
                    onChange={(event) => setCardNumber(event.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="cardName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                   Name
                  </label>
                  <input
                    type="text"
                    placeholder='Enter You Name '
                    name="cardName"
                    id="cardName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={cardName}
                    onChange={(event) => setCardName(event.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder='Enter the amount'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="discount"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Discount
                  </label>
                  <input
                    type="number"
                    name="discount"
                    id="discount"
                    placeholder='Enter the discount'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={discount}
                    onChange={(event) => setDiscount(event.target.value)}
                    required
                  />
                </div>
               
              </div>
              <div className="mt-4">
                <label
                  htmlFor="paymentMethod"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Payment Method
                </label>
                <select
                  name="paymentMethod"
                  id="paymentMethod"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="evc">Evc-Plus</option>
                  <option value="edahab">E-Dahab</option>
                  <option value="sahal">Sahal</option>
                </select>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Pay Now
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                onClick={handleCancel}
              >
                Clear Payment
              </button>
            </div>
          </form>
          
      </div>
                    </div>
                    </div>
                
  );
};

export default PaymentPage;