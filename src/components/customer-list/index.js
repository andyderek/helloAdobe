import React, {useState}  from "react";
import "./index.css";

function CustomerList() {
  let theInput = false;

  const [customerList, setCustomerList] = useState([])

  let submitted = function(e){
    e.preventDefault()
    if(theInput){
      setCustomerList([...customerList,{customerId: "list-item" + customerList.length, customer: theInput}])
      document.getElementById("inputField").value = "";
    }
  }

  let removeCustomer = function(customerId){
    let newArr = customerList.filter((item) => item.customerId !== customerId)
    setCustomerList(newArr)
  }

  const listItems = customerList.map((item) => <li data-testid={item.customerId} key={item.customerId} onClick={() => removeCustomer(item.customerId)}>{item.customer}</li>)

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input id="inputField" type="text" onChange={(e) => {theInput = e.target.value}} className="large" placeholder="Name" data-testid="app-input"/>
        <button onClick={submitted}  type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
      </section>
        {customerList.length > 0 &&
        <ul className="styled mt-50" data-testid="customer-list">
            {listItems}
        </ul>
        }
    </div>
  );
}


export default CustomerList
