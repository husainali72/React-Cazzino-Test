import React from "react";
import { Column } from "../../uiComponents";
import BitcoinIcon from "../../assets/images/bitcoin.png";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { SUBS_BETS, LIST_BETS } from "../../gqlqueries";

let betsList = [];

const SectionSecond = () => {
  const { data, refetch } = useQuery(LIST_BETS);
  if (data) {
    data.bets.map(row => {
      if (betsList.length) {
        let noMatch = betsList.filter(single => single.id === row.id);
        if (!noMatch.length) {
          if (betsList.length === 10) {
            betsList.splice(9, 1);
          }
          betsList.splice(0, 0, row);
        }
      } else {
        betsList = data.bets;
      }
    });
  }

  const subs = useSubscription(SUBS_BETS);
  if (subs && subs.data) {
    refetch();
  }

  const getFormattedDatetime = date => {
    let year = date.getFullYear().toString().substr(-2);
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <Column size="big" border="0">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th className="time-th">Time</th>
              <th className="bet-th">Bet</th>
              <th>Multiplier</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {betsList.map((item, index) => (
              <tr key={index} className="table-rows">
                <td className="time-td">
                  <div>{getFormattedDatetime(new Date(item.time))}</div>
                </td>
                <td className="bet-td">
                  <div>
                    <img
                      src={BitcoinIcon}
                      className="bitcoin-icon"
                      alt="bitcoin"
                    />{" "}
                    {item.bet / 1000}
                  </div>
                </td>
                <td className="multiplier-td">
                  <div>x{item.payout / 4}</div>
                </td>
                <td className="profit-td">
                  <div>
                    <img
                      src={BitcoinIcon}
                      className="bitcoin-icon"
                      alt="bitcoin"
                    />
                    <span className={item.profit < 0 ? "minus" : "plus"}>
                      {item.profit > 0 && "+"}
                      {item.profit / 1000}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Column>
  );
};

export default SectionSecond;
