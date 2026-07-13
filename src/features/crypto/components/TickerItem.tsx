
type TickerItemProps = {
    symbol: string;
    price: string;
    change: string;
};


export const TickerItem = ({ symbol, price, change }: TickerItemProps) => {
    return (
        <div className="flex items-center gap-3 whitespace-nowrap">
            <span>
                {symbol}
            </span>
            <span>
                {price}
            </span>

            <span className={change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                {change}
            </span>

        </div>
    )
}
