import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getUsers = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/users`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getProfile = (userName) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/users/${userName}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const updatePassword = (password, userName) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/changePassword/${userName}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: password,
    });
};

export const registerUser = (requestData) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/registerUser`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
};


export const updateUserProfile = (profile) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/updateProfile`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: profile,
    });
};

export const getAllStaffUsers = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/staffMembers`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const deleteStaffUser = (staffUserID) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/deleteStaffUser/${staffUserID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const holdStaffUser = (staffUserID) => {
    console.log(staffUserID);
    return axios({
        method: "PUT",
        url: `${USER_URL}/holdStaffUser/${staffUserID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const activeStaffUser = (staffUserID) => {
    console.log(staffUserID);
    return axios({
        method: "PUT",
        url: `${USER_URL}/activeStaffUser/${staffUserID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getTrainees = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/trainees`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const deleteTrainee = (traineeID) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/deleteTrainee/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

//GET TRAINER TABLE DETAILS

export const getTrainerTableDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/trainers`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const deleteTrainer = (trainerID) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/deleteTrainer/${trainerID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const holdTrainer = (trainerID) => {
    console.log(trainerID);
    return axios({
        method: "PUT",
        url: `${USER_URL}/holdTrainer/${trainerID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const activeTrainer = (TrainerID) => {
    console.log(TrainerID);
    return axios({
        method: "PUT",
        url: `${USER_URL}/activeTrainer/${TrainerID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getAllAnnouncements = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getAnnouncements`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const deleteAnnouncements = (Description) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/deleteAnnouncement/${Description}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};
export const saveAnnouncement = (requestData) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/saveAnnouncement`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
};





