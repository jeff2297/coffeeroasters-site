class SelectionCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: "Capsules",
      bean: "____",
      quantity: "____",
      option: "____",
      delivery: "____",
      altOrder: true,
      count: 0,
      price: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.calculatePrice = this.calculatePrice.bind(this);
  }

  handleClick(event) {
    // Add active class to selected item and remove actice class from sibling elements
    [...event.target.parentElement.children].forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");

    // If capsule or other selection is clicked, toggle disabled class on grind option.
    if (event.target.id === "capsules") {
      document.querySelector(".grind-option").classList.add("disabled");
      document.querySelector(".grind-option-header").classList.add("disabled");
      document.getElementById("option").style.display = "none";
      this.setState({
        altOrder: true,
      });
    } else if (event.target.id === "filter" || event.target.id === "espresso") {
      document.querySelector(".grind-option").classList.remove("disabled");
      document
        .querySelector(".grind-option-header")
        .classList.remove("disabled");
      document.getElementById("option").style.display = "flex";
      this.setState({
        altOrder: false,
      });
    }

    if (event.target.parentElement.id == "preferences") {
      this.setState({
        preferences:
          event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1),
        count: this.state.count + 1,
      });
    } else if (event.target.parentElement.id == "bean") {
      this.setState({
        bean:
          event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1),
        count: this.state.count + 1,
      });
    } else if (event.target.parentElement.id == "quantity") {
      this.setState({
        quantity: event.target.id,
        count: this.state.count + 1,
      });
    } else if (event.target.parentElement.id == "option") {
      this.setState({
        option:
          event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1),
        count: this.state.count + 1,
      });
    } else if (event.target.parentElement.id == "delivery") {
      this.setState({
        delivery:
          event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1),
        count: this.state.count + 1,
      });
    }
  }

  showModal() {
    window.scrollTo(0, 0);
    document.querySelector(".order-summary-modal").style.display = "block";
    document.body.classList.add("wrapper");
    this.calculatePrice();
  }

  calculatePrice() {
    let weight = document.getElementById("quantity").querySelector(".active");
    let time = document.getElementById("delivery").querySelector(".active").id;
    if (time === "weekly") {
      this.setState({
        price: (weight.dataset.weekly * 4).toFixed(2),
      });
    } else if (time === "fortnightly") {
      this.setState({
        price: (weight.dataset.fortnightly * 2).toFixed(2),
      });
    } else {
      this.setState({
        price: weight.dataset.monthly,
      });
    }
  }

  hideModal() {
    document.querySelector(".order-summary-modal").style.display = "none";
    document.body.classList.remove("wrapper");
  }

  render() {
    const {
      preferences,
      bean,
      quantity,
      option,
      delivery,
      altOrder,
      count,
      price,
    } = this.state;

    return (
      <div>
        {/* <!-- How do you drink your coffee --> */}
        <div className="selection-card">
          <div className="selection-card-header" id="preferences-header">
            <h4>How do you drink your coffee?</h4>
            <button className="selection-card-button"></button>
          </div>
          <div className="selections" id="preferences">
            <div className="selection" id="capsules" onClick={this.handleClick}>
              <h4>Capsule</h4>
              <p>Compatible with Nespresso systems and similar brewers</p>
            </div>
            <div onClick={this.handleClick} className="selection" id="filter">
              <h4>Filter</h4>
              <p>
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </div>
            <div onClick={this.handleClick} className="selection" id="espresso">
              <h4>Espresso</h4>
              <p>
                Dense and finely ground beans for an intense, flavorful
                experience
              </p>
            </div>
          </div>
        </div>

        {/* <!-- What type of cofee --> */}
        <div className="selection-card">
          <div className="selection-card-header" id="bean-header">
            <h4>What type of coffee?</h4>
            <button className="selection-card-button"></button>
          </div>
          <div className="selections" id="bean">
            <div onClick={this.handleClick} className="selection" id="single">
              <h4>Single origin</h4>
              <p>
                Distinct, high quality coffee from a specific family-owned farm
              </p>
            </div>
            <div onClick={this.handleClick} className="selection" id="decaf">
              <h4>Decaf</h4>
              <p>
                Just like regular coffee, except the caffeine has been removed
              </p>
            </div>
            <div onClick={this.handleClick} className="selection" id="blended">
              <h4>Blended</h4>
              <p>
                Combination of two or three dark roasted beans of organic
                coffees
              </p>
            </div>
          </div>
        </div>

        {/* <!-- How much would you like --> */}
        <div className="selection-card">
          <div className="selection-card-header" id="quantity-header">
            <h4>How much would you like?</h4>
            <button className="selection-card-button"></button>
          </div>
          <div className="selections" id="quantity">
            <div
              onClick={this.handleClick}
              className="selection"
              id="250g"
              data-weekly="7.20"
              data-fortnightly="9.60"
              data-monthly="12.00"
            >
              <h4>250g</h4>
              <p>
                Perfect for the solo drinker. Yields about 12 delicious cups.
              </p>
            </div>
            <div
              onClick={this.handleClick}
              className="selection"
              id="500g"
              data-weekly="13.00"
              data-fortnightly="17.50"
              data-monthly="22.00"
            >
              <h4>500g</h4>
              <p>
                Perfect option for a couple. Yields about 40 delectable cups.
              </p>
            </div>
            <div
              onClick={this.handleClick}
              className="selection"
              id="1000g"
              data-weekly="22.00"
              data-fortnightly="32.00"
              data-monthly="42.00"
            >
              <h4>1000g</h4>
              <p>
                Perfect for offices and events. Yields about 90 delightful cups.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Want us to grind them --> */}
        <div className="selection-card">
          <div className="selection-card-header grind-option-header" id="grind-header">
            <h4>Want us to grind them?</h4>
            <button className="selection-card-button"></button>
          </div>
          <div className="selections" id="option">
            <div
              onClick={this.handleClick}
              className="selection"
              id="wholebean"
            >
              <h4>Wholebean</h4>
              <p>Best choice if you cherish the full sensory experience</p>
            </div>
            <div onClick={this.handleClick} className="selection" id="filter">
              <h4>Filter</h4>
              <p>
                For drip or pour-over coffee methods such as V60 or Aeropress
              </p>
            </div>
            <div
              onClick={this.handleClick}
              className="selection"
              id="cafetiere"
            >
              <h4>Cafetiére</h4>
              <p>
                Course ground beans specially suited for french press coffee
              </p>
            </div>
          </div>
        </div>

        {/* <!-- How often should we deliver --> */}
        <div className="selection-card">
          <div className="selection-card-header" id="delivery-header">
            <h4>How often should we deliver?</h4>
            <button className="selection-card-button"></button>
          </div>
          <div className="selections" id="delivery">
            <div onClick={this.handleClick} className="selection" id="weekly">
              <h4>Every week</h4>
              <p>
                $14.00 per shipment. Includes free first-className shipping.
              </p>
            </div>
            <div
              onClick={this.handleClick}
              className="selection"
              id="fortnightly"
            >
              <h4>Every 2 weeks</h4>
              <p>$17.25 per shipment. Includes free priority shipping.</p>
            </div>
            <div onClick={this.handleClick} className="selection" id="monthly">
              <h4>Every month</h4>
              <p>$22.50 per shipment. Includes free priority shipping.</p>
            </div>
          </div>
        </div>

        {altOrder ? (
          <div className="order-summary">
            <p>order summary</p>
            <h4 className="order-sentence">
              “I drink my coffee using <span>{preferences}</span>, with a{" "}
              <span>{bean}</span> type of bean. <span>{quantity}</span>, sent to
              me <span>{delivery}</span>.”
            </h4>
          </div>
        ) : (
          <div className="order-summary">
            <p>order summary</p>
            <h4 className="order-sentence">
              “I drink my coffee as <span>{preferences}</span>, with a{" "}
              <span>{bean}</span> type of bean. <span>{quantity}</span> ground
              ala <span>{option}</span>, sent to me <span>{delivery}</span>.”
            </h4>
          </div>
        )}

        <a
          onClick={this.showModal}
          href="#"
          className={
            count >= 4 && altOrder
              ? "btn btn-order"
              : count >= 5 && !altOrder
              ? "btn btn-order"
              : "btn btn-order-disabled"
          }
        >
          Create my plan!
        </a>

        {/* Modal */}

        <div className="order-summary-modal container">
          {altOrder ? (
            <div>
              <h2>Order Summary</h2>
              <h4 className="order-sentence">
                “I drink my coffee using <span>{preferences}</span>, with a{" "}
                <span>{bean}</span> type of bean. <span>{quantity}</span>, sent
                to me <span>{delivery}</span>.”
              </h4>
            </div>
          ) : (
            <div>
              <h2>Order Summary</h2>
              <h4 className="order-sentence">
                “I drink my coffee as <span>{preferences}</span>, with a{" "}
                <span>{bean}</span> type of bean. <span>{quantity}</span> ground
                ala <span>{option}</span>, sent to me <span>{delivery}</span>.”
              </h4>
            </div>
          )}
          <p className="second-sentence">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <a onClick={this.hideModal} href="#" className="btn btn-price">
            Checkout - $<span>{price}</span>/month
          </a>
          <div className="price-container">
            <p>${price} / mo</p>
            <a onClick={this.hideModal} href="#" className="btn btn-alt">
              Checkout
            </a>
          </div>
        </div>

        {/* Modal End */}
      </div>
    );
  }
}





