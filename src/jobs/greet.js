module.exports.sayHello = async (evt, ctx) => {
  console.log("event:::", evt);
  console.log("context:::", ctx);

  return {
    statusCode: 200,
    body: JSON.stringify({ evtName: "greetInvoker", message: evt }),
  };
};
