import { Fragment } from 'react'
import { styles, symbols } from '../constants/index'
import compare from '../assets/compare.jpg'

interface Prop {
  setFrom: any;
  setTo: any;
  from: string;
  to: string;
}


const FromTo = ({ setFrom, setTo, from, to }:Prop) => {

  let oldFrom = "AFN - Afghan Afghani";
  let oldTo = "AFN - Afghan Afghani";

  const handleChange = () => {

  }

  const compareClick = () => {
    let oldFrom = from;
    let oldTo = to;
    setFrom(oldTo);
    setTo(oldFrom);

  }

  return <Fragment>
    
    {/* From Start */}
    <div className="flex flex-col gap-2 mt-2 md:mt-0 md:min-w-0 md:flex-1">
      <h2 className={`${styles.cardBold}`}>From</h2>
      <select id="from" className={styles.inputBorder}  onChange={(event) => setFrom(event.target.value.substring(0,3))}>
        {symbols.map((symbol) => (
          <option value={[symbol.symbol, symbol.text]}>{symbol.symbol + symbol.text}</option>
        ))}
      </select>
    </div>  
    {/* From End */}    

    {/* Compare Button Start */}  
    <div className={`${styles.compareButton} md:mt-8 md:mb-0`} onClick={compareClick}>
      <img src={compare} alt="compare_arrows_picture" className='w-[20px] h-[20px] rotate-90 md:rotate-0'/>
    </div>
    {/* Compare Button End */} 

    {/* To Start */}
    <div className="flex flex-col gap-2 md:min-w-0 md:flex-1">     
      <h2 className={`${styles.cardBold}`}>To</h2>
      <select id="from" className={styles.inputBorder} onChange={(event) => setTo(event.target.value)}>
          {symbols.map((symbol) => (
            <option value={symbol.symbol}>{symbol.symbol + symbol.text}</option>
          ))}
      </select>
    </div>
    {/* To End */}   

  </Fragment>
}

export default FromTo