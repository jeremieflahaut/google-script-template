const SpreadsheetApp = {
    openById: (id) => {
      return {

        getActiveSheet: () => ({
          data: [],
          appendRow: function (row) {
            this.data.push(row);
          },
          clear: function () {
            this.data = [];
          },
          getData: function () {
            return this.data;
          },
          
        }),

        getUrl: function () {
          return `https://docs.google.com/spreadsheets/d/${id}`;
        },

        getSheetByName: (name) => {
          // Simuler les données de Sheet 1
          if (id === "140y4M5hL6Zf7hOtJLt9d8FYDNLka9EGEveDm9vlteGY" && name === "sheet") {
            return {
              getDataRange: () => ({
                getValues: () => [
                  ["header1", "header2", "header3", "header4"],
                  ["row1_header1", "row1_header2", "row1_header3", "row1_header4"],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                ],
              }),
            };
          }

          throw new Error(`Feuille inconnue : ${name}`);
        },
      };
    },
  };
  
  module.exports = SpreadsheetApp;
  