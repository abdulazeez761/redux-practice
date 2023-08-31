import { updateFailur, updateStart, updateSucssess } from "../redux/useSlice";
import axios from 'axios'

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post("http://localhost:5000/api/users/2311/update", user);
        dispatch(updateSucssess(res.data));
    } catch (err) {
        dispatch(updateFailur(err.message));

    }
};