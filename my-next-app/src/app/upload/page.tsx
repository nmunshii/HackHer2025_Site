"use client";
import React from 'react';
import Link from "next/link";
import { UploadButton } from "@bytescale/upload-widget-react";
import { sendImageFile } from '@/lib/apiCalls';
import { UploadWidgetReactConfig } from '@bytescale/upload-widget-react/dist/UploadWidgetReactConfig';

export default function Upload() {

    // Full Configuration:
    // https://www.bytescale.com/docs/upload-widget#configuration
    const options = {
        apiKey: "free", // Get API keys from: www.bytescale.com
        multi: false,
        maxFileCount: 1
    };

    return (
        <div className="min-h-screen flex flex-col bg-[url('/background.jpg')] bg-cover bg-center">
            {/* Header Bar */}
            <div className="w-full h-[68px] bg-black relative">
                <div className="w-full h-full px-8 relative">
                    {/* Navigation Buttons */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2">
                        <div className="flex gap-6 text-sky-100">
                            <Link href="/welcome" passHref>
                                <div className="hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                                    Home
                                </div>
                            </Link>
                            <Link href="/upload" passHref>
                                <div className="hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                                    Upload
                                </div>
                            </Link>
                            <Link href="/verify" passHref>
                                <div className="hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                                    Verify
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Auth Buttons and Logo */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-6">
                    <Link href="/signup" passHref>
                        <div className="text-sky-100 hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                            Exit
                        </div>
                    </Link>
                    <span className="text-sky-100 text-2xl font-extrabold tracking-wider">© DDD</span>
                </div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="w-full max-w-[1480px] mx-auto px-8 flex flex-col items-center mt-[-100px]">
                    <h1 className="text-5xl font-bold tracking-tight text-black mb-8 text-center drop-shadow-[0_4px_3px_rgba(0,0,0,0.3)]">
                        Upload files to be encrypted
                    </h1>

                    <UploadButton options={options}
                        onComplete={async (files) => {
                            try {
                                const file = files[0]; // Since maxFileCount is 1
                                const response = await fetch(file.fileUrl);
                                const blob = await response.blob();

                                // Convert blob to File object
                                const convertedFile = new File([blob], file.originalFile.file.name || "", {
                                    type:file.originalFile.file.type
                                });

                                await sendImageFile(convertedFile);
                                alert("File uploaded and sent successfully.");
                            } catch (error) {
                                console.error("Error processing file:", error);
                                alert("Error uploading file. Please try again.");
                            }
                        }}>
                        {({ onClick }) =>
                            <button onClick={onClick} className="flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-[15px] hover:bg-purple-700 transition-colors shadow-[0_8px_15px_rgba(0,0,0,0.3)] mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                                Select File(s)
                            </button>
                        }
                    </UploadButton>
                    <div className="w-200 h-50 bg-gray-100 rounded-lg p-8 text-gray-500 flex items-center justify-center">
                        (Uploaded files will show up here)
                    </div>
                </div>
            </div>
        </div>
    );
}