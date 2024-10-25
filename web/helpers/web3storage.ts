import { Web3Storage, getFilesFromPath } from 'web3.storage';

async function uploadFiles(
  apiToken: string,
  knowledgeBasePath: string,
  embeddingsPath: string,
): Promise<string> {
  const client = new Web3Storage({ token: apiToken });

  const knowledgeBaseFile = await getFilesFromPath(knowledgeBasePath);
  const embeddingsFile = await getFilesFromPath(embeddingsPath);

  const files = [...knowledgeBaseFile, ...embeddingsFile];
  const cid: string = await client.put(files);
  console.log('Uploaded files with CID:', cid);

  return cid;
}
