export const topicBadgeColorPicker = (title: string): string => {
  switch (title) {
    case 'Books':
      return 'teal';
    case 'Movies':
      return 'orange';
    case 'Cars':
      return 'green';
    case 'TV':
      return 'red';
    case 'Art':
      return 'violet';
    case 'IT':
      return 'blue';
    case 'Games':
      return 'yellow';

    default:
      return 'green';
  }
};
