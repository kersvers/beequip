import { LeaseCalculationInput } from '@/types/api/graphql';

import { gql, client } from './client';

const LEASE_CALCULATION = gql(/* GraphQL */ `
  query LeaseCalculation($input: LeaseCalculationInput!) {
    leaseCalculation(input: $input) {
      tenor
      totalCosts
      monthlyPayment
      balloonPayment
      handlingFee
      downPayment
    }
  }
`);

const LEASE_BOUNDARIES = gql(/* GraphQL */ `
  query Boundaries {
    boundaries {
      objectYear {
        max
        min
      }
      purchasePrice {
        max
        min
      }
    }
  }
`);

export const fetchLeaseCalculation = (input: LeaseCalculationInput) => {
  return client.query({
    query: LEASE_CALCULATION,
    variables: {
      input,
    },
  });
}

export const fetchLeaseBoundaries = () => {
  return client.query({
    query: LEASE_BOUNDARIES
  });
}