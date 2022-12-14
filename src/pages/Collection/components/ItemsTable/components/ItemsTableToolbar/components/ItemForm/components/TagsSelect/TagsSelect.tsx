import React, { FC, ReactNode } from 'react';

import { MultiSelect } from '@mantine/core';
import { IconHash } from '@tabler/icons';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { PropsType } from './types';
import { useAppDispatch } from '../../../../../../../../../../app/store/store';
import { tagsApi } from '../../../../../../../../../../api/tags';


export const TagsSelect: FC<PropsType> = ({ control, tags }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onTagCreate = (query: string): { value: string; label: string } => {
    const item = { value: query, label: query };

    dispatch(
      tagsApi.util.updateQueryData('getTags', undefined, draftPosts => {
        draftPosts.push({ value: query, count: 0 });
      }),
    );

    return item;
  };

  const getCreateLabel = (query: string): ReactNode => `+ Create ${query}`;

  return (
    <Controller
      control={control}
      name="tags"
      defaultValue={[]}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <MultiSelect
          error={error?.message}
          onChange={value => {
            onChange(value);
          }}
          value={value}
          icon={<IconHash size={18} />}
          label={t('label_tags')}
          data= {tags || []}
          placeholder={t('placeholder_text_selectTags') as string | undefined }
          searchable
          creatable
          clearable
          getCreateLabel={getCreateLabel}
          onCreate={onTagCreate}
          maxDropdownHeight={120}
        />
      )}
    />
  );
};
