import { Flip, Slide, toast } from "react-toastify"

// Get all Favorite item local storage
const getAllFavorite = () => {
      const all = localStorage.getItem('favorites')
      if (all) {
            const favorite = JSON.parse(all)
            return favorite
      } else {
            return []
      }
}


// Add to Favorite item local storage
const addFavorite = coffee => {
      // get all previously saved item of local storage
      const favorites = getAllFavorite();
      const isExist = favorites.find(item => item.id == coffee.id)
      if (isExist) return toast.warning('Coffee Already Exists !')
      favorites.push(coffee);
      localStorage.setItem('favorites', JSON.stringify(favorites))
      toast.success('Successfully Added !', {
            transition: Flip,
      })
}


// Remove to Favorite item local storage
const removeFavorite = id => {
      // get all previously saved item of local storage
      const favorites = getAllFavorite();
      const remaning = favorites.filter((coffee) => coffee.id !== id)
      localStorage.setItem('favorites', JSON.stringify(remaning))
      toast.success('Successfully Removed !', {
            transition: Slide,
      })
}


export { addFavorite, getAllFavorite, removeFavorite } 