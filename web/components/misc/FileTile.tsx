import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

interface FileTileProps {
  id: number;
  name: string;
  onRemove: (id: number) => void;
}

const FileTile: React.FC<FileTileProps> = ({ id, name, onRemove }) => {
  const docs = [
    {
      uri: '/book.pdf',
    },
  ];

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="relative h-[89px] w-[225px] border-black border-[1px] rounded-[4px]">
      <div className="absolute top-[8px] right-[8px]">
        <img
          className="cursor-pointer"
          src="/close.svg"
          alt=""
          onClick={handleRemove}
        />
      </div>
      <div className="flex flex-row p-[16px] gap-[8px]">
        <label htmlFor={`doc_modal_${id}`} className="cursor-pointer">
          <img src="/file.svg" alt="" />
        </label>
        <p className="text-[14px] w-[130px]">{name}</p>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`doc_modal_${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-2 border-black rounded-[4px]">
          <DocViewer
            documents={docs}
            initialActiveDocument={docs[0]}
            pluginRenderers={DocViewerRenderers}
          />
        </div>
        <label className="modal-backdrop" htmlFor={`doc_modal_${id}`}>
          Close
        </label>
      </div>
    </div>
  );
};

export default FileTile;
