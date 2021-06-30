export const size = {
  mobile1: "360px",
  mobile2: "375px",
  mobile3: "425px",
  tablet1: "500px",
  tablet2: "768px",
  tablet3: "1024px",
  laptop1: "1366px",
  laptop2: "1920px",
};

const devices = {
  mobile1: `(min-width: ${size.mobile1})`,
  mobile2: `(min-width: ${size.mobile2})`,
  mobile3: `(min-width: ${size.mobile3})`,
  tablet1: `(min-width: ${size.tablet1})`,
  tablet2: `(min-width: ${size.tablet2})`,
  tablet3: `(min-width: ${size.tablet3})`,
  laptop1: `(min-width: ${size.laptop1})`,
  laptop2: `(min-width: ${size.laptop2})`,
};

export default devices;
