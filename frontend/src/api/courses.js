import {apiVersion, basePath} from './config';

export function getCoursesApi(){
    const url = `${basePath}/${apiVersion}/get-courses`;

    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}


export function uploadAvatarApi(token, avatar, idCourse){
    const url = `${basePath}/${apiVersion}/upload-avatar-course/${idCourse}`;

    const formData = new FormData();
    formData.append("avatar", avatar, avatar.name);

    const params = {
        method: "PUT",
        body: formData,
        headers: {
            Authorization: token
        }
    }

    return fetch(url, params)
        .then(response => {
            return response.json()
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message;
        })
}

export function getAvatarApi(avatarName) {
    const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`;

    return fetch(url)
        .then(response => {
            return response.url;
        })
        .catch(err => {
            return err.message;
        })
}

export function deleteCourseApi(token, id) {
    const url = `${basePath}/${apiVersion}/delete-course/${id}`

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}

export function addCourseApi(token, course){
    const url = `${basePath}/${apiVersion}/add-course`;

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(course)
    }

    return fetch(url, params)
        .then(response => {
            return response.json()
        })
        .then(result => {
            return result
        })
        .catch(err => {
            return err;
        })
}

export function updateCourseApi(token, id, data) {
    const url = `${basePath}/${apiVersion}/update-course/${id}`

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(data)
    }

    return fetch(url, params)
        .then(response => {
            return response.json()
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}