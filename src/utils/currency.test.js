// Manual mock tests for API Calls
import { convert } from "./currency";

beforeEach(() => {
  fetch.resetMocks();
});

it("convert() success -> finds exchange", async () => {
  fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));

  const rate = await convert("USD", "CAD");

  expect(rate).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("convert() fails -> returns null when exception", async () => {
  fetch.mockReject(() => Promise.reject("API is down"));

  const rate = await convert("USD", "CAD");

  expect(rate).toEqual(null);
  expect(fetch).toHaveBeenCalledWith(
    "https://api.exchangeratesapi.io/latest?base=USD"
  );
});