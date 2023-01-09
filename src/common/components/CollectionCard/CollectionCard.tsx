import {FC, MouseEventHandler} from 'react';

import {Badge, Box, Card, Group, Image, Text} from '@mantine/core';
import {IconUser} from '@tabler/icons';
import MDEditor from '@uiw/react-md-editor';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

import {BadgesList} from './BadgesList';
import {CollectionCardMenu} from './CollectionCardMenu';
import {ItemsFieldsAccordion} from './ItemsFieldsAccordion';

import {AppRouterPath} from "../../../routes/appRouterPath";
import {useAppSelector} from '../../../app/store/store';
import {
    selectColorScheme,
    selectIsAdmin,
    selectUserId
} from '../../../features/application/selectors';
import {PropsType} from "./types";

export const CollectionCard: FC<PropsType> = ({
                                                  collection,
                                                  setCollectionForEdit,
                                                  setShowForm,
                                              }) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const colorScheme = useAppSelector(selectColorScheme);
    const isAdmin = useAppSelector(selectIsAdmin);
    const userId = useAppSelector(selectUserId);
    const {
        id,
        owner: {id: ownerId, name: ownerName},
        image,
        description,
        itemFields,
        topics,
        title,
    } = collection;

    const isAdminOrOwner = isAdmin || userId === ownerId;

    const onCardClick = (): void => {
        navigate(`${AppRouterPath.Collection}/${id}`);
    };

    const onOwnerBadgeClick: MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();
        navigate(`${AppRouterPath.Collection}/${ownerId}`);
    };

    const positionAbsolute = {
        position: "absolute",
        zIndex: "1",
    };

    const badgeHover = {
        cursor: "pointer",
    };

    const markdown = {
        whiteSpace: "pre-wrap",
        backgroundColor: "transparent",
    };

    const textDark = {
        color: "black"
    };


    return (
        <Card
            withBorder
            shadow="sm"
            radius="md"
            style={{width: "300px"}}
            onClick={onCardClick}
        >
            <Card.Section>
                <Group position="apart" noWrap>
                    <Text weight={500} m="xs" lineClamp={1}>
                        {title}
                    </Text>
                    {isAdminOrOwner && (
                        <CollectionCardMenu
                            setCollectionForEdit={setCollectionForEdit}
                            setShowForm={setShowForm}
                            collection={collection}
                        />
                    )}
                </Group>
            </Card.Section>
            <Card.Section withBorder>
                <Box style={{position: "relative"}}>
                    <Badge
                        className={`${positionAbsolute} ${badgeHover}`}
                        size="xs"
                        variant="gradient"
                        gradient={{from: 'indigo', to: 'cyan'}}
                        ml={3}
                        mt={3}
                        title={t('title_owner')}
                        onClick={onOwnerBadgeClick}
                    >
                        <Group spacing={3}>
                            <IconUser size={12}/>
                            {ownerName}
                        </Group>
                    </Badge>

                    <Image
                        src={image || undefined}
                        height={200}
                        width={300}
                        fit="cover"
                        withPlaceholder
                    />
                </Box>
            </Card.Section>
            <Card.Section p="xs">
                <Text size="sm" lineClamp={4}>
                    <MDEditor.Markdown
                        source={description}
                        className={`${markdown} ${colorScheme === 'light' ? textDark : ''}`}
                    />
                </Text>
            </Card.Section>
            {itemFields.length > 0 && <ItemsFieldsAccordion itemFields={itemFields}/>}
            <Card.Section p="xs">
                <BadgesList topics={topics}/>
            </Card.Section>
        </Card>
    );

};
