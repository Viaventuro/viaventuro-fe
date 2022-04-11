import { print } from 'graphql';

const API_TOKEN = process.env.DATOCMS_API_TOKEN ?? '';

async function fetchAPI(query, { variables, preview } = {}) {
  console.log(API_TOKEN);
  const res = await fetch(
    `https://graphql.datocms.com${
      process.env.DATOCMS_ENVIRONMENT ? `/environments/${process.env.DATOCMS_ENVIRONMENT}` : ''
    }${preview ? '/preview' : ''}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        query: print(query),
        variables,
      }),
    },
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export default fetchAPI;
