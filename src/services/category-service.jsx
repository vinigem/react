import axios from 'axios';

const CategoryService = {
  getAllCategories: function() {
    return axios.get('getAllCategories').then(response => {
            return response.data;
        }).catch(error => { console.error(error); });
  }
}

export default CategoryService;
