function validatorHandler(schema, property) {
  return(req, res, next) => {
    const data = req[property];
      const error = schema.validate();
  }
}

module.exports = validatorHandler;
