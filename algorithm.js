export class Astrologer {
    constructor(id, name, isTopAstrologer = false, multiplier = 1) {
      this.id = id;
      this.name = name;
      this.isTopAstrologer = isTopAstrologer;
      this.multiplier = multiplier;  // Multiplier to increase/decrease flow
      this.flow = 0;  // The number of users assigned to this astrologer
    }
}
  
export const allocateUsersToAstrologers = (users, astrologers) => {
    const totalUsers = users.length;
    let userIndex = 0;
  
    while (userIndex < totalUsers) {
      for (let astrologer of astrologers) {
        const allocationCount = astrologer.isTopAstrologer ? astrologer.multiplier : 1;
  
        for (let i = 0; i < allocationCount && userIndex < totalUsers; i++) {
          astrologer.flow += 1;
          userIndex += 1;
        }
      }
    }
  
    return astrologers;
};
  

  