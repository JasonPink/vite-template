import request from '@/utils/request';

const getInfo = () => {
  return request({
    url: '/api/60s/index',
    methods: 'get'
  });
};

export { getInfo };
