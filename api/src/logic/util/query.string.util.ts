export const toObject = (raw: string) =>
  JSON.parse(
    '{"' + raw.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    (key, value) => (key === "" ? value : decodeURIComponent(value))
  );
