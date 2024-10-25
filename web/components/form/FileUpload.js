import React from 'react';
import { message, Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import AWS from 'aws-sdk';

const FileButton = ({ buttonText }) => {
  const s3BucketName = 'your-s3-bucket-name';
  AWS.config.update({
    accessKeyId: 'process.env.NEXT_PUBLIC_AWS_ACCESS_KEY',
    secretAccessKey: 'process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY',
    region: 'process.env.NEXT_PUBLIC_REGION',
  });

  const props = {
    name: 'file',
    customRequest: ({ file }) => {
      const params = {
        Bucket: s3BucketName,
        Key: file.name,
        Body: file,
      };

      const options = {
        partSize: 10 * 1024 * 1024, // 10MB per part
        queueSize: 4, // Upload 4 parts parallelly
      };

      const upload = s3.upload(params, options);

      upload.on('httpUploadProgress', ({ loaded, total }) => {
        onrogress({ percent: Math.round((loaded / total) * 100) });
      });

      upload.send((err, data) => {
        if (err) {
          onError(err);
          message.error(`${file.name} file upload failed.`);
        } else {
          onSuccess(data);
          message.success(`${file.name} file uploaded successfully`);
          console.log(data); // Optional: Log the S3 upload response
        }
      });
    },
  };

  return (
    <Upload {...props}>
      <button className="h-[64px] w-[230px] text-white bg-black text-[24px]">
        {buttonText}
      </button>
    </Upload>
  );
};

export default FileButton;
