    import axios from "axios";

    const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': 'ed2ee59d-51e0-4d72-8068-6543b4a61865'
        }
    })

    export const userAPI = {
        getUsers(currentPage = 1, pageSize = 10) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            })
        },

        unFollow(u) {
            return instance.delete(`follow/${u.id}`).then(response => {
                return response.data
            })
        },
        follow(u) {
            return instance.post(`follow/${u.id}`).then(response => {
                return response.data
            })
        }
    }

    export const authAPI = {
        authMe() {
            return instance.get(`auth/me`).then(response => {
                return response.data
            })
        },
        login(email, password, rememberMe = false) {
            return instance.post(`auth/login`, {
                email,
                password,
                rememberMe
            }).then(response => {
                return response.data
            })

        },
        logOut() {
            return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
        }
    }


    export const getProfileAPI = {
        getProfile(userId = 1049) {
            return instance.get(`profile/${userId}`).then(response => {
                return response.data
            })
        },
        updateProfile(data){
            return instance.get(`profile` , {data}).then(response => {
                return response
            })
        },
        getStatus(userId) {
            return instance.get(`/profile/status/${userId}`).then(response => {
                return response.data
            })
        },
        updateStatus(status) {
            return instance.put(`/profile/status`, {
                status
            }).then(response => {
                return response
            })
        },
        updatePhoto(file) {
            const formData = new FormData()
            formData.append("image" , file)
            return instance.put(`/profile/photo`, formData , {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            }).then(response => {
                return response
            })
        }
    }