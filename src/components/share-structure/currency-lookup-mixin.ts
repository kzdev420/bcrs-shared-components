import Vue from 'vue'
import { Component } from 'vue-property-decorator'

/**
 * Mixin that provides currency list and lookup operations
 */
@Component({})
export default class CurrencyLookupMixin extends Vue {
  readonly currencyList = [
    { code: 'CAD', name: 'Canadian dollar' },
    { code: 'USD', name: 'United States dollar' },
    { divider: true },
    { code: 'AED', name: 'UAE dirham' },
    { code: 'AFN', name: 'Afghan afghani' },
    { code: 'ALL', name: 'Albanian lek' },
    { code: 'AMD', name: 'Armenian dram' },
    { code: 'ANG', name: 'Netherlands Antillean gulden' },
    { code: 'AOA', name: 'Angolan kwanza' },
    { code: 'ARS', name: 'Argentine peso' },
    { code: 'AUD', name: 'Australian dollar' },
    { code: 'AWG', name: 'Aruban florin' },
    { code: 'AZN', name: 'Azerbaijani manat' },
    { code: 'BAM', name: 'Bosnia and Herzegovina konvertibilna marka' },
    { code: 'BBD', name: 'Barbadian dollar' },
    { code: 'BDT', name: 'Bangladeshi taka' },
    { code: 'BGN', name: 'Bulgarian lev' },
    { code: 'BHD', name: 'Bahraini dinar' },
    { code: 'BIF', name: 'Burundi franc' },
    { code: 'BMD', name: 'Bermudian dollar' },
    { code: 'BND', name: 'Brunei dollar' },
    { code: 'BOB', name: 'Bolivian boliviano' },
    { code: 'BRL', name: 'Brazilian real' },
    { code: 'BSD', name: 'Bahamian dollar' },
    { code: 'BTN', name: 'Bhutanese ngultrum' },
    { code: 'BWP', name: 'Botswana pula' },
    { code: 'BYR', name: 'Belarusian ruble' },
    { code: 'BZD', name: 'Belize dollar' },
    { code: 'CDF', name: 'Congolese franc' },
    { code: 'CHF', name: 'Swiss franc' },
    { code: 'CLP', name: 'Chilean peso' },
    { code: 'CNY', name: 'Chinese/Yuan renminbi' },
    { code: 'COP', name: 'Colombian peso' },
    { code: 'CRC', name: 'Costa Rican colon' },
    { code: 'CUC', name: 'Cuban peso' },
    { code: 'CVE', name: 'Cape Verdean escudo' },
    { code: 'CZK', name: 'Czech koruna' },
    { code: 'DJF', name: 'Djiboutian franc' },
    { code: 'DKK', name: 'Danish krone' },
    { code: 'DOP', name: 'Dominican peso' },
    { code: 'DZD', name: 'Algerian dinar' },
    { code: 'EEK', name: 'Estonian kroon' },
    { code: 'EGP', name: 'Egyptian pound' },
    { code: 'ERN', name: 'Eritrean nakfa' },
    { code: 'ETB', name: 'Ethiopian birr' },
    { code: 'EUR', name: 'European Euro' },
    { code: 'FJD', name: 'Fijian dollar' },
    { code: 'FKP', name: 'Falkland Islands pound' },
    { code: 'GBP', name: 'British pound' },
    { code: 'GEL', name: 'Georgian lari' },
    { code: 'GHS', name: 'Ghanaian cedi' },
    { code: 'GIP', name: 'Gibraltar pound' },
    { code: 'GMD', name: 'Gambian dalasi' },
    { code: 'GNF', name: 'Guinean franc' },
    { code: 'GQE', name: 'Central African CFA franc' },
    { code: 'GTQ', name: 'Guatemalan quetzal' },
    { code: 'GYD', name: 'Guyanese dollar' },
    { code: 'HKD', name: 'Hong Kong dollar' },
    { code: 'HNL', name: 'Honduran lempira' },
    { code: 'HRK', name: 'Croatian kuna' },
    { code: 'HTG', name: 'Haitian gourde' },
    { code: 'HUF', name: 'Hungarian forint' },
    { code: 'IDR', name: 'Indonesian rupiah' },
    { code: 'ILS', name: 'Israeli new sheqel' },
    { code: 'INR', name: 'Indian rupee' },
    { code: 'IQD', name: 'Iraqi dinar' },
    { code: 'IRR', name: 'Iranian rial' },
    { code: 'ISK', name: 'Icelandic kr\u00f3na' },
    { code: 'JMD', name: 'Jamaican dollar' },
    { code: 'JOD', name: 'Jordanian dinar' },
    { code: 'JPY', name: 'Japanese yen' },
    { code: 'KES', name: 'Kenyan shilling' },
    { code: 'KGS', name: 'Kyrgyzstani som' },
    { code: 'KHR', name: 'Cambodian riel' },
    { code: 'KMF', name: 'Comorian franc' },
    { code: 'KPW', name: 'North Korean won' },
    { code: 'KRW', name: 'South Korean won' },
    { code: 'KWD', name: 'Kuwaiti dinar' },
    { code: 'KYD', name: 'Cayman Islands dollar' },
    { code: 'KZT', name: 'Kazakhstani tenge' },
    { code: 'LAK', name: 'Lao kip' },
    { code: 'LBP', name: 'Lebanese lira' },
    { code: 'LKR', name: 'Sri Lankan rupee' },
    { code: 'LRD', name: 'Liberian dollar' },
    { code: 'LSL', name: 'Lesotho loti' },
    { code: 'LTL', name: 'Lithuanian litas' },
    { code: 'LVL', name: 'Latvian lats' },
    { code: 'LYD', name: 'Libyan dinar' },
    { code: 'MAD', name: 'Moroccan dirham' },
    { code: 'MDL', name: 'Moldovan leu' },
    { code: 'MGA', name: 'Malagasy ariary' },
    { code: 'MKD', name: 'Macedonian denar' },
    { code: 'MMK', name: 'Myanma kyat' },
    { code: 'MNT', name: 'Mongolian tugrik' },
    { code: 'MOP', name: 'Macanese pataca' },
    { code: 'MRO', name: 'Mauritanian ouguiya' },
    { code: 'MUR', name: 'Mauritian rupee' },
    { code: 'MVR', name: 'Maldivian rufiyaa' },
    { code: 'MWK', name: 'Malawian kwacha' },
    { code: 'MXN', name: 'Mexican peso' },
    { code: 'MYR', name: 'Malaysian ringgit' },
    { code: 'MZM', name: 'Mozambican metical' },
    { code: 'NAD', name: 'Namibian dollar' },
    { code: 'NGN', name: 'Nigerian naira' },
    { code: 'NIO', name: 'Nicaraguan c\u00f3rdoba' },
    { code: 'NOK', name: 'Norwegian krone' },
    { code: 'NPR', name: 'Nepalese rupee' },
    { code: 'NZD', name: 'New Zealand dollar' },
    { code: 'OMR', name: 'Omani rial' },
    { code: 'PAB', name: 'Panamanian balboa' },
    { code: 'PEN', name: 'Peruvian nuevo sol' },
    { code: 'PGK', name: 'Papua New Guinean kina' },
    { code: 'PHP', name: 'Philippine peso' },
    { code: 'PKR', name: 'Pakistani rupee' },
    { code: 'PLN', name: 'Polish zloty' },
    { code: 'PYG', name: 'Paraguayan guarani' },
    { code: 'QAR', name: 'Qatari riyal' },
    { code: 'RON', name: 'Romanian leu' },
    { code: 'RSD', name: 'Serbian dinar' },
    { code: 'RUB', name: 'Russian ruble' },
    { code: 'SAR', name: 'Saudi riyal' },
    { code: 'SBD', name: 'Solomon Islands dollar' },
    { code: 'SCR', name: 'Seychellois rupee' },
    { code: 'SDG', name: 'Sudanese pound' },
    { code: 'SEK', name: 'Swedish krona' },
    { code: 'SGD', name: 'Singapore dollar' },
    { code: 'SHP', name: 'Saint Helena pound' },
    { code: 'SLL', name: 'Sierra Leonean leone' },
    { code: 'SOS', name: 'Somali shilling' },
    { code: 'SRD', name: 'Surinamese dollar' },
    { code: 'SYP', name: 'Syrian pound' },
    { code: 'SZL', name: 'Swazi lilangeni' },
    { code: 'THB', name: 'Thai baht' },
    { code: 'TJS', name: 'Tajikistani somoni' },
    { code: 'TMT', name: 'Turkmen manat' },
    { code: 'TND', name: 'Tunisian dinar' },
    { code: 'TRY', name: 'Turkish new lira' },
    { code: 'TTD', name: 'Trinidad and Tobago dollar' },
    { code: 'TWD', name: 'New Taiwan dollar' },
    { code: 'TZS', name: 'Tanzanian shilling' },
    { code: 'UAH', name: 'Ukrainian hryvnia' },
    { code: 'UGX', name: 'Ugandan shilling' },
    { code: 'UYU', name: 'Uruguayan peso' },
    { code: 'UZS', name: 'Uzbekistani som' },
    { code: 'VEB', name: 'Venezuelan bolivar' },
    { code: 'VND', name: 'Vietnamese dong' },
    { code: 'VUV', name: 'Vanuatu vatu' },
    { code: 'WST', name: 'Samoan tala' },
    { code: 'XAF', name: 'Central African CFA franc' },
    { code: 'XCD', name: 'East Caribbean dollar' },
    { code: 'XDR', name: 'Special Drawing Rights' },
    { code: 'XOF', name: 'West African CFA franc' },
    { code: 'XPF', name: 'CFP franc' },
    { code: 'YER', name: 'Yemeni rial' },
    { code: 'ZAR', name: 'South African rand' },
    { code: 'ZMK', name: 'Zambian kwacha' },
    { code: 'ZWR', name: 'Zimbabwean dollar' }
  ]

  getCurrencyList (): Array<any> {
    return this.currencyList
  }

  getCurrencyNameByCode (code: string): string {
    const currency = this.currencyList.find(currency => currency.code === code)
    return currency && currency.name
  }
}
