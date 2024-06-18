import css from './TransactionHistory.module.css'

export default function TransactionHistory ({items}){
    return(
        <table className={css.table}>
          <thead className={css.head}>
            <tr>
              <th className={css.columnHead}>Type</th>
              <th className={css.columnHead}>Amount</th>
              <th className={css.columnHead}>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(({type, amount, currency, id}) =>
              <tr className={css.cells} key={id}>
                <td className={css.columnBody}>{type}</td>
                <td className={css.columnBody}>{amount}</td>
                <td className={css.columnBody}>{currency}</td>
              </tr>)}
          </tbody>
        </table>
    ) 
}