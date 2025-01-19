'use client'

import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const budgetData = {
  total: 33000,
  spent: 16000,
  remaining: 17000,
  categories: [
    { name: 'Marketing', budget: 5000, spent: 2500 },
    { name: 'IT', budget: 10000, spent: 7500 },
    { name: 'HR', budget: 3000, spent: 1000 },
    { name: 'R&D', budget: 15000, spent: 5000 },
  ],
  monthlyExpenses: [
    { month: 'Jan', amount: 12000 },
    { month: 'Feb', amount: 15000 },
    { month: 'Mar', amount: 18000 },
    { month: 'Apr', amount: 16000 },
    { month: 'May', amount: 21000 },
    { month: 'Jun', amount: 19000 },
  ]
}

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(budgetData.categories[0])

  const chartData = {
    labels: budgetData.monthlyExpenses.map(item => item.month),
    datasets: [
      {
        label: 'Maandelijkse uitgaven',
        data: budgetData.monthlyExpenses.map(item => item.amount),
        backgroundColor: 'rgba(102, 51, 153, 0.5)',
        borderColor: 'rgb(102, 51, 153)',
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Maandelijkse uitgaven',
      },
    },
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Totaal Budget</h2>
          <p className="text-3xl font-semibold">€{budgetData.total.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Totale Uitgaven</h2>
          <p className="text-3xl font-semibold">€{budgetData.spent.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Resterend Budget</h2>
          <p className="text-3xl font-semibold">€{budgetData.remaining.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Budgetten per Categorie</h2>
          <div className="space-y-2">
            {budgetData.categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left p-2 rounded ${
                  selectedCategory.name === category.name
                    ? 'bg-[#663399] text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.name}: €{category.budget.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Details: {selectedCategory.name}</h2>
          <p>Budget: €{selectedCategory.budget.toLocaleString()}</p>
          <p>Uitgegeven: €{selectedCategory.spent.toLocaleString()}</p>
          <p>Resterend: €{(selectedCategory.budget - selectedCategory.spent).toLocaleString()}</p>
          <div className="mt-4 bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-[#663399] h-2.5 rounded-full"
              style={{ width: `${(selectedCategory.spent / selectedCategory.budget) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">Uitgaven Overzicht</h2>
        <Bar options={chartOptions} data={chartData} />
      </div>
    </div>
  )
}

