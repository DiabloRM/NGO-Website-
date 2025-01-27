"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, Bitcoin, Check } from "lucide-react"
import confetti from "canvas-confetti"

const paymentMethods = [
  {
    id: "credit-card",
    name: "Credit Card",
    icon: CreditCard,
    description: "Pay securely with your credit card",
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: CreditCard,
    description: "Fast and secure payment with PayPal",
  },
  {
    id: "crypto",
    name: "Cryptocurrency",
    icon: Bitcoin,
    description: "Donate using cryptocurrency",
  },
]

const predefinedAmounts = [10, 25, 50, 100, 250, 500]

export default function DonatePage() {
  const [selectedMethod, setSelectedMethod] = useState("")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setIsSuccess(true)
    
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {!isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h1 className="text-4xl font-bold text-center mb-8">Make a Donation</h1>
            
            <form onSubmit={handleDonate}>
              {/* Amount Selection */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Select Amount</h2>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {predefinedAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset.toString())}
                      className={`p-4 text-lg font-semibold rounded-lg transition-all ${
                        amount === preset.toString()
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setAmount(e.target.value)
                    }}
                    placeholder="Enter custom amount"
                    className="w-full p-4 border rounded-lg"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2">$</span>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <motion.button
                      key={method.id}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        selectedMethod === method.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <method.icon className="w-8 h-8 mb-3 text-blue-600" />
                      <h3 className="font-semibold mb-2">{method.name}</h3>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!amount || !selectedMethod || isProcessing}
                className={`w-full py-4 rounded-xl text-white font-semibold text-lg transition-all ${
                  isProcessing
                    ? "bg-gray-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Donate $${amount}`
                )}
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Your donation of ${amount} has been processed successfully.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSuccess(false)}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Make Another Donation
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 