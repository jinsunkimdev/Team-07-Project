import { UploadClient } from "@uploadcare/upload-client";

const uploadcareClient = new UploadClient({
  publicKey: "83ffd3247bd4235d49f5",
});

export const uploadToUploadcare = async (file) => {
  try {
    // 파일 업로드
    const uploadedFile = await uploadcareClient.uploadFile(file);

    // 업로드된 파일의 CDN URL 반환
    return uploadedFile.cdnUrl;
  } catch (error) {
    console.error("Uploadcare 업로드 실패:", error);
    throw error;
  }
};
