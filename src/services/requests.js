import api from '../network/axios';

const requests = {
  post: {
    create: async (data) => {
      await api.post('cards', data);
    },
  },
  get: {
    all: async () => {
      const { data } = await api.get('cards');
      return data;
    },
    byId: async (id) => {
      const { data } = await api.get(`cards/${id}`);
      return data;
    },
  },
  put: {
    update: async (id, data) => {
      await api.put(`cards/${id}`, data);
    },
  },
};

export default requests;
