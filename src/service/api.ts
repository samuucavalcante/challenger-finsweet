import axios from 'axios'

export type CountriesData = {
  img: string
  abbr: string
  phoneCode: number
}

export const api = axios.create({
  baseURL: 'https://restcountries.com/v2/'
})


export const getAllCountries = async (): Promise<CountriesData[]> => {
  const response = await api.get('all', {
  }) 

  const data = response?.data as any[]

  const numbersCountries = data?.map(country => ({
    img: country.flag,
    abbr: country.alpha2Code,
    phoneCode: Number(country.callingCodes[0]),
  }))


  return numbersCountries
}
