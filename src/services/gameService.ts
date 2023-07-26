class GameService {
  get(msg: string) {
    return `Hi ${msg} yay game service started!`;
  }
}
export default new GameService();
