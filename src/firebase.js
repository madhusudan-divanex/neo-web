import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getSecureApiData } from "./Services/api";
import { useSelector } from "react-redux";
import { useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCdvvJcViTZWv8XcXAcYseXjZnw_baFJMM",
    authDomain: "neohelth-f9e9d.firebaseapp.com",
    projectId: "neohelth-f9e9d",
    storageBucket: "neohelth-f9e9d.firebasestorage.app",
    messagingSenderId: "494629819602",
    appId: "1:494629819602:web:5764cf4c9174517606890b",
    measurementId: "G-D5WDKBFNJG"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

useEffect(() => {
    if (userId) {

        getUserData()
    }
}, [userId])
const [role, setRole] = useState()
const [userData, setUserData] = useState()
const userId = localStorage.getItem('userId')
async function getUserData() {
    try {
        const res = await getSecureApiData(`user/${userId}`)
        if (res?.success) {
            setUserData(res.data)
            setRole(res.data.role);
        }
    } catch (error) {
    }
}

const profiles = useSelector(state => {
    if (role === 'patient') return state.patient.profiles;
    if (role === 'doctor') return state.doctor.profiles;
    return null;
});

export const listenForegroundNotification = (navigate) => {
    const messaging = getMessaging();

    onMessage(messaging, (payload) => {
        const data = payload.data;
        navigate(`/chat/${data.conversationId}`);
        //   if (data?.type === "chat") {
        //     navigate(`/chat/${data.conversationId}`);
        //   }

        //   if (data?.type === "chat") {
        //     navigate(`/chat/${data.fromUserId}`);
        //   }
    });
};