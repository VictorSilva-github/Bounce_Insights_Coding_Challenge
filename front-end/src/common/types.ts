//making it easier to find the Country Name, capital name and flag.
export interface IInfoCountry {
    data: [
        {
            name: {
                common: string,
                official: string
            },
            capital: string,
            flags: {
                png: string
            },
        }
    ]
}