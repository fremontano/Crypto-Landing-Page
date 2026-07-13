
import { tickerItems } from '../../../data'
import { TickerItem } from './TickerItem'

export const TickerItemList = () => {
    return (
        <>

            <div className="overflow-hidden border-y border-slate-800/80 bg-[#08131f] py-4">
                <div className="animate-marquee flex w-max items-center gap-8 px-6 text-sm text-slate-400 sm:text-base">
                    {tickerItems.map((item) => (
                        <TickerItem key={item.symbol} symbol={item.symbol} price={item.price} change={item.change} />
                    ))}
                </div>
            </div>
        </>
    )
}
