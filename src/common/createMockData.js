import { fakeNames, fakeSurnames, fakeStreetNames, fakeCityNames, fakeTownshipNames, fakeNeighborhoodNames, fakeCellPhoneNumbers, fakeCPNames } from "@/constants/fakeData"

export function createFakeAffiliateRegister() {
  const register = {
    name: fakeNames[Math.floor(Math.random() * fakeNames.length)],
    fatherSurname: fakeSurnames[Math.floor(Math.random() * fakeNames.length)],
    motherSurname: fakeSurnames[Math.floor(Math.random() * fakeNames.length)],
    street: fakeStreetNames[Math.floor(Math.random() * fakeStreetNames.length)],
    extnum: Math.floor(Math.random() * 100).toString(),
    intnum: Math.floor(Math.random() * 100).toString(),
    neighborhood: fakeNeighborhoodNames[Math.floor(Math.random() * fakeNeighborhoodNames.length)],
    city: fakeCityNames[Math.floor(Math.random() * fakeCityNames.length)],
    township: fakeTownshipNames[Math.floor(Math.random() * fakeTownshipNames.length)],
    cp: fakeCPNames[Math.floor(Math.random() * fakeCPNames.length)],
    federalDistrict: Math.floor(Math.random() * 99),
    electoralSection: Math.floor(Math.random() * 99),
    email: `${fakeNames[Math.floor(Math.random() * fakeNames.length)].toLowerCase()}@gmail.com`,
    phoneNumber: fakeCellPhoneNumbers[Math.floor(Math.random() * fakeCellPhoneNumbers.length)],
    cellPhoneNumber: fakeCellPhoneNumbers[Math.floor(Math.random() * fakeCellPhoneNumbers.length)],
    electoralKeyCurp: Math.floor(Math.random() * (999999999999999999 - 100000000000000000) + 100000000000000000),
    typeRegister: 'Afiliación'
  }
  return register
}