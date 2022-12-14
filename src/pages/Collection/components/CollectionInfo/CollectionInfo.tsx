import { FC } from 'react';

import {
  Box,
  Group,
  Image,
  Paper,
  Space,
  Spoiler,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import MDEditor from '@uiw/react-md-editor';
import { useTranslation } from 'react-i18next';

import s from './style/CollectionInfo.module.css';
import { CollectionResponseType } from '../../../../api/collections/types';
import { useAppSelector } from '../../../../app/store';
import { selectColorScheme } from '../../../../features/application/selectors';
import { BadgesList } from '../../../../common/components/CollectionCard/BadgesList';

type PropsType = {
  collection: CollectionResponseType;
};

export const CollectionInfo: FC<PropsType> = ({ collection }) => {
  const { t } = useTranslation();
  const colorScheme = useAppSelector(selectColorScheme);

  const { description, title, image, topics } = collection;

  return (
    <Paper shadow="sm" p="xs" className={colorScheme === 'dark' ? s.paperDarkbg : ''}>
      <Space h="sm" />
      <Group align="flex-start" position="apart">
        <Stack spacing="xs" className={!image ? s.fullwidth : s.textWidth}>
          <Text lineClamp={2}>
            <Title order={2} className={s.whitespace}>
              {title}
            </Title>
          </Text>
          <Group spacing="xs">
            <BadgesList topics={topics || []} />
          </Group>
          <Text size="sm">
            <Spoiler
              maxHeight={140}
              showLabel={t('text_spoilerClosed')}
              hideLabel={t('text_spoilnerOpened')}
            >
              <MDEditor.Markdown
                source={description || ''}
                className={`${s.markdown} ${colorScheme === 'light' ? s.textDark : s.textLight}`}
              />
            </Spoiler>
          </Text>
        </Stack>
        {image && (
          <Box>
            <Space h="md" />
            <Image radius="sm" src={image || ''} height={200} width={300} />
          </Box>
        )}
      </Group>
    </Paper>
  );
};
