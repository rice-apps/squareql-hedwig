import { SquareService } from '../services'
import vault from './vault'

const vendorList = [
  { name: 'Cohen House', slug: 'cohen' },
  { name: 'Test Account CMT', slug: 'cmt' },
  { name: 'East West Test', slug: 'test' }
]

const squareClients = new Map<string, SquareService>()

vendorList.forEach(async vendor => {
  squareClients.set(
    vendor.name,
    new SquareService(
      vendor.name,
      await vault
        .read(`cubbyhole/${vendor.slug.toLowerCase()}`)
        .then(res => res.data['square-access']),
      process.env.NODE_ENV === 'production'
    )
  )
})

const getSquare = (vendorName: string) => squareClients.get(vendorName)

export { getSquare }
