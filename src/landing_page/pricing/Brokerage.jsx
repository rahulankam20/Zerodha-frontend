import React from "react";

function Brokerage() {
  return (
    <div className="container px-5">
      <div className="row px-5 mb-5">
        <div className="col text-center">
          <img
            src="images/pricing0.svg"
            alt="rs0-img"
            style={{ width: "70%" }}
          />
          <h2>Free equity delivery</h2>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="images/intradayTrades.svg"
            alt="rs0-img"
            style={{ width: "70%" }}
          />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="images/pricing0.svg"
            alt="rs0-img"
            style={{ width: "70%" }}
          />
          <h2>Free direct MF</h2>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <h3 className="mb-5">Charges explained</h3>
      <div className="row">
        <div className="col-6">
          <h6 className="text-muted">Securities/Commodities transaction tax</h6>
          <p className="small" style={{ color: "gray" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="small" style={{ color: "gray" }}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h6 className="text-muted">Transaction/Turnover Charges</h6>
          <p className="small" style={{ color: "gray" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>

          <p className="small" style={{ color: "gray" }}>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>

          <p className="small" style={{ color: "gray" }}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>

          <p className="small" style={{ color: "gray" }}>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <h6 className="text-muted">Call & trade</h6>
          <p className="small" style={{ color: "gray" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h6 className="text-muted">Stamp charges</h6>
          <p className="small" style={{ color: "gray" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
        </div>
        <div className="col-6">
          <h6 className="text-muted">GST</h6>
          <p className="small" style={{ color: "gray" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h6 className="text-muted">SEBI Charges</h6>
          <p className="small" style={{ color: "gray" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h6 className="text-muted">DP (Depository participant) charges</h6>
          <p
            className="small"
            style={{ color: "gray" }}
          >
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="small" style={{ color: "gray" }}>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="small" style={{ color: "gray" }}>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h6 className="text-muted">Pledging charges</h6>
          <p className="small" style={{ color: "gray" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <h6 className="text-muted">AMC (Account maintenance charges)</h6>
          <p className="small" style={{ color: "gray" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA
          </p>
          <p className="small" style={{ color: "gray" }}>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC
          </p>
        </div>
        <div className="row mb-5">
          <h6 className="text-muted">Disclaimer</h6>
          <p className="small" style={{ color: "gray" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
        <div className="container mb-5">
            <h4 className="mb-3">Charges for account opening
</h4>

<table class="table table-striped mb-5 border">
  <thead>
    <tr>
      <th scope="col">
Type of account</th>
      <th scope="col">Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className="text-muted small" scope="row">Online account</th>
      <td><span style={{color:'white', backgroundColor:'rgb(59, 177, 59)', padding:'4px 10px', fontSize:'0.75rem', borderRadius:'3px'}} >FREE</span></td>
    </tr>
    <tr>
      <th className="text-muted small" scope="row">Offline account</th>
      <td><span style={{color:'white', backgroundColor:'rgb(59, 177, 59)', padding:'4px 10px', fontSize:'0.75rem', borderRadius:'3px'}}>FREE</span></td>
    </tr>
    <tr>
      <th className="text-muted small" scope="row">NRI account (offline only)</th>
      <td>₹ 500</td>
    </tr>
    <tr>
      <th className="text-muted small" scope="row">Partnership, LLP, HUF, or Corporate accounts (offline only)</th>
      <td>₹ 500</td>
    </tr>
    
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
