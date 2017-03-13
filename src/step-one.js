import React from 'react';

class StepOne extends React.Component {  
  render() {
      return (
        <div className="content">
          <h3>See what other people think</h3>
          <div className="scenario">
            <form id="step-1">
              <section>
                <img src="http://open4profit.com/images/f2.jpg" className="profile-picture" />
                <div className="bubble"><input className="question" type="text" name="lname" placeholder="Start by asking a question" /></div>
              </section>
              <a href="" className="example">VIEW EXAMPLE</a>
              <section className="buttons">
                <button className="cancel" value="Cancel">CANCEL</button>
                <button className="submit" value="Submit form">GO</button>
              </section>
            </form>
          </div>  
        </div>
    )
  }
}

export default StepOne;

