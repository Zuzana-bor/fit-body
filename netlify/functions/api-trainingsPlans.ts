import { Handler } from '@netlify/functions';
import { trainingPlans } from '../../src/data/trainingsPlans';

export const handler: Handler = async ({ queryStringParameters }) => {
  const delay = parseInt(queryStringParameters?.delay || '') || 0;

  await new Promise((resolve) => setTimeout(resolve, delay * 1000));

  return {
    statusCode: 200,
    body: JSON.stringify(trainingPlans),
  };
};
