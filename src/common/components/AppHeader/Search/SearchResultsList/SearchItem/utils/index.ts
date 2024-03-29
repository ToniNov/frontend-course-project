import {SearchItemTypeType} from "../../../../../../../api/search";
import i18n from "../../../../../../../localization/i18n";

export const getItemTypeLocalization = (type: SearchItemTypeType): string => {
  switch (type) {
    case 'Collection':
      return i18n.t('badge_title_collection');
    case 'Comment':
      return i18n.t('badge_title_comment');
    case 'Item':
      return i18n.t('badge_title_item');

    default:
      return '';
  }
};
