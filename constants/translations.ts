
export type Language = 'en' | 'ar';

export const translations = {
  en: {
    header: {
      home: 'Home',
      about: 'About Us',
      products: 'Our Products',
      services: 'Our Services',
      contact: 'Contact Us',
      language: 'العربية',
    },
    hero: {
      title: 'Premium Quality, Global Reach',
      subtitle: 'Your trusted partner in fresh produce supplies and exports from Dubai.',
      button: 'Discover More',
    },
    about: {
      title: 'About Dubai Supplies and Export Company',
      paragraph1: 'Founded with a vision to bridge the gap between premium quality produce and the global market, Dubai Supplies and Export Company has established itself as a leading name in the industry. We are dedicated to sourcing the finest fruits and vegetables, ensuring they reach our clients in peak condition.',
      paragraph2: 'Our commitment to excellence, reliability, and customer satisfaction drives everything we do. We leverage Dubai\'s strategic location as a global hub to ensure efficient logistics and timely deliveries across the world.',
    },
    products: {
      title: 'Our Premium Products',
      subtitle: 'We offer a wide variety of fresh, high-quality fruits and vegetables sourced from the best farms.',
    },
    services: {
      title: 'What We Offer',
      sourcing: {
        title: 'Global Sourcing',
        description: 'We carefully select and source the highest quality produce from certified farms around the world.'
      },
      export: {
        title: 'Worldwide Export',
        description: 'Utilizing state-of-the-art logistics, we export fresh products to any destination globally, maintaining freshness and quality.'
      },
      packaging: {
        title: 'Custom Packaging',
        description: 'We provide customized packaging solutions to meet specific client needs and ensure product safety during transit.'
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are here to answer any questions you may have. Reach out to us and we\'ll respond as soon as we can.',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    },
    footer: {
      copyright: '© 2024 Dubai Supplies and Export Company. All Rights Reserved.'
    }
  },
  ar: {
    header: {
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'منتجاتنا',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      language: 'English',
    },
    hero: {
      title: 'جودة فائقة، وصول عالمي',
      subtitle: 'شريكك الموثوق في توريد وتصدير المنتجات الطازجة من دبي.',
      button: 'اكتشف المزيد',
    },
    about: {
      title: 'عن شركة دبي للتوريدات والتصدير',
      paragraph1: 'تأسست شركة دبي للتوريدات والتصدير برؤية تهدف إلى سد الفجوة بين المنتجات عالية الجودة والسوق العالمي، وقد رسخت مكانتها كاسم رائد في هذا المجال. نحن ملتزمون بتوريد أجود أنواع الفواكه والخضروات، مع ضمان وصولها إلى عملائنا في أفضل حالة.',
      paragraph2: 'إن التزامنا بالتميز والموثوقية ورضا العملاء هو ما يدفعنا في كل ما نقوم به. نستفيد من موقع دبي الاستراتيجي كمركز عالمي لضمان كفاءة الخدمات اللوجستية والتسليم في الوقت المناسب في جميع أنحاء العالم.',
    },
    products: {
      title: 'منتجاتنا المتميزة',
      subtitle: 'نقدم تشكيلة واسعة من الفواكه والخضروات الطازجة وعالية الجودة من أفضل المزارع.',
    },
    services: {
      title: 'ماذا نقدم',
      sourcing: {
        title: 'توريد عالمي',
        description: 'نختار ونوفر بعناية المنتجات عالية الجودة من المزارع المعتمدة حول العالم.'
      },
      export: {
        title: 'تصدير لجميع أنحاء العالم',
        description: 'باستخدام أحدث الخدمات اللوجستية، نصدر المنتجات الطازجة إلى أي وجهة عالميًا، مع الحفاظ على النضارة والجودة.'
      },
      packaging: {
        title: 'تعبئة وتغليف مخصصة',
        description: 'نقدم حلول تغليف مخصصة لتلبية احتياجات العملاء المحددة وضمان سلامة المنتج أثناء النقل.'
      }
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا للإجابة على أي أسئلة قد تكون لديكم. تواصلوا معنا وسنرد عليكم في أقرب وقت ممكن.',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      success: 'تم إرسال الرسالة بنجاح!',
      error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    },
    footer: {
      copyright: '© 2024 شركة دبي للتوريدات والتصدير. جميع الحقوق محفوظة.'
    }
  }
};

type NestedObject = { [key: string]: string | NestedObject };

type Path<T> = T extends string ? [] : {
  [K in keyof T]: [K, ...Path<T[K]>]
}[keyof T];

type Join<T extends (string | number)[], D extends string> =
  T extends [] ? never :
  T extends [string | number] ? `${T[0]}` :
  T extends [string | number, ...infer R] ? `${T[0]}${D}${Join<Extract<R, (string | number)[]>, D>}` :
  string;

type TranslationPaths = Join<Path<typeof translations.en>, '.'>;

export type TranslationKey = TranslationPaths;
