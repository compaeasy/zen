const data = [
  {
    type: 'header',
    name: 'header',
    logo: {
      
    },
    menuButtons: [
      {
        data: 'Download',
        target: 'download'
      },
      {
        data: 'Warranty',
        target: 'warranty'
      },
      {
        data: 'Care',
        target: 'care'
      },
      {
        data: 'Cashback',
        target: 'cashback'
      },
      {
        data: 'Clients',
        target: 'clients'
      },
    ]
  },
  {
    type: 'section',
    name: 'download',
    title: {
      data: 'Peaceful shopping mindful money',
      priority: 1
    },
    texts: [
      'See how we can help with making your shopping experience and money management more ZEN.' 
    ],
    image: {
       data: 'image/1.jpg', 
       alternate: 'some description',
    },
    brandlinks: [
      {
        name: 'apple',
        url: 'https://apple.com',
        texts: [
          'Download on the',
          'App Store'
        ] 
      },
      {
        name: 'google',
        url: 'https://google.com',
        texts: [
          'Get it on',
          'Google Play'
        ]
      }
    ],
  },
  {
    type: 'section',
    name: 'warranty',
    title: {
      data: '1-year warranty boost',
      priority: 2
    },
    texts: [
      'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
      'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.'
    ],
    image: {
      data: 'image/2.jpg',
      alernate: 'some description',
    }
  },
  {
    type: 'section',
    name: 'care',
    title: {
      data: 'ZEN Care',
      priority: 2
    },
    texts: [
      'Shopping online is usually a delightful experience. Until it\'s not',
      'Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.',
      'But, here comes ZEN Care: a free, built-in shopping protection.'
    ],
    image: {
      data: 'image/3.jpg',
      alternate: 'some description',
    }
  },
  {
    type: 'cashback',
    name: 'cashback',
    title: {
      data: 'and cashback!',
      priority: 2
    },
    texts: [
      'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.',
      'We gave it a thought and made cashback way more friendly.',
      'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.'
    ],
    buttonText: 'Order a consultation',
  },
  {
    type: 'clients',
    name: 'clients',
    images: [
      {
        data: 'image/clients/brand1.svg',
        alternate: 'some description1'
      },
      {
        data: 'image/clients/brand2.svg',
        alternate: 'some description2'
      },
      {
        data: 'image/clients/brand3.svg',
        alternate: 'some description3' 
      },
      {
        data: 'image/clients/brand4.svg',
        alternate: 'some description4' 
      },
      {
        data: 'image/clients/brand5.svg',
        alternate: 'some description5' 
      },
      {
        data: 'image/clients/brand6.svg',
        alternate: 'some description6' 
      },
      {
        data: 'image/clients/brand7.svg',
        alternate: 'some description7' 
      },
      {
        data: 'image/clients/brand8.svg',
        alternate: 'some description8' 
      },
    ],
  },
  {
    type: 'footer',
    name: 'footer',
    titles: [
      {
        data: 'Learn',
        priority: 3
      },
      {
        data: 'Discover',
        priority: 3
      },
      {
        data: 'Offer',
        priority: 3
      },
      {
        data: 'Language',
        priority: 3
      },
      {
        data: 'Follow us',
        priority: 3
      },
      {
        data: 'Contact',
        priority: 3
      },
    ],
    columnPrimary: [
        
        {
          data: 'Help center',
          url: 'https://facebook.com'
        },
        {
          data: 'Join ZEN Team',
          url: 'https://facebook.com'
        },
        {
          data: 'Privacy Policy',
          url: 'https://facebook.com'
        },
        {
          data: 'Cookies',
          url: 'https://facebook.com'
        },
        {
          data: 'Terms of use',
          url: 'https://facebook.com'
        },
    ],
    columnSecondary: [
      {
        data: 'For developers',
        url: 'https://facebook.com'  
      },
      {
        data: 'Apple pay',
        url: 'https://facebook.com'
      },
      {
        data: 'Google pay',
        url: 'https://facebook.com'
      },
    ],
    columnTertiary: [
      {
        data: 'Business',
        url: 'https://facebook.com'
      },
      {
        data: 'Personal',
        url: 'https://facebook.com'
      },
    ],
    columnQuaternary: [
      {
        data: 'English',
        url: 'https://facebook.com'
      },
      {
        data: 'Polish',
        url: 'https://facebook.com'
      },
    ],
    columnQuinary: [
      {
        data: 'In',
        url: 'https://facebook.com'
      },
    ],
    columnSenary: [
      {
        data: 'hello@zen.com',
        url: 'https://facebook.com'
      },
    ],
    
    texts: [
      'ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
      'Registration number of the company 304749651, VAT ID LT100011714916.',
      'License of electronic money institutions number LB000457.',
      'Share capital 2.185.000,00 EUR.',
      'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
      'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.',
    ],
    copyright: [
      {
        data: 'Copyright',
        url: 'https://facebook.com'
      }
    ]   
  }
]

export default data