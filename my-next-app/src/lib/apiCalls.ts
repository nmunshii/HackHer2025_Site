import axios from 'axios';

export const sendImageFile = async (file: File, email: string) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post("http://127.0.0.1:3010/api/upload", formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            'email': email
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error);
        return { success: false, message: "Failed to upload image" };
    }
}

export const verifyAPI = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:3010/api/");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error verifying:", error);
        return { success: false, message: "Verification failed" };
    }
}
