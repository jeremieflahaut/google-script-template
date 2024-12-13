const AdsApp = {
  /**
   * 
   */
  campaigns: () => ({
    /**
     * 
     */
    withIds: (ids) => ({
      /**
       * 
       */
      get: () => {
        return {
          /**
           * 
           * @returns 
           */
          hasNext: () => ids.length > 0,
          /**
           * 
           *
           */
          next: () => {
            const id = ids.shift();

            return {
              /**
               * 
               *
               */
              getId: () => id,
              /**
               * 
               */
              bidding: () => ({
                /**
                 * 
                 */
                setTargetRoas: (roas) => {},
              }),
              /**
                * 
                */
              getBiddingStrategyType: () => {
                const randomStrategy = Math.floor(Math.random() * 2) + 1; // 1 ou 2
                return randomStrategy === 1 ? "MAXIMIZE_CONVERSION_VALUE" : "MANUAL_CPC";
              },
            };
          },

        };
      },
    }),
  }),
  /**
   * 
   */


};

module.exports = AdsApp;