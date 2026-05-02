export type Language = 'en' | 'mn';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      practice: 'Practice Areas',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Defining Excellence In Legal Advisory And Advocacy Services',
      desc: 'S&TS Partners LLC provides strategic, results driven legal solutions with integrity and an unwavering commitment to our Mongolian and foreign clients.',
      cta: 'Request Consultation',
    },
    practice: {
      title: 'Our Practice Areas',
      areas: [
        { 
          title: 'Corporate & Commercial', 
          desc: 'Comprehensive legal support across all aspects of business operations, including company formation and governance, legal due diligence, contract drafting and negotiation, regulatory compliance, and a wide range of commercial transactions.' 
        },
        { 
          title: 'Banking and Finance', 
          desc: 'Specialized legal advice across a broad spectrum of banking and finance matters, including regulatory compliance, borrowing, financing structures, lending transactions, and capital markets activities.' 
        },
        { 
          title: 'Real Estate', 
          desc: 'Provision of legal advice on residential and commercial real estate matters, including property acquisition and disposition, leasing, due diligence, and transactional structuring.' 
        },
        { 
          title: 'Employment', 
          desc: 'Strategic and practical legal advice on all aspects of employment law, including labor relations, workplace policies, employment contracts, termination matters, and regulatory compliance.' 
        },
        { 
          title: 'Insolvency', 
          desc: 'Practical solutions for insolvency matters with strategic insight and efficient execution.' 
        },
        { 
          title: 'Litigation & Arbitration', 
          desc: 'Strategic and results driven representation in all forms of dispute resolution, including court litigation, arbitration, and alternative dispute resolution mechanisms. Our team is committed to protecting our clients’ interests at every stage of the dispute process, from pre litigation strategy and negotiation through to final resolution and enforcement.' 
        },
      ]
    },
    about: {
      title: 'About S&TS Partners LLC',
      p1: 'S&TS Partners LLC is a full service law firm with a strong focus on corporate law and litigation. Established in 2019, the firm was founded by two Mongolian qualified lawyers educated at prestigious institutions in Mongolia and Australia.',
      p2: 'Our partners each bring 20 years of experience in corporate law and litigation, with particular expertise in advising foreign investors, as well as in both consulting and advocacy. Drawing on this extensive experience, we provide a comprehensive range of legal services to both domestic and international clients. Our objective is to deliver high quality legal and commercial advice through an efficiently managed professional practice, supporting and facilitating our clients’ business activities in Mongolia.',
      partnersTitle: 'Our Partners',
      education: 'Education'
    },
    team: [
      { 
        name: 'Tsolmonchimeg Enkhbat', 
        role: 'Managing Partner', 
        bio: 'Tsolmonchimeg is a lawyer specializing in commercial and corporate law, with extensive experience in investment, real estate, employment, banking and finance, and capital markets. She advises both domestic and foreign clients, guiding them from the establishment of their businesses through all phases of their operations.',
        qualifications: [
          'LL.B, Otgontenger University, 2001', 
          'BA, University of the Humanities, 2011', 
          'LL.M, National University of Mongolia, 2004', 
          'LL.M (Commercial Law), Monash University, 2017'
        ]
      },
      { 
        name: 'Solongo Buyant', 
        role: 'Partner', 
        bio: 'Solongo is an experienced litigation lawyer specializing in civil, administrative, and criminal law, with a strong track record in representing clients across all stages of litigation and arbitration. She brings extensive expertise in handling complex disputes, providing strategic advice, and advocating effectively before courts and arbitral tribunals, with a strong commitment to the protection of human rights.',
        qualifications: [
          'LL.B, Ikh Zasag University, 2002', 
          'LL.M, National University of Mongolia, 2004'
        ]
      },
    ],
    contact: {
      title: 'Get In Touch',
      namePlaceholder: 'Full Name',
      phonePlaceholder: 'Phone Number',
      messagePlaceholder: 'How can we help you?',
      submit: 'Send Message',
      address: 'Suite 301, Arig Center, Jamyangun Street, 1st khoroo, Sukhbaatar District, Ulaanbaatar 14240, Mongolia',
      subject: 'Consultation Request'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  mn: {
    nav: {
      home: 'Нүүр',
      practice: 'Үйл ажиллагааны чиглэл',
      about: 'Бидний тухай',
      contact: 'Холбоо барих',
    },
    hero: {
      title: 'Хууль зүйн зөвлөх үйлчилгээ болон өмгөөллийн шилдэг шийдэл',
      desc: 'Эс Энд Ти Эс Партнерс ХХК нь Монголын болон гадаадын үйлчлүүлэгчдэдээ стратегийн, үр дүнд суурилсан хууль зүйн шийдлүүдийг үнэнч шударгаар, тууштай хүргэн ажилладаг.',
      cta: 'Зөвлөгөө авах',
    },
    practice: {
      title: 'Үйл ажиллагааны чиглэл',
      areas: [
        { 
          title: 'Компани ба арилжаа', 
          desc: 'Компани байгуулах, засаглал, хууль зүйн иж бүрэн хяналт (due diligence), гэрээ боловсруулах, хэлцэл хийх, зохицуулалтын нийцэл болон арилжааны өргөн хүрээний гүйлгээ зэрэг бизнесийн үйл ажиллагааны бүх шатанд хууль зүйн цогц дэмжлэг үзүүлдэг.' 
        },
        { 
          title: 'Банк, санхүү', 
          desc: 'Банк, санхүүгийн салбарын зохицуулалтын нийцэл, зээл авах, санхүүжилтийн бүтэц, зээлийн гүйлгээ болон хөрөнгийн зах зээлийн үйл ажиллагаа зэрэг өргөн хүрээний асуудлаар мэргэшсэн хууль зүйн зөвлөгөө өгдөг.' 
        },
        { 
          title: 'Үл хөдлөх хөрөнгө', 
          desc: 'Орон сууц болон арилжааны үл хөдлөх хөрөнгө худалдан авах, худалдах, түрээслэх, хяналт шалгалт хийх болон хэлцлийн бүтцийг тодорхойлох зэрэг асуудлаар хууль зүйн зөвлөгөө үзүүлдэг.' 
        },
        { 
          title: 'Хөдөлмөр', 
          desc: 'Хөдөлмөрийн харилцаа, ажлын байрны журам, хөдөлмөрийн гэрээ, цуцлах асуудал болон зохицуулалтын нийцэл зэрэг хөдөлмөрийн эрх зүйн бүх чиглэлээр стратегийн болон практик зөвлөгөө өгдөг.' 
        },
        { 
          title: 'Төлбөрийн чадваргүйдэл', 
          desc: 'Төлбөрийн чадваргүйдлийн асуудлаар стратегийн ойлголт, үр ашигтай гүйцэтгэл бүхий практик шийдлүүдийг санал болгодог.' 
        },
        { 
          title: 'Шүүх ба арбитрын маргаан шийдвэрлэх', 
          desc: 'Шүүх, арбитр болон маргаан шийдвэрлэх бусад механизмын хүрээнд үйлчлүүлэгчийн эрх ашгийг стратегийн өндөр түвшинд хамгаалж, үр дүнд чиглэсэн төлөөллийг хэрэгжүүлдэг. Бид маргааны өмнөх стратегиас эхлээд эцсийн шийдвэр гүйцэтгэл хүртэлх бүх шатанд үйлчлүүлэгчийнхээ эрх ашгийг хамгаалахыг эрхэмлэдэг.' 
        },
      ]
    },
    about: {
      title: 'Эс Энд Ти Эс Партнерс ХХК-ийн тухай',
      p1: 'Эс Энд Ти Эс Партнерс ХХК нь компанийн эрх зүй болон маргаан шийдвэрлэх чиглэлээр голлон ажилладаг хууль зүйн иж бүрэн үйлчилгээний фирм юм. 2019 онд байгуулагдсан тус фирмийг Монгол болон Австралийн нэр хүндтэй их сургуулиудад боловсрол эзэмшсэн, Монгол Улсын мэргэшсэн хоёр хуульч үүсгэн байгуулсан.',
      p2: 'Манай түнш бүр компанийн эрх зүй болон маргаан шийдвэрлэх чиглэлээр 20 гаруй жилийн туршлагатай бөгөөд гадаадын хөрөнгө оруулагчдад зөвлөгөө өгөх, өмгөөллийн чиглэлээр мэргэшсэн. Энэхүү арвин туршлагадаа үндэслэн бид дотоод, гадаадын үйлчлүүлэгчдэд хууль зүйн иж бүрэн үйлчилгээг үзүүлдэг. Бидний зорилго бол мэргэжлийн өндөр түвшинд удирдлага бүхий практик үйл ажиллагаагаар дамжуулан чанартай хууль зүй, арилжааны зөвлөгөө өгч, үйлчлүүлэгчийнхээ Монгол Улс дахь бизнесийн үйл ажиллагааг дэмжихэд оршино.',
      partnersTitle: 'Манай түншүүд',
      education: 'Боловсрол'
    },
    team: [
      { 
        name: 'Энхбатын Цолмончимэг', 
        role: 'Удирдах түнш', 
        bio: 'Цолмончимэг нь арилжааны болон компанийн эрх зүйгээр мэргэшсэн хуульч бөгөөд хөрөнгө оруулалт, үл хөдлөх хөрөнгө, хөдөлмөр, банк санхүү, хөрөнгийн зах зээлийн салбарт арвин туршлагатай. Тэрээр дотоод болон гадаадын үйлчлүүлэгчдэд бизнесээ эхлүүлэхээс эхлээд үйл ажиллагааны бүх шатанд зөвлөгөө өгч ажилладаг.',
        qualifications: [
          'Хууль зүйн бакалавр, Отгонтэнгэр их сургууль, 2001', 
          'Бакалавр, Хүмүүнлэгийн ухааны их сургууль, 2011', 
          'Хууль зүйн магистр, Монгол Улсын Их Сургууль, 2004', 
          'Хууль зүйн магистр (Арилжааны эрх зүй), Монаш их сургууль, 2017'
        ]
      },
      { 
        name: 'Буянтын Солонго', 
        role: 'Түнш', 
        bio: 'Солонго нь иргэн, захиргаа, эрүүгийн эрх зүйгээр мэргэшсэн, шүүх болон арбитрын маргаан шийдвэрлэх бүх шатанд үйлчлүүлэгчийг төлөөлөх арвин туршлагатай өмгөөлөгч юм. Тэрээр ээдрээтэй маргааныг шийдвэрлэх, стратегийн зөвлөгөө өгөх, шүүх болон арбитрын өмнө үр дүнтэй өмгөөлөл хийх өндөр ур чадвартай бөгөөд хүний эрхийг хамгаалах үйлсэд тууштай ажилладаг.',
        qualifications: [
          'Хууль зүйн бакалавр, Их Засаг их сургууль, 2002', 
          'Хууль зүйн магистр, Монгол Улсын Их Сургууль, 2004'
        ]
      },
    ],
    contact: {
      title: 'Холбоо барих',
      namePlaceholder: 'Бүтэн нэр',
      phonePlaceholder: 'Утасны дугаар',
      messagePlaceholder: 'Бид танд хэрхэн туслах вэ?',
      submit: 'Мессеж илгээх',
      address: 'Монгол Улс, Улаанбаатар 14240, Сүхбаатар дүүрэг, 1-р хороо, Жамъян гүний гудамж, Ариг төв, 301 тоот',
      subject: 'Зөвлөгөө авах хүсэлт'
    },
    footer: {
      rights: 'Бүх эрх хуулиар хамгаалагдсан.'
    }
  }
};
