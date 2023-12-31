import privateClient from "../client/private.client";

const endpoints = {
  getAll: "checkout/get-all",
  getById: ({ id }) => `checkout/detail/${id}`,
  update: ({ id }) => `checkout/update/${id}`
};

const invoiceApi = {
  getAll: async () => {
    try {
      const response = await privateClient.get(
        endpoints.getAll
      );
      return { response };
    } catch (err) {
      return { err };}
  },
  getById: async ({ id }) => {
    try {
      const response = await privateClient.get(
        endpoints.getById({ id })
      );
      return { response };
    } catch (err) {
      return { err };}
  },
  update: async ({ name, address, status, payment, phoneNumber, email, id }) => {
    try {
      const response = await privateClient.put(endpoints.update({ id }), {
        name, address, status, payment, phoneNumber, email
      });
      return { response };
    } catch (err) {
      return { err };}
  }
};

export default invoiceApi;