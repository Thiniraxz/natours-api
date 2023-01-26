module.exports = (fn) => {
  return (req, res, next) => {
    // fn(req, res, next).catch((err) => next(err)) can be written as below
    fn(req, res, next).catch(next);
  };
};
