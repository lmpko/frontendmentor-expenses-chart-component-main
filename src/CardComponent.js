import React from 'react'
import logo from "/images/logo.svg"
const CardComponent = () => {
  return (
    <section>
        <div>
            <div>
                <span>My balance</span>
                <p>$921.48</p>
            </div>
            <img src={logo} alt="logo" />
        </div>
        <div>
            <h1>Spending - Last 7 days</h1>
            <hr/>
            <div>
                <span> Total this month</span>
                <p>$478.33</p>
            </div>
            <div>
                <span> +2.4%</span>
                <p>from last month</p>
            </div>
        </div>
    </section>
  )
}

export default CardComponent