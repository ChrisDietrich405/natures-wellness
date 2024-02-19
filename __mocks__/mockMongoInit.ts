import {ResourcesInfo, resourcesInfoMock, resourcesMock} from "./collections";
import {Db} from "mongodb";
import type { Resources } from "./collections";

interface ICollectionData {
  name: string;
  data: Resources[] | ResourcesInfo[];
}

export async function initializeDatabase(db: Db): Promise<void> {
  try {
    const collectionsToInitialize: ICollectionData[] = [
      { name: 'resources', data: resourcesMock },
      { name: 'resources-information', data: resourcesInfoMock }
    ];

    for (const { name, data } of collectionsToInitialize) {
      const collectionExists = await db.listCollections({ name }).hasNext();

      if (collectionExists) continue;

      const collection = db.collection(name);

      // @ts-ignore
      await collection.insertMany(data);
    }
  } catch (error) {
    console.error('MongoDb error:', error.message);
  }
}
