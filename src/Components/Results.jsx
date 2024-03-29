import  {calculateInvestmentResults, formatter}  from "../util/investment"

export default function Results({ input }){
  const resultData = calculateInvestmentResults(input)
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
               {resultData.map((data) =>{
                const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment
                const totalAmountInterest = data.valueEndOfYear - totalInterest
                return (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInterest)}</td>
                    </tr>
                )
               })}
            </tbody>
        </table>
    )

}