export default class TicketAPI {
  baseURL = new URL('https://aviasales-test-api.kata.academy/');

  async getSessionId() {
    const url = new URL('search', this.baseURL);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return await data.searchId;
  }

  async getTickets(sessionID) {
    const url = new URL('tickets');
    url.searchParams.set('searchId', sessionID);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return await data.tickets;
  }
}
