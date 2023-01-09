import { useEffect } from 'react';
import { FieldType } from '../../../../../../../api/collections/types';

import { UseResetFormAndQueryArgsType, UseSendFormOnImageUploadArgsType } from './types';

export const useResetFormAndQuery = ({
  collectionReset,
  imageReset,
  isCreateCollectionSuccess,
  setShowForm,
  isUpdateCollectionSuccess,
  updateCollectionReset,
}: UseResetFormAndQueryArgsType): void => {
  useEffect(() => {
    if (isCreateCollectionSuccess || isUpdateCollectionSuccess) {
      collectionReset();
      updateCollectionReset();
      imageReset();
      setShowForm(false);
    }
  }, [
    collectionReset,
    imageReset,
    isCreateCollectionSuccess,
    isUpdateCollectionSuccess,
    setShowForm,
    updateCollectionReset,
  ]);
};

export const useSendFormOnImageUpload = ({
  createCollection,
  form,
  id,
  imageData,
  isUploadSuccess,
  updateCollection,
  isModeEdit,
  collectionId,
}: UseSendFormOnImageUploadArgsType): void => {

  console.log( "imageDataUrl", imageData)

  useEffect(() => {
    if (isUploadSuccess && imageData) {
      const { description, itemFields, title, topics } = form.values;

      if (isModeEdit) {
        updateCollection({
          owner: id!,
          id: collectionId,
          description,
          image: imageData.data.url,
          topics,
          title,
          itemFields: itemFields.map(
            field => ({ title: field.title, type: field.type } as FieldType),
          ),
        });

        return;
      }
      createCollection({
        image: imageData.data.url,
        owner: id!,
        description,
        itemFields: itemFields.map(
          field => ({ title: field.title, type: field.type } as FieldType),
        ),
        title,
        topics,
      });
    }
  }, [
    collectionId,
    createCollection,
    isModeEdit,
    form.values,
    id,
    imageData,
    isUploadSuccess,
    updateCollection,
  ]);
};
