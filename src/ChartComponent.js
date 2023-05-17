import React, {useState} from 'react'
import data from "/data.json"

const ChartComponent = () => {
    const maxAmount = Math.max(...data.map(item => item.amount));
    const maxHeight = 200;

    const [tooltipValue, setTooltipValue] = useState('');

    const handleMouseEnter = (amount) => {
        setTooltipValue(amount);
    };

    const handleMouseLeave = () => {
        setTooltipValue('');
    };
   
  return (
    <div className='chart'>
        {data.map((data)=> (
            <div className='chart-column' key={data?.day}>

                {tooltipValue && tooltipValue === data?.amount && (
                    <span className='tooltip'>{`$${data?.amount}`}</span>
                )}

                <span
                    onMouseEnter={() => handleMouseEnter(data?.amount)}
                    onMouseLeave={handleMouseLeave}
                    className={`chart-amount ${data?.amount === maxAmount ? 'max-amount' : ''}`} 
                    style={{ height: `${(data?.amount / maxAmount) * maxHeight}px` }}>
                </span>

               

                <span className='day'>{data?.day}</span>
            </div>
        ))}
        
    </div>
  )
}

export default ChartComponent