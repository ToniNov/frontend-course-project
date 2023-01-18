import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      button_signIn: 'Login',
      button_signUp: 'Sign up',
      title_signUp: 'Sign up',
      button_text_signUp: "Don't have an account?",
      button_text_login: 'Already have an account?',
      button_signOut: 'Sign out',
      button_title_homePage: 'Home page',
      button_title_userPage: 'User Page',
      button_search: 'Search',
      button_russian: 'Russian',
      button_english: 'English',
      button_title_toggleColorScheme: 'Toggle color scheme',
      divider_login_text:'Continue through social networks ',
      button_adminPanel: 'Admin panel',
      error_email: 'Invalid email',
      error_password: 'Password length should be 6 and more',
      label_email: 'Email',
      label_password: 'Password',
      label_rememberMe: 'Remember me',
      error_required: 'Required',
      error_topics: 'Pick at least one topic',
      error_tags: 'Pick at least one tag',
      error_confirm_password: 'Passwords do not match',
      label_name: 'Name',
      placeholder_name: 'Your name',
      placeholder_password: 'Your password must be more than 6 characters long ',
      label_confirm_password: 'Confirm password',
      button_text_signIn: 'if you have an account',
      error_title_userAccess: 'Not allowed',
      error_message_userAccess: "Basic users can't access this resource",
      title_access: 'Access',
      title_status: 'Status',
      button_title_pageSize: 'Choose page size',
      button_title_toggleAll: 'Toggle all',
      button_title_choosePage: 'Choose page',
      button_title_blockUser: 'Block user',
      button_title_unBlockUser: 'Unblock user',
      button_title_deleteUser: 'Delete user',
      button_title_adminRights: 'Admin rights',
      button_title_basicRights: 'Basic rights',
      button_text_delete: 'Delete',
      button_text_admin: 'Admin',
      button_text_basic: 'Basic user',
      error_title_userStatus: 'Account is blocked',
      error_message_userStatus: 'Contact administrator',
      error_title_accountExists: 'Account doesnt exist',
      error_message_accountExists: 'You can sign up to create new account',
      error_title_emailTaken: 'Email allready taken',
      error_message_emailTaken: 'If its your email you can sign in',
      text_access_admin: 'admin',
      text_access_basic: 'basic user',
      text_access_active: 'active',
      text_access_blocked: 'blocked',
      error_title_nameTaken: 'Name allready taken',
      error_message_nameTaken: 'Try other name',
      label_title: 'Title',
      placeholder_title: 'Collection Title',
      label_description: 'Description',
      placeholder_description: 'Books about front end',
      label_topics: 'Topics',
      placeholder_topics: 'Pick relevant topics',
      button_text_uploadImage: 'Upload image',
      button_title_addCollection: 'Add collection',
      modal_title_createCollection: 'Create collection',
      modal_title_editCollection: 'Edit collection',
      text_user: 'user',
      text_collectionsOfUser: 'Collections of user',
      text_yourCollections: 'Your collections',
      title_collectionMenu: 'Collection menu',
      menu_item_text_collectionPage: 'Collection page',
      menu_item_text_edit: 'Edit',
      menu_item_text_delete: 'Delete',
      accordion_text_additionalInfo: 'Additional info',
      title_owner: 'Owner',
      title_topic: 'Topic',
      title_number: 'Number',
      title_date: 'Date',
      title_title: 'String',
      title_text: 'Text',
      title_check: 'Option',
      text_itemsFields: 'Items additional fields',
      text_fieldType: 'Field type',
      text_fieldTitle: 'Field title',
      modal_submit_text_edit: 'Save',
      modal_submit_text_create: 'Create',
      imageDrop_text: 'Drag image here or click to select file',
      text_spoilerClosed: 'Show more',
      text_spoilnerOpened: 'Hide',
      button_title_addItem: 'Add item',
      button_title_editItem: 'Edit item',
      label_tags: 'Tags',
      modal_title_editItem: 'Edit item',
      modal_title_addItem: 'Add item',
      placeholder_text_selectTags: 'Select tags',
      placeholder_text_item: 'Item name',
      placeholder_text_date: 'August 4, 2022',
      placeholder_text_text: 'Some text',
      placeholder_text_string: 'Some string',
      placeholder_text_filterByTags: 'Filter by tags',
      button_title_sortUp: 'Descending',
      button_title_sortDown: 'Ascending',
      badge_title_tag: 'tag',
      comment_input_label: 'Leave comment',
      comment_button_text: 'Send',
      button_text_like: 'Like!',
      button_text_unlike: 'Do not like anymore',
      badge_title_collection: 'Collection',
      badge_title_item: 'Item',
      badge_title_comment: 'Comment',
      main_page_title_items: 'Last added items',
      main_page_title_collections: 'Largest collections',
      field_validation_text_exist: 'Field allready exists',
      page_title_itemsByTag: 'Items by tag',
      button_text_download: 'Download',
      secret_place_title: 'You have found a secret place.',
      secret_place_description: 'Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.',
      button_go_home: 'Take me back to home page',
    },
  },
  ru: {
    translation: {
      button_signIn: 'Войти',
      button_signUp: 'Зарегистрироваться',
      title_signUp: 'Регистрация',
      button_text_signUp: 'У вас нет учетной записи?',
      button_text_login: 'У вас уже есть учетная запись?',
      button_signOut: 'Выйти',
      button_title_homePage: 'Домашняя страница',
      button_title_userPage: 'Страница пользователя',
      button_search: 'Поиск',
      button_russian: 'Русский',
      button_english: 'Английский',
      button_title_toggleColorScheme: 'Переключить тему',
      divider_login_text:'Продолжить через социальные сети',
      button_adminPanel: 'Панель администратора',
      error_email: 'Неправильный почтовый адрес',
      error_password: 'Пароль должен состоять из 6 или более символов',
      label_email: 'Почта',
      label_password: 'Пароль',
      label_rememberMe: 'Запомнить',
      error_required: 'Обязательное поле',
      error_topics: 'Выберите хотя бы одну тему',
      error_tags: 'Выберите хотя бы один тэг',
      error_confirm_password: 'Пароли должны совпадать',
      label_name: 'Имя',
      placeholder_name: 'Ваше имя',
      placeholder_password: 'Ваш пароль должен быть больше 6 символов',
      label_confirm_password: 'Подтвердите пароль',
      button_text_signIn: 'в случае, если у вас есть аккаунт.',
      error_title_userAccess: 'Доступ запрещен',
      error_message_userAccess: 'Базовые пользователи не имеют доступа к этому ресурсу',
      title_access: 'Доступ',
      title_status: 'Статус',
      button_title_pageSize: 'Выбрать размер страницы',
      button_title_toggleAll: 'Переключить все',
      button_title_choosePage: 'Переключить страницу',
      button_title_blockUser: 'Заблокировать пользователя',
      button_title_unBlockUser: 'Разблокировать пользователя',
      button_title_deleteUser: 'Удалить пользователя',
      button_title_adminRights: 'Сделать администратором',
      button_title_basicRights: 'Сделать обычным пользователем',
      button_text_delete: 'Удалить',
      button_text_admin: 'Администратор',
      button_text_basic: 'Обычный пользователь',
      error_title_userStatus: 'Аккаунт заблокирован',
      error_message_userStatus: 'Свяжитесь с администратором',
      error_title_accountExists: 'Аккаунт не найден',
      error_message_accountExists: 'Вам нужно зарегистрироваться в системе',
      error_title_emailTaken: 'Почтовый адрес занят',
      error_message_emailTaken: 'Если это ваш почтовый адрес, вы можете войти в систему',
      text_access_admin: 'администратор',
      text_access_basic: 'обычный пользователь',
      text_access_active: 'активен',
      text_access_blocked: 'заблокирован',
      error_title_nameTaken: 'Имя уже занято',
      error_message_nameTaken: 'Попробуйте другое',
      label_title: 'Название',
      placeholder_title: 'Заголовок коллекции',
      label_description: 'Описание',
      placeholder_description: 'Книги о программировании',
      label_topics: 'Темы',
      placeholder_topics: 'Выберите подходящие темы',
      button_text_uploadImage: 'Загрузить изображение',
      button_title_addCollection: 'Добавить коллекцию',
      modal_title_createCollection: 'Создать коллекцию',
      modal_title_editCollection: 'Редактировать коллекцию',
      text_user: 'пользователь',
      text_collectionsOfUser: 'Коллекции пользователя',
      text_yourCollections: 'Ваши коллекции',
      title_collectionMenu: 'Меню коллекции',
      menu_item_text_collectionPage: 'Страница коллекции',
      menu_item_text_edit: 'Редактировать',
      menu_item_text_delete: 'Удалить',
      accordion_text_additionalInfo: 'Дополнительная информация',
      title_owner: 'Владелец',
      title_topic: 'Тема',
      title_number: 'Число',
      title_date: 'Дата',
      title_title: 'Строка',
      title_text: 'Текст',
      title_check: 'Опция',
      text_itemsFields: 'Дополнительные поля элемента',
      text_fieldType: 'Тип поля',
      text_fieldTitle: 'Название поля',
      modal_submit_text_edit: 'Сохранить',
      modal_submit_text_create: 'Создать',
      imageDrop_text: 'Перетащите изображение или нажмите и выберите файл',
      text_spoilerClosed: 'Показать больше',
      text_spoilnerOpened: 'Спрятать',
      button_title_addItem: 'Добавить айтем',
      button_title_editItem: 'Редактировать айтем',
      label_tags: 'Тэги',
      modal_title_editItem: 'Редактировать айтем',
      modal_title_addItem: 'Создать айтем',
      placeholder_text_selectTags: 'Выберите тэги',
      placeholder_text_item: 'Название айтема',
      placeholder_text_date: 'Август 4, 2022',
      placeholder_text_text: 'Какой-то текст',
      placeholder_text_string: 'Какая-то строка',
      placeholder_text_filterByTags: 'Отфильтровать по тегам',
      button_title_sortUp: 'По убыванию',
      button_title_sortDown: 'По возрастанию',
      badge_title_tag: 'тэг',
      comment_input_label: 'Оставить комментарий',
      comment_button_text: 'Отправить',
      button_text_like: 'Нравится!',
      button_text_unlike: 'Больше не нравится',
      badge_title_collection: 'Коллекция',
      badge_title_item: 'Айтем',
      badge_title_comment: 'Комментарий',
      main_page_title_items: 'Последние добавленные айтемы',
      main_page_title_collections: 'Самые большие коллекции',
      field_validation_text_exist: 'Такое поле уже есть',
      page_title_itemsByTag: 'Айтемы по тэгу',
      button_text_download: 'Скачать',
      secret_place_title: 'Вы нашли тайное место.',
      secret_place_description: 'К сожалению, это всего лишь страница 404. Возможно, вы ошиблись при вводе адреса или страница была перемещена по другому URL-адресу.',
      button_go_home: 'Верните меня на главную страницу',
    },
  },
};

i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });

export default i18n;
