import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const ToastPromiseDemo = () => {
  const handleUpload = () => {
    const upload = () =>
      new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.3 ? resolve() : reject(new Error("Upload failed"));
        }, 2000);
      });

    toaster.promise(upload, {
      loading: {
        title: "Uploading file...",
        description: "Please wait while we upload your document.",
      },
      success: {
        title: "Upload complete",
        description: "Your file has been uploaded successfully.",
      },
      error: {
        title: "Upload failed",
        description: "Could not upload the file. Please try again.",
      },
    });
  };

  return (
    <Button onClick={handleUpload} size="sm" type="button" variant="outline">
      Run Promise
    </Button>
  );
};

export default ToastPromiseDemo;
