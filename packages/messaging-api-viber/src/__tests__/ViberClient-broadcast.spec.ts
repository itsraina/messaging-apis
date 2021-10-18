import ViberClient from '../ViberClient';

import {
  constants,
  getCurrentContext,
  setupViberServer,
} from './testing-library';

const BROADCAST_LIST = [
  'ABB102akPCRKFaqxWnafEIA==',
  'ABB102akPCRKFaqxWna111==',
  'ABB102akPCRKFaqxWnaf222==',
];

setupViberServer();

it('should support #broadcastMessage', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastMessage(BROADCAST_LIST, {
    type: 'text',
    text: 'Hello',
  });

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'text',
    text: 'Hello',
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastText', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastText(BROADCAST_LIST, 'Hello');

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'text',
    text: 'Hello',
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastPicture', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastPicture(BROADCAST_LIST, {
    text: 'Photo description',
    media: 'http://www.images.com/img.jpg',
    thumbnail: 'http://www.images.com/thumb.jpg',
  });

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'picture',
    text: 'Photo description',
    media: 'http://www.images.com/img.jpg',
    thumbnail: 'http://www.images.com/thumb.jpg',
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastVideo', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastVideo(BROADCAST_LIST, {
    media: 'http://www.images.com/video.mp4',
    size: 10000,
    thumbnail: 'http://www.images.com/thumb.jpg',
    duration: 10,
  });

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'video',
    media: 'http://www.images.com/video.mp4',
    size: 10000,
    thumbnail: 'http://www.images.com/thumb.jpg',
    duration: 10,
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastFile', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastFile(BROADCAST_LIST, {
    media: 'http://www.images.com/file.doc',
    size: 10000,
    fileName: 'name_of_file.doc',
  });

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'file',
    media: 'http://www.images.com/file.doc',
    size: 10000,
    file_name: 'name_of_file.doc',
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastContact', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastContact(BROADCAST_LIST, {
    name: 'Itamar',
    phoneNumber: '+972511123123',
  });

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'contact',
    contact: {
      name: 'Itamar',
      phone_number: '+972511123123',
    },
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastLocation', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastLocation(BROADCAST_LIST, {
    lat: '37.7898',
    lon: '-122.3942',
  });

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'location',
    location: {
      lat: '37.7898',
      lon: '-122.3942',
    },
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastURL', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastURL(
    BROADCAST_LIST,
    'http://developers.viber.com'
  );

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'url',
    media: 'http://developers.viber.com',
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastSticker', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastSticker(BROADCAST_LIST, 46105);

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'sticker',
    sticker_id: 46105,
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});

it('should support #broadcastCarouselContent', async () => {
  const viber = new ViberClient({
    accessToken: constants.AUTH_TOKEN,
    sender: constants.SENDER,
  });

  const res = await viber.broadcastCarouselContent(BROADCAST_LIST, {
    type: 'rich_media',
    buttonsGroupColumns: 6,
    buttonsGroupRows: 7,
    bgColor: '#FFFFFF',
    buttons: [
      {
        columns: 6,
        rows: 3,
        actionType: 'open-url',
        actionBody: 'https://www.google.com',
        image: 'http://html-test:8080/myweb/guy/assets/imageRMsmall2.png',
      },
      {
        columns: 6,
        rows: 2,
        text: '<font color=#323232><b>Headphones with Microphone, On-ear Wired earphones</b></font><font color=#777777><br>Sound Intone </font><font color=#6fc133>$17.99</font>',
        actionType: 'open-url',
        actionBody: 'https://www.google.com',
        textSize: 'medium',
        textVAlign: 'middle',
        textHAlign: 'left',
      },
      {
        columns: 6,
        rows: 1,
        actionType: 'reply',
        actionBody: 'https://www.google.com',
        text: '<font color=#ffffff>Buy</font>',
        textSize: 'large',
        textVAlign: 'middle',
        textHAlign: 'middle',
        image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',
      },
      {
        columns: 6,
        rows: 1,
        actionType: 'reply',
        actionBody: 'https://www.google.com',
        text: '<font color=#8367db>MORE DETAILS</font>',
        textSize: 'small',
        textVAlign: 'middle',
        textHAlign: 'middle',
      },
      {
        columns: 6,
        rows: 3,
        actionType: 'open-url',
        actionBody: 'https://www.google.com',
        image: 'https://s16.postimg.org/wi8jx20wl/image_RMsmall2.png',
      },
      {
        columns: 6,
        rows: 2,
        text: "<font color=#323232><b>Hanes Men's Humor Graphic T-Shirt</b></font><font color=#777777><br>Hanes</font><font color=#6fc133>$10.99</font>",
        actionType: 'open-url',
        actionBody: 'https://www.google.com',
        textSize: 'medium',
        textVAlign: 'middle',
        textHAlign: 'left',
      },
      {
        columns: 6,
        rows: 1,
        actionType: 'reply',
        actionBody: 'https://www.google.com',
        text: '<font color=#ffffff>Buy</font>',
        textSize: 'large',
        textVAlign: 'middle',
        textHAlign: 'middle',
        image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',
      },
      {
        columns: 6,
        rows: 1,
        actionType: 'reply',
        actionBody: 'https://www.google.com',
        text: '<font color=#8367db>MORE DETAILS</font>',
        textSize: 'small',
        textVAlign: 'middle',
        textHAlign: 'middle',
      },
    ],
  });

  expect(res).toEqual({
    status: 0,
    statusMessage: 'ok',
    messageToken: 5098034272017990000,
  });

  const { request } = getCurrentContext();

  expect(request).toBeDefined();
  expect(request?.method).toBe('POST');
  expect(request?.url.href).toBe(
    'https://chatapi.viber.com/pa/broadcast_message'
  );
  expect(request?.body).toEqual({
    broadcast_list: BROADCAST_LIST,
    sender: {
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
    },
    type: 'rich_media',
    min_api_version: 2,
    rich_media: {
      Type: 'rich_media',
      ButtonsGroupColumns: 6,
      ButtonsGroupRows: 7,
      BgColor: '#FFFFFF',
      Buttons: [
        {
          Columns: 6,
          Rows: 3,
          ActionType: 'open-url',
          ActionBody: 'https://www.google.com',
          Image: 'http://html-test:8080/myweb/guy/assets/imageRMsmall2.png',
        },
        {
          Columns: 6,
          Rows: 2,
          Text: '<font color=#323232><b>Headphones with Microphone, On-ear Wired earphones</b></font><font color=#777777><br>Sound Intone </font><font color=#6fc133>$17.99</font>',
          ActionType: 'open-url',
          ActionBody: 'https://www.google.com',
          TextSize: 'medium',
          TextVAlign: 'middle',
          TextHAlign: 'left',
        },
        {
          Columns: 6,
          Rows: 1,
          ActionType: 'reply',
          ActionBody: 'https://www.google.com',
          Text: '<font color=#ffffff>Buy</font>',
          TextSize: 'large',
          TextVAlign: 'middle',
          TextHAlign: 'middle',
          Image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',
        },
        {
          Columns: 6,
          Rows: 1,
          ActionType: 'reply',
          ActionBody: 'https://www.google.com',
          Text: '<font color=#8367db>MORE DETAILS</font>',
          TextSize: 'small',
          TextVAlign: 'middle',
          TextHAlign: 'middle',
        },
        {
          Columns: 6,
          Rows: 3,
          ActionType: 'open-url',
          ActionBody: 'https://www.google.com',
          Image: 'https://s16.postimg.org/wi8jx20wl/image_RMsmall2.png',
        },
        {
          Columns: 6,
          Rows: 2,
          Text: "<font color=#323232><b>Hanes Men's Humor Graphic T-Shirt</b></font><font color=#777777><br>Hanes</font><font color=#6fc133>$10.99</font>",
          ActionType: 'open-url',
          ActionBody: 'https://www.google.com',
          TextSize: 'medium',
          TextVAlign: 'middle',
          TextHAlign: 'left',
        },
        {
          Columns: 6,
          Rows: 1,
          ActionType: 'reply',
          ActionBody: 'https://www.google.com',
          Text: '<font color=#ffffff>Buy</font>',
          TextSize: 'large',
          TextVAlign: 'middle',
          TextHAlign: 'middle',
          Image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',
        },
        {
          Columns: 6,
          Rows: 1,
          ActionType: 'reply',
          ActionBody: 'https://www.google.com',
          Text: '<font color=#8367db>MORE DETAILS</font>',
          TextSize: 'small',
          TextVAlign: 'middle',
          TextHAlign: 'middle',
        },
      ],
    },
  });
  expect(request?.headers.get('Content-Type')).toBe('application/json');
  expect(request?.headers.get('X-Viber-Auth-Token')).toBe(
    '445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9'
  );
});
