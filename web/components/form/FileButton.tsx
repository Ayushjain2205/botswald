import React from 'react';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

interface FileButtonProps {
  buttonText: string;
}

const FileButton: React.FC<FileButtonProps> = ({ buttonText }) => {
  const props: UploadProps = {
    name: 'file',
    action: 'https://api.escuelajs.co/api/v1/files/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
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
