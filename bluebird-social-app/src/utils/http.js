/**
 * Javascript api handle
 *
 * DummyJSON comes with different sets of common resources (resource):
 *
 * /products	100 products
 * /carts	20 carts
 * /users	100 users
 * /posts	150 posts
 * /comments	340 comments
 * /quotes	100 quotes
 * /todos	150 todos
 * /http	Mock HTTP Code Response
 * /auth	to get auth token
 *
 * @link   https://dummyjson.com
 * @since  16-01-23
 */

const GET = async (resource) => {
  const res = await fetch(`${resource}`);
  const data = await res.json();

  return data;
};

const POST = async (resource, body) => {
  const res = await fetch(`${resource}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export { GET, POST };
