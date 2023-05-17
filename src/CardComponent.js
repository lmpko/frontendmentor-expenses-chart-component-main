import React from 'react'
import logo from "/images/logo.svg"
const CardComponent = () => {
  return (
    <section>
        <div className='balance-preview'>
            <div>
                <span>My balance</span>
                <span>$921.48</span>
            </div>
            <img src={logo} alt="logo" />
        </div>
        <div className='chart-preview'>
            <h1>Spending - Last 7 days</h1>
            <hr/>
            <div className='chart-summary'>
                <div className='this-month'>
                    <span> Total this month</span>
                    <span>$478.33</span>
                </div>
                <div className='last-month'>
                    <span> +2.4%</span>
                    <span>from last month</span>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default CardComponent