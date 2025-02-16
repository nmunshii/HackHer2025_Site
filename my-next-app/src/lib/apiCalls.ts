import axios from 'axios';

export const sendImageFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post("/api/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        throw new Error("Failed to upload image");
    }
}