"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { formatCurrency } from "@/lib/utils"

interface MortgageCalculatorProps {
  propertyPrice: number
}

export function MortgageCalculator({ propertyPrice }: MortgageCalculatorProps) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(20)
  const [interestRate, setInterestRate] = useState(8.5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  useEffect(() => {
    const downPayment = (propertyPrice * downPaymentPercent) / 100
    const loanAmount = propertyPrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (loanAmount > 0 && monthlyRate > 0) {
      const payment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      setMonthlyPayment(payment)
    } else {
      setMonthlyPayment(0)
    }
  }, [propertyPrice, downPaymentPercent, loanTerm, interestRate])

  return (
    <Card className="p-6 bg-slate-50">
      <div className="space-y-6">
        {/* Down Payment */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Inicial (%)</Label>
            <span className="text-sm font-medium text-slate-900">
              {downPaymentPercent}% ({formatCurrency((propertyPrice * downPaymentPercent) / 100)})
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        {/* Loan Term */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Plazo (años)</Label>
            <span className="text-sm font-medium text-slate-900">{loanTerm} años</span>
          </div>
          <input
            type="range"
            min="5"
            max="30"
            step="5"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        {/* Interest Rate */}
        <div className="space-y-2">
          <Label htmlFor="interest">Tasa de Interés Anual (%)</Label>
          <Input
            id="interest"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>

        {/* Result */}
        <div className="pt-6 border-t border-slate-200">
          <div className="text-center">
            <p className="text-sm text-slate-600 mb-2">Cuota Mensual Estimada</p>
            <p className="text-4xl font-bold text-primary font-montserrat">
              {formatCurrency(monthlyPayment)}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              *Cálculo aproximado. Consulte con su entidad financiera.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <div>
            <p className="text-xs text-slate-600">Monto del Préstamo</p>
            <p className="font-semibold text-slate-900">
              {formatCurrency(propertyPrice - (propertyPrice * downPaymentPercent) / 100)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-600">Total de Pagos</p>
            <p className="font-semibold text-slate-900">
              {formatCurrency(monthlyPayment * loanTerm * 12)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
