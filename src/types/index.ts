export interface User {
    id: string
    email: string
    name?: string
    role: 'admin' | 'finance' | 'user'
  }
  
  export interface Budget {
    id: string
    name: string
    amount: number
    spent: number
    period: 'month' | 'quarter' | 'halfyear' | 'year'
    startDate: Date
    endDate: Date
    categoryId: string
  }
  
  export interface Category {
    id: string
    name: string
    description?: string
    accountCode?: string // Voor Exact Online koppeling
  }
  
  export interface Transaction {
    id: string
    amount: number
    date: Date
    description: string
    categoryId: string
    budgetId: string
    exactOnlineId?: string
  }
  
  