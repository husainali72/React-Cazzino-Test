import gql from "graphql-tag";

const LIST_BETS = gql`
  query {
    bets {
      id
      name
      time
      game
      bet
      payout
      profit
    }
  }
`;

const SUBS_BETS = gql`
  subscription onbetAdded {
    betAdded {
      id
      name
      time
      game
      bet
      payout
      profit
    }
  }
`;

export {SUBS_BETS, LIST_BETS}