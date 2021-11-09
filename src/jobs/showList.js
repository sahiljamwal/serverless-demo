const jobs = [
  { id: 1, desc: "node-js-development" },
  { id: 2, desc: "angular-js-development" },
];

module.exports.handler = async (evt, ctx) => {
  console.log("event:::", evt);
  console.log("context:::", ctx);

  return {
    statusCode: 200,
    body: JSON.stringify({ jobs }),
  };
};
