import React, { useState } from "react";

import "./Table2.css";

const _defaultCosts = [
  {
    Prestation: "Rice",
    price: 40
  },
  {
    Prestation: "Noodle",
    price: 20
  }
]

const CostTable = () => {
  const [costs, setCosts] = useState(_defaultCosts);
  const handleCostsChange = event => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);
  };


  

  const addNewCost = () => {
    setCosts(prevCosts => [...prevCosts, { Prestation: "", price: 0 }]);
  };
  return (
    <div className="table">
      <div className="table-title">Liste des prestations</div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Prestation</div>
            </div>
            <div className="table-data">
              <div>Nbr Actes</div>
            </div>
            <div className="table-data">
              <div>Montant engagé</div>
            </div>
            <div className="table-data">
              <div>Montant à paye</div>
            </div>
            <div className="table-data">
              <div>""</div>
            </div>
            
          </div>
        </div>
        <div className="table-body">
          {costs.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="Prestation"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleCostsChange}
                  
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleCostsChange}
                 
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleCostsChange}
                 
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleCostsChange}
                 
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleCostsChange}
                 
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewCost}>+</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CostTable;
