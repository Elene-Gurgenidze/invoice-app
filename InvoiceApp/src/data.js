export const ALL_INVOICES = [
  { 
    id: 'RT3080', 
    date: '19 Aug 2021', 
    paymentDue: '19 Aug 2021',
    client: 'Jensen Huang', 
    clientEmail: 'jensenh@mail.com',
    description: 'Graphic Design',
    senderAddress: { street: '19 Union Terrace', city: 'London', postCode: 'E1 3EZ', country: 'United Kingdom' },
    clientAddress: { street: '102 Long Lane', city: 'London', postCode: 'EC1A 1BB', country: 'United Kingdom' },
    status: 'paid',
    items: [
      { name: 'Brand Guidelines', qty: 1, price: 1800.90, total: 1800.90 }
    ],
    amount: '1,800.90'
  },
  { 
    id: 'XM9141', 
    date: '21 Aug 2021', 
    paymentDue: '20 Sep 2021',
    client: 'Alex Grim', 
    clientEmail: 'alexgrim@mail.com',
    description: 'Graphic Design',
    senderAddress: { street: '19 Union Terrace', city: 'London', postCode: 'E1 3EZ', country: 'United Kingdom' },
    clientAddress: { street: '84 Church Way', city: 'Bradford', postCode: 'BD1 9PB', country: 'United Kingdom' },
    status: 'pending',
    items: [
      { name: 'Banner Design', qty: 1, price: 156.00, total: 156.00 },
      { name: 'Email Design', qty: 2, price: 200.00, total: 400.00 }
    ],
    amount: '556.00'
  },
  {
    id: 'RG0314',
    date: '01 Oct 2021',
    paymentDue: '14 Oct 2021',
    client: 'John Morrison',
    clientEmail: 'jm@musicco.com',
    description: 'Website Redesign',
    senderAddress: { street: '19 Union Terrace', city: 'London', postCode: 'E1 3EZ', country: 'United Kingdom' },
    clientAddress: { street: '79 Dynamic Drive', city: 'Manchester', postCode: 'M1 2WD', country: 'United Kingdom' },
    status: 'paid',
    items: [
      { name: 'Frontend Development', qty: 1, price: 10002.33, total: 10002.33 },
      { name: 'UI/UX Consulting', qty: 4, price: 1000.00, total: 4000.00 }
    ],
    amount: '14,002.33'
  },
  {
    id: 'RT2080',
    date: '12 Oct 2021',
    paymentDue: '12 Nov 2021',
    client: 'Alysa Werner',
    clientEmail: 'alysa@werner.com',
    description: 'Logo Design',
    senderAddress: { street: '19 Union Terrace', city: 'London', postCode: 'E1 3EZ', country: 'United Kingdom' },
    clientAddress: { street: '63 Warrior Way', city: 'Leeds', postCode: 'LS1 5AT', country: 'United Kingdom' },
    status: 'pending',
    items: [
      { name: 'Logo Concepts', qty: 2, price: 51.02, total: 102.04 }
    ],
    amount: '102.04'
  },
  {
    id: 'AA1449',
    date: '14 Oct 2021',
    paymentDue: '14 Nov 2021',
    client: 'Mellisa Clarke',
    clientEmail: 'mellisa.c@hotmail.com',
    description: 'App Development',
    senderAddress: { street: '19 Union Terrace', city: 'London', postCode: 'E1 3EZ', country: 'United Kingdom' },
    clientAddress: { street: '42 Station Road', city: 'Birmingham', postCode: 'B1 2EP', country: 'United Kingdom' },
    status: 'pending',
    items: [
      { name: 'Mobile App Build', qty: 1, price: 4032.33, total: 4032.33 }
    ],
    amount: '4,032.33'
  },
  {
    id: 'TY9141',
    date: '31 Oct 2021',
    paymentDue: '31 Nov 2021',
    client: 'Thomas Wayne',
    clientEmail: 'thomas@waynecorp.com',
    description: 'Landing Page',
    senderAddress: { street: '19 Union Terrace', city: 'London', postCode: 'E1 3EZ', country: 'United Kingdom' },
    clientAddress: { street: '88 Gotham Manor', city: 'Bristol', postCode: 'BS1 3NX', country: 'United Kingdom' },
    status: 'pending',
    items: [
      { name: 'Web Design', qty: 1, price: 3155.91, total: 3155.91 },
      { name: 'Copywriting', qty: 3, price: 1000.00, total: 3000.00 }
    ],
    amount: '6,155.91'
  },
  {
    id: 'FV2353',
    date: '12 Nov 2021',
    paymentDue: '12 Dec 2021',
    client: 'Anita Wainwright',
    clientEmail: 'anita.w@tech.io',
    description: 'SEO Optimization',
    senderAddress: { street: '19 Union Terrace', city: 'London', postCode: 'E1 3EZ', country: 'United Kingdom' },
    clientAddress: { street: '15 Innovation Way', city: 'Cambridge', postCode: 'CB1 1QA', country: 'United Kingdom' },
    status: 'draft',
    items: [
      { name: 'Keyword Research', qty: 1, price: 1102.04, total: 1102.04 },
      { name: 'On-Page SEO', qty: 1, price: 2000.00, total: 2000.00 }
    ],
    amount: '3,102.04'
  }
];