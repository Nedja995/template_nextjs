function getBoolean(stringValue: string): boolean {
  return stringValue.toLowerCase() === 'false' ? false : true;
};
export default {
  SERVER_URL: process.env.SERVER_URL,
  FAKE_SERVER: getBoolean(process.env.FAKE_SERVER),
};
