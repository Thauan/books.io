const delay: any = (timer: number) => {
  return new Promise((res) => setTimeout(res, timer));
};

export default delay;
