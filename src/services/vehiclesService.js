import axiosInstance from './AxiosInstance';

export function getVehicles() {
    return axiosInstance.get('https://mocki.io/v1/ffbeb0eb-f980-4863-9821-7ef59e053120');
      
}

