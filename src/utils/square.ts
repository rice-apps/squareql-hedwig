import { SquareService } from '../services'

const squareServices = [
  new SquareService(
    'Cohen House',
    'EAAAELSMeoHZ3boywpdEba33ZU4qymwVLl_vO0ABnroerbLsw2SNhiz1odqvXb_k',
    false
  )
]

const getSquare = (vendorName: string) =>
  squareServices.find(service => service.vendorName === vendorName)

export { getSquare }
