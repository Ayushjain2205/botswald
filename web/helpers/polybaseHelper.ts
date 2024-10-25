import { Polybase } from '@polybase/client';

const db = new Polybase({
  defaultNamespace: process.env.NEXT_PUBLIC_NAMESPACE,
});

async function createKnowledgeBaseRecord(
  id: string,
  data: string,
): Promise<void> {
  const knowledgeBaseCollection = db.collection('KnowledgeBase');

  const knowledgeBaseData = await knowledgeBaseCollection.create([id, data]);

  console.log(knowledgeBaseData);
}

async function createEmbeddingsRecord(
  id: string,
  knowledgeBaseId: string,
  data: string,
): Promise<void> {
  const embeddingsCollection = db.collection('Embeddings');

  const embeddingsData = await embeddingsCollection.create([
    id,
    knowledgeBaseId,
    data,
  ]);

  console.log(embeddingsData);
}
