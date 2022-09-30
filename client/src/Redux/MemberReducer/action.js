import axios from "axios";
import { getLocalData } from "../../Utils/localStorage";
import * as types from './actionTypes'



export const getMemeberUserData = (payload) => {
    return {
        type: types.GET_USER_ALL_DATA,
        payload
    }
}


export const GetMemberUserData = (token) => async (dispatch) => {

    return await axios.get("http://localhost:8080/member/user", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            return (dispatch(getMemeberUserData(res.data)))

        })
        .catch((err) => {
            console.log(err)
        })

}


export const postMember = (payload) => {
    return {
        type: types.POST_MEMBER_DATA,
        payload
    }
}

export const postMemberError = (payload) => {
    return {
        type: types.POST_MEMBER_DATA_EEEOR,
        payload
    }
}

export const PostMemberSignup = (payload) => async (dispatch) => {

    console.log("patload", payload.id)
    console.log(getLocalData("token"))
    return await axios.post(`http://localhost:8080/member/`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {

            return dispatch(postMember(res));
            // console.log(res)

        })
        .catch((err) => {
            console.log(err, "errrrr2222222")
            return dispatch(postMemberError(err))
        });


}


const getMemberData = (payload) => {

    return {
        type: types.GET_MEMBER_ALL_DATA,
        payload
    }
}

export const GetMemberData = (token) => async (dispatch) => {

    return await axios.get("http://localhost:8080/member/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            return (dispatch(getMemberData(res.data)))
            // console.log(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
}


const updateMember = (payload) => {
    return {
        type: types.UPDATE_MEMBER,
        payload
    }
}


export const UpdateMember = (payload) => async (dispatch) => {

    console.log("patload", payload.id)
    console.log(getLocalData("token"))
    return await axios.post(`http://localhost:8080/member/`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {

            return dispatch(postMember(res));
            // console.log(res)

        })
        .catch((err) => {
            console.log(err, "errrrr2222222")
            return dispatch(postMemberError(err))
        });


}