module.exports = {
  generateNumber: function(min, max) {
    return Math.floor(Math.random() * (parseFloat(max) - parseFloat(min) + 1)) + parseFloat(min);
  }
};