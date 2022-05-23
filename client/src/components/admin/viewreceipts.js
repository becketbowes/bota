function ViewReceipts({handleContent}) {
    //replace with route call:
    const getReceipts = [
        {product: 'bota large', quanity: 1, saleamount: 10000, createdAt: 'Sun May 03 2022 20:31:37 GMT+0000'},
        {product: 'bota large', quanity: 3, saleamount: 30000, createdAt: 'Sun May 02 2022 11:31:37 GMT+0000'},
        {product: 'bota large', quanity: 1, saleamount: 10000, createdAt: 'Sun May 02 2022 20:31:37 GMT+0000'}
    ]
    const getTotal = [
        {weeklyTotal: '50000', monthlyTotal: '543000', annualTotal: '4775000'}
    ]

    return (
        <>
            {getTotal.length && getTotal.map((total) => (
                <article className='adminuItem'>
                    <h3>Weekly Total: {total.weeklyTotal}¢, Monthly Total: {total.monthlyTotal}¢, Annual Total: {total.annualTotal}¢</h3>
                </article>
            ))}
            {getReceipts.length && getReceipts.map((receipt) => (
                <article className='adminuItem'>
                    <div className='adminuTitle'>{receipt.product}</div>
                    <div className='adminuMeta'>{receipt.createdAt}</div>
                    <div className='adminuText'>Quantity: {receipt.quanity}, Sale: {receipt.saleamount} pennies</div>
                </article>
            ))}
        </>
    )
}

export default ViewReceipts;