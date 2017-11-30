import axios from 'axios';

const ItemService = {
  getItems: function(categoryId) {
    return axios.get('getAllItemsForCategory?categoryId='+categoryId).then(response => {
            return response.data;
        }).catch(error => { console.error(error); });
  }
}

export default ItemService;
