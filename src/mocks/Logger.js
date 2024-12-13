const Logger = {
    logs: [],
    log: function (message) {
      this.logs.push(message);
      console.log(`[Logger] ${message}`);
    },
    getLogs: function () {
      return this.logs;
    },
    clearLogs: function () {
      this.logs = [];
    },
  };
  
  module.exports = Logger;