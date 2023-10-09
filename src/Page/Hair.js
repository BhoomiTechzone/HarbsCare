import React from 'react';
import './Hair.css';
import oil  from '../Images/oil.jpg'
import shampoo  from '../Images/SHAMPOO.png'

function Hair(props) {
    return (
        <div>
      
      <div className="" >
        <div className="ct-header">
          <div className="container">
            <h2>Powerful Communication</h2>
            <h2>Tools at your Fingertips</h2>
            {/* <h2>Internet Lease Line Solutions</h2>
          <h4>Get Connected Today!</h4> */}
          </div>

        </div>
        <div className="container ct-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="ct-content-left">
                <h2>Onion Shampoo</h2>
                <p>
                Onion shampoo is a specialized hair product containing onion extract, rich in sulfur, believed to stimulate hair follicles and promote growth. It typically features sulfate-free cleansers for gentle cleaning and natural oils like coconut or argan for hair nourishment and hydration. Vitamins (such as biotin and E) and minerals like zinc enhance overall hair health. Herbal extracts like aloe vera and rosemary can strengthen hair and reduce breakage, while antioxidants protect against free radical damage. Additionally, protein components like keratin or wheat protein aid in repairing and strengthening damaged hair. Always check the label for specific ingredients and potential allergens when choosing onion shampoo.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ct-content-left-img">
                <img src={shampoo} alt="" height="300px" width="90%" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ct-content-left-img">
                <img src={oil} alt="" height="300px" width="90%" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ct-content-left">
                <h2>Onion hair oil</h2>
                <p>
                Onion hair oil is a popular hair care product that incorporates onion extract as its primary ingredient. This extract is rich in sulfur, which is believed to promote hair growth by nourishing hair follicles, strengthening hair strands, and reducing hair loss. Onion hair oil is often blended with carrier oils such as coconut, olive, or argan oil, which provide additional nourishment and hydration to the hair and scalp. The oil may also contain vitamins and minerals like biotin, vitamins E and B5, and zinc to support overall hair health. Regular application of onion hair oil is often recommended to improve hair texture, reduce dandruff, and enhance the overall appearance and health of the hair.</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      
    </div>
    );
}

export default Hair;