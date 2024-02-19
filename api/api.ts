import request from '@/utils/request'; 
export const getWorkSiteDateils = (data?: any) => {
    return request('/work_site_detail', 'get', data);
};
