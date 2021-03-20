// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const pixeltovw = (size: any, width = 1440) => `${(size / width) * 100}vw`;

export default pixeltovw;
