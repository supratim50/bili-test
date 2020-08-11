import React from "react";

import Header from "./components/header";
import YourAccount from "./components/yourAccount";
import IncreaseSale from "./components/increase-sale";
import CardSection from "./components/cards/cardSection";

function App() {
  return (
    <div className="App">
      <Header imageName="account-based-marketing.png" />
      <YourAccount imageName="is-your-account.png" />
      <IncreaseSale imageName="increase-sales.png" />
      <CardSection />
    </div>
  );
}

export default App;
