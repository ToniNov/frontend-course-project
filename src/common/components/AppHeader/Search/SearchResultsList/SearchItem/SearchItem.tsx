import { FC, ReactNode } from 'react';

import { Button, Group, Mark, Stack, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { getItemTypeLocalization } from './utils';
import { useAppDispatch } from '../../../../../../app/store';
import {AppRouterPath} from "../../../../../../routes/appRouterPath";
import {
  toggleIsSearchOpen
} from "../../../../../../features/application/applicationSlice";
import {HighlightType, SearchItemTypeType} from "../../../../../../api/search/types";


type PropsType = {
  id: string;
  mainText: string;
  highlight?: HighlightType;
  type: SearchItemTypeType;
  secondaryText?: string;
};

export const SearchItem: FC<PropsType> = ({
  id,
  mainText,
  highlight,
  type,
  secondaryText,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const itemType = getItemTypeLocalization(type);

  const texts = [] as ReactNode[];

  if (highlight) {
    highlight.texts.forEach(({ type, value }) => {
      texts.push(type === 'hit' ? <Mark key={value}>{value}</Mark> : value);
    });
  }

  return (
    <Button
      onClick={() => {
        navigate(
          type === 'Collection'
            ? `${AppRouterPath.Collection}/${id}`
            : `${AppRouterPath.Item}/${id}`,
        );
        dispatch(toggleIsSearchOpen());
      }}
      m={2}
      size="xl"
      variant="subtle"
      color="dark"
      styles={{
        inner: {
          justifyContent: 'left',
        },
        label: { maxWidth: '85%' },
      }}
    >
      <Group position="apart" noWrap style={{ maxWidth: '100%' }}>
        <Stack spacing={0} style={{ maxWidth: '100%' }}>
          <Text
            size="md"
            weight={400}
            style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {mainText}
          </Text>
          <Text
            size="xs"
            color="dimmed"
            style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {secondaryText || texts}
          </Text>
        </Stack>
        <Text
          color="dimmed"
          size="xs"
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
          }}
        >
          {itemType}
        </Text>
      </Group>
    </Button>
  );
};
